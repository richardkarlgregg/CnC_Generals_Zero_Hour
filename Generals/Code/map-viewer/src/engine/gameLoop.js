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

import * as THREE from 'three';
import state from '../state.js';
import { MessageStream } from './messageStream.js';
import { dispatchMessages } from './dispatch.js';
import { updateSelectionIndicators, initSelectionIndicators } from './selectionManager.js';
import { updateSelectionTranslatorFrame } from './selectionTranslator.js';
import { PathfindGrid, CellType } from '../logic/pathfindGrid.js';
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

    // Pass 1: terrain + INI-based obstacle classification
    grid.buildFromHeightmap(
      mapData.heightMap,
      mapData.waterAreas || [],
      mapData.objects || []
    );

    // Pass 2: mesh-based obstacle classification for units missed by INI pass.
    // Uses actual loaded Unit meshes to catch buildings without parsed KindOf/Geometry
    // (e.g. civilian structures, props). This mirrors how Generals always has
    // GeometryInfo from INI -- we fall back to the mesh bounding box instead.
    const meshObstacles = computeMeshObstacles(grid);
    if (meshObstacles.length > 0) {
      grid.classifyMeshFootprints(meshObstacles);
    }

    // Build zones now that ALL obstacles are marked
    grid.buildZones();

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
 * Compute mesh-based obstacles for non-mobile units whose grid cells
 * aren't already marked as obstacles by the INI pass.
 * Returns array of { x, z, radius } for each additional obstacle.
 */
function computeMeshObstacles(grid) {
  const result = [];
  const box = new THREE.Box3();

  for (const unit of state.units.values()) {
    if (unit.isMobile()) continue;
    if (!unit.mesh || !unit.mesh.visible) continue;

    // Skip if the unit's center cell is already an obstacle (caught by INI pass)
    const cell = grid.worldToCell(unit.position.x, unit.position.z);
    if (cell.x >= 0 && cell.x < grid.width && cell.y >= 0 && cell.y < grid.height) {
      if (grid.cells[cell.y * grid.width + cell.x] === CellType.CELL_OBSTACLE) {
        continue;
      }
    }

    // Compute bounding box from the loaded mesh
    box.setFromObject(unit.mesh);
    if (box.isEmpty()) continue;

    const sizeX = box.max.x - box.min.x;
    const sizeZ = box.max.z - box.min.z;
    const avgRadius = (sizeX + sizeZ) / 4;

    // Skip very small objects (props, small debris)
    if (avgRadius < 5) continue;

    result.push({ x: unit.position.x, z: unit.position.z, radius: avgRadius });
  }

  return result;
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
