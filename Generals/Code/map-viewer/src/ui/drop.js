import state from '../state.js';
import {
  parseBigFile, bigFilePool, terrainTypeMap, looseFilePool,
  isAssetFile, addLooseFile, addLooseFileByFilename, parseTerrainIniFromPool
} from '../parsers/big.js';
import { tryDecompress } from '../parsers/refpack.js';
import { parseMapFile } from '../parsers/map.js';
import { initThree } from '../engine/scene.js';
import { buildTerrain } from '../terrain/build.js';
import { showError, populateInfoPanel } from './panel.js';

function readAllDirectoryEntries(dirReader) {
  return new Promise((resolve, reject) => {
    const all = [];
    function readBatch() {
      dirReader.readEntries(entries => {
        if (entries.length === 0) resolve(all);
        else { all.push(...entries); readBatch(); }
      }, reject);
    }
    readBatch();
  });
}

function fileFromEntry(entry) {
  return new Promise((resolve, reject) => entry.file(resolve, reject));
}

async function collectDirectory(dirEntry, basePath, collected) {
  const entries = await readAllDirectoryEntries(dirEntry.createReader());
  for (const entry of entries) {
    if (entry.isDirectory) {
      await collectDirectory(entry, `${basePath}/${entry.name}`, collected);
    } else {
      const name = entry.name.toLowerCase();
      if (name.endsWith('.big') || name.endsWith('.map')) continue;
      const file = await fileFromEntry(entry);
      collected.push({ path: `${basePath}/${file.name}`, file });
    }
  }
}

export async function handleDroppedFiles(dataTransfer) {
  const loading = document.getElementById('loading');
  loading.classList.add('active');

  try {
    const bigFiles = [];
    const looseFiles = [];
    let mapFile = null;

    // Extract filesystem entries synchronously (items API is only valid during the event)
    const fsEntries = [];
    let hasDirectories = false;
    if (dataTransfer.items) {
      for (let i = 0; i < dataTransfer.items.length; i++) {
        const entry = dataTransfer.items[i].webkitGetAsEntry?.();
        if (entry) {
          fsEntries.push(entry);
          if (entry.isDirectory) hasDirectories = true;
        }
      }
    }

    if (hasDirectories) {
      document.querySelector('#loading p').textContent = 'Scanning dropped files...';
      await new Promise(r => setTimeout(r, 50));

      for (const entry of fsEntries) {
        if (entry.isDirectory) {
          await collectDirectory(entry, entry.name, looseFiles);
        } else {
          const file = await fileFromEntry(entry);
          const headerBuf = await file.slice(0, 4).arrayBuffer();
          const magic = String.fromCharCode(...new Uint8Array(headerBuf));
          if (magic === 'BIGF' || magic === 'BIG4') {
            bigFiles.push(file);
          } else if (isAssetFile(file.name)) {
            looseFiles.push({ path: null, file });
          } else {
            mapFile = file;
          }
        }
      }
    } else {
      const files = Array.from(dataTransfer.files);
      for (const file of files) {
        const headerBuf = await file.slice(0, 4).arrayBuffer();
        const magic = String.fromCharCode(...new Uint8Array(headerBuf));
        if (magic === 'BIGF' || magic === 'BIG4') {
          bigFiles.push(file);
        } else if (isAssetFile(file.name)) {
          looseFiles.push({ path: null, file });
        } else {
          mapFile = file;
        }
      }
    }

    // 1) Process BIG files first
    for (const file of bigFiles) {
      document.querySelector('#loading p').textContent = `Loading ${file.name}...`;
      await new Promise(r => setTimeout(r, 50));
      const buf = await file.arrayBuffer();
      parseBigFile(buf, file.name);
      document.getElementById('btn-list-big').style.display = '';
    }

    // 2) Process loose override files
    let addedOverrides = 0;
    if (looseFiles.length > 0) {
      document.querySelector('#loading p').textContent = `Adding ${looseFiles.length} override file(s)...`;
      await new Promise(r => setTimeout(r, 50));

      let hasIniOverride = false;
      for (const { path, file } of looseFiles) {
        const buf = await file.arrayBuffer();
        if (path) {
          addLooseFile(path, buf);
          addedOverrides++;
          if (path.toLowerCase().endsWith('.ini')) hasIniOverride = true;
        } else {
          const added = addLooseFileByFilename(file.name, buf);
          addedOverrides += added.length;
          if (file.name.toLowerCase().endsWith('.ini')) hasIniOverride = true;
        }
      }

      if (hasIniOverride) parseTerrainIniFromPool();
      document.getElementById('btn-list-big').style.display = '';
      console.log(`Added ${addedOverrides} loose override file(s) to pool`);
    }

    // 3) Rebuild terrain if resources changed and map is already loaded
    const resourcesChanged = bigFiles.length > 0 || addedOverrides > 0;
    if (resourcesChanged && state.currentMapData && state.scene) {
      document.querySelector('#loading p').textContent = 'Rebuilding terrain...';
      await new Promise(r => setTimeout(r, 50));
      const stats = buildTerrain(state.currentMapData);
      populateInfoPanel(state.currentMapData, stats);
    }

    // 4) Process map file
    if (mapFile) {
      document.querySelector('#loading p').textContent = 'Parsing map file...';
      await new Promise(r => setTimeout(r, 50));

      const buffer = await mapFile.arrayBuffer();
      let data = await tryDecompress(buffer);
      if (!data) { loading.classList.remove('active'); return; }

      await new Promise(r => setTimeout(r, 50));
      const mapData = parseMapFile(data);

      if (!state.scene) initThree();
      const stats = buildTerrain(mapData);

      document.getElementById('drop-overlay').classList.add('hidden');
      document.getElementById('viewer').classList.add('active');

      const name = mapFile.name.replace(/\.map$/i, '');
      document.getElementById('map-name').textContent = name;
      populateInfoPanel(mapData, stats);

      console.log('Map loaded:', mapData);
    } else if (bigFilePool.size > 0 && !state.currentMapData) {
      document.getElementById('drop-overlay').classList.remove('hidden');
      const hasIni = terrainTypeMap.size > 0;
      const looseCount = looseFilePool.size;
      let msg = `BIG loaded (${bigFilePool.size} files`;
      if (hasIni) msg += `, ${terrainTypeMap.size} terrain mappings`;
      else msg += ', no Terrain.ini found — also drop ini.big';
      msg += ')';
      if (looseCount > 0) msg += ` + ${looseCount} override(s)`;
      msg += ' — now drop a .map file';
      document.querySelector('#drop-zone p').textContent = msg;
    } else if (addedOverrides > 0 && !state.currentMapData && bigFilePool.size === looseFilePool.size) {
      document.querySelector('#drop-zone p').textContent =
        `${looseFilePool.size} override file(s) ready — drop .big files and/or a .map file`;
    }
  } catch (e) {
    console.error('Failed to load:', e);
    showError(`Failed to load: ${e.message}`);
  } finally {
    document.querySelector('#loading p').textContent = 'Parsing map file...';
    loading.classList.remove('active');
  }
}
