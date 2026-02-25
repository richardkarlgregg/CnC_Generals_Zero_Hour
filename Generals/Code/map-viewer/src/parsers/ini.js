import { bigFilePool } from './big.js';
import { DEFAULT_ROAD_SCALE } from '../constants.js';

export const objectModelMap = new Map();
export const objectKindOfMap = new Map();
export const objectGeometryMap = new Map();
export const objectDrawStatesMap = new Map();
export const roadTypeMap = new Map();

// ---------------------------------------------------------------------------
// Object-level block fields — derived from s_objectFieldParseTable
// (ThingTemplate.cpp:111-248).
//
// These fields' parse handlers call ini->initFromINI() internally, consuming
// lines until END.  Every field NOT in this set is a simple single-line field
// whose handler only reads tokens from the current line (via getNextToken).
//
// Confirmed from Generals source:
//   ArmorSet  → parseArmorTemplateSet  → initFromINI   (block)
//   WeaponSet → parseWeaponTemplateSet → initFromINI   (block)
//   Prerequisites     → parsePrerequisites     → initFromINI   (block)
//   UnitSpecificSounds→ parsePerUnitSounds     → initFromINI   (block)
//   UnitSpecificFX    → parsePerUnitFX         → initFromINI   (block)
//   Body/Behavior/Draw/ClientUpdate → parseModuleName → newModuleDataFromINI
//                                   → module createDataProc → initFromINI (block)
//   AddModule/RemoveModule/ReplaceModule/InheritableModule (Zero Hour blocks)
//
// NOT blocks (confirmed simple single-line fields):
//   CommandSet → INI::parseAsciiString        (reads one token)
//   Locomotor  → AIUpdateModuleData::parseLocomotorSet (reads tokens on line)
//   KindOf     → KindOfMaskType::parseFromINI (reads tokens on line)
//   Geometry*  → GeometryInfo::parse*         (reads one token)
//   All Voice*/Sound* fields                  (read one token each)
// ---------------------------------------------------------------------------
const OBJECT_BLOCK_FIELDS = new Set([
  'armorset', 'weaponset',
  'prerequisites',
  'unitspecificsounds', 'unitspecificfx',
  'body', 'behavior', 'draw', 'clientupdate',
  'addmodule', 'removemodule', 'replacemodule', 'inheritablemodule',
]);

// ---------------------------------------------------------------------------
// Draw-module block fields — from W3DModelDrawModuleData::buildFieldParse
// (W3DModelDraw.cpp:1168-1194).
//
// DefaultConditionState / ConditionState / TransitionState each call
// parseConditionState → initFromINI (block with END).
// AliasConditionState is single-line (PARSE_ALIAS — no initFromINI).
// ---------------------------------------------------------------------------
const DRAW_BLOCK_FIELDS = new Set([
  'defaultconditionstate', 'conditionstate', 'transitionstate',
]);

// ---------------------------------------------------------------------------
// Public entry point — mirrors Generals' INI::load() over all data files
// ---------------------------------------------------------------------------
export function parseObjectINIsFromPool() {
  objectModelMap.clear();
  objectKindOfMap.clear();
  objectGeometryMap.clear();
  objectDrawStatesMap.clear();
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

  console.groupCollapsed(`KindOf sample (first 30 of ${objectKindOfMap.size})`);
  let sampleCount = 0;
  for (const [name, flags] of objectKindOfMap) {
    if (sampleCount++ >= 30) break;
    console.log(`  ${name}: ${[...flags].join(' ')}`);
  }
  console.groupEnd();
}

// ---------------------------------------------------------------------------
// Tokenizer — mirrors Generals' strtok(m_buffer, m_seps).
// m_seps = " \n\r\t=" (INI.cpp:184).  The '=' is treated identically to
// whitespace, so "KindOf = PRELOAD SELECTABLE" tokenises as
// ["KindOf", "PRELOAD", "SELECTABLE"].
// ---------------------------------------------------------------------------
function tokenize(line) {
  return line.split(/[\s=]+/).filter(Boolean);
}

