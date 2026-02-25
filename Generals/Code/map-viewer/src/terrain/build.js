import * as THREE from 'three';
import state from '../state.js';
import { MAP_XY_FACTOR, MAP_HEIGHT_SCALE } from '../constants.js';
import { bigFilePool } from '../parsers/big.js';
import { parseRoadsIniFromPool } from '../parsers/ini.js';
import { buildTextureAtlas } from './atlas.js';
import { getQuadrantUV } from './atlas.js';
import { createTexturedMaterial } from './shader.js';
import { computeBlendAlphas, colorForTileNdx, computeCellColor, buildWater } from './update.js';
import { setupSceneLights } from '../engine/lighting.js';
import { updateLightMeshVisibility } from '../engine/lighting.js';
import { extractRoadSegments } from '../roads/topology.js';
import { buildRoadTopology } from '../roads/topology.js';
import { buildRoadMesh } from '../roads/mesh.js';
import { roadTypeMap } from '../parsers/ini.js';
import { buildW3DIndex, w3dFileIndex } from '../objects/index.js';
import { parseObjectINIsFromPool } from '../parsers/ini.js';
import { buildObjectMarkers } from '../objects/markers.js';
import { w3dModelCache, w3dTextureCache, w3dAnimFileCache, w3dAnimClipCache } from '../objects/loader.js';
import { w3dLookupCache } from '../objects/index.js';
import { camState, CAM_DEFAULT_PITCH, CAM_MAX_HEIGHT } from '../engine/camera.js';
import { ROAD_SEGMENT } from '../constants.js';
import { initGameSystems, resetGameSystems } from '../engine/gameLoop.js';

