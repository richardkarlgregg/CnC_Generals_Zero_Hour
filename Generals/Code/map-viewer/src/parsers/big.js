export const bigFilePool = new Map();
export const terrainTypeMap = new Map();
export const looseFilePool = new Map();

const ASSET_EXTENSIONS = new Set([
  '.tga', '.dds', '.bmp', '.jpg', '.jpeg', '.png',
  '.w3d', '.wak', '.wnd',
  '.ini', '.str', '.csf', '.xml',
]);

export function isAssetFile(filename) {
  const ext = filename.toLowerCase().match(/\.[^.]+$/)?.[0];
  return ext ? ASSET_EXTENSIONS.has(ext) : false;
}

export function addLooseFile(path, arrayBuffer) {
  const key = path.toLowerCase().replace(/\\/g, '/');
  const entry = { buffer: arrayBuffer, offset: 0, size: arrayBuffer.byteLength };
  bigFilePool.set(key, entry);
  looseFilePool.set(key, entry);
  return key;
}

export function addLooseFileByFilename(filename, arrayBuffer) {
  const lowerName = filename.toLowerCase();
  const addedPaths = [];

  for (const [path] of bigFilePool) {
    if (path.endsWith('/' + lowerName) || path === lowerName) {
      addedPaths.push(addLooseFile(path, arrayBuffer));
    }
  }

  if (addedPaths.length === 0) {
    const ext = lowerName.match(/\.[^.]+$/)?.[0] || '';
    let inferredPath;
    if (['.tga', '.dds', '.bmp'].includes(ext)) {
      inferredPath = `art/terrain/${lowerName}`;
    } else if (ext === '.w3d' || ext === '.wak') {
      inferredPath = `art/w3d/${lowerName}`;
    } else if (ext === '.ini') {
      inferredPath = `data/ini/${lowerName}`;
    } else {
      inferredPath = lowerName;
    }
    addedPaths.push(addLooseFile(inferredPath, arrayBuffer));
    console.log(`No BIG match for "${lowerName}", added at inferred path: ${inferredPath}`);
  } else {
    console.log(`Overriding ${addedPaths.length} BIG entry(s) for "${lowerName}":`, addedPaths);
  }

  return addedPaths;
}

export function parseBigFile(buffer, filename) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);

  const magic = String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3]);
  if (magic !== 'BIGF' && magic !== 'BIG4') throw new Error('Not a BIG archive file');

  const numFiles = view.getUint32(8, false);
  let pos = 16;
  let addedCount = 0;

  for (let i = 0; i < numFiles; i++) {
    const offset = view.getUint32(pos, false);
    const size = view.getUint32(pos + 4, false);
    pos += 8;
    let path = '';
    while (bytes[pos] !== 0) { path += String.fromCharCode(bytes[pos++]); }
    pos++;
    const key = path.toLowerCase().replace(/\\/g, '/');
    bigFilePool.set(key, { buffer, offset, size });
    addedCount++;
  }

  console.log(`BIG "${filename}": ${addedCount} files added to pool (${bigFilePool.size} total)`);

  parseTerrainIniFromPool();
  listTerrainFiles();
}

export function getFileFromPool(path) {
  return bigFilePool.get(path.toLowerCase().replace(/\\/g, '/'));
}

export function getFileData(path) {
  const info = getFileFromPool(path);
  if (!info) return null;
  return new Uint8Array(info.buffer, info.offset, info.size);
}

export function parseTerrainIniFromPool() {
  const iniPaths = [
    'data/ini/terrain.ini',
    'data/ini/default/terrain.ini',
  ];

  for (const path of iniPaths) {
    const data = getFileData(path);
    if (!data) continue;
    const text = new TextDecoder('ascii').decode(data);
    parseTerrainIni(text);
    console.log(`Parsed ${path}: ${terrainTypeMap.size} terrain type mappings`);
  }
}

function parseTerrainIni(text) {
  const lines = text.split(/\r?\n/);
  let currentName = null;

  for (const rawLine of lines) {
    const line = rawLine.replace(/;.*$/, '').trim();
    if (!line) continue;

    const terrainMatch = line.match(/^Terrain\s+(\S+)/i);
    if (terrainMatch) {
      currentName = terrainMatch[1];
      continue;
    }

    if (/^End$/i.test(line)) {
      currentName = null;
      continue;
    }

    if (currentName) {
      const texMatch = line.match(/^Texture\s*=\s*(\S+)/i);
      if (texMatch) {
        terrainTypeMap.set(currentName.toLowerCase(), texMatch[1].toLowerCase());
      }
    }
  }
}

function listTerrainFiles() {
  const terrainFiles = [];
  for (const [path] of bigFilePool) {
    if (path.startsWith('art/terrain/') && path.endsWith('.tga')) {
      terrainFiles.push(path);
    }
  }
  terrainFiles.sort();
  if (terrainFiles.length > 0) {
    console.groupCollapsed(`Terrain TGAs in BIG pool (${terrainFiles.length})`);
    for (const f of terrainFiles) console.log(f);
    console.groupEnd();
  }
}

export function listAllBigFiles() {
  const paths = Array.from(bigFilePool.keys()).sort();
  const looseCount = looseFilePool.size;
  console.groupCollapsed(`All files in pool (${paths.length} total, ${looseCount} overrides)`);
  for (const p of paths) {
    const info = bigFilePool.get(p);
    const isOverride = looseFilePool.has(p);
    console.log(`${isOverride ? '[OVERRIDE] ' : ''}${p}  (${info.size} bytes)`);
  }
  console.groupEnd();
  return paths;
}

export function resolveTerrainTGA(texClassName) {
  const name = texClassName.replace(/\.tga$/i, '').toLowerCase();

  const iniTga = terrainTypeMap.get(name);
  if (iniTga) {
    const path = `art/terrain/${iniTga}`;
    if (getFileFromPool(path)) return path;
  }

  const exact = `art/terrain/${name}.tga`;
  if (getFileFromPool(exact)) return exact;

  let bestMatch = null;
  let bestScore = 0;
  for (const [path] of bigFilePool) {
    if (!path.startsWith('art/terrain/') || !path.endsWith('.tga')) continue;
    const basename = path.slice(12, -4);
    if (basename === name) { bestMatch = path; break; }

    let score = 0;
    if (name.includes(basename) || basename.includes(name)) score = 3;
    else {
      const stripType = s => s.replace(/type\d*/gi, '').replace(/\d+$/, '');
      const sName = stripType(name);
      const sBase = stripType(basename);
      if (sName && sBase && (sName.includes(sBase) || sBase.includes(sName))) score = 2;
    }
    if (score > bestScore) { bestScore = score; bestMatch = path; }
  }

  if (bestMatch && bestScore >= 2) {
    console.log(`Fuzzy matched "${name}" → "${bestMatch}"`);
    return bestMatch;
  }

  return null;
}