// ---------------------------------------------------------------------------
// Skip a block we don't need — reads lines until the matching END.
//
// Generals doesn't have a generic "skip" because every field has a handler.
// We need one because we only implement handlers for fields we extract.
// Inside unknown blocks we detect nested sub-blocks with a heuristic:
//   - Lines without '=' are sub-block starts (Turret, ConditionState, etc.)
//   - Lines containing 'ModuleTag' are module definitions (always blocks)
// This matches the INI format: every simple field uses "Key = Value".
// ---------------------------------------------------------------------------
function skipBlock(nextLine) {
  let depth = 1;
  let line;
  while ((line = nextLine()) !== null) {
    if (/^End$/i.test(line)) {
      if (--depth <= 0) return;
      continue;
    }
    if (!line.includes('=') || /\bModuleTag\b/i.test(line)) {
      depth++;
    }
  }
}

// ---------------------------------------------------------------------------
// Top-level dispatch — mirrors INI::load() (INI.cpp:334-396).
//
// Generals reads each line, takes the first token, and looks it up in
// theTypeTable[] (INI.cpp:84-144).  "Object" → parseObjectDefinition,
// "ObjectReskin" → parseObjectReskinDefinition.  All other top-level
// blocks are ignored (their lines just pass through without matching).
// ---------------------------------------------------------------------------
function parseObjectINI(text) {
  const lines = text.split(/\r?\n/);
  let lineIdx = 0;

  function nextLine() {
    while (lineIdx < lines.length) {
      const raw = lines[lineIdx++];
      const stripped = raw.replace(/;.*$/, '').replace(/\/\/.*$/, '').trim();
      if (stripped) return stripped;
    }
    return null;
  }

  let line;
  while ((line = nextLine()) !== null) {
    const tokens = tokenize(line);
    if (!tokens.length) continue;
    const blockType = tokens[0].toLowerCase();

    // INI.cpp:120 — { "Object", INI::parseObjectDefinition }
    // INIObject.cpp:45 — reads name, calls ThingFactory::parseObjectDefinition
    if (blockType === 'object' && tokens[1]) {
      parseObjectBlock(tokens[1].toLowerCase(), nextLine);
    }
    // INI.cpp:122 — { "ObjectReskin", INI::parseObjectReskinDefinition }
    // INIObject.cpp:52 — reads name + base, copies base then overrides
    else if (blockType === 'objectreskin' && tokens[1]) {
      parseObjectBlock(tokens[1].toLowerCase(), nextLine);
    }
  }
}

