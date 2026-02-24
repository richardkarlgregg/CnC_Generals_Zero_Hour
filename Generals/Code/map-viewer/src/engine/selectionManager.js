// Mirrors InGameUI selection API: selectDrawable, deselectDrawable, deselectAllDrawables, selectAcrossScreen
import * as THREE from 'three';
import state from '../state.js';

const INDICATOR_COLOR = 0x33ff33;
const INDICATOR_RADIUS = 8;
const INDICATOR_SEGMENTS = 32;

let indicatorGeometry = null;
let indicatorMaterial = null;
let indicatorGroup = null;

function ensureIndicatorResources() {
  if (!indicatorGeometry) {
    indicatorGeometry = new THREE.RingGeometry(INDICATOR_RADIUS * 0.7, INDICATOR_RADIUS, INDICATOR_SEGMENTS);
    indicatorGeometry.rotateX(-Math.PI / 2);
  }
  if (!indicatorMaterial) {
    indicatorMaterial = new THREE.MeshBasicMaterial({
      color: INDICATOR_COLOR,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
      depthTest: true,
      depthWrite: false,
    });
  }
  if (!indicatorGroup) {
    indicatorGroup = new THREE.Group();
    indicatorGroup.name = 'selectionIndicators';
    if (state.scene) state.scene.add(indicatorGroup);
  }
}

/**
 * Mirrors InGameUI::selectDrawable.
 * Adds unit to selection if not already selected. Attaches visual indicator.
 */
export function selectUnit(unit) {
  if (!unit || unit.selected) return;
  ensureIndicatorResources();

  unit.selected = true;
  state.selectedUnits.push(unit);

  const ring = new THREE.Mesh(indicatorGeometry, indicatorMaterial);
  ring.position.set(unit.position.x, unit.position.y + 0.3, unit.position.z);
  ring.renderOrder = 1000;
  ring.userData.unitId = unit.id;
  indicatorGroup.add(ring);
  unit.selectionIndicator = ring;
}

/**
 * Mirrors InGameUI::deselectDrawable.
 */
export function deselectUnit(unit) {
  if (!unit || !unit.selected) return;

  unit.selected = false;
  const idx = state.selectedUnits.indexOf(unit);
  if (idx !== -1) state.selectedUnits.splice(idx, 1);

  if (unit.selectionIndicator && indicatorGroup) {
    indicatorGroup.remove(unit.selectionIndicator);
    unit.selectionIndicator = null;
  }
}

/**
 * Mirrors InGameUI::deselectAllDrawables.
 */
export function deselectAllUnits() {
  for (const unit of state.selectedUnits) {
    unit.selected = false;
    if (unit.selectionIndicator && indicatorGroup) {
      indicatorGroup.remove(unit.selectionIndicator);
      unit.selectionIndicator = null;
    }
  }
  state.selectedUnits.length = 0;
}

/**
 * Mirrors InGameUI::selectAcrossScreen.
 * Double-click selects all visible units of the same type on screen.
 */
export function selectAcrossScreen(templateUnit) {
  const { camera } = state;
  if (!camera || !templateUnit) return;

  const templateName = templateUnit.name.toLowerCase();
  const tmpVec = new THREE.Vector3();
  const cw = window.innerWidth;
  const ch = window.innerHeight;

  for (const unit of state.units.values()) {
    if (unit.selected) continue;
    if (!unit.isSelectable()) continue;
    if (!unit.isLocallyControlled()) continue;
    if (unit.name.toLowerCase() !== templateName) continue;

    // Check if on screen
    tmpVec.set(unit.position.x, unit.position.y, unit.position.z);
    tmpVec.project(camera);
    if (tmpVec.z < 0 || tmpVec.z > 1) continue;
    const sx = (tmpVec.x * 0.5 + 0.5) * cw;
    const sy = (-tmpVec.y * 0.5 + 0.5) * ch;
    if (sx < 0 || sx > cw || sy < 0 || sy > ch) continue;

    selectUnit(unit);
  }
}

/**
 * Update selection indicator positions to follow their units.
 */
export function updateSelectionIndicators() {
  for (const unit of state.selectedUnits) {
    if (unit.selectionIndicator) {
      unit.selectionIndicator.position.set(
        unit.position.x,
        unit.position.y + 0.3,
        unit.position.z
      );
    }
  }
}

/**
 * Initialize the indicator group into the scene. Call once after scene is created.
 */
export function initSelectionIndicators() {
  ensureIndicatorResources();
  if (indicatorGroup && state.scene && !indicatorGroup.parent) {
    state.scene.add(indicatorGroup);
  }
}

/**
 * Clean up all indicators (e.g. on map reload).
 */
export function disposeSelectionIndicators() {
  deselectAllUnits();
  if (indicatorGroup) {
    while (indicatorGroup.children.length > 0) {
      indicatorGroup.remove(indicatorGroup.children[0]);
    }
  }
}
