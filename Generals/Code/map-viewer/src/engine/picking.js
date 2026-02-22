// Mirrors W3DView::pickDrawable and iterateDrawablesInRegion
import * as THREE from 'three';
import state from '../state.js';

const raycaster = new THREE.Raycaster();
const tmpVec2 = new THREE.Vector2();
const tmpVec3 = new THREE.Vector3();

/**
 * Pick a single unit at a screen position via raycasting.
 * Mirrors W3DView::pickDrawable -- builds a ray from camera through screen point.
 */
export function pickUnit(screenX, screenY) {
  const { camera, objectMarkers } = state;
  if (!camera || !objectMarkers) return null;

  tmpVec2.set(
    (screenX / window.innerWidth) * 2 - 1,
    -(screenY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(tmpVec2, camera);

  const meshes = [];
  objectMarkers.children.forEach(child => {
    child.traverse(node => {
      if (node.isMesh) meshes.push(node);
    });
  });

  const intersects = raycaster.intersectObjects(meshes, false);
  for (const hit of intersects) {
    const unit = findUnitForObject(hit.object);
    if (unit) return unit;
  }
  return null;
}

/**
 * Pick a terrain world position at screen coordinates via raycasting.
 */
export function pickTerrain(screenX, screenY) {
  const { camera, terrainMesh } = state;
  if (!camera || !terrainMesh) return null;

  tmpVec2.set(
    (screenX / window.innerWidth) * 2 - 1,
    -(screenY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(tmpVec2, camera);

  const intersects = raycaster.intersectObject(terrainMesh, false);
  if (intersects.length > 0) {
    const p = intersects[0].point;
    return { x: p.x, y: p.y, z: p.z };
  }
  return null;
}

/**
 * Get all units whose screen-projected center falls inside a pixel region.
 * Mirrors W3DView::iterateDrawablesInRegion.
 */
export function getUnitsInRegion(x1, y1, x2, y2) {
  const { camera } = state;
  if (!camera) return [];

  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const maxX = Math.max(x1, x2);
  const maxY = Math.max(y1, y2);
  const cw = window.innerWidth;
  const ch = window.innerHeight;

  const result = [];
  for (const unit of state.units.values()) {
    if (!unit.mesh.visible) continue;
    tmpVec3.set(unit.position.x, unit.position.y, unit.position.z);
    tmpVec3.project(camera);
    if (tmpVec3.z < 0 || tmpVec3.z > 1) continue;

    const sx = (tmpVec3.x * 0.5 + 0.5) * cw;
    const sy = (-tmpVec3.y * 0.5 + 0.5) * ch;

    if (sx >= minX && sx <= maxX && sy >= minY && sy <= maxY) {
      result.push(unit);
    }
  }
  return result;
}

/**
 * Mirrors CanSelectDrawable from SelectionXlat.cpp.
 * Filters out non-selectable units; drag selection is more restrictive.
 */
export function canSelectUnit(unit, isDragSelecting) {
  if (!unit) return false;
  if (!unit.isSelectable()) return false;
  if (!unit.mesh.visible) return false;

  if (isDragSelecting) {
    if (unit.isStructure()) return false;
    if (!unit.isLocallyControlled()) return false;
  }
  return true;
}

function findUnitForObject(obj) {
  let current = obj;
  while (current) {
    if (current.userData && current.userData.unit) {
      return current.userData.unit;
    }
    current = current.parent;
  }
  return null;
}