// ---------------------------------------------------------------------------
// Object block parser — mirrors initFromINI(thingTemplate, s_objectFieldParseTable)
// (ThingFactory.cpp:419, ThingTemplate.cpp:111-248).
//
// Reads lines until END.  For each line the first token is the field name,
// remaining tokens are the values (same as Generals' strtok approach).
//
// Block fields → their handlers consume lines until their own END.
// Simple fields → all tokens already consumed; line is done.
// ---------------------------------------------------------------------------
function parseObjectBlock(objectName, nextLine) {
  // Generals object definitions are overrideable by later INI loads.
  // Reset per-object extracted data before parsing this block so the
  // latest definition wins instead of accumulating stale states.
  objectModelMap.delete(objectName);
  objectKindOfMap.delete(objectName);
  objectGeometryMap.delete(objectName);
  objectDrawStatesMap.delete(objectName);

  let geom = null;
  let line;

  while ((line = nextLine()) !== null) {
    const tokens = tokenize(line);
    if (!tokens.length) continue;
    const field = tokens[0].toLowerCase();
    const values = tokens.slice(1);

    // initFromINIMulti checks m_blockEndToken first (INI.cpp:948)
    if (field === 'end') {
      if (geom) objectGeometryMap.set(objectName, geom);
      return;
    }

    // ------ Fields we extract data from ------

    // KindOf — KindOfMaskType::parseFromINI (BitFlagsIO.h:61-131)
    // Reads all remaining tokens as flag names via getNextTokenOrNull loop
    if (field === 'kindof' && !objectKindOfMap.has(objectName)) {
      objectKindOfMap.set(objectName, new Set(values.map(f => f.toUpperCase())));
      continue;
    }

    // Geometry fields — GeometryInfo::parseGeometry* (Geometry.cpp:50-81)
    // Each reads a single token via getNextToken
    if (field === 'geometry') {
      if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
      geom.type = (values[0] || 'CYLINDER').toUpperCase();
      continue;
    }
    if (field === 'geometrymajorradius') {
      if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
      geom.majorRadius = parseFloat(values[0]) || 0;
      continue;
    }
    if (field === 'geometryminorradius') {
      if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
      geom.minorRadius = parseFloat(values[0]) || 0;
      continue;
    }
    if (field === 'geometryheight') {
      if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
      geom.height = parseFloat(values[0]) || 0;
      continue;
    }
    if (field === 'geometryissmall') {
      if (!geom) geom = { type: 'CYLINDER', majorRadius: 0, minorRadius: 0, height: 0, isSmall: false };
      geom.isSmall = /^yes$/i.test(values[0]);
      continue;
    }

    // ------ Block fields ------

    // Draw — parseModuleName (ThingTemplate.cpp:434-535)
    // Reads module name + tag, then module's createDataProc → initFromINI
    // We parse W3D draws for model names; skip non-W3D draws.
    if (field === 'draw') {
      if (/^W3D/i.test(values[0] || '')) {
        parseW3DDrawBlock(objectName, nextLine);
      } else {
        skipBlock(nextLine);
      }
      continue;
    }

    // All other known block fields — skip until END
    if (OBJECT_BLOCK_FIELDS.has(field)) {
      skipBlock(nextLine);
      continue;
    }

    // ------ Simple fields (single-line) ------

    // Model at root level (rare — most objects define it inside Draw)
    if ((field === 'model' || field === 'modelname') && values[0] && !objectModelMap.has(objectName)) {
      objectModelMap.set(objectName, values[0].toLowerCase());
    }

    // All other simple fields (CommandSet, Locomotor, Side, etc.) are
    // implicitly skipped — their tokens are already consumed by tokenize.
  }
}

// ---------------------------------------------------------------------------
// W3D Draw module parser — mirrors initFromINI with
// W3DModelDrawModuleData::buildFieldParse (W3DModelDraw.cpp:1168-1194).
//
// Field table entries of interest:
//   DefaultConditionState → parseConditionState(PARSE_DEFAULT) → initFromINI (block)
//   ConditionState        → parseConditionState(PARSE_NORMAL)  → initFromINI (block)
//   TransitionState       → parseConditionState(PARSE_TRANSITION) → initFromINI (block)
//   AliasConditionState   → parseConditionState(PARSE_ALIAS)  — single-line, no END
//   Model                 → parseAsciiStringLC (single token, inside ConditionState only)
//   All other fields      → simple single-line
// ---------------------------------------------------------------------------
const ANIM_MODE_DEFAULT = 'LOOP';
const ACBIT_ALIASES = new Map([
  ['RANDOMSTART', 'RANDOMIZE_START_FRAME'],
]);

function normalizeFlagToken(token) {
  const upper = (token || '').toUpperCase();
  return ACBIT_ALIASES.get(upper) || upper;
}

function getOrCreateDrawData(objectName) {
  const key = objectName.toLowerCase();
  let draw = objectDrawStatesMap.get(key);
  if (!draw) {
    draw = {
      states: [],
      transitions: new Map(),
      ignoreConditionStates: new Set(),
      defaultStateIndex: -1,
    };
    objectDrawStatesMap.set(key, draw);
  }
  return draw;
}

