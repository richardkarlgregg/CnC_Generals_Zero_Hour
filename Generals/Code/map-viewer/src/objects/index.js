import { bigFilePool, getFileFromPool } from '../parsers/big.js';
import { objectModelMap } from '../parsers/ini.js';

export const w3dFileIndex = new Map();
export const w3dLookupCache = new Map();

export function buildW3DIndex() {
  w3dFileIndex.clear();
  w3dLookupCache.clear();
  for (const [path] of bigFilePool) {
    if (!path.endsWith('.w3d')) continue;
    const parts = path.split('/');
    const basename = parts[parts.length - 1].replace(/\.w3d$/, '');
    const existing = w3dFileIndex.get(basename);
    if (!existing) {
      w3dFileIndex.set(basename, path);
      continue;
    }

    // Keep stable-first mapping, but prefer canonical art/w3d entries.
    const existingIsArtW3D = existing.startsWith('art/w3d/');
    const candidateIsArtW3D = path.startsWith('art/w3d/');
    if (!existingIsArtW3D && candidateIsArtW3D) {
      w3dFileIndex.set(basename, path);
    }
  }
  console.log(`W3D index: ${w3dFileIndex.size} models available`);
}

function tryIndex(name) {
  if (!name) return null;
  const base = name.toLowerCase().replace(/\.w3d$/, '');
  const normalizedBase = base.replace(/\s+/g, '');

  // Match Generals lookup behavior first: Art/W3D/<name>.w3d
  const canonical = `art/w3d/${normalizedBase}.w3d`;
  if (getFileFromPool(canonical)) return canonical;

  // Also support localized W3D path style: Data/<lang>/Art/W3D/<name>.w3d
  const localizedSuffix = `/art/w3d/${normalizedBase}.w3d`;
  for (const [path] of bigFilePool) {
    if (path.endsWith(localizedSuffix) && path.startsWith('data/')) return path;
  }

  if (w3dFileIndex.has(normalizedBase)) return w3dFileIndex.get(normalizedBase);
  return w3dFileIndex.has(base) ? w3dFileIndex.get(base) : null;
}

function stripTrailingDigits(s) {
  return s.replace(/\d+$/, '');
}

export function findW3DForObject(objectName) {
  const lname = objectName.toLowerCase();
  if (w3dLookupCache.has(lname)) return w3dLookupCache.get(lname);

  let result = null;

  const iniModel = objectModelMap.get(lname);
  if (iniModel) {
    const baseName = iniModel.includes('.') ? iniModel.split('.')[0] : iniModel;
    result = tryIndex(baseName);
  }

  if (!result) result = tryIndex(lname);

  if (!result) {
    const shortPrefixes = [
      ['tree', 'tr'], ['tree', ''],
      ['civ', 'cf'], ['civ', 'c'], ['civ', ''],
      ['mes', 'mes'], ['asia', 'as'], ['euro', 'eu'],
    ];
    for (const [prefix, abbr] of shortPrefixes) {
      if (!lname.startsWith(prefix)) continue;
      const rest = lname.slice(prefix.length);
      result = tryIndex(abbr + rest);
      if (result) break;
      const stripped = stripTrailingDigits(abbr + rest);
      if (stripped !== abbr + rest) {
        for (const [basename, path] of w3dFileIndex) {
          if (stripTrailingDigits(basename) === stripped) { result = path; break; }
        }
        if (result) break;
      }
    }
  }

  if (!result) {
    const prefixMap = { 'america': 'a', 'china': 'c', 'gla': 'g', 'civilian': 'c', 'europe': 'eu' };
    const typeMap = { 'vehicle': 'v', 'infantry': 'i', 'structure': '', 'building': '', 'tech': '' };
    for (const [prefix, abbr] of Object.entries(prefixMap)) {
      if (!lname.startsWith(prefix)) continue;
      let rest = lname.slice(prefix.length);
      for (const [type, typeAbbr] of Object.entries(typeMap)) {
        if (!rest.startsWith(type)) continue;
        const modelPart = rest.slice(type.length);
        const candidate = abbr + typeAbbr + modelPart;
        result = tryIndex(candidate);
        if (result) break;
      }
      if (result) break;
      result = tryIndex(abbr + rest);
      if (result) break;
    }
  }

  if (!result) {
    const significantPart = lname
      .replace(/^(?:america|china|gla|civilian|europe|tree|civ|mes)/, '')
      .replace(/^(?:vehicle|infantry|structure|building)/, '');
    if (significantPart.length >= 3) {
      const stripped = stripTrailingDigits(significantPart);
      let bestLen = 0;
      for (const [basename, path] of w3dFileIndex) {
        if (basename.includes(significantPart)) { result = path; break; }
        if (stripped.length >= 3 && basename.includes(stripped) && stripped.length > bestLen) {
          bestLen = stripped.length;
          result = path;
        }
      }
    }
  }

  if (!result) {
    const iniInfo = iniModel ? ` (INI→"${iniModel}")` : ' (no INI mapping)';
    const similar = [];
    const core = lname.replace(/^(?:tree|civ|mes|america|china|gla|civilian|europe)/, '').replace(/\d+$/, '');
    if (core.length >= 3) {
      for (const [basename] of w3dFileIndex) {
        if (basename.includes(core)) similar.push(basename);
        if (similar.length >= 5) break;
      }
    }
    const hint = similar.length > 0 ? ` Similar W3D: [${similar.join(', ')}]` : '';
    console.warn(`W3D not found: "${objectName}"${iniInfo}${hint}`);
  }

  w3dLookupCache.set(lname, result);
  return result;
}

export function findW3DByModelName(modelName) {
  if (!modelName) return null;
  const lower = modelName.toLowerCase();
  const base = lower.includes('.') ? lower.split('.')[0] : lower;
  return tryIndex(base);
}
