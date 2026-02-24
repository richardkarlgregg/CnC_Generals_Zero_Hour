import * as THREE from 'three';
import {
  ANIM_CHANNEL_X,
  ANIM_CHANNEL_Y,
  ANIM_CHANNEL_Z,
  ANIM_CHANNEL_Q,
} from '../parsers/w3d.js';
import { loadW3DAnimationClip } from '../objects/loader.js';

const _tmpQuatA = new THREE.Quaternion();
const _tmpQuatB = new THREE.Quaternion();
const DEBUG_ANIM = true;
const _loggedAnimatorInfo = new Set();
const _loggedClipInfo = new Set();

function shouldDebugUnit(unit) {
  const n = unit?.name?.toLowerCase() || '';
  return n.includes('infantry') || n.includes('rebel') || n.includes('ranger');
}

function getOrCreateAnimator(unit) {
  if (!unit) return null;
  if (!unit._animator || unit._animator.meshUUID !== unit.mesh.uuid) {
    const bonesByPivot = new Map();
    unit.mesh.traverse(node => {
      if (node.isBone && Number.isInteger(node.userData?.pivotIndex)) {
        bonesByPivot.set(node.userData.pivotIndex, node);
      }
    });
    if (bonesByPivot.size === 0) {
      unit._animator = null;
      if (DEBUG_ANIM && shouldDebugUnit(unit)) {
        console.warn(`[ANIM] ${unit.name}: no bones found on mesh for animation runtime`);
      }
      return null;
    }
    unit._animator = {
      meshUUID: unit.mesh.uuid,
      bonesByPivot,
      clipKey: null,
      clip: null,
      frame: 0,
      initialized: false,
    };
  }
  return unit._animator;
}

function sampleChannelAtFrame(channel, frame) {
  const frame0 = Math.floor(frame);
  let frame1 = frame0 + 1;
  const ratio = frame - frame0;
  if (frame1 > channel.lastFrame) frame1 = channel.firstFrame;

  const vec0 = readChannelValue(channel, frame0);
  if (ratio === 0) return vec0;
  const vec1 = readChannelValue(channel, frame1);

  if (channel.flags === ANIM_CHANNEL_Q) {
    _tmpQuatA.set(vec0[0], vec0[1], vec0[2], vec0[3]);
    _tmpQuatB.set(vec1[0], vec1[1], vec1[2], vec1[3]);
    _tmpQuatA.slerp(_tmpQuatB, ratio);
    return [_tmpQuatA.x, _tmpQuatA.y, _tmpQuatA.z, _tmpQuatA.w];
  }

  const out = new Array(channel.vectorLen);
  for (let i = 0; i < channel.vectorLen; i++) {
    out[i] = vec0[i] + (vec1[i] - vec0[i]) * ratio;
  }
  return out;
}

function readChannelValue(channel, frame) {
  if (frame < channel.firstFrame || frame > channel.lastFrame) {
    return channel.flags === ANIM_CHANNEL_Q ? [0, 0, 0, 1] : [0];
  }
  const vframe = frame - channel.firstFrame;
  const start = vframe * channel.vectorLen;
  const out = new Array(channel.vectorLen);
  for (let i = 0; i < channel.vectorLen; i++) {
    out[i] = channel.data[start + i] ?? (channel.flags === ANIM_CHANNEL_Q && i === 3 ? 1 : 0);
  }
  return out;
}

function updateFrameCursor(animator, dt, clip, mode, randomStart) {
  const frameRate = clip.frameRate || 30;
  const frameCount = Math.max(1, clip.numFrames || 1);
  const maxFrame = Math.max(0, frameCount - 1);

  if (!animator.initialized) {
    animator.initialized = true;
    if (mode === 'ONCE_BACKWARDS' || mode === 'LOOP_BACKWARDS') {
      animator.frame = maxFrame;
    } else if (randomStart) {
      animator.frame = Math.random() * frameCount;
    } else {
      animator.frame = 0;
    }
    return;
  }

  if (mode === 'MANUAL') return;

  const deltaFrames = frameRate * dt;
  if (mode === 'ONCE_BACKWARDS' || mode === 'LOOP_BACKWARDS') {
    animator.frame -= deltaFrames;
  } else {
    animator.frame += deltaFrames;
  }

  if (mode === 'LOOP' || mode === 'LOOP_BACKWARDS') {
    while (animator.frame < 0) animator.frame += frameCount;
    while (animator.frame >= frameCount) animator.frame -= frameCount;
  } else {
    if (animator.frame < 0) animator.frame = 0;
    if (animator.frame > maxFrame) animator.frame = maxFrame;
  }
}

