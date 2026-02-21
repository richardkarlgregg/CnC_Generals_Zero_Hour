import * as THREE from 'three';
import state from '../state.js';
import { MAP_XY_FACTOR, MAP_HEIGHT_SCALE } from '../constants.js';
import { getTerrainColor } from './colors.js';

export function getTerrainHeightAt(worldX, worldY) {
  const hm = state.currentMapData.heightMap;
  const w = hm.width, h = hm.height, b = hm.borderSize;
  const gx = worldX / MAP_XY_FACTOR + b;
  const gy = (h - 1 - b) - worldY / MAP_XY_FACTOR;
  const ix = Math.max(0, Math.min(w - 1, Math.floor(gx)));
  const iy = Math.max(0, Math.min(h - 1, Math.floor(gy)));
  const fx = gx - ix;
  const fy = gy - iy;
  const ix1 = Math.min(ix + 1, w - 1);
  const iy1 = Math.min(iy + 1, h - 1);
  const h00 = hm.data[iy * w + ix];
  const h10 = hm.data[iy * w + ix1];
  const h01 = hm.data[iy1 * w + ix];
  const h11 = hm.data[iy1 * w + ix1];
  return (h00 * (1 - fx) * (1 - fy) + h10 * fx * (1 - fy) + h01 * (1 - fx) * fy + h11 * fx * fy) * MAP_HEIGHT_SCALE;
}

const INVERTED_MASK = 0x1;
const FLIPPED_MASK = 0x2;

export function computeBlendAlphas(bi) {
  const a = [0, 0, 0, 0];
  let needFlip = false;
  if (bi.horiz) {
    needFlip = !!(bi.inverted & FLIPPED_MASK);
    if (bi.inverted & INVERTED_MASK) { a[0] = 255; a[3] = 255; }
    else                              { a[1] = 255; a[2] = 255; }
  }
  if (bi.vert) {
    needFlip = !!(bi.inverted & FLIPPED_MASK);
    if (bi.inverted & INVERTED_MASK) { a[0] = 255; a[1] = 255; }
    else                              { a[2] = 255; a[3] = 255; }
  }
  if (bi.rightDiagonal) {
    if (bi.inverted & INVERTED_MASK) {
      a[1] = 255;
      if (bi.longDiagonal) { a[0] = 255; a[2] = 255; }
    } else {
      needFlip = true;
      a[2] = 255;
      if (bi.longDiagonal) { a[1] = 255; a[3] = 255; }
    }
  }
  if (bi.leftDiagonal) {
    if (bi.inverted & INVERTED_MASK) {
      needFlip = true;
      a[0] = 255;
      if (bi.longDiagonal) { a[1] = 255; a[3] = 255; }
    } else {
      a[3] = 255;
      if (bi.longDiagonal) { a[0] = 255; a[2] = 255; }
    }
  }
  if (bi.customBlendEdgeClass >= 0) {
    a[0] = a[1] = a[2] = a[3] = 0;
    needFlip = false;
  }
  return { alphas: a, needFlip };
}

export function colorForTileNdx(tileNdx, bt, outColor) {
  const baseTile = tileNdx >> 2;
  for (const tc of bt.textureClasses) {
    if (tc.firstTile < 0) continue;
    if (baseTile >= tc.firstTile && baseTile < tc.firstTile + tc.numTiles) {
      outColor.setHex(getTerrainColor(tc.name));
      const variation = ((tileNdx & 3) - 1.5) * 0.015;
      outColor.r = Math.max(0, Math.min(1, outColor.r + variation));
      outColor.g = Math.max(0, Math.min(1, outColor.g + variation));
      outColor.b = Math.max(0, Math.min(1, outColor.b + variation));
      return;
    }
  }
  outColor.setHex(0x808060);
}

export function computeCellColor(ndx, bt, hm, minH, maxH, outColor) {
  const heightVal = hm.data[ndx];
  if (state.colorMode === 'height') {
    const t = maxH > minH ? (heightVal - minH) / (maxH - minH) : 0.5;
    if (t < 0.15) outColor.setRGB(0.15, 0.35, 0.15);
    else if (t < 0.35) outColor.lerpColors(new THREE.Color(0.15, 0.35, 0.15), new THREE.Color(0.5, 0.65, 0.25), (t - 0.15) / 0.2);
    else if (t < 0.6) outColor.lerpColors(new THREE.Color(0.5, 0.65, 0.25), new THREE.Color(0.65, 0.55, 0.35), (t - 0.35) / 0.25);
    else if (t < 0.8) outColor.lerpColors(new THREE.Color(0.65, 0.55, 0.35), new THREE.Color(0.55, 0.5, 0.45), (t - 0.6) / 0.2);
    else outColor.lerpColors(new THREE.Color(0.55, 0.5, 0.45), new THREE.Color(0.9, 0.9, 0.92), (t - 0.8) / 0.2);
  } else if (state.colorMode === 'normal') {
    outColor.setRGB(0.6, 0.55, 0.45);
  } else if (bt && ndx < bt.tileNdxes.length) {
    colorForTileNdx(bt.tileNdxes[ndx], bt, outColor);
  } else {
    outColor.setHex(0x808060);
  }
}

