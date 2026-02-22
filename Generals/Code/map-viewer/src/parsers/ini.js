import { bigFilePool } from './big.js';
import { DEFAULT_ROAD_SCALE } from '../constants.js';

export const objectModelMap = new Map();
export const objectKindOfMap = new Map();
export const objectGeometryMap = new Map();
export const roadTypeMap = new Map();

export function parseObjectINIsFromPool() {
  objectModelMap.clear();
  objectKindOfMap.clear();
  objectGeometryMap.clear();
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
  console.log(`Object INI: ${objectModelMap.size} object→model mappings, ${objectKindOfMap.size} KindOf entries, ${objectGeometryMap.size} GeometryInfo entries`);
}

/**
 * Mirrors Generals' recursive-descent INI parser (INI.cpp: initFromINIMulti).
 * In Generals, each block type calls initFromINI which reads lines until END.
 * Sub-blocks (modules) do the same via recursive calls from field handlers.
 * We replicate this: the top-level loop finds "Object Name", then
 * parseObjectBlock() reads until the Object's END, calling sub-parsers
 * for Draw, Body, Behavior etc. which each read until their own END.
 */
function parseObjectINI(text) {
  const lines = text.split(/\r?\n/);
  let lineIdx = 0;

  // Mirrors INI::readLine -- returns next non-empty line, stripped of comments
  function nextLine() {
    while (lineIdx < lines.length) {
      const raw = lines[lineIdx++];
      const line = raw.replace(/;.*$/, '').replace(/\/\/.*$/, '').trim();
      if (line) return line;
    }
    return null;
  }

  // Mirrors INI::load -- top-level loop dispatches block types
  let line;
  while ((line = nextLine()) !== null) {
    const objMatch = line.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);
    if (objMatch) {
      parseObjectBlock(objMatch[1].toLowerCase());
    }
  }

  /**
   * Mirrors ThingFactory::parseObjectDefinition -> ini->initFromINI(template, fieldParse).
   * Reads the body of one Object block until END.
   * Dispatches known fields; unknown sub-blocks are skipped via skipToEnd().
   */
  function parseObjectBlock(objectName) {
    let geom = null;
    let line;

    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) {
        if (geom) objectGeometryMap.set(objectName, geom);
        return;
      }

      // --- KindOf (root-level field) ---
      const kindMatch = line.match(/^\s*KindOf\s*=\s*(.+)/i);
      if (kindMatch && !objectKindOfMap.has(objectName)) {
        objectKindOfMap.set(objectName, new Set(kindMatch[1].trim().split(/\s+/).map(f => f.toUpperCase())));
        continue;
      }

      // --- Geometry fields (root-level) ---
      const geomTypeMatch = line.match(/^\s*Geometry\s*=\s*(\S+)/i);
      if (geomTypeMatch) {
        if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
        geom.type = geomTypeMatch[1].toUpperCase();
        continue;
      }
      const majorMatch = line.match(/^\s*GeometryMajorRadius\s*=\s*([\d.]+)/i);
      if (majorMatch) {
        if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
        geom.majorRadius = parseFloat(majorMatch[1]);
        continue;
      }
      const minorMatch = line.match(/^\s*GeometryMinorRadius\s*=\s*([\d.]+)/i);
      if (minorMatch) {
        if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
        geom.minorRadius = parseFloat(minorMatch[1]);
        continue;
      }
      const heightMatch = line.match(/^\s*GeometryHeight\s*=\s*([\d.]+)/i);
      if (heightMatch) {
        if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
        geom.height = parseFloat(heightMatch[1]);
        continue;
      }
      const smallMatch = line.match(/^\s*GeometryIsSmall\s*=\s*(\S+)/i);
      if (smallMatch) {
        if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
        geom.isSmall = /^yes$/i.test(smallMatch[1]);
        continue;
      }

      // --- Draw = W3D... sub-block: parse for model names ---
      if (/^\s*Draw\s*=\s*W3D/i.test(line)) {
        parseW3DDrawBlock(objectName);
        continue;
      }

      // --- Any other sub-block: skip to its END ---
      // In Generals, sub-blocks are module definitions (have ModuleTag),
      // Draw (non-W3D), and keyword blocks (ArmorSet, WeaponSet, etc.).
      // Each ends with END, mirroring initFromINIMulti.
      if (isSubBlockStart(line)) {
        skipToEnd();
        continue;
      }
    }
  }

  /**
   * Mirrors W3DModelDraw module parser.
   * Reads lines inside a Draw = W3D... block until END.
   * Extracts model names from ConditionState/DefaultConditionState or root.
   */
  function parseW3DDrawBlock(objectName) {
    let line;
    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) return;

      // ConditionState / DefaultConditionState sub-block
      if (/^\s*(?:Default)?ConditionState\b/i.test(line)) {
        parseConditionState(objectName);
        continue;
      }

      // TransitionState or other sub-blocks inside Draw
      if (/^\s*TransitionState\b/i.test(line) || isSubBlockStart(line)) {
        skipToEnd();
        continue;
      }

      // Model at Draw root level
      if (!objectModelMap.has(objectName)) {
        const modelMatch = line.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);
        if (modelMatch) {
          objectModelMap.set(objectName, modelMatch[1].toLowerCase());
        }
      }
    }
  }

  /**
   * Reads a ConditionState/DefaultConditionState sub-block until END.
   * Extracts model/ModelName.
   */
  function parseConditionState(objectName) {
    let line;
    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) return;

      if (!objectModelMap.has(objectName)) {
        const modelMatch = line.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);
        if (modelMatch) {
          objectModelMap.set(objectName, modelMatch[1].toLowerCase());
        }
      }
    }
  }

  /**
   * Mirrors initFromINIMulti for a block we don't care about.
   * Reads lines until END, handling nested sub-blocks recursively.
   */
  function skipToEnd() {
    let line;
    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) return;

      // If this line starts a nested sub-block, skip it recursively
      if (isSubBlockStart(line) ||
          /^\s*(?:Default)?ConditionState\b/i.test(line) ||
          /^\s*TransitionState\b/i.test(line)) {
        skipToEnd();
      }
    }
  }

  /**
   * Detects lines that start a sub-block requiring its own END.
   * Module definitions: "Foo = Bar ModuleTag_XX"
   * Keyword blocks: ArmorSet, WeaponSet, LocomotorSet, etc.
   * Draw modules (non-W3D handled here as generic skip).
   */
  function isSubBlockStart(line) {
    if (/\bModuleTag\b/i.test(line)) return true;
    if (/^\s*(?:Draw|ArmorSet|WeaponSet|LocomotorSet|CommandSet|UpgradeSet|UnitSpecificSounds)\s*=/i.test(line)) return true;
    if (/^\s*(?:ArmorSet|WeaponSet|LocomotorSet|UnitSpecificSounds)\s*$/i.test(line)) return true;
    return false;
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