export function updateUnitAnimation(unit, dt) {
  const animator = getOrCreateAnimator(unit);
  if (!animator) return;

  if (DEBUG_ANIM && shouldDebugUnit(unit) && !_loggedAnimatorInfo.has(unit.id)) {
    _loggedAnimatorInfo.add(unit.id);
    console.log(`[ANIM] ${unit.name} animator ready: bones=${animator.bonesByPivot.size}, mesh=${unit.mesh.userData?.w3d || 'unknown'}`);
  }

  const clipKey = unit.currentAnimationName ? unit.currentAnimationName.toLowerCase() : null;
  if (!clipKey) return;

  if (animator.clipKey !== clipKey) {
    animator.clipKey = clipKey;
    animator.clip = loadW3DAnimationClip(clipKey);
    animator.initialized = false;
    if (DEBUG_ANIM && shouldDebugUnit(unit)) {
      console.log(`[ANIM] ${unit.name} clip switch -> ${clipKey} resolved=${!!animator.clip}`);
    }
  }
  if (!animator.clip) {
    if (DEBUG_ANIM && shouldDebugUnit(unit)) {
      console.warn(`[ANIM] ${unit.name} clip missing for token ${clipKey}`);
    }
    return;
  }

  if (DEBUG_ANIM && shouldDebugUnit(unit) && !_loggedClipInfo.has(`${unit.id}:${clipKey}`)) {
    _loggedClipInfo.add(`${unit.id}:${clipKey}`);
    console.log(`[ANIM] ${unit.name} clip details: frames=${animator.clip.numFrames} fps=${animator.clip.frameRate} channels=${animator.clip.channels?.length || 0}`);
  }

  const stateFlags = unit.currentDrawState?.flags || new Set();
  const randomStart = stateFlags.has('RANDOMSTART') || stateFlags.has('RANDOMIZE_START_FRAME');
  const mode = unit.currentAnimationMode || 'LOOP';
  updateFrameCursor(animator, dt, animator.clip, mode, randomStart);

  const translationByPivot = new Map();
  const quatByPivot = new Map();

  for (const channel of animator.clip.channels) {
    // Mirrors Generals HTreeClass::Anim_Update: skip pivot 0 (root handled by object transform).
    if (channel.pivot === 0) continue;
    const sampled = sampleChannelAtFrame(channel, animator.frame);
    const pivot = channel.pivot;
    if (channel.flags === ANIM_CHANNEL_X || channel.flags === ANIM_CHANNEL_Y || channel.flags === ANIM_CHANNEL_Z) {
      const v = translationByPivot.get(pivot) || [0, 0, 0];
      if (channel.flags === ANIM_CHANNEL_X) v[0] = sampled[0] || 0;
      if (channel.flags === ANIM_CHANNEL_Y) v[1] = sampled[0] || 0;
      if (channel.flags === ANIM_CHANNEL_Z) v[2] = sampled[0] || 0;
      translationByPivot.set(pivot, v);
    } else if (channel.flags === ANIM_CHANNEL_Q) {
      quatByPivot.set(pivot, sampled);
    }
  }

  for (const [pivot, bone] of animator.bonesByPivot) {
    if (pivot === 0) continue;
    const bindPos = bone.userData.bindPosition;
    const bindQuat = bone.userData.bindQuaternion;
    if (!bindPos || !bindQuat) continue;

    const trans = translationByPivot.get(pivot);
    if (trans) {
      bone.position.set(bindPos.x + trans[0], bindPos.y + trans[1], bindPos.z + trans[2]);
    } else {
      bone.position.copy(bindPos);
    }

    const quat = quatByPivot.get(pivot);
    if (quat) {
      _tmpQuatA.set(quat[0], quat[1], quat[2], quat[3]);
      bone.quaternion.copy(bindQuat).multiply(_tmpQuatA);
    } else {
      bone.quaternion.copy(bindQuat);
    }
  }

  if (DEBUG_ANIM && shouldDebugUnit(unit) && animator.frame < 1.0) {
    const movedPivots = quatByPivot.size + translationByPivot.size;
    console.log(`[ANIM] ${unit.name} frame=${animator.frame.toFixed(2)} movedPivots=${movedPivots}`);
  }

  applyCpuSkin(unit);
}

const _tmpMatA = new THREE.Matrix4();
const _tmpMatB = new THREE.Matrix4();
const _tmpMatC = new THREE.Matrix4();
const _tmpMat3 = new THREE.Matrix3();
const _tmpVec = new THREE.Vector3();
const _tmpNorm = new THREE.Vector3();

function applyCpuSkin(unit) {
  if (!unit?.mesh) return;
  unit.mesh.updateMatrixWorld(true);

  unit.mesh.traverse(node => {
    if (!node.isMesh) return;
    const skin = node.userData?.cpuSkin;
    if (!skin || !skin.posAttr) return;

    const meshWorldInv = _tmpMatA.copy(node.matrixWorld).invert();
    const pos = skin.posAttr;
    const norm = skin.normAttr;
    const links = skin.links;

    for (let i = 0; i < pos.count; i++) {
      const pivot = i < links.length ? links[i] : 0;
      const bone = skin.bonesByPivot.get(pivot);
      if (!bone) continue;

      // Westwood skin verts are effectively stored in per-bone local space
      // (single-bone links). Apply current bone transform directly into mesh space.
      _tmpMatC.multiplyMatrices(meshWorldInv, bone.matrixWorld);

      const bi = i * 3;
      _tmpVec.set(skin.bindPositions[bi], skin.bindPositions[bi + 1], skin.bindPositions[bi + 2]).applyMatrix4(_tmpMatC);
      pos.setXYZ(i, _tmpVec.x, _tmpVec.y, _tmpVec.z);

      if (norm && skin.bindNormals) {
        _tmpMat3.getNormalMatrix(_tmpMatC);
        _tmpNorm.set(skin.bindNormals[bi], skin.bindNormals[bi + 1], skin.bindNormals[bi + 2]).applyMatrix3(_tmpMat3).normalize();
        norm.setXYZ(i, _tmpNorm.x, _tmpNorm.y, _tmpNorm.z);
      }
    }

    pos.needsUpdate = true;
    if (norm) norm.needsUpdate = true;
    node.geometry.computeBoundingSphere();
  });
}