function parseAnimationEntry(values, isIdle) {
  const animName = (values[0] || '').toLowerCase();
  if (!animName || animName === 'none') return null;
  const distanceCovered = Number.parseFloat(values[1] || '0');
  // Third token is timesToRepeat — used to weight idle anim pool (mirrors W3DModelDraw.cpp parseAnimation)
  const timesToRepeat = Math.max(1, parseInt(values[2] || '1', 10) || 1);
  return {
    name: animName,
    isIdle,
    distanceCovered: Number.isFinite(distanceCovered) ? distanceCovered : 0,
    timesToRepeat,
  };
}

function createEmptyConditionState(type) {
  return {
    type,
    model: null,
    animations: [],
    animationMode: ANIM_MODE_DEFAULT,
    transitionKey: null,
    allowToFinishKey: null,
    flags: new Set(),
    conditions: new Set(),
    aliases: [],
    transitionFromKey: null,
    transitionToKey: null,
  };
}

function parseConditionHeaderState(type, values) {
  const state = createEmptyConditionState(type);
  if (type === 'DEFAULT') {
    return state;
  }
  if (type === 'TRANSITION') {
    state.transitionFromKey = (values[0] || '').toLowerCase();
    state.transitionToKey = (values[1] || '').toLowerCase();
    return state;
  }
  for (const v of values) {
    if (!v) continue;
    state.conditions.add(v.toUpperCase());
  }
  return state;
}

function parseAliasConditions(values) {
  const out = new Set();
  for (const v of values) {
    if (!v) continue;
    out.add(v.toUpperCase());
  }
  return out;
}

function parseW3DDrawBlock(objectName, nextLine) {
  const drawData = getOrCreateDrawData(objectName);
  const moduleStates = [];
  const moduleTransitions = [];
  const moduleIgnore = new Set();
  let moduleDefaultStateIndex = -1;

  let line;
  while ((line = nextLine()) !== null) {
    const tokens = tokenize(line);
    if (!tokens.length) continue;
    const field = tokens[0].toLowerCase();
    const values = tokens.slice(1);

    if (field === 'end') break;

    // Keep this parser compatible with W3DModelDraw::findBestInfo by masking ignored bits.
    if (field === 'ignoreconditionstates') {
      for (const token of values) {
        if (!token) continue;
        moduleIgnore.add(token.toUpperCase());
      }
      continue;
    }

    if (field === 'aliasconditionstate') {
      if (moduleStates.length > 0) {
        const alias = parseAliasConditions(values);
        moduleStates[moduleStates.length - 1].aliases.push(alias);
      }
      continue;
    }

    // ConditionState / TransitionState / DefaultConditionState — blocks with END
    if (DRAW_BLOCK_FIELDS.has(field)) {
      const type =
        field === 'defaultconditionstate' ? 'DEFAULT' :
        field === 'transitionstate' ? 'TRANSITION' :
        'CONDITION';
      const state = parseConditionStateBlock(type, values, nextLine);
      if (state) {
        if (type === 'DEFAULT') {
          moduleDefaultStateIndex = moduleStates.length;
        }
        if (type === 'TRANSITION') {
          moduleTransitions.push(state);
        } else {
          moduleStates.push(state);
        }
      }
      continue;
    }

    // Model at Draw root level (rare but possible)
    if ((field === 'model' || field === 'modelname') && values[0] && !objectModelMap.has(objectName)) {
      objectModelMap.set(objectName, values[0].toLowerCase());
    }

    // AliasConditionState and all other Draw fields are single-line — skipped
  }

  if (moduleStates.length === 0 && moduleTransitions.length === 0) {
    return;
  }

  const firstStateIndex = drawData.states.length;
  for (const s of moduleStates) {
    if (s.type === 'DEFAULT' && s.conditions.size === 0) {
      // Behaves like DefaultConditionState in Generals: default state matches NONE unless overridden.
      s.conditions = new Set();
    }
    if (!objectModelMap.has(objectName) && s.model) {
      objectModelMap.set(objectName, s.model);
    }
    drawData.states.push(s);
  }
  for (const t of moduleTransitions) {
    const key = `${t.transitionFromKey}->${t.transitionToKey}`;
    drawData.transitions.set(key, t);
  }
  for (const bit of moduleIgnore) {
    drawData.ignoreConditionStates.add(bit);
  }
  if (moduleDefaultStateIndex >= 0 && drawData.defaultStateIndex < 0) {
    drawData.defaultStateIndex = firstStateIndex + moduleDefaultStateIndex;
  }
}

