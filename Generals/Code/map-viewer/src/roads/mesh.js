import * as THREE from 'three';
import { bigFilePool, getFileFromPool } from '../parsers/big.js';
import { parseTGA } from '../parsers/tga.js';
import { parseDDS } from '../parsers/dds.js';
import { roadTypeMap } from '../parsers/ini.js';
import { buildRoadQuadGeo } from './geometry.js';
import {
  ROAD_SEGMENT, ROAD_CURVE, ROAD_TEE, ROAD_FOUR_WAY,
  ROAD_Y, ROAD_H, ROAD_H_FLIP
} from '../constants.js';

export function loadTextureFromPool(texturePath, options) {
  if (!texturePath) return null;
  const flipDDS = options && options.flipDDS;
  const baseName = texturePath.replace(/\.[^.]+$/, '').toLowerCase();
  const justFilename = baseName.includes('/') ? baseName.split('/').pop() : baseName;
  const candidates = [
    texturePath,
    baseName + '.dds',
    baseName + '.tga',
    'art/textures/' + texturePath,
    'art/textures/' + baseName + '.dds',
    'art/textures/' + baseName + '.tga',
    'art/textures/' + justFilename + '.dds',
    'art/textures/' + justFilename + '.tga',
  ];
  for (const c of candidates) {
    const entry = getFileFromPool(c);
    if (!entry) continue;
    try {
      const raw = new Uint8Array(entry.buffer, entry.offset, entry.size);
      const isDDS = entry.size > 4 && raw[0] === 0x44 && raw[1] === 0x44 && raw[2] === 0x53 && raw[3] === 0x20;
      const img = isDDS ? parseDDS(raw) : parseTGA(raw);
      const tex = new THREE.DataTexture(img.pixels, img.width, img.height, THREE.RGBAFormat);
      if (flipDDS && isDDS) tex.flipY = true;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.generateMipmaps = true;
      tex.needsUpdate = true;
      return tex;
    } catch (e) {
      console.warn('Failed to load texture:', c, e);
    }
  }
  if (justFilename) {
    for (const [path] of bigFilePool) {
      const pBase = path.replace(/\.[^.]+$/, '');
      const pFilename = pBase.includes('/') ? pBase.split('/').pop() : pBase;
      if (pFilename === justFilename) {
        const entry = bigFilePool.get(path);
        try {
          const raw = new Uint8Array(entry.buffer, entry.offset, entry.size);
          const isDDS = entry.size > 4 && raw[0] === 0x44 && raw[1] === 0x44 && raw[2] === 0x53 && raw[3] === 0x20;
          const img = isDDS ? parseDDS(raw) : parseTGA(raw);
          const tex = new THREE.DataTexture(img.pixels, img.width, img.height, THREE.RGBAFormat);
          if (flipDDS && isDDS) tex.flipY = true;
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.RepeatWrapping;
          tex.magFilter = THREE.LinearFilter;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.generateMipmaps = true;
          tex.needsUpdate = true;
          return tex;
        } catch (e) { /* skip */ }
      }
    }
  }
  return null;
}

