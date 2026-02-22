// Mirrors GameLogicDispatch.cpp
// Each frame, consume messages from the stream and drive game logic.

import state from '../state.js';
import { GameMessageType } from './messageStream.js';
import { CommandSourceType } from '../logic/aiTypes.js';

export function dispatchMessages() {
  if (!state.messageStream) return;
  const messages = state.messageStream.consumeMessages();

  for (const msg of messages) {
    switch (msg.getType()) {
      case GameMessageType.MSG_DO_MOVETO:
        handleGroupMoveTo(msg, false);
        break;

      case GameMessageType.MSG_ADD_WAYPOINT:
        handleMoveTo(msg, true);
        break;

      case GameMessageType.MSG_DO_ATTACKMOVETO:
        handleGroupAttackMoveTo(msg);
        break;

      case GameMessageType.MSG_DO_STOP:
        handleStop();
        break;

      case GameMessageType.MSG_DO_ATTACK_OBJECT:
        handleAttackObject(msg);
        break;

      case GameMessageType.MSG_DO_GUARD_POSITION:
        handleGuardPosition(msg);
        break;

      case GameMessageType.MSG_DO_SCATTER:
        handleStop();
        break;
    }
  }
}

/**
 * Group move: mirrors AIGroup::groupMoveToPosition (AIGroup.cpp:1560-1640).
 *
 * In Generals:
 * 1. removeGoal for all units in the group
 * 2. Sort units nearest-to-destination first
 * 3. For each unit: computeIndividualDestination -> adjustDestination -> updateGoal
 * 4. Issue aiMoveToPosition with the adjusted destination
 *
 * This ensures each unit gets a unique destination cell, preventing overlap.
 */
function handleGroupMoveTo(msg, addWaypoint) {
  const loc = msg.getArgument(0);
  if (!loc) return;
  const groupDest = loc.location;

  const mobileUnits = state.selectedUnits.filter(u => u.ai && u.isMobile());
  if (mobileUnits.length === 0) return;

  // Single unit: no spreading needed
  if (mobileUnits.length === 1) {
    const unit = mobileUnits[0];
    if (addWaypoint) {
      unit.ai.queueWaypoint(groupDest);
    } else {
      unit.ai.aiMoveToPosition(groupDest, CommandSourceType.CMD_FROM_PLAYER);
    }
    return;
  }

  // Step 1: Clear old goals for all units (mirrors removeGoal loop at line 1567)
  if (state.pathfinder && state.pathfinder.grid) {
    for (const unit of mobileUnits) {
      state.pathfinder.grid.clearUnitGoal(unit.id);
    }
  }

  // Step 2: Sort units nearest to destination first (mirrors ITER_SORTED_NEAR_TO_FAR)
  mobileUnits.sort((a, b) => {
    const dA = distSq(a.position, groupDest);
    const dB = distSq(b.position, groupDest);
    return dA - dB;
  });

  // Step 3: For each unit, compute individual destination with spreading
  for (const unit of mobileUnits) {
    const dest = computeIndividualDestination(unit, groupDest, mobileUnits);

    // Claim this cell as a goal (mirrors updateGoal)
    if (state.pathfinder && state.pathfinder.grid) {
      state.pathfinder.grid.updateUnitGoal(unit.id, dest.x, dest.z);
    }

    // Step 4: Issue move order with adjusted destination
    if (addWaypoint) {
      unit.ai.queueWaypoint(dest);
    } else {
      unit.ai.aiMoveToPosition(dest, CommandSourceType.CMD_FROM_PLAYER);
    }
  }
}

/**
 * Compute an individual destination for a unit within a group.
 * Mirrors AIGroup::computeIndividualDestination + Pathfinder::adjustDestination.
 *
 * 1. Offset from group center to unit's current position (preserves relative spacing)
 * 2. Clamp offset length
 * 3. adjustDestination: spiral outward to find an unclaimed, passable cell
 */
function computeIndividualDestination(unit, groupDest, allUnits) {
  // Compute group center
  let cx = 0, cz = 0;
  for (const u of allUnits) {
    cx += u.position.x;
    cz += u.position.z;
  }
  cx /= allUnits.length;
  cz /= allUnits.length;

  // Offset from group center to this unit (preserves relative formation)
  let offX = unit.position.x - cx;
  let offZ = unit.position.z - cz;

  // Clamp offset magnitude (don't spread too far)
  const maxOffset = 50;
  const offLen = Math.sqrt(offX * offX + offZ * offZ);
  if (offLen > maxOffset) {
    offX = (offX / offLen) * maxOffset;
    offZ = (offZ / offLen) * maxOffset;
  }

  const initialDest = {
    x: groupDest.x + offX,
    y: groupDest.y || 0,
    z: groupDest.z + offZ,
  };

  // adjustDestination: find a valid, unclaimed cell near the initial dest
  return adjustDestination(unit, initialDest, groupDest);
}

/**
 * Mirrors Pathfinder::adjustDestination (AIPathfind.cpp:4863-4938).
 * Spirals outward from the desired destination to find a passable, unclaimed cell.
 * "Unclaimed" = no other allied unit has this cell as their goal.
 */
