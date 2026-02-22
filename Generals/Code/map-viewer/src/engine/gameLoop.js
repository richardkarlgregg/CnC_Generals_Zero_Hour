// Game loop: fixed-timestep update alongside the render loop.
// Mirrors the Generals frame pipeline:
//   input -> selection/command -> dispatch -> pathfinder -> AI update -> render

import state from '../state.js';
import { MessageStream } from './messageStream.js';
import { dispatchMessages } from './dispatch.js';
import { updateSelectionIndicators, initSelectionIndicators } from './selectionManager.js';
import { updateSelectionTranslatorFrame } from './selectionTranslator.js';
import { PathfindGrid } from '../logic/pathfindGrid.js';
import { Pathfinder } from '../logic/pathfinder.js';
import { AIUpdate, setPathfinderRef } from '../logic/aiUpdate.js';

let initialized = false;

/**
 * Initialize the game systems. Call once after the scene and terrain are built.
 */
export function initGameSystems() {
  if (initialized) return;

  state.messageStream = new MessageStream();
  initSelectionIndicators();

  // Attach AI to all mobile units
  for (const unit of state.units.values()) {
    if (unit.isMobile()) {
      unit.ai = new AIUpdate(unit);
    }
  }

  // Build pathfinding grid from terrain
  const mapData = state.currentMapData;
  if (mapData && mapData.heightMap) {
    const grid = new PathfindGrid();
    grid.buildFromHeightmap(
      mapData.heightMap,
      mapData.waterAreas || [],
      mapData.objects || []
    );
    state.pathfinder = new Pathfinder(grid);
    setPathfinderRef(state.pathfinder);
    console.log(`Pathfinding grid: ${grid.width}x${grid.height} cells, ${grid.nextZoneId - 1} zones`);
  }

  initialized = true;
  console.log(`Game systems initialized: ${state.units.size} units (${countMobile()} mobile)`);
}

function countMobile() {
  let n = 0;
  for (const u of state.units.values()) if (u.isMobile()) n++;
  return n;
}

/**
 * Per-frame game update. Called from animate() before render.
 */
export function updateGameSystems(dt) {
  if (!initialized) return;

  // 1. Update frame counter for selection translator
  updateSelectionTranslatorFrame();

  // 2. Dispatch messages -> AI commands
  dispatchMessages();

  // 3. Pathfinder processes queued requests (budget-limited)
  if (state.pathfinder) {
    state.pathfinder.processPathfindQueue();
  }

  // 4. Update each unit's AI (state machine + locomotor)
  for (const unit of state.units.values()) {
    if (unit.ai) {
      unit.ai.update(dt);
    }
  }

  // 5. Update selection indicators to follow units
  updateSelectionIndicators();
}

/**
 * Reset game systems on map reload.
 */
export function resetGameSystems() {
  initialized = false;
  state.messageStream = null;
  state.pathfinder = null;
  state.selectedUnits.length = 0;
  state.hotkeySquads.fill(null);
}