export function loadTextureFromPoolWithLuminanceAlpha(texturePath, options) {
  if (!texturePath) return null;
  const flipDDS = options && options.flipDDS;
  const baseName = texturePath.replace(/\.[^.]+$/, '').toLowerCase();
  const justFilename = baseName.includes('/') ? baseName.split('/').pop() : baseName;
  const candidates = [
    texturePath, baseName + '.dds', baseName + '.tga',
    'art/textures/' + texturePath, 'art/textures/' + baseName + '.dds',
    'art/textures/' + baseName + '.tga', 'art/textures/' + justFilename + '.dds',
    'art/textures/' + justFilename + '.tga',
  ];
  function makeTexFromImg(img, isDDS) {
    const px = img.pixels;
    for (let i = 0; i < px.length; i += 4) {
      const lum = px[i] * 0.299 + px[i+1] * 0.587 + px[i+2] * 0.114;
      px[i+3] = Math.min(255, (lum * 2) | 0);
    }
    const tex = new THREE.DataTexture(px, img.width, img.height, THREE.RGBAFormat);
    if (flipDDS && isDDS) tex.flipY = true;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }
  for (const c of candidates) {
    const entry = getFileFromPool(c);
    if (!entry) continue;
    try {
      const raw = new Uint8Array(entry.buffer, entry.offset, entry.size);
      const isDDS = entry.size > 4 && raw[0] === 0x44 && raw[1] === 0x44 && raw[2] === 0x53 && raw[3] === 0x20;
      return makeTexFromImg(isDDS ? parseDDS(raw) : parseTGA(raw), isDDS);
    } catch (e) { console.warn('Failed to load luminance-alpha texture:', c, e); }
  }
  if (justFilename) {
    for (const [path] of bigFilePool) {
      const pBase = path.replace(/\.[^.]+$/, '');
      const pFilename = pBase.includes('/') ? pBase.split('/').pop() : pBase;
      if (pFilename === justFilename) {
        const entry = bigFilePool.get(path);
        try {
          const raw = new Uint8Array(entry.buffer, entry.offset, entry.size);
          const isDDS = entry.size > 4 && raw[0] === 0x44 && raw[1] === 0x44 && raw[2] === 0x53 && raw[3] === 0x20;
          return makeTexFromImg(isDDS ? parseDDS(raw) : parseTGA(raw), isDDS);
        } catch (e) { /* skip */ }
      }
    }
  }
  return null;
}

const ROAD_DRAW_ORDER = [
  ROAD_SEGMENT, ROAD_CURVE, ROAD_TEE, ROAD_FOUR_WAY,
  ROAD_Y, ROAD_H, ROAD_H_FLIP,
];

export function buildRoadMesh(segments, fullH, border) {
  if (!segments || segments.length === 0) return null;

  const playH = fullH - 2 * border;

  const buckets = new Map();
  for (const seg of segments) {
    const key = seg.typeName + '|' + seg.type;
    if (!buckets.has(key)) buckets.set(key, { typeName: seg.typeName, segType: seg.type, segs: [] });
    buckets.get(key).segs.push(seg);
  }

  const texCache = new Map();
  function getTexForType(typeName) {
    if (texCache.has(typeName)) return texCache.get(typeName);
    const typeInfo = roadTypeMap.get(typeName);
    const tex = (typeInfo && typeInfo.texture) ? loadTextureFromPool(typeInfo.texture) : null;
    texCache.set(typeName, tex);
    return tex;
  }

  const group = new THREE.Group();
  let baseRenderOrder = 10;

  for (const drawType of ROAD_DRAW_ORDER) {
    for (const [, bucket] of buckets) {
      if (bucket.segType !== drawType) continue;

      const allPos = [], allUV = [], allIdx = [];
      let vertOff = 0;

      for (const seg of bucket.segs) {
        const quad = buildRoadQuadGeo(seg, playH);
        if (!quad) continue;
        allPos.push(...quad.positions);
        allUV.push(...quad.uvs);
        for (const idx of quad.indices) allIdx.push(idx + vertOff);
        vertOff += quad.positions.length / 3;
      }

      if (allPos.length === 0) continue;

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(allPos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(allUV, 2));
      geo.setIndex(allIdx);
      geo.computeVertexNormals();

      const tex = getTexForType(bucket.typeName);
      const mat = new THREE.MeshLambertMaterial({
        color: tex ? 0xffffff : 0x666666,
        map: tex || null,
        transparent: true,
        alphaTest: tex ? 0.1 : 0,
        depthWrite: false,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.castShadow = false;
      mesh.renderOrder = baseRenderOrder;
      group.add(mesh);
    }
    baseRenderOrder++;
  }

  return group.children.length > 0 ? group : null;
}