export function buildTerrain(mapData) {
  state.currentMapData = mapData;
  const hm = mapData.heightMap;
  if (!hm) throw new Error('No heightmap data found in map file');

  const { scene } = state;

  if (state.terrainMesh) {
    scene.remove(state.terrainMesh);
    state.terrainMesh.geometry.dispose();
    state.terrainMesh.material.dispose();
  }
  if (state.terrainMatColored) { state.terrainMatColored.dispose(); state.terrainMatColored = null; }
  if (state.terrainMatTextured) { state.terrainMatTextured.dispose(); state.terrainMatTextured = null; }
  if (state.terrainAtlasTex) { state.terrainAtlasTex.dispose(); state.terrainAtlasTex = null; }
  state.terrainAtlas = null;
  scene.remove(state.objectMarkers);
  state.objectMarkers.traverse(child => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      if (child.material.map) child.material.map.dispose();
      child.material.dispose();
    }
  });
  state.objectMarkers = new THREE.Group();
  w3dModelCache.clear();
  w3dTextureCache.clear();
  w3dAnimFileCache.clear();
  w3dAnimClipCache.clear();
  w3dLookupCache.clear();
  if (state.roadMesh) {
    scene.remove(state.roadMesh);
    state.roadMesh.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    });
    state.roadMesh = null;
  }
  if (state.waterPlane) {
    scene.remove(state.waterPlane);
    state.waterPlane.geometry.dispose();
    state.waterPlane.material.dispose();
    state.waterPlane = null;
  }
  while (scene.children.length > 0) scene.remove(scene.children[0]);

  const width = hm.width;
  const height = hm.height;
  const border = hm.borderSize;
  const bt = mapData.blendTileData;

  if (bigFilePool.size > 0 && bt) {
    state.terrainAtlas = buildTextureAtlas(mapData);
    if (state.terrainAtlas) {
      state.terrainAtlasTex = new THREE.DataTexture(
        state.terrainAtlas.atlasPixels, state.terrainAtlas.atlasW, state.terrainAtlas.atlasH, THREE.RGBAFormat
      );
      state.terrainAtlasTex.flipY = false;
      state.terrainAtlasTex.magFilter = THREE.LinearFilter;
      state.terrainAtlasTex.minFilter = THREE.LinearMipmapLinearFilter;
      state.terrainAtlasTex.generateMipmaps = true;
      state.terrainAtlasTex.needsUpdate = true;
    }
  }

  const cellsX = width - 1;
  const cellsY = height - 1;
  const numCells = cellsX * cellsY;

  const vertCount = numCells * 4;
  const positions = new Float32Array(vertCount * 3);
  const colors = new Float32Array(vertCount * 3);
  const indices = new Uint32Array(numCells * 6);

  const baseUVs = new Float32Array(vertCount * 2);
  const blendUVs = new Float32Array(vertCount * 2);
  const extraUVs = new Float32Array(vertCount * 2);
  const blendAlphaArr = new Float32Array(vertCount);
  const extraAlphaArr = new Float32Array(vertCount);

  let minH = 255, maxH = 0;
  for (let i = 0; i < hm.data.length; i++) {
    if (hm.data[i] < minH) minH = hm.data[i];
    if (hm.data[i] > maxH) maxH = hm.data[i];
  }

  const baseColor = new THREE.Color();
  const blendColor = new THREE.Color();
  const extraColor = new THREE.Color();
  const cornerColor = new THREE.Color();
  const cornerGx = [0, 1, 1, 0];
  const cornerGy = [0, 0, 1, 1];

  for (let cy = 0; cy < cellsY; cy++) {
    for (let cx = 0; cx < cellsX; cx++) {
      const cellIdx = cy * cellsX + cx;
      const vi = cellIdx * 4;

      for (let c = 0; c < 4; c++) {
        const gx = cx + cornerGx[c];
        const gy = cy + cornerGy[c];
        const hi = gy * width + gx;
        const heightVal = hm.data[hi];
        const v = (vi + c) * 3;
        positions[v]     = (gx - border) * MAP_XY_FACTOR;
        positions[v + 1] = heightVal * MAP_HEIGHT_SCALE;
        positions[v + 2] = (height - 1 - gy - border) * MAP_XY_FACTOR;
      }

      const ndx = cy * width + cx;
      computeCellColor(ndx, bt, hm, minH, maxH, baseColor);

      let blendAlphas = null;
      let blendTileNdx = 0;
      let cellNeedFlip = false;
      if (bt && ndx < bt.blendTileNdxes.length) {
        const blendTileIdx = bt.blendTileNdxes[ndx];
        if (blendTileIdx > 0 && bt.blendedTiles && blendTileIdx < bt.blendedTiles.length) {
          const bi = bt.blendedTiles[blendTileIdx];
          const result = computeBlendAlphas(bi);
          blendAlphas = result.alphas;
          cellNeedFlip = result.needFlip;
          blendTileNdx = bi.blendNdx;
          colorForTileNdx(bi.blendNdx, bt, blendColor);
        }
      }

      let extraAlphas = null;
      let extraTileNdx = 0;
      if (bt && bt.extraBlendTileNdxes && ndx < bt.extraBlendTileNdxes.length) {
        const extraIdx = bt.extraBlendTileNdxes[ndx];
        if (extraIdx > 0 && bt.blendedTiles && extraIdx < bt.blendedTiles.length) {
          const ebi = bt.blendedTiles[extraIdx];
          extraAlphas = computeBlendAlphas(ebi).alphas;
          extraTileNdx = ebi.blendNdx;
          colorForTileNdx(ebi.blendNdx, bt, extraColor);
        }
      }

      for (let c = 0; c < 4; c++) {
        cornerColor.copy(baseColor);
        if (blendAlphas && blendAlphas[c] > 0) cornerColor.lerp(blendColor, blendAlphas[c] / 255);
        if (extraAlphas && extraAlphas[c] > 0) cornerColor.lerp(extraColor, extraAlphas[c] / 255);
        const v = (vi + c) * 3;
        colors[v]     = cornerColor.r;
        colors[v + 1] = cornerColor.g;
        colors[v + 2] = cornerColor.b;
      }

      if (state.terrainAtlas && bt) {
        const baseTileNdx = bt.tileNdxes[ndx];
        for (let c = 0; c < 4; c++) {
          const uv = getQuadrantUV(baseTileNdx, c, state.terrainAtlas);
          baseUVs[(vi + c) * 2]     = uv[0];
          baseUVs[(vi + c) * 2 + 1] = uv[1];
        }

        if (blendAlphas) {
          for (let c = 0; c < 4; c++) {
            const buv = getQuadrantUV(blendTileNdx, c, state.terrainAtlas);
            blendUVs[(vi + c) * 2]     = buv[0];
            blendUVs[(vi + c) * 2 + 1] = buv[1];
            blendAlphaArr[vi + c] = blendAlphas[c] / 255;
          }
        }

        if (extraAlphas) {
          for (let c = 0; c < 4; c++) {
            const euv = getQuadrantUV(extraTileNdx, c, state.terrainAtlas);
            extraUVs[(vi + c) * 2]     = euv[0];
            extraUVs[(vi + c) * 2 + 1] = euv[1];
            extraAlphaArr[vi + c] = extraAlphas[c] / 255;
          }
        }
      }

      const ii = cellIdx * 6;
      if (cellNeedFlip) {
        indices[ii]     = vi + 1; indices[ii + 1] = vi + 3; indices[ii + 2] = vi;
        indices[ii + 3] = vi + 1; indices[ii + 4] = vi + 2; indices[ii + 5] = vi + 3;
      } else {
        indices[ii]     = vi;     indices[ii + 1] = vi + 1; indices[ii + 2] = vi + 2;
        indices[ii + 3] = vi;     indices[ii + 4] = vi + 2; indices[ii + 5] = vi + 3;
      }
    }
  }

  state.terrainGeo = new THREE.BufferGeometry();
  state.terrainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  state.terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  state.terrainGeo.setIndex(new THREE.BufferAttribute(indices, 1));

  if (state.terrainAtlas) {
    state.terrainGeo.setAttribute('baseUV', new THREE.BufferAttribute(baseUVs, 2));
    state.terrainGeo.setAttribute('blendUV', new THREE.BufferAttribute(blendUVs, 2));
    state.terrainGeo.setAttribute('extraUV', new THREE.BufferAttribute(extraUVs, 2));
    state.terrainGeo.setAttribute('blendAlpha', new THREE.BufferAttribute(blendAlphaArr, 1));
    state.terrainGeo.setAttribute('extraAlpha', new THREE.BufferAttribute(extraAlphaArr, 1));
  }

  state.terrainGeo.computeVertexNormals();

  state.terrainMatColored = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: false,
    side: THREE.DoubleSide,
  });

  if (state.terrainAtlas && state.terrainAtlasTex) {
    state.terrainMatTextured = createTexturedMaterial(state.terrainAtlasTex, mapData.lighting);
    state.colorMode = 'texture';
    document.getElementById('color-mode').value = 'texture';
  }

  const playW = width - 2 * border;
  const playH = height - 2 * border;

  setupSceneLights(mapData.lighting, playW, playH, minH, maxH);

  const activeMat = (state.colorMode === 'texture' && state.terrainMatTextured) ? state.terrainMatTextured : state.terrainMatColored;
  state.terrainMesh = new THREE.Mesh(state.terrainGeo, activeMat);
  state.terrainMesh.receiveShadow = true;
  state.terrainMesh.castShadow = false;
  scene.add(state.terrainMesh);

  const waterAreas = mapData.polygonTriggers.filter(t => t.isWaterArea);
  if (waterAreas.length > 0) {
    buildWater(waterAreas, playW, playH, width, height, border);
  }

  if (bigFilePool.size > 0) parseRoadsIniFromPool();
  const roadSegments = extractRoadSegments(mapData.objects);
  if (roadSegments.length > 0) {
    buildRoadTopology(roadSegments);
    const junctionCount = roadSegments.filter(s => s.type !== ROAD_SEGMENT).length;
    console.log(`Roads: ${roadSegments.length} total (${roadSegments.length - junctionCount} straight, ${junctionCount} junctions), ${roadTypeMap.size} types from INI`);
    state.roadMesh = buildRoadMesh(roadSegments, height, border);
    if (state.roadMesh) scene.add(state.roadMesh);
  }

  if (bigFilePool.size > 0) {
    buildW3DIndex();
    if (w3dFileIndex.size > 0) parseObjectINIsFromPool();
  }

  buildObjectMarkers(mapData.objects, width, height, border);
  scene.add(state.objectMarkers);

  const centerX = (playW * MAP_XY_FACTOR) / 2;
  const centerZ = (playH * MAP_XY_FACTOR) / 2;
  const avgH = ((minH + maxH) / 2) * MAP_HEIGHT_SCALE;
  const mapSize = Math.max(playW, playH) * MAP_XY_FACTOR;

  camState.target.set(centerX, avgH, centerZ);
  camState.height = Math.min(CAM_MAX_HEIGHT, mapSize * 0.35);
  camState.yaw = Math.PI * 0.75;
  camState.pitch = CAM_DEFAULT_PITCH;
  camState.velocity.set(0, 0, 0);

  // Initialize RTS game systems (selection, orders, pathfinding, AI)
  resetGameSystems();
  initGameSystems();

  return { drawW: width, drawH: height, playW, playH, minH, maxH };
}