function adjustDestination(unit, dest, groupDest) {
  const grid = state.pathfinder ? state.pathfinder.grid : null;
  if (!grid) return dest;

  const collisionRadius = unit.ai ? unit.ai.locomotor.collisionRadius : 5;
  const { radius: pathRadius, centerInCell } = grid.getRadiusAndCenter(collisionRadius);

  const startCell = grid.worldToCell(dest.x, dest.z);

  // Try the initial cell first
  if (checkDestination(grid, startCell.x, startCell.y, unit.id, pathRadius, centerInCell)) {
    return dest;
  }

  // Spiral outward (mirrors the delta/count spiral in adjustDestination)
  const MAX_CELLS_TO_TRY = 400;
  let cellsTried = 0;
  let cx = startCell.x, cy = startCell.y;

  for (let delta = 1; cellsTried < MAX_CELLS_TO_TRY; delta++) {
    // Right
    for (let step = 0; step < delta && cellsTried < MAX_CELLS_TO_TRY; step++) {
      cx++;
      cellsTried++;
      if (checkDestination(grid, cx, cy, unit.id, pathRadius, centerInCell)) {
        const world = grid.cellToWorld(cx, cy);
        return { x: world.x, y: dest.y, z: world.z };
      }
    }
    // Up
    for (let step = 0; step < delta && cellsTried < MAX_CELLS_TO_TRY; step++) {
      cy--;
      cellsTried++;
      if (checkDestination(grid, cx, cy, unit.id, pathRadius, centerInCell)) {
        const world = grid.cellToWorld(cx, cy);
        return { x: world.x, y: dest.y, z: world.z };
      }
    }
    delta++;
    // Left
    for (let step = 0; step < delta && cellsTried < MAX_CELLS_TO_TRY; step++) {
      cx--;
      cellsTried++;
      if (checkDestination(grid, cx, cy, unit.id, pathRadius, centerInCell)) {
        const world = grid.cellToWorld(cx, cy);
        return { x: world.x, y: dest.y, z: world.z };
      }
    }
    // Down
    for (let step = 0; step < delta && cellsTried < MAX_CELLS_TO_TRY; step++) {
      cy++;
      cellsTried++;
      if (checkDestination(grid, cx, cy, unit.id, pathRadius, centerInCell)) {
        const world = grid.cellToWorld(cx, cy);
        return { x: world.x, y: dest.y, z: world.z };
      }
    }
  }

  // Fallback: return the original dest
  return dest;
}

/**
 * Mirrors Pathfinder::checkDestination (AIPathfind.cpp:4437-4498).
 * A cell is valid if:
 * 1. It's passable (not obstacle, cliff, etc.)
 * 2. No allied unit has it as their goal (not claimed)
 */
function checkDestination(grid, cellX, cellY, unitId, pathRadius, centerInCell) {
  if (cellX < 0 || cellX >= grid.width || cellY < 0 || cellY >= grid.height) return false;

  // Check passability for the unit's radius block
  if (!grid.checkMovementBlock(cellX, cellY, unitId, pathRadius, centerInCell)) return false;

  // Check that no other unit has this cell as a goal (mirrors checkDestination goalUnit check)
  const idx = cellY * grid.width + cellX;
  const goalUnit = grid.unitGoal[idx];
  if (goalUnit !== 0 && goalUnit !== unitId) {
    return false;  // Cell already claimed by an ally
  }

  return true;
}

// Waypoint handling: simpler, no spreading (individual)
function handleMoveTo(msg, addWaypoint) {
  const loc = msg.getArgument(0);
  if (!loc) return;
  const dest = loc.location;

  for (const unit of state.selectedUnits) {
    if (!unit.ai || !unit.isMobile()) continue;
    if (addWaypoint) {
      unit.ai.queueWaypoint(dest);
    } else {
      unit.ai.aiMoveToPosition(dest, CommandSourceType.CMD_FROM_PLAYER);
    }
  }
}

function handleGroupAttackMoveTo(msg) {
  const loc = msg.getArgument(0);
  if (!loc) return;
  const groupDest = loc.location;

  const mobileUnits = state.selectedUnits.filter(u => u.ai && u.isMobile());
  if (mobileUnits.length <= 1) {
    for (const unit of mobileUnits) {
      unit.ai.aiAttackMoveToPosition(groupDest, CommandSourceType.CMD_FROM_PLAYER);
    }
    return;
  }

  // Same spreading logic as handleGroupMoveTo
  if (state.pathfinder && state.pathfinder.grid) {
    for (const unit of mobileUnits) {
      state.pathfinder.grid.clearUnitGoal(unit.id);
    }
  }

  mobileUnits.sort((a, b) => distSq(a.position, groupDest) - distSq(b.position, groupDest));

  for (const unit of mobileUnits) {
    const dest = computeIndividualDestination(unit, groupDest, mobileUnits);

    if (state.pathfinder && state.pathfinder.grid) {
      state.pathfinder.grid.updateUnitGoal(unit.id, dest.x, dest.z);
    }

    unit.ai.aiAttackMoveToPosition(dest, CommandSourceType.CMD_FROM_PLAYER);
  }
}

function handleStop() {
  for (const unit of state.selectedUnits) {
    if (!unit.ai) continue;
    unit.ai.aiIdle(CommandSourceType.CMD_FROM_PLAYER);
  }
}

function handleAttackObject(msg) {
  const arg = msg.getArgument(0);
  if (!arg) return;
  const targetId = arg.objectId;

  const target = state.units.get(targetId);
  if (!target) return;

  for (const unit of state.selectedUnits) {
    if (!unit.ai || !unit.isMobile()) continue;
    unit.ai.aiMoveToPosition(target.position, CommandSourceType.CMD_FROM_PLAYER);
  }
}

function handleGuardPosition(msg) {
  const loc = msg.getArgument(0);
  if (!loc) return;
  const dest = loc.location;

  for (const unit of state.selectedUnits) {
    if (!unit.ai) continue;
    unit.ai.aiGuardPosition(dest, CommandSourceType.CMD_FROM_PLAYER);
  }
}

function distSq(a, b) {
  const dx = a.x - b.x;
  const dz = a.z - b.z;
  return dx * dx + dz * dz;
}
