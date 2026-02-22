// Game loop: fixed-timestep update alongside the render loop.
// Mirrors the Generals frame pipeline:
//   input -> selection/command -> dispatch -> pathfinder ->
//   physics collision -> AI update (doLocomotor) -> render
//
// In Generals:
// 1. Messages dispatched
// 2. Pathfinder processes queue
// 3. PhysicsUpdate runs (overlap detection -> processCollision -> force)
// 4. AIUpdate::update (doLocomotor reads m_blockedFrames, calls locomotor)
// 5. Render

import state from '../state.js';
import { MessageStream } from './messageStream.js';
import { dispatchMessages } from './dispatch.js';
import { updateSelectionIndicators, initSelectionIndicators } from './selectionManager.js';
import { updateSelectionTranslatorFrame } from './selectionTranslator.js';
import { PathfindGrid } from '../logic/pathfindGrid.js';
import { Pathfinder } from '../logic/pathfinder.js';
import { AIUpdate, setPathfinderRef } from '../logic/aiUpdate.js';
import { resolvePhysicsCollisions } from '../logic/locomotor.js';

let initialized = false;

export function initGameSystems() {
  if (initialized) return;

  state.messageStream = new MessageStream();
  initSelectionIndicators();

  for (const unit of state.units.values()) {
    if (unit.isMobile()) {
      unit.ai = new AIUpdate(unit);
    }
  }

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
 * Mirrors the Generals frame pipeline order.
 */
export function updateGameSystems(dt) {
  if (!initialized) return;

  // 1. Selection translator frame update
  updateSelectionTranslatorFrame();

  // 2. Dispatch messages -> AI commands
  dispatchMessages();

  // 3. Pathfinder processes queued requests (budget-limited)
  if (state.pathfinder) {
    state.pathfinder.processPathfindQueue();
  }

  // 4. Physics collision detection + force application
  // Mirrors PhysicsUpdate: detects overlap, calls processCollision,
  // applies separation force, sets m_isBlocked / m_blockedFrames
  resolvePhysicsCollisions();

  // 5. AI update: doLocomotor reads blocked state, drives locomotor
  // Mirrors AIUpdateInterface::update -> doLocomotor
  for (const unit of state.units.values()) {
    if (unit.ai) {
      // Mirrors doLocomotor frame start: increment/reset blockedFrames
      if (unit.ai.isBlocked) {
        unit.ai.blockedFrames++;
      } else {
        unit.ai.blockedFrames = 0;
      }
      unit.ai.isBlocked = false;  // Reset per frame (set again by physics if still blocked)

      unit.ai.update(dt);
    }
  }

  // 6. Update selection indicators to follow units
  updateSelectionIndicators();
}

export function resetGameSystems() {
  initialized = false;
  state.messageStream = null;
  state.pathfinder = null;
  state.selectedUnits.length = 0;
  state.hotkeySquads.fill(null);
}