export function updateTerrainColors() {
  if (!state.terrainMesh || !state.currentMapData) return;

  if (state.colorMode === 'texture' && state.terrainMatTextured) {
    state.terrainMesh.material = state.terrainMatTextured;
    state.terrainMesh.material.wireframe = state.terrainMatColored.wireframe;
    return;
  }

  state.terrainMesh.material = state.terrainMatColored;

  const hm = state.currentMapData.heightMap;
  const bt = state.currentMapData.blendTileData;
  const width = hm.width;
  const height = hm.height;
  const cellsX = width - 1;
  const cellsY = height - 1;

  let minH = 255, maxH = 0;
  for (let i = 0; i < hm.data.length; i++) {
    if (hm.data[i] < minH) minH = hm.data[i];
    if (hm.data[i] > maxH) maxH = hm.data[i];
  }

  const colorsAttr = state.terrainGeo.getAttribute('color');
  const baseColor = new THREE.Color();
  const blendColor = new THREE.Color();
  const extraColor = new THREE.Color();
  const cornerColor = new THREE.Color();

  for (let cy = 0; cy < cellsY; cy++) {
    for (let cx = 0; cx < cellsX; cx++) {
      const cellIdx = cy * cellsX + cx;
      const vi = cellIdx * 4;
      const ndx = cy * width + cx;

      computeCellColor(ndx, bt, hm, minH, maxH, baseColor);

      let blendAlphas = null;
      if (bt && ndx < bt.blendTileNdxes.length) {
        const blendTileIdx = bt.blendTileNdxes[ndx];
        if (blendTileIdx > 0 && bt.blendedTiles && blendTileIdx < bt.blendedTiles.length) {
          blendAlphas = computeBlendAlphas(bt.blendedTiles[blendTileIdx]).alphas;
          colorForTileNdx(bt.blendedTiles[blendTileIdx].blendNdx, bt, blendColor);
        }
      }

      let extraAlphas = null;
      if (bt && bt.extraBlendTileNdxes && ndx < bt.extraBlendTileNdxes.length) {
        const extraIdx = bt.extraBlendTileNdxes[ndx];
        if (extraIdx > 0 && bt.blendedTiles && extraIdx < bt.blendedTiles.length) {
          extraAlphas = computeBlendAlphas(bt.blendedTiles[extraIdx]).alphas;
          colorForTileNdx(bt.blendedTiles[extraIdx].blendNdx, bt, extraColor);
        }
      }

      for (let c = 0; c < 4; c++) {
        cornerColor.copy(baseColor);
        if (blendAlphas && blendAlphas[c] > 0) cornerColor.lerp(blendColor, blendAlphas[c] / 255);
        if (extraAlphas && extraAlphas[c] > 0) cornerColor.lerp(extraColor, extraAlphas[c] / 255);
        colorsAttr.setXYZ(vi + c, cornerColor.r, cornerColor.g, cornerColor.b);
      }
    }
  }
  colorsAttr.needsUpdate = true;
}

export function updateHeightScale(scale) {
  if (!state.terrainMesh || !state.currentMapData) return;
  const hm = state.currentMapData.heightMap;
  const width = hm.width;
  const height = hm.height;
  const cellsX = width - 1;
  const cellsY = height - 1;

  const positions = state.terrainGeo.getAttribute('position');
  const cornerGx = [0, 1, 1, 0];
  const cornerGy = [0, 0, 1, 1];

  for (let cy = 0; cy < cellsY; cy++) {
    for (let cx = 0; cx < cellsX; cx++) {
      const cellIdx = cy * cellsX + cx;
      const vi = cellIdx * 4;
      for (let c = 0; c < 4; c++) {
        const gx = cx + cornerGx[c];
        const gy = cy + cornerGy[c];
        const heightVal = hm.data[gy * width + gx];
        positions.setY(vi + c, heightVal * MAP_HEIGHT_SCALE * scale);
      }
    }
  }
  positions.needsUpdate = true;
  state.terrainGeo.computeVertexNormals();
}

export function buildWater(waterAreas, playW, playH, fullW, fullH, border) {
  let waterHeight = 0;
  for (const area of waterAreas) {
    for (const p of area.points) {
      waterHeight = Math.max(waterHeight, p.z * MAP_HEIGHT_SCALE);
    }
  }
  if (waterHeight === 0) waterHeight = 20;

  const size = Math.max(fullW, fullH) * MAP_XY_FACTOR * 1.5;
  const centerX = (playW * MAP_XY_FACTOR) / 2;
  const centerZ = (playH * MAP_XY_FACTOR) / 2;

  const waterGeo = new THREE.PlaneGeometry(size, size);
  const waterMat = new THREE.MeshPhongMaterial({
    color: 0x1a5276,
    transparent: true,
    opacity: 0.55,
    shininess: 60,
    specular: 0x224466,
    side: THREE.DoubleSide,
  });
  state.waterPlane = new THREE.Mesh(waterGeo, waterMat);
  state.waterPlane.rotation.x = -Math.PI / 2;
  state.waterPlane.position.set(centerX, waterHeight, centerZ);
  state.scene.add(state.waterPlane);
}
