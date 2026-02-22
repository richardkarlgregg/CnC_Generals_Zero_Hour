import { bigFilePool } from './big.js';
import { DEFAULT_ROAD_SCALE } from '../constants.js';

export const objectModelMap = new Map();
export const objectKindOfMap = new Map();
export const objectGeometryMap = new Map();
export const roadTypeMap = new Map();

/**
 * Mirrors Generals' INI loading: ALL .ini files are loaded before the map.
 * In Generals, INI::load() runs on every .ini file in the data directory,
 * populating ThingFactory with ThingTemplates (KindOf + GeometryInfo + Draw model).
 * We scan every .ini file in the BIG archives to match this behavior.
 */
export function parseObjectINIsFromPool() {
  objectModelMap.clear();
  objectKindOfMap.clear();
  objectGeometryMap.clear();
  const candidates = [];
  for (const [path] of bigFilePool) {
    if (path.endsWith('.ini')) {
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

  // Debug: dump a sample of parsed KindOf entries so user can verify data
  console.groupCollapsed(`KindOf sample (first 30 of ${objectKindOfMap.size})`);
  let sampleCount = 0;
  for (const [name, flags] of objectKindOfMap) {
    if (sampleCount++ >= 30) break;
    console.log(`  ${name}: ${[...flags].join(' ')}`);
  }
  console.groupEnd();
}

/**
 * Mirrors Generals' recursive-descent INI parser (INI.cpp: initFromINIMulti).
 *
 * In Generals, the top-level loop dispatches block types. Each Object block
 * calls initFromINI which reads lines until END. Sub-blocks (modules like
 * Behavior, Body, Draw, and keyword blocks like ArmorSet, AddModule, etc.)
 * each consume lines until their own END.
 *
 * Our parser uses depth counting to handle nested END tokens correctly.
 * This avoids the fragile approach of trying to enumerate all sub-block types,
 * which broke when Zero Hour sub-blocks (AddModule, ReplaceModule, etc.) were
 * not detected, causing their END to be mistaken for the Object's END.
 */
function parseObjectINI(text) {
  const lines = text.split(/\r?\n/);
  let lineIdx = 0;

  function nextLine() {
    while (lineIdx < lines.length) {
      const raw = lines[lineIdx++];
      const line = raw.replace(/;.*$/, '').replace(/\/\/.*$/, '').trim();
      if (line) return line;
    }
    return null;
  }

  let line;
  while ((line = nextLine()) !== null) {
    const objMatch = line.match(/^(?:Object|ObjectReskin)\s+(\S+)/i);
    if (objMatch) {
      parseObjectBlock(objMatch[1].toLowerCase());
    }
  }

  /**
   * Reads the body of one Object block until its closing END.
   *
   * Uses depth counting: each END decrements depth; the Object's own END
   * is when depth hits 0.
   *
   * Sub-block detection uses a structural heuristic rather than keyword
   * enumeration (which was fragile — e.g. "CommandSet = Name" was wrongly
   * treated as a block, while nested "Turret" blocks were missed).
   *
   * In Generals' INI format, every simple field uses "Key = Value" syntax.
   * Sub-blocks either lack "=" (WeaponSet, ArmorSet, Turret, Prerequisites)
   * or contain "ModuleTag" (Behavior, Body, Draw module definitions).
   * The one exception is "Draw = W3D..." which we handle specially.
   */
  function parseObjectBlock(objectName) {
    let geom = null;
    let depth = 1;
    let line;

    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) {
        depth--;
        if (depth <= 0) {
          if (geom) {
            objectGeometryMap.set(objectName, geom);
          }
          return;
        }
        continue;
      }

      // Inside a sub-block (depth > 1): only track nesting, don't parse fields.
      // Lines without "=" are sub-block starts (Turret, Prerequisites, etc.).
      // Lines with ModuleTag are nested module blocks (rare but possible).
      if (depth > 1) {
        if (!/=/.test(line) || /\bModuleTag\b/i.test(line)) depth++;
        continue;
      }

      // --- depth === 1: we're at Object root level ---

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

      // --- Module definitions (Behavior/Body/Draw with ModuleTag) ---
      if (/\bModuleTag\b/i.test(line)) {
        depth++;
        continue;
      }

      // --- Any line without "=" is a sub-block start ---
      // Catches: WeaponSet, ArmorSet, LocomotorSet, Prerequisites,
      // UnitSpecificSounds, UnitSpecificFX, AddModule, RemoveModule, etc.
      if (!/=/.test(line)) {
        depth++;
        continue;
      }

      // --- Simple Key = Value fields ---
      // Model at root level (some objects define it outside Draw)
      if (!objectModelMap.has(objectName)) {
        const modelMatch = line.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);
        if (modelMatch) {
          objectModelMap.set(objectName, modelMatch[1].toLowerCase());
        }
      }
    }
  }

  /**
   * Parse a Draw = W3D... block for model names.
   * Uses depth counting for nested ConditionState/TransitionState blocks.
   * Model/ModelName can appear at any depth (root or inside ConditionState).
   */
  function parseW3DDrawBlock(objectName) {
    let depth = 1;
    let line;
    while ((line = nextLine()) !== null) {
      if (/^End$/i.test(line)) {
        depth--;
        if (depth <= 0) return;
        continue;
      }

      // ConditionState/TransitionState are blocks WITH "=" (e.g. "ConditionState = RUBBLE").
      // DefaultConditionState and any other bare keywords (no "=") are also blocks.
      if (/^\s*(?:ConditionState|TransitionState)\s*=/i.test(line) ||
          !/=/.test(line)) {
        depth++;
      }

      if (!objectModelMap.has(objectName)) {
        const modelMatch = line.match(/^\s*(?:Model|ModelName)\s*=\s*(\S+)/i);
        if (modelMatch) {
          objectModelMap.set(objectName, modelMatch[1].toLowerCase());
        }
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