// ---------------------------------------------------------------------------
// ConditionState block parser — mirrors initFromINI with the ConditionState
// field table inside parseConditionState (W3DModelDraw.cpp:1387-1413).
//
// Key field: { "Model", parseAsciiStringLC, ... }
// All fields in a ConditionState are simple single-line fields.
// ---------------------------------------------------------------------------
function parseConditionStateBlock(type, headerValues, nextLine) {
  const state = parseConditionHeaderState(type, headerValues);
  let line;
  while ((line = nextLine()) !== null) {
    const tokens = tokenize(line);
    if (!tokens.length) continue;
    const field = tokens[0].toLowerCase();
    const values = tokens.slice(1);

    if (field === 'end') return state;

    // Model/ModelName — parseAsciiStringLC (W3DModelDraw.cpp:1160-1165)
    if ((field === 'model' || field === 'modelname') && values[0]) {
      state.model = values[0].toLowerCase();
      continue;
    }
    if (field === 'animation' || field === 'idleanimation') {
      const anim = parseAnimationEntry(values, field === 'idleanimation');
      if (anim) {
        // Expand timesToRepeat copies into the pool (mirrors W3DModelDraw parseAnimation weighting)
        for (let i = 0; i < anim.timesToRepeat; i++) state.animations.push(anim);
      }
      continue;
    }
    if (field === 'animationmode') {
      state.animationMode = (values[0] || ANIM_MODE_DEFAULT).toUpperCase();
      continue;
    }
    if (field === 'transitionkey') {
      state.transitionKey = (values[0] || '').toLowerCase() || null;
      continue;
    }
    if (field === 'waitforstatetofinishifpossible') {
      state.allowToFinishKey = (values[0] || '').toLowerCase() || null;
      continue;
    }
    if (field === 'flags') {
      for (const token of values) {
        if (!token) continue;
        state.flags.add(normalizeFlagToken(token));
      }
    }
  }
  return state;
}

function doesStateMatch(activeFlags, requiredFlags) {
  for (const flag of requiredFlags) {
    if (!activeFlags.has(flag)) return false;
  }
  return true;
}

export function findBestStateForFlags(states, activeFlags, ignoreFlags = null) {
  if (!states || states.length === 0) return null;
  const masked = new Set(activeFlags || []);
  if (ignoreFlags) {
    for (const ignored of ignoreFlags) masked.delete(ignored);
  }

  let best = null;
  let bestScore = -1;
  let bestIndex = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < states.length; i++) {
    const state = states[i];
    if (!state || state.type === 'TRANSITION') continue;
    const candidates = [state.conditions, ...state.aliases];
    let localBest = -1;
    for (const cond of candidates) {
      if (!cond) continue;
      if (!doesStateMatch(masked, cond)) continue;
      const score = cond.size;
      if (score > localBest) localBest = score;
    }
    if (localBest < 0) continue;
    if (localBest > bestScore || (localBest === bestScore && i < bestIndex)) {
      best = state;
      bestScore = localBest;
      bestIndex = i;
    }
  }

  return best;
}

// ---------------------------------------------------------------------------
// Roads INI parser (separate system, not related to Object parsing)
// ---------------------------------------------------------------------------
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
