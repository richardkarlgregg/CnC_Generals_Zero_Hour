import { bigFilePool } from '../parsers/big.js';
import { objectModelMap } from '../parsers/ini.js';

export const w3dFileIndex = new Map();
export const w3dLookupCache = new Map();

export function buildW3DIndex() {
  w3dFileIndex.clear();
  for (const [path] of bigFilePool) {
    if (!path.endsWith('.w3d')) continue;
    const parts = path.split('/');
    const basename = parts[parts.length - 1].replace(/\.w3d$/, '');
    if (!w3dFileIndex.has(basename)) {
      w3dFileIndex.set(basename, path);
    }
  }
  console.log(`W3D index: ${w3dFileIndex.size} models available`);
}

export function findW3DForObject(objectName) {
  const lname = objectName.toLowerCase();
  if (w3dLookupCache.has(lname)) return w3dLookupCache.get(lname);

  let result = null;

  const iniModel = objectModelMap.get(lname);
  if (iniModel) {
    const baseName = iniModel.includes('.') ? iniModel.split('.')[0] : iniModel;
    result = w3dFileIndex.get(baseName);
  }

  if (!result) result = w3dFileIndex.get(lname);

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
        if (w3dFileIndex.has(candidate)) { result = w3dFileIndex.get(candidate); break; }
      }
      if (result) break;
      const candidate = abbr + rest;
      if (w3dFileIndex.has(candidate)) { result = w3dFileIndex.get(candidate); break; }
    }
  }

  if (!result) {
    const significantPart = lname
      .replace(/^(?:america|china|gla|civilian|europe)/, '')
      .replace(/^(?:vehicle|infantry|structure|building)/, '');
    if (significantPart.length >= 4) {
      for (const [basename, path] of w3dFileIndex) {
        if (basename.includes(significantPart)) { result = path; break; }
      }
    }
  }

  if (!result && iniModel) {
    const baseName = iniModel.includes('.') ? iniModel.split('.')[0] : iniModel;
    console.warn(`W3D not found for "${objectName}": INI maps to "${iniModel}" (basename="${baseName}") but no matching W3D file`);
  }

  w3dLookupCache.set(lname, result);
  return result;
}
