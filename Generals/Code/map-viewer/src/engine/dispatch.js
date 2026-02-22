// Mirrors GameLogicDispatch.cpp
// Each frame, consume messages from the stream and drive game logic.

import state from '../state.js';
import { GameMessageType } from './messageStream.js';
import { CommandSourceType } from '../logic/aiTypes.js';

/**
 * Process all pending messages. Mirrors the big switch in GameLogicDispatch.
 */
export function dispatchMessages() {
  if (!state.messageStream) return;
  const messages = state.messageStream.consumeMessages();

  for (const msg of messages) {
    switch (msg.getType()) {
      case GameMessageType.MSG_DO_MOVETO:
        handleMoveTo(msg, false);
        break;

      case GameMessageType.MSG_ADD_WAYPOINT:
        handleMoveTo(msg, true);
        break;

      case GameMessageType.MSG_DO_ATTACKMOVETO:
        handleAttackMoveTo(msg);
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

      // Selection messages are handled client-side by selectionTranslator
      // and don't need logic dispatch in single-player viewer
    }
  }
}

/**
 * MSG_DO_MOVETO / MSG_ADD_WAYPOINT
 * Mirrors GameLogicDispatch.cpp:776-805.
 */
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

function handleAttackMoveTo(msg) {
  const loc = msg.getArgument(0);
  if (!loc) return;
  const dest = loc.location;

  for (const unit of state.selectedUnits) {
    if (!unit.ai || !unit.isMobile()) continue;
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
    // For now, treat attack as move-to-target's position (no weapon system)
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
