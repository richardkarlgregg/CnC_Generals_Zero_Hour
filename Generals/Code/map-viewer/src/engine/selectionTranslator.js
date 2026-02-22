// Mirrors SelectionXlat.cpp -- translates mouse/keyboard into selection actions
import state from '../state.js';
import { GameMessageType } from './messageStream.js';
import { pickUnit, getUnitsInRegion, canSelectUnit } from './picking.js';
import { selectUnit, deselectUnit, deselectAllUnits, selectAcrossScreen } from './selectionManager.js';
import { DRAG_TOLERANCE } from '../constants.js';
import { camState } from './camera.js';

const NUM_HOTKEY_SQUADS = 10;
const DOUBLE_TAP_FRAMES = 20;

let lastGroupSelTime = 0;
let lastGroupSelGroup = -1;
let lastClickTime = 0;
let lastClickX = 0;
let lastClickY = 0;
const DOUBLE_CLICK_TIME = 400;
const DOUBLE_CLICK_DIST = 6;

let frameCounter = 0;

export function updateSelectionTranslatorFrame() {
  frameCounter++;
}

/**
 * Called when LMB is released. Determines if this was a click or drag-select.
 */
export function handleLeftMouseUp(screenX, screenY, shiftKey) {
  const wasDragging = camState.wasDragSelecting;
  const dragStartX = camState.dragStartX;
  const dragStartY = camState.dragStartY;

  if (wasDragging) {
    handleDragSelect(dragStartX, dragStartY, screenX, screenY, shiftKey);
  } else {
    handlePointClick(screenX, screenY, shiftKey);
  }
}

function handlePointClick(screenX, screenY, shiftKey) {
  const now = performance.now();
  const dx = Math.abs(screenX - lastClickX);
  const dy = Math.abs(screenY - lastClickY);
  const isDoubleClick = (now - lastClickTime < DOUBLE_CLICK_TIME) && dx < DOUBLE_CLICK_DIST && dy < DOUBLE_CLICK_DIST;

  lastClickTime = now;
  lastClickX = screenX;
  lastClickY = screenY;

  const picked = pickUnit(screenX, screenY);

  if (isDoubleClick && picked && canSelectUnit(picked, false)) {
    // Double-click: select all of same type on screen
    if (!shiftKey) deselectAllUnits();
    selectUnit(picked);
    selectAcrossScreen(picked);
    emitCreateSelectedGroup(true);
    return;
  }

  if (picked && canSelectUnit(picked, false)) {
    if (shiftKey) {
      // Shift-click: toggle selection
      if (picked.selected) {
        deselectUnit(picked);
      } else {
        selectUnit(picked);
      }
    } else {
      deselectAllUnits();
      selectUnit(picked);
    }
    emitCreateSelectedGroup(!shiftKey);
  } else if (!shiftKey) {
    // Clicked empty ground -- deselect all (but don't consume; let command translator handle)
    if (state.selectedUnits.length === 0) return;
    deselectAllUnits();
    emitDestroySelectedGroup();
  }
}

/**
 * Mirrors drag selection path in SelectionXlat -- iterateDrawablesInRegion + filter.
 */
function handleDragSelect(x1, y1, x2, y2, shiftKey) {
  const candidates = getUnitsInRegion(x1, y1, x2, y2);
  const selectable = candidates.filter(u => canSelectUnit(u, true));

  if (selectable.length === 0) return;

  if (!shiftKey) deselectAllUnits();

  for (const unit of selectable) {
    selectUnit(unit);
  }
  emitCreateSelectedGroup(!shiftKey);
}

/**
 * Control group handling -- mirrors SelectionXlat MSG_META_CREATE_TEAM / SELECT_TEAM / ADD_TEAM.
 */
export function handleControlGroup(groupIndex, ctrlKey, shiftKey) {
  if (groupIndex < 0 || groupIndex >= NUM_HOTKEY_SQUADS) return;

  if (ctrlKey && !shiftKey) {
    // Ctrl+N: assign current selection to squad
    state.hotkeySquads[groupIndex] = state.selectedUnits.slice();
    return;
  }

  if (ctrlKey && shiftKey) {
    // Ctrl+Shift+N: add current selection to existing squad
    const existing = state.hotkeySquads[groupIndex] || [];
    const merged = [...existing];
    for (const unit of state.selectedUnits) {
      if (!merged.includes(unit)) merged.push(unit);
    }
    state.hotkeySquads[groupIndex] = merged;
    return;
  }

  // Number key alone: recall squad
  const squad = state.hotkeySquads[groupIndex];
  if (!squad || squad.length === 0) return;

  // Double-tap detection: center camera on squad
  if (lastGroupSelGroup === groupIndex && (frameCounter - lastGroupSelTime) < DOUBLE_TAP_FRAMES) {
    const lastUnit = squad[squad.length - 1];
    if (lastUnit && lastUnit.mesh) {
      camState.target.set(lastUnit.position.x, lastUnit.position.y, lastUnit.position.z);
    }
    lastGroupSelGroup = -1;
    return;
  }

  lastGroupSelTime = frameCounter;
  lastGroupSelGroup = groupIndex;

  if (!shiftKey) deselectAllUnits();

  // Filter out dead/removed units
  const alive = squad.filter(u => state.units.has(u.id));
  state.hotkeySquads[groupIndex] = alive;

  for (const unit of alive) {
    selectUnit(unit);
  }
}

function emitCreateSelectedGroup(createNew) {
  if (!state.messageStream) return;
  const msg = state.messageStream.appendMessage(GameMessageType.MSG_CREATE_SELECTED_GROUP);
  msg.appendBoolArgument(createNew);
  for (const unit of state.selectedUnits) {
    msg.appendObjectIdArgument(unit.id);
  }
}

function emitDestroySelectedGroup() {
  if (!state.messageStream) return;
  state.messageStream.appendMessage(GameMessageType.MSG_DESTROY_SELECTED_GROUP)
    .appendBoolArgument(true);
}
