import state from '../state.js';
import { parseBigFile, bigFilePool, terrainTypeMap } from '../parsers/big.js';
import { tryDecompress } from '../parsers/refpack.js';
import { parseMapFile } from '../parsers/map.js';
import { initThree } from '../engine/scene.js';
import { buildTerrain } from '../terrain/build.js';
import { showError, populateInfoPanel } from './panel.js';

export async function handleDroppedFiles(files) {
  const loading = document.getElementById('loading');
  loading.classList.add('active');

  try {
    let mapFile = null;
    for (const file of files) {
      const headerBuf = await file.slice(0, 4).arrayBuffer();
      const magic = String.fromCharCode(...new Uint8Array(headerBuf));
      if (magic === 'BIGF' || magic === 'BIG4') {
        document.querySelector('#loading p').textContent = `Loading ${file.name}...`;
        await new Promise(r => setTimeout(r, 50));
        const buf = await file.arrayBuffer();
        parseBigFile(buf, file.name);

        document.getElementById('btn-list-big').style.display = '';

        if (state.currentMapData && state.scene) {
          const stats = buildTerrain(state.currentMapData);
          populateInfoPanel(state.currentMapData, stats);
        }
      } else {
        mapFile = file;
      }
    }

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
    } else if (bigFilePool.size > 0) {
      document.getElementById('drop-overlay').classList.remove('hidden');
      const hasIni = terrainTypeMap.size > 0;
      document.querySelector('#drop-zone p').textContent =
        `BIG loaded (${bigFilePool.size} files${hasIni ? `, ${terrainTypeMap.size} terrain mappings` : ', no Terrain.ini found — also drop ini.big for best results'}) — now drop a .map file`;
    }
  } catch (e) {
    console.error('Failed to load:', e);
    showError(`Failed to load: ${e.message}`);
  } finally {
    document.querySelector('#loading p').textContent = 'Parsing map file...';
    loading.classList.remove('active');
  }
}
