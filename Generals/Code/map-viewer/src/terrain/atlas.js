import { bigFilePool, getFileData, getFileFromPool, resolveTerrainTGA } from '../parsers/big.js';
import { parseTGA } from '../parsers/tga.js';
import { TILE_SIZE } from '../constants.js';

export function buildTextureAtlas(mapData) {
  const bt = mapData.blendTileData;
  if (!bt || bigFilePool.size === 0) return null;

  const allTiles = [];
  let maxTileIdx = 0;
  let loadedCount = 0, missedCount = 0;

  function loadTilesForClass(tc) {
    const tgaPath = resolveTerrainTGA(tc.name);
    if (!tgaPath) {
      console.warn(`Texture not found for "${tc.name}" (tried INI mapping, exact, and fuzzy)`);
      missedCount++;
      return;
    }

    const tgaData = getFileData(tgaPath);
    if (!tgaData) { missedCount++; return; }

    let tga;
    try { tga = parseTGA(tgaData); } catch (e) {
      console.warn(`Failed to parse TGA ${tgaPath}:`, e);
      return;
    }

    const tilesX = Math.floor(tga.width / TILE_SIZE);
    const tilesY = Math.floor(tga.height / TILE_SIZE);
    const numTilesAvailable = Math.min(tilesX * tilesY, tc.numTiles);

    for (let ty = 0; ty < tilesY && (ty * tilesX) < numTilesAvailable; ty++) {
      for (let tx = 0; tx < tilesX && (ty * tilesX + tx) < numTilesAvailable; tx++) {
        const localIdx = tx + tilesX * ty;
        const globalIdx = tc.firstTile + localIdx;
        const tilePixels = new Uint8Array(TILE_SIZE * TILE_SIZE * 4);

        for (let row = 0; row < TILE_SIZE; row++) {
          const srcRow = ty * TILE_SIZE + row;
          const srcOff = (srcRow * tga.width + tx * TILE_SIZE) * 4;
          const dstOff = row * TILE_SIZE * 4;
          tilePixels.set(tga.pixels.subarray(srcOff, srcOff + TILE_SIZE * 4), dstOff);
        }

        allTiles[globalIdx] = tilePixels;
        if (globalIdx > maxTileIdx) maxTileIdx = globalIdx;
      }
    }
  }

  for (const tc of bt.textureClasses) { loadTilesForClass(tc); loadedCount++; }
  for (const tc of (bt.edgeTextureClasses || [])) { loadTilesForClass(tc); loadedCount++; }

  console.log(`Texture classes: ${loadedCount - missedCount} loaded, ${missedCount} missing`);
  if (maxTileIdx === 0) return null;

  const numTiles = maxTileIdx + 1;
  const tilesPerRow = Math.ceil(Math.sqrt(numTiles));
  const atlasW = tilesPerRow * TILE_SIZE;
  const atlasRows = Math.ceil(numTiles / tilesPerRow);
  const atlasH = atlasRows * TILE_SIZE;
  const atlasPixels = new Uint8Array(atlasW * atlasH * 4);

  for (let i = 0; i < atlasPixels.length; i += 4) {
    atlasPixels[i] = 128; atlasPixels[i+1] = 128; atlasPixels[i+2] = 96; atlasPixels[i+3] = 255;
  }

  const tilePositions = [];

  for (let i = 0; i <= maxTileIdx; i++) {
    const col = i % tilesPerRow;
    const row = Math.floor(i / tilesPerRow);
    const px = col * TILE_SIZE;
    const py = row * TILE_SIZE;
    tilePositions[i] = { x: px, y: py };

    if (allTiles[i]) {
      for (let r = 0; r < TILE_SIZE; r++) {
        const srcOff = r * TILE_SIZE * 4;
        const dstOff = ((py + r) * atlasW + px) * 4;
        atlasPixels.set(allTiles[i].subarray(srcOff, srcOff + TILE_SIZE * 4), dstOff);
      }
    }
  }

  console.log(`Atlas built: ${atlasW}x${atlasH}, ${numTiles} tiles, ${tilesPerRow} per row`);
  return { atlasPixels, atlasW, atlasH, tilePositions };
}

export function getQuadrantUV(tileNdx, corner, atlas) {
  const baseTile = tileNdx >> 2;
  const quadrant = tileNdx & 3;
  const xSub = quadrant & 1;
  const ySub = (quadrant >> 1) & 1;

  const pos = atlas.tilePositions[baseTile];
  if (!pos) return [0, 0];

  const HALF = TILE_SIZE / 2;
  const qx = pos.x + (xSub ? HALF : 0);
  const qy = pos.y + (ySub ? 0 : HALF);

  const ht = 0.5;
  const minU = (qx + ht) / atlas.atlasW;
  const maxU = (qx + HALF - ht) / atlas.atlasW;
  const minV = (qy + ht) / atlas.atlasH;
  const maxV = (qy + HALF - ht) / atlas.atlasH;

  switch (corner) {
    case 0: return [minU, maxV];
    case 1: return [maxU, maxV];
    case 2: return [maxU, minV];
    case 3: return [minU, minV];
  }
}
