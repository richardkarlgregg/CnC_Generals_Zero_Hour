import { objectDrawStatesMap, findBestStateForFlags } from '../parsers/ini.js';
import { loadW3DModel } from '../objects/loader.js';
import { findW3DByModelName } from '../objects/index.js';
import { isUnitAnimationComplete } from './animationRuntime.js';

export const MODELCONDITION_MOVING = 'MOVING';

function isAnimDebugEnabled() {
  return globalThis.__w3dAnimDebug !== false;
}

function debug(unit, message) {
  if (!isAnimDebugEnabled() || !unit) return;
  console.log(`[W3D ANIM][${unit.id}:${unit.name}] ${message}`);
}

function getPrimaryAnimationName(state) {
  if (!state || !state.animations || state.animations.length === 0) return null;
  return state.animations[0].name;
}

function getStateTag(state) {
  if (!state) return 'NONE';
  if (state.type === 'TRANSITION') {
    return `TRANSITION(${state.transitionFromKey || '?'}->${state.transitionToKey || '?'})`;
  }
  const cond = [...(state.conditions || [])].join(' ');
  return `${state.type || 'CONDITION'}[${cond || 'NONE'}]`;
}

function resolveTransitionState(unit, fromState, toState) {
  if (!unit?.drawTransitions || !fromState || !toState) return null;
  const fromKey = fromState.transitionKey || null;
  const toKey = toState.transitionKey || null;
  if (!fromKey || !toKey) return null;
  return unit.drawTransitions.get(`${fromKey}->${toKey}`) || null;
}

export function initUnitDrawState(unit) {
  if (!unit) return;
  const drawData = objectDrawStatesMap.get(unit.name.toLowerCase());
  if (!drawData || !drawData.states || drawData.states.length === 0) return;

  unit.modelConditionFlags = new Set();
  unit.drawStates = drawData.states;
  unit.drawTransitions = drawData.transitions || new Map();
  unit.drawIgnoreFlags = drawData.ignoreConditionStates || new Set();
  unit.currentDrawState = null;
  unit.pendingDrawState = null;
  unit.currentAnimationName = null;
  unit.currentAnimationMode = null;
  unit.currentAnimationFlags = new Set();

  debug(
    unit,
    `init states=${unit.drawStates.length}, transitions=${unit.drawTransitions.size}, ignore=[${[...unit.drawIgnoreFlags].join(' ')}]`
  );
  applyDrawState(unit, true);
}

export function updateUnitDrawState(unit) {
  if (!unit || !unit.drawStates || !unit.modelConditionFlags) return;

  // Mirrors AIStates.cpp behavior: clear MOVING if blocked for too long.
  const blockedTooLong = !!(unit.ai && unit.ai.blockedFrames > 7);
  const moving = !!(unit.ai && unit.ai.locomotor && !unit.ai.locomotor.stopped && !blockedTooLong);
  if (moving) unit.modelConditionFlags.add(MODELCONDITION_MOVING);
  else unit.modelConditionFlags.delete(MODELCONDITION_MOVING);

  if (unit.currentDrawState?.type === 'TRANSITION' && unit.pendingDrawState && isUnitAnimationComplete(unit)) {
    debug(unit, `transition complete -> ${getStateTag(unit.pendingDrawState)}`);
    const pending = unit.pendingDrawState;
    unit.pendingDrawState = null;
    setResolvedState(unit, pending, 'transition-finished');
    return;
  }

  applyDrawState(unit, false);
}

function applyDrawState(unit, force) {
  const targetState = findBestStateForFlags(unit.drawStates, unit.modelConditionFlags, unit.drawIgnoreFlags);
  if (!targetState) return;
  if (!force && unit.currentDrawState === targetState && !unit.pendingDrawState) return;

  if (
    !force &&
    unit.currentDrawState &&
    unit.currentDrawState !== targetState &&
    targetState.allowToFinishKey &&
    unit.currentDrawState.transitionKey &&
    targetState.allowToFinishKey === unit.currentDrawState.transitionKey &&
    !isUnitAnimationComplete(unit)
  ) {
    unit.pendingDrawState = targetState;
    debug(unit, `allow-to-finish queued ${getStateTag(targetState)} until current anim completes`);
    return;
  }

  const transitionState = resolveTransitionState(unit, unit.currentDrawState, targetState);
  if (transitionState && !force) {
    unit.pendingDrawState = targetState;
    setResolvedState(unit, transitionState, `transition ${getStateTag(unit.currentDrawState)} -> ${getStateTag(targetState)}`);
    return;
  }

  unit.pendingDrawState = null;
  setResolvedState(unit, targetState, force ? 'initial' : 'state-change');
}

function setResolvedState(unit, state, reason) {
  unit.currentDrawState = state;
  unit.currentAnimationName = getPrimaryAnimationName(state);
  unit.currentAnimationMode = state.animationMode || 'LOOP';
  unit.currentAnimationFlags = state.flags || new Set();

  debug(
    unit,
    `${reason}: state=${getStateTag(state)} anim=${unit.currentAnimationName || 'none'} mode=${unit.currentAnimationMode}`
  );

  if (state.model) {
    const nextW3DPath = findW3DByModelName(state.model);
    debug(unit, `model resolve "${state.model}" -> ${nextW3DPath || 'NOT FOUND'}`);
    if (nextW3DPath && unit.mesh?.userData?.w3d !== nextW3DPath) {
      const template = loadW3DModel(nextW3DPath);
      if (template) {
        swapUnitModel(unit, template, nextW3DPath, state.model);
        debug(unit, `model swapped to ${nextW3DPath}`);
      } else {
        console.warn(`[W3D ANIM][${unit.id}:${unit.name}] failed to load model ${nextW3DPath}`);
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
  unit._animator = null;
  unit.syncPositionFromMesh();
}
