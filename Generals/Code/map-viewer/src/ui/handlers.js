import state from '../state.js';
import { MAP_XY_FACTOR } from '../constants.js';
import { bigFilePool, listAllBigFiles, terrainTypeMap, looseFilePool } from '../parsers/big.js';
import { updateTerrainColors, updateHeightScale } from '../terrain/update.js';
import { applyTimeOfDay } from '../engine/lighting.js';
import { camState, CAM_DEFAULT_PITCH, CAM_MAX_HEIGHT } from '../engine/camera.js';
import { showError } from './panel.js';
import { handleDroppedFiles } from './drop.js';

export function setupEventHandlers() {
  const dropZone = document.getElementById('drop-zone');
  const dropOverlay = document.getElementById('drop-overlay');

  document.addEventListener('dragover', e => { e.preventDefault(); e.stopPropagation(); });
  document.addEventListener('drop', e => { e.preventDefault(); e.stopPropagation(); });

  dropOverlay.addEventListener('dragenter', () => dropZone.classList.add('drag-over'));
  dropOverlay.addEventListener('dragleave', e => {
    if (!dropOverlay.contains(e.relatedTarget)) dropZone.classList.remove('drag-over');
  });
  dropOverlay.addEventListener('drop', e => {
    dropZone.classList.remove('drag-over');
    if (e.dataTransfer?.files?.length > 0) handleDroppedFiles(e.dataTransfer);
  });

  document.getElementById('viewer').addEventListener('drop', e => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length > 0) handleDroppedFiles(e.dataTransfer);
  });
  document.getElementById('viewer').addEventListener('dragover', e => e.preventDefault());

  document.getElementById('toggle-wireframe').addEventListener('click', function() {
    this.classList.toggle('active');
    const wf = this.classList.contains('active');
    if (state.terrainMatColored) state.terrainMatColored.wireframe = wf;
    if (state.terrainMatTextured) state.terrainMatTextured.wireframe = wf;
  });

  document.getElementById('toggle-objects').addEventListener('click', function() {
    this.classList.toggle('active');
    state.objectMarkers.visible = this.classList.contains('active');
  });

  document.getElementById('toggle-water').addEventListener('click', function() {
    this.classList.toggle('active');
    if (state.waterPlane) state.waterPlane.visible = this.classList.contains('active');
  });

  document.getElementById('toggle-roads').addEventListener('click', function() {
    this.classList.toggle('active');
    if (state.roadMesh) state.roadMesh.visible = this.classList.contains('active');
  });

  document.getElementById('toggle-shadows').addEventListener('click', function() {
    this.classList.toggle('active');
    const enabled = this.classList.contains('active');
    state.renderer.shadowMap.enabled = enabled;
    if (state.sunLight) state.sunLight.castShadow = enabled;
    if (state.terrainMatColored) state.terrainMatColored.needsUpdate = true;
    if (state.terrainMatTextured) state.terrainMatTextured.needsUpdate = true;
  });

  document.getElementById('toggle-edge-scroll').addEventListener('click', function() {
    this.classList.toggle('active');
    camState.edgeScrollEnabled = this.classList.contains('active');
  });

  document.getElementById('height-scale').addEventListener('input', function() {
    state.currentHeightScale = parseFloat(this.value);
    document.getElementById('height-scale-value').textContent = state.currentHeightScale.toFixed(1) + 'x';
    updateHeightScale(state.currentHeightScale);
  });

  document.getElementById('color-mode').addEventListener('change', function() {
    state.colorMode = this.value;
    updateTerrainColors();
  });

  document.getElementById('time-of-day').addEventListener('change', function() {
    applyTimeOfDay(parseInt(this.value));
  });

  document.getElementById('btn-reset-camera').addEventListener('click', () => {
    if (!state.currentMapData) return;
    const hm = state.currentMapData.heightMap;
    const border = hm.borderSize;
    const playW = hm.width - 2 * border;
    const playH = hm.height - 2 * border;
    const centerX = (playW * MAP_XY_FACTOR) / 2;
    const centerZ = (playH * MAP_XY_FACTOR) / 2;
    const mapSize = Math.max(playW, playH) * MAP_XY_FACTOR;
    camState.target.set(centerX, 0, centerZ);
    camState.height = Math.min(CAM_MAX_HEIGHT, mapSize * 0.35);
    camState.yaw = Math.PI * 0.75;
    camState.pitch = CAM_DEFAULT_PITCH;
    camState.velocity.set(0, 0, 0);
  });

  document.getElementById('btn-load-new').addEventListener('click', () => {
    document.getElementById('drop-overlay').classList.remove('hidden');
  });

  document.getElementById('btn-list-big').addEventListener('click', () => {
    if (bigFilePool.size === 0) { showError('No files loaded'); return; }
    const paths = listAllBigFiles();
    const terrainTGAs = paths.filter(p => p.startsWith('art/terrain/') && p.endsWith('.tga'));
    const looseCount = looseFilePool.size;
    let msg = `${bigFilePool.size} files in pool.\n${terrainTGAs.length} terrain TGAs.\n${terrainTypeMap.size} INI terrain mappings.`;
    if (looseCount > 0) msg += `\n${looseCount} loose file override(s) (marked [OVERRIDE] in console).`;
    msg += '\n\nFull list logged to browser console (F12).';
    alert(msg);
  });
}
