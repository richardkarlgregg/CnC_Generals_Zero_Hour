import { objectDrawStatesMap, findBestStateForFlags } from '../parsers/ini.js';
import { loadW3DModel } from '../objects/loader.js';
import { findW3DByModelName } from '../objects/index.js';

export const MODELCONDITION_MOVING = 'MOVING';
const DEBUG_ANIM = true;

function shouldDebug(unit) {
  const n = unit?.name?.toLowerCase() || '';
  return n.includes('infantry') || n.includes('rebel') || n.includes('ranger');
}

export function initUnitDrawState(unit) {
  if (!unit) return;
  const drawData = objectDrawStatesMap.get(unit.name.toLowerCase());
  if (!drawData || !drawData.states || drawData.states.length === 0) return;

  unit.modelConditionFlags = new Set();
  unit.drawStates = drawData.states;
  unit.currentDrawState = null;
  unit.currentAnimationName = null;
  unit.currentAnimationMode = null;

  if (DEBUG_ANIM && shouldDebug(unit)) {
    console.log(`[ANIM] init draw state for ${unit.name}: ${drawData.states.length} states`);
  }
  applyDrawState(unit);
}

export function updateUnitDrawState(unit) {
  if (!unit || !unit.drawStates || !unit.modelConditionFlags) return;

  // Mirrors AIStates.cpp: when blocked for > ~1/4 second, clear MOVING.
  const blockedTooLong = !!(unit.ai && unit.ai.blockedFrames > 7);
  if (unit.ai && unit.ai.locomotor && !unit.ai.locomotor.stopped && !blockedTooLong) {
    unit.modelConditionFlags.add(MODELCONDITION_MOVING);
  } else {
    unit.modelConditionFlags.delete(MODELCONDITION_MOVING);
  }

  applyDrawState(unit);
}

function applyDrawState(unit) {
  const nextState = findBestStateForFlags(unit.drawStates, unit.modelConditionFlags);
  if (!nextState) return;
  if (unit.currentDrawState === nextState) return;

  unit.currentDrawState = nextState;
  unit.currentAnimationName = nextState.animation || nextState.idleAnimation || null;
  unit.currentAnimationMode = nextState.animationMode || null;
  if (DEBUG_ANIM && shouldDebug(unit)) {
    console.log(
      `[ANIM] ${unit.name} state -> ${nextState.type} conditions=[${[...nextState.conditions].join(' ')}]` +
      ` model=${nextState.model || 'same'} anim=${unit.currentAnimationName || 'none'} mode=${unit.currentAnimationMode || 'default'}`
    );
  }

  // Keep model state changes aligned with Generals condition-state matching.
  // (Animation clip playback from W3D animation chunks is a separate layer.)
  if (nextState.model) {
    const nextW3DPath = findW3DByModelName(nextState.model);
    if (DEBUG_ANIM && shouldDebug(unit)) {
      console.log(`[ANIM] ${unit.name} model lookup "${nextState.model}" -> ${nextW3DPath || 'NOT FOUND'}`);
    }
    if (nextW3DPath && unit.mesh?.userData?.w3d !== nextW3DPath) {
      const template = loadW3DModel(nextW3DPath);
      if (template) {
        swapUnitModel(unit, template, nextW3DPath, nextState.model);
      } else if (DEBUG_ANIM && shouldDebug(unit)) {
        console.warn(`[ANIM] ${unit.name} failed loading model ${nextW3DPath}`);
      }
    }
  }
}

function swapUnitModel(unit, template, w3dPath, modelName) {
  const oldMesh = unit.mesh;
  const newMesh = template.clone();

  newMesh.position.copy(oldMesh.position);
  newMesh.rotation.copy(oldMesh.rotation);
  newMesh.scale.copy(oldMesh.scale);
  newMesh.visible = oldMesh.visible;
  newMesh.userData = { ...(oldMesh.userData || {}) };
  newMesh.userData.w3d = w3dPath;
  newMesh.userData.modelName = modelName;

  newMesh.traverse(node => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
    node.userData = node.userData || {};
    node.userData.unit = unit;
    node.userData.unitId = unit.id;
  });

  const parent = oldMesh.parent;
  if (parent) {
    parent.add(newMesh);
    parent.remove(oldMesh);
  }

  unit.mesh = newMesh;
  unit.mesh.userData.unit = unit;
  unit.mesh.userData.unitId = unit.id;
  unit.syncPositionFromMesh();
}
