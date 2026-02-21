import { BinaryReader } from './BinaryReader.js';

export function parseMapFile(data) {
  const reader = new BinaryReader(data);

  const tag = reader.readBytes(4);
  if (String.fromCharCode(tag[0], tag[1], tag[2], tag[3]) !== 'CkMp') {
    throw new Error('Invalid map file: missing CkMp header');
  }

  const tocCount = reader.readInt32();
  const tocById = {};
  const tocByName = {};

  for (let i = 0; i < tocCount; i++) {
    const nameLen = reader.readByte();
    let name = '';
    for (let j = 0; j < nameLen; j++) name += String.fromCharCode(reader.readByte());
    const id = reader.readUInt32();
    tocById[id] = name;
    tocByName[name] = id;
  }

  const mapData = {
    heightMap: null,
    blendTileData: null,
    objects: [],
    lighting: null,
    polygonTriggers: [],
    worldInfo: {},
  };

  while (!reader.eof && reader.remaining >= 10) {
    const chunkId = reader.readUInt32();
    const chunkVersion = reader.readUInt16();
    const chunkDataSize = reader.readInt32();
    const chunkName = tocById[chunkId] || `unknown_${chunkId}`;
    const chunkStart = reader.tell();
    const chunkEnd = chunkStart + chunkDataSize;

    try {
      if (chunkName === 'HeightMapData') {
        mapData.heightMap = parseHeightMapData(reader, chunkVersion);
      } else if (chunkName === 'BlendTileData') {
        mapData.blendTileData = parseBlendTileData(reader, chunkVersion, mapData.heightMap);
      } else if (chunkName === 'ObjectsList') {
        parseObjectsList(reader, chunkVersion, chunkEnd, tocById, mapData);
      } else if (chunkName === 'GlobalLighting') {
        mapData.lighting = parseLighting(reader, chunkVersion);
      } else if (chunkName === 'PolygonTriggers') {
        parsePolygonTriggers(reader, chunkVersion, chunkEnd, mapData);
      } else if (chunkName === 'WorldInfo') {
        parseWorldInfo(reader, chunkVersion, chunkEnd, tocById, mapData);
      }
    } catch (e) {
      console.warn(`Error parsing chunk '${chunkName}':`, e);
    }

    reader.seek(chunkEnd);
  }

  return mapData;
}

function parseHeightMapData(reader, version) {
  const width = reader.readInt32();
  const height = reader.readInt32();
  let borderSize = 0;
  let boundaries = [];

  if (version >= 3) {
    borderSize = reader.readInt32();
  }

  if (version >= 4) {
    const numBorders = reader.readInt32();
    for (let i = 0; i < numBorders; i++) {
      boundaries.push({ x: reader.readInt32(), y: reader.readInt32() });
    }
  } else {
    boundaries.push({ x: width - 2 * borderSize, y: height - 2 * borderSize });
  }

  const dataSize = reader.readInt32();
  if (dataSize !== width * height) {
    throw new Error(`Height data size mismatch: ${dataSize} vs ${width}x${height}`);
  }

  const data = reader.readBytes(dataSize);
  const heightData = new Uint8Array(dataSize);
  heightData.set(data);

  return { width, height, borderSize, boundaries, data: heightData };
}

function parseBlendTileData(reader, version, heightMap) {
  if (!heightMap) return null;
  const dataSize = heightMap.width * heightMap.height;
  const len = reader.readInt32();
  if (len !== dataSize) {
    console.warn(`Blend tile data size mismatch: ${len} vs ${dataSize}`);
  }

  const tileNdxes = reader.readInt16Array(len);
  const blendTileNdxes = reader.readInt16Array(len);

  let extraBlendTileNdxes = null;
  if (version >= 6) {
    extraBlendTileNdxes = reader.readInt16Array(len);
  }

  let cliffInfoNdxes = null;
  if (version >= 5) {
    cliffInfoNdxes = reader.readInt16Array(len);
  }

  if (version >= 7) {
    const flipStateWidth = Math.floor((heightMap.width + 1) / 8);
    const cellCliffStateSize = heightMap.height * flipStateWidth;
    reader.skip(cellCliffStateSize);
  }

  const numBitmapTiles = reader.readInt32();
  const numBlendedTiles = reader.readInt32();
  let numCliffInfo = 1;
  if (version >= 5) {
    numCliffInfo = reader.readInt32();
  }

  const numTextureClasses = reader.readInt32();
  const textureClasses = [];
  for (let i = 0; i < numTextureClasses; i++) {
    const firstTile = reader.readInt32();
    const numTiles = reader.readInt32();
    const width = reader.readInt32();
    reader.readInt32();
    const name = reader.readAsciiString();
    textureClasses.push({ firstTile, numTiles, width, name });
  }

  let numEdgeTiles = 0;
  let numEdgeTextureClasses = 0;
  const edgeTextureClasses = [];
  if (version >= 4) {
    numEdgeTiles = reader.readInt32();
    numEdgeTextureClasses = reader.readInt32();
    for (let i = 0; i < numEdgeTextureClasses; i++) {
      const firstTile = reader.readInt32();
      const numTiles = reader.readInt32();
      const width = reader.readInt32();
      const name = reader.readAsciiString();
      edgeTextureClasses.push({ firstTile, numTiles, width, name });
    }
  }

  const FLAG_VAL = 0x7ADA0000;
  const blendedTiles = [null];
  for (let i = 1; i < numBlendedTiles; i++) {
    const blendNdx = reader.readInt32();
    const horiz = reader.readByte();
    const vert = reader.readByte();
    const rightDiagonal = reader.readByte();
    const leftDiagonal = reader.readByte();
    const inverted = reader.readByte();
    let longDiagonal = 0;
    if (version >= 3) longDiagonal = reader.readByte();
    let customBlendEdgeClass = -1;
    if (version >= 4) customBlendEdgeClass = reader.readInt32();
    const flag = reader.readUInt32();
    if (flag !== FLAG_VAL) {
      console.warn(`Blend tile sentinel mismatch at index ${i}: 0x${flag.toString(16)}`);
    }
    blendedTiles.push({ blendNdx, horiz, vert, rightDiagonal, leftDiagonal, inverted, longDiagonal, customBlendEdgeClass });
  }

  if (version >= 5) {
    for (let i = 1; i < numCliffInfo; i++) {
      reader.skip(4 + 8 * 4 + 2);
    }
  }

  return {
    tileNdxes,
    blendTileNdxes,
    extraBlendTileNdxes,
    numBitmapTiles,
    numBlendedTiles,
    blendedTiles,
    textureClasses,
    edgeTextureClasses,
  };
}

