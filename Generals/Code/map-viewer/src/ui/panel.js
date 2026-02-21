import state from '../state.js';
import { FLAG_ROAD_FLAGS } from '../constants.js';
import { bigFilePool, terrainTypeMap, listAllBigFiles } from '../parsers/big.js';
import { w3dFileIndex } from '../objects/index.js';
import { extractRoadSegments } from '../roads/topology.js';
import { getTerrainColor } from '../terrain/colors.js';

export function showError(msg) {
  const toast = document.getElementById('error-toast');
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 5000);
}

export function populateInfoPanel(mapData, stats) {
  const hm = mapData.heightMap;
  const panel = document.getElementById('panel');
  const grid = document.getElementById('info-grid');
  panel.style.display = 'block';
  document.getElementById('toolbar').style.display = 'flex';

  const info = [
    ['Playable Area', `${stats.playW} × ${stats.playH}`],
    ['Full Grid', `${hm.width} × ${hm.height}`],
    ['Border', `${hm.borderSize}`],
    ['Height Range', `${stats.minH} – ${stats.maxH}`],
    ['Objects', `${mapData.objects.filter(o => !(o.flags & FLAG_ROAD_FLAGS)).length}${w3dFileIndex.size > 0 ? ` (${w3dFileIndex.size} W3D available)` : ''}`],
    ['Roads', `${extractRoadSegments(mapData.objects).length} segments`],
    ['Terrain Types', `${mapData.blendTileData?.textureClasses.length || 0}`],
    ['Water Areas', `${mapData.polygonTriggers.filter(t => t.isWaterArea).length}`],
    ['Textures', state.terrainAtlas ? `Atlas ${state.terrainAtlas.atlasW}x${state.terrainAtlas.atlasH}` : (bigFilePool.size > 0 ? 'BIG loaded, textures missing' : 'Drop Terrain.big')],
    ['Time of Day', ['Morning', 'Afternoon', 'Evening', 'Night'][mapData.lighting?.todIndex ?? 1]],
  ];

  grid.innerHTML = info.map(([label, value]) =>
    `<span class="label">${label}</span><span class="value">${value}</span>`
  ).join('');

  const todSel = document.getElementById('time-of-day');
  todSel.value = String(mapData.lighting?.todIndex ?? 1);

  const legend = document.getElementById('terrain-legend');
  if (mapData.blendTileData?.textureClasses) {
    const classes = mapData.blendTileData.textureClasses;
    legend.innerHTML = '<div style="color:#8b949e;font-size:12px;margin-bottom:6px">Terrain Types</div>' +
      classes.map(tc => {
        const c = getTerrainColor(tc.name);
        const hex = '#' + c.toString(16).padStart(6, '0');
        const displayName = tc.name.replace(/\.tga$/i, '');
        return `<div class="item"><div class="swatch" style="background:${hex}"></div>${displayName}</div>`;
      }).join('');
  }
}
