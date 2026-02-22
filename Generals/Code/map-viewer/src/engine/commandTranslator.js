// Mirrors CommandXlat.cpp + ControlBarCallback.cpp
// Translates right-click and hotkeys into order messages.

import state from '../state.js';
import { GameMessageType } from './messageStream.js';
import { pickUnit, pickTerrain } from './picking.js';

let attackMoveMode = false;

export function isAttackMoveMode() {
  return attackMoveMode;
}

export function setAttackMoveMode(val) {
  attackMoveMode = val;
}

/**
 * Called on right-click release (not drag). Issues orders to selected units.
 * Mirrors ControlBarCallback tactical right-click handling.
 */
export function handleRightClick(screenX, screenY, shiftKey) {
  if (state.selectedUnits.length === 0) return;

  // Try picking a unit first (for attack orders)
  const targetUnit = pickUnit(screenX, screenY);
  if (targetUnit && !targetUnit.selected && targetUnit.isSelectable()) {
    // Right-click on a non-selected unit: attack order
    const msg = state.messageStream.appendMessage(GameMessageType.MSG_DO_ATTACK_OBJECT);
    msg.appendObjectIdArgument(targetUnit.id);
    return;
  }

  // Pick terrain for move/attack-move
  const worldPos = pickTerrain(screenX, screenY);
  if (!worldPos) return;

  if (shiftKey) {
    // Shift+right-click: add waypoint
    const msg = state.messageStream.appendMessage(GameMessageType.MSG_ADD_WAYPOINT);
    msg.appendLocationArgument(worldPos);
  } else if (attackMoveMode) {
    const msg = state.messageStream.appendMessage(GameMessageType.MSG_DO_ATTACKMOVETO);
    msg.appendLocationArgument(worldPos);
    attackMoveMode = false;
  } else {
    const msg = state.messageStream.appendMessage(GameMessageType.MSG_DO_MOVETO);
    msg.appendLocationArgument(worldPos);
  }
}

/**
 * Handle keyboard hotkeys for orders.
 */
export function handleOrderHotkey(code) {
  if (state.selectedUnits.length === 0) return false;

  switch (code) {
    case 'KeyS':
      state.messageStream.appendMessage(GameMessageType.MSG_DO_STOP);
      return true;
    case 'KeyA':
      attackMoveMode = !attackMoveMode;
      return true;
    case 'KeyG':
      // Guard at current position (simplified)
      return true;
    case 'KeyX':
      state.messageStream.appendMessage(GameMessageType.MSG_DO_SCATTER);
      return true;
  }
  return false;
}