function parseObjectsList(reader, version, chunkEnd, tocById, mapData) {
  while (reader.tell() < chunkEnd && reader.remaining >= 10) {
    const subChunkId = reader.readUInt32();
    const subChunkVersion = reader.readUInt16();
    const subChunkSize = reader.readInt32();
    const subChunkName = tocById[subChunkId] || '';
    const subChunkEnd = reader.tell() + subChunkSize;

    if (subChunkName === 'Object') {
      try {
        const obj = parseObject(reader, subChunkVersion, tocById);
        if (obj) mapData.objects.push(obj);
      } catch (e) {
        console.warn('Error parsing object:', e);
      }
    }

    reader.seek(subChunkEnd);
  }
}

function parseObject(reader, version, tocById) {
  const x = reader.readFloat32();
  const y = reader.readFloat32();
  const z = reader.readFloat32();
  const angle = reader.readFloat32();
  const flags = reader.readInt32();
  const name = reader.readAsciiString();

  let dict = {};
  if (version >= 2) {
    try {
      dict = reader.readDict(tocById);
    } catch (e) {
      // dict parsing can be fragile with unknown key types
    }
  }

  if (version <= 2) {
    return { x, y, z: 0, angle, flags, name, dict };
  }
  return { x, y, z, angle, flags, name, dict };
}

function parseLighting(reader, version) {
  try {
    const timeOfDay = reader.readInt32();

    function readLightSet() {
      return {
        ambient: { r: reader.readFloat32(), g: reader.readFloat32(), b: reader.readFloat32() },
        diffuse: { r: reader.readFloat32(), g: reader.readFloat32(), b: reader.readFloat32() },
        lightPos: { x: reader.readFloat32(), y: reader.readFloat32(), z: reader.readFloat32() },
      };
    }

    const entries = [];
    for (let i = 0; i < 4; i++) {
      const terrain0 = readLightSet();
      const objects0 = readLightSet();
      let objects1 = null, objects2 = null;
      let terrain1 = null, terrain2 = null;
      if (version >= 2) {
        objects1 = readLightSet();
        objects2 = readLightSet();
      }
      if (version >= 3) {
        terrain1 = readLightSet();
        terrain2 = readLightSet();
      }
      entries.push({
        terrainLights: [terrain0, terrain1, terrain2].filter(Boolean),
        objectLights: [objects0, objects1, objects2].filter(Boolean),
      });
    }

    const todIndex = Math.max(0, Math.min(3, (timeOfDay || 1) - 1));
    return { timeOfDay, todIndex, entries, ...entries[todIndex] };
  } catch (e) {
    return null;
  }
}

function parsePolygonTriggers(reader, version, chunkEnd, mapData) {
  try {
    const count = reader.readInt32();
    for (let i = 0; i < count && reader.tell() < chunkEnd; i++) {
      const trigger = {};
      trigger.name = reader.readAsciiString();
      trigger.id = reader.readInt32();
      trigger.isWaterArea = false;
      trigger.isRiver = false;

      if (version >= 2) {
        trigger.isWaterArea = !!reader.readByte();
      }
      if (version >= 3) {
        trigger.isRiver = !!reader.readByte();
        trigger.riverStart = reader.readInt32();
      }

      const numPoints = reader.readInt32();
      trigger.points = [];
      for (let j = 0; j < numPoints; j++) {
        trigger.points.push({ x: reader.readInt32(), y: reader.readInt32(), z: reader.readInt32() });
      }
      mapData.polygonTriggers.push(trigger);
    }
  } catch(e) {
    // partial parse OK
  }
}

function parseWorldInfo(reader, version, chunkEnd, tocById, mapData) {
  try {
    mapData.worldInfo = reader.readDict(tocById);
  } catch(e) {
    // partial parse OK
  }
}
