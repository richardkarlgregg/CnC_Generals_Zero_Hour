import { bigFilePool } from './big.js';
import { DEFAULT_ROAD_SCALE } from '../constants.js';

export const objectModelMap = new Map();
export const objectKindOfMap = new Map();
export const roadTypeMap = new Map();

export function parseObjectINIsFromPool() {
  objectModelMap.clear();
  objectKindOfMap.clear();
  const candidates = [];
  for (const [path] of bigFilePool) {
    if ((path.startsWith('data/ini/') && path.endsWith('.ini')) ||
        (path.includes('object') && path.endsWith('.ini'))) {
      candidates.push(path);
    }
  }
  candidates.sort();
  console.groupCollapsed(`Object INI: scanning ${candidates.length} INI files`);
  for (const path of candidates) {
    const entry = bigFilePool.get(path);
    if (!entry) continue;
    const before = objectModelMap.size;
    try {
      const bytes = new Uint8Array(entry.buffer, entry.offset, entry.size);
      const text = new TextDecoder('ascii').decode(bytes);
      parseObjectINI(text);
      const added = objectModelMap.size - before;
      if (added > 0) console.log(`  ${path}: +${added} mappings`);
    } catch (e) {
      console.warn(`  ${path}: PARSE ERROR`, e);
    }
  }
  console.groupEnd();
  console.log(`Object INI: ${objectModelMap.size} object→model mappings, ${objectKindOfMap.size} KindOf entries`);
}

function parseObjectINI(text) {
  const lines = text.split(/\r?\n/);
  let currentObject = null;
  let inDrawModule = false;
  let inConditionState = false;
  for (const raw of lines) {
    const line = raw.replace(/;.*$/, '').replace(/\/\/.*$/, '').trim();
    if (!line) continue;

    const objMatch = line.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);
    if (objMatch) {
      currentObject = objMatch[1].toLowerCase();
      inDrawModule = false;
      inConditionState = false;
      continue;
    }

    if (!currentObject) continue;

    if (/^End$/i.test(line)) {
      if (inConditionState) { inConditionState = false; }
      else if (inDrawModule) { inDrawModule = false; }
      continue;
    }

    const kindMatch = line.match(/^\s*KindOf\s*=\s*(.+)/i);
    if (kindMatch && !objectKindOfMap.has(currentObject)) {
      const flags = new Set(kindMatch[1].trim().split(/\s+/).map(f => f.toUpperCase()));
      objectKindOfMap.set(currentObject, flags);
    }

    if (/^\s*Draw\s*=\s*W3D/i.test(line)) { inDrawModule = true; continue; }
    if (inDrawModule && /^\s*(?:Default)?ConditionState/i.test(line)) { inConditionState = true; continue; }
    if (inDrawModule && !objectModelMap.has(currentObject)) {
      const modelMatch = line.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);
      if (modelMatch) {
        objectModelMap.set(currentObject, modelMatch[1].toLowerCase());
      }
    }
  }
}

export function parseRoadsIniFromPool() {
  roadTypeMap.clear();
  const candidates = ['data/ini/roads.ini', 'data/ini/default/roads.ini'];
  for (const path of candidates) {
    const entry = bigFilePool.get(path);
    if (!entry) continue;
    const bytes = new Uint8Array(entry.buffer, entry.offset, entry.size);
    const text = new TextDecoder('ascii').decode(bytes);
    parseRoadsIni(text);
  }
}

function parseRoadsIni(text) {
  const lines = text.split(/\r?\n/);
  let currentName = null;
  let isRoad = false;
  let roadWidth = DEFAULT_ROAD_SCALE;
  let roadWidthInTexture = 1.0;
  let texture = '';
  for (const raw of lines) {
    const line = raw.replace(/;.*$/, '').trim();
    if (!line) continue;
    if (/^Road\s+/i.test(line)) {
      currentName = line.replace(/^Road\s+/i, '').trim();
      isRoad = true;
      roadWidth = DEFAULT_ROAD_SCALE;
      roadWidthInTexture = 1.0;
      texture = '';
    } else if (/^Bridge\s+/i.test(line)) {
      isRoad = false;
    } else if (/^End$/i.test(line) && isRoad && currentName) {
      roadTypeMap.set(currentName.toLowerCase(), { roadWidth, roadWidthInTexture, texture });
      currentName = null;
    } else if (isRoad && currentName) {
      const m = line.match(/^Texture\s*=\s*(.+)/i);
      if (m) texture = m[1].trim();
      const mw = line.match(/^RoadWidth\s*=\s*([\d.]+)/i);
      if (mw) roadWidth = parseFloat(mw[1]);
      const mwt = line.match(/^RoadWidthInTexture\s*=\s*([\d.]+)/i);
      if (mwt) roadWidthInTexture = parseFloat(mwt[1]);
    }
  }
}
