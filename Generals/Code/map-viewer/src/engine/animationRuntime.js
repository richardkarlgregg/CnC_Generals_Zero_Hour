import * as THREE from 'three';
import { loadW3DAnimationClip } from '../objects/loader.js';

const _tmpQuatA = new THREE.Quaternion();
const _tmpQuatB = new THREE.Quaternion();
const _loggedAnimatorInfo = new Set();
const _loggedClipInfo = new Set();
const _loggedRebelSkinInfo = new Set();

function isAnimDebugEnabled() {
  return globalThis.__w3dAnimDebug !== false;
}

function debug(unit, message) {
  if (!isAnimDebugEnabled() || !unit) return;
  console.log(`[W3D ANIM][${unit.id}:${unit.name}] ${message}`);
}

function isRebelTraceUnit(unit) {
  if (!unit?.name) return false;
  return unit.name.toLowerCase() === 'glainfantryrebel';
}

function isRebelTraceEnabled() {
  return globalThis.__w3dRebelTrace !== false;
}

function getOrCreateAnimator(unit) {
  if (!unit) return null;
  if (!unit._animator || unit._animator.meshUUID !== unit.mesh.uuid) {
    const bonesByPivot = new Map();
    unit.mesh.traverse(node => {
      if (Number.isInteger(node.userData?.pivotIndex)) {
        bonesByPivot.set(node.userData.pivotIndex, node);
      }
    });
    if (bonesByPivot.size === 0) {
      unit._animator = null;
      return null;
    }
    unit._animator = {
      meshUUID: unit.mesh.uuid,
      bonesByPivot,
      clipKey: null,
      clip: null,
      frame: 0,
      initialized: false,
      completed: false,
    };
  }
  return unit._animator;
}

function hasCpuSkinMeshes(unit) {
  if (!unit?.mesh) return false;
  let found = false;
  unit.mesh.traverse(node => {
    if (found) return;
    if (node?.isMesh && node.userData?.cpuSkin) found = true;
  });
  return found;
}

function sampleChannelAtFrame(channel, frame) {
  const frame0 = Math.floor(frame);
  let frame1 = frame0 + 1;
  const ratio = frame - frame0;
  if (frame1 > channel.lastFrame) frame1 = channel.firstFrame;

  const vec0 = readChannelValue(channel, frame0);
  if (ratio === 0) return vec0;
  const vec1 = readChannelValue(channel, frame1);

  if (channel.kind === 'q') {
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
    return channel.kind === 'q' ? [0, 0, 0, 1] : [0];
  }
  const vframe = frame - channel.firstFrame;
  const start = vframe * channel.vectorLen;
  const out = new Array(channel.vectorLen);
  for (let i = 0; i < channel.vectorLen; i++) {
    out[i] = channel.data[start + i] ?? (channel.kind === 'q' && i === 3 ? 1 : 0);
  }
  return out;
}

function updateFrameCursor(animator, dt, clip, mode, randomStart) {
  const frameRate = clip.frameRate || 30;
  const frameCount = Math.max(1, clip.numFrames || 1);
  const maxFrame = Math.max(0, frameCount - 1);

  if (!animator.initialized) {
    animator.initialized = true;
    animator.completed = false;
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
    animator.completed = false;
    while (animator.frame < 0) animator.frame += frameCount;
    while (animator.frame >= frameCount) animator.frame -= frameCount;
  } else {
    if (animator.frame < 0) {
      animator.frame = 0;
      animator.completed = true;
    }
    if (animator.frame > maxFrame) {
      animator.frame = maxFrame;
      animator.completed = true;
    }
  }
}

function applyBindPoseToAnimator(animator) {
  if (!animator || !animator.bonesByPivot) return;
  for (const [pivot, bone] of animator.bonesByPivot) {
    if (pivot === 0) continue;
    if (!bone.userData.bindPosition) {
      bone.userData.bindPosition = bone.position.clone();
    }
    if (!bone.userData.bindQuaternion) {
      bone.userData.bindQuaternion = bone.quaternion.clone();
    }
    bone.position.copy(bone.userData.bindPosition);
    bone.quaternion.copy(bone.userData.bindQuaternion);
  }
}

export function updateUnitAnimation(unit, dt) {
  const isTrackedRebel = isRebelTraceEnabled() && isRebelTraceUnit(unit);

  // Skip non-skinned objects entirely (props/most map decorations).
  const hasSkin = hasCpuSkinMeshes(unit);
  if (isTrackedRebel && !_loggedRebelSkinInfo.has(unit.id)) {
    _loggedRebelSkinInfo.add(unit.id);
    const modelPath = unit.mesh?.userData?.w3d || 'unknown';
    const skeletonPath = unit.mesh?.userData?.skeletonW3D || 'none';
    console.log(
      `[W3D REBEL TRACE][${unit.id}:${unit.name}] model=${modelPath} skeleton=${skeletonPath} hasCpuSkin=${hasSkin}`
    );
  }
  if (!hasSkin) return;

  const animator = getOrCreateAnimator(unit);
  if (!animator) return;

  if (isAnimDebugEnabled() && !_loggedAnimatorInfo.has(unit.id)) {
    _loggedAnimatorInfo.add(unit.id);
    debug(unit, `animator ready: bones=${animator.bonesByPivot.size}, mesh=${unit.mesh.userData?.w3d || 'unknown'}`);
  }

  const clipKey = unit.currentAnimationName ? unit.currentAnimationName.toLowerCase() : null;
  if (!clipKey) {
    applyBindPoseToAnimator(animator);
    applyCpuSkin(unit, animator);
    return;
  }

  if (animator.clipKey !== clipKey) {
    animator.clipKey = clipKey;
    animator.clip = loadW3DAnimationClip(clipKey, unit.mesh?.userData?.w3d || null);
    animator.initialized = false;
    animator.completed = false;
    debug(unit, `clip switch token=${clipKey} resolved=${!!animator.clip}`);
    if (isTrackedRebel) {
      console.log(
        `[W3D REBEL TRACE][${unit.id}:${unit.name}] clipToken=${clipKey} resolved=${!!animator.clip}`
      );
    }
  }
  if (!animator.clip) {
    console.warn(`[W3D ANIM][${unit.id}:${unit.name}] clip missing for token ${clipKey}`);
    applyBindPoseToAnimator(animator);
    applyCpuSkin(unit, animator);
    return;
  }

  if (isAnimDebugEnabled() && !_loggedClipInfo.has(`${unit.id}:${clipKey}`)) {
    _loggedClipInfo.add(`${unit.id}:${clipKey}`);
    debug(unit, `clip details: frames=${animator.clip.numFrames} fps=${animator.clip.frameRate} channels=${animator.clip.channels?.length || 0}`);
  }

  const stateFlags = unit.currentAnimationFlags || new Set();
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
    if (channel.kind === 'x' || channel.kind === 'y' || channel.kind === 'z') {
      const v = translationByPivot.get(pivot) || [0, 0, 0];
      if (channel.kind === 'x') v[0] = sampled[0] || 0;
      if (channel.kind === 'y') v[1] = sampled[0] || 0;
      if (channel.kind === 'z') v[2] = sampled[0] || 0;
      translationByPivot.set(pivot, v);
    } else if (channel.kind === 'q') {
      quatByPivot.set(pivot, sampled);
    }
  }

  for (const [pivot, bone] of animator.bonesByPivot) {
    if (pivot === 0) continue;
    if (!bone.userData.bindPosition) {
      bone.userData.bindPosition = bone.position.clone();
    }
    if (!bone.userData.bindQuaternion) {
      bone.userData.bindQuaternion = bone.quaternion.clone();
    }
    const bindPos = bone.userData.bindPosition;
    const bindQuat = bone.userData.bindQuaternion;

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

  if (isAnimDebugEnabled() && animator.frame < 1.0) {
    const movedPivots = quatByPivot.size + translationByPivot.size;
    debug(unit, `frame=${animator.frame.toFixed(2)} movedPivots=${movedPivots}`);
  }

  applyCpuSkin(unit, animator);
}

export function isUnitAnimationComplete(unit) {
  return !!(unit && unit._animator && unit._animator.completed);
}

const _tmpMatA = new THREE.Matrix4();
const _tmpMatB = new THREE.Matrix4();
const _tmpMatC = new THREE.Matrix4();
const _tmpMat3 = new THREE.Matrix3();
const _tmpVec = new THREE.Vector3();
const _tmpNorm = new THREE.Vector3();
const _loggedSkinDump = new Set();

function applyCpuSkin(unit, animator) {
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

    const deformByPivot = [];
    for (const pivot of skin.usedPivots || []) {
      const bone = animator.bonesByPivot.get(pivot);
      if (!bone) continue;
      _tmpMatB.multiplyMatrices(meshWorldInv, bone.matrixWorld);
      // Generals infantry skins behave as bone-space vertices:
      // apply current bone transform in mesh space directly.
      deformByPivot[pivot] = Float32Array.from(_tmpMatB.elements);
    }

    // ── one-shot diagnostic for rebel units ──────────────────────────────
    const dumpKey = `${unit.id}:${node.name || node.uuid}`;
    if (isRebelTraceEnabled() && isRebelTraceUnit(unit) && !_loggedSkinDump.has(dumpKey)) {
      _loggedSkinDump.add(dumpKey);
      console.group(`[SKIN DUMP][${unit.id}:${unit.name}] mesh="${node.name}" verts=${pos.count} pivots=${skin.usedPivots?.length}`);
      console.log('links type:', Array.isArray(links), 'len:', links?.length, 'first5:', links ? [...links].slice(0,5) : 'null');
      console.log('bindPos[0..2]:', skin.bindPositions[0]?.toFixed(3), skin.bindPositions[1]?.toFixed(3), skin.bindPositions[2]?.toFixed(3));
      for (const pivot of (skin.usedPivots || []).slice(0, 5)) {
        const bone = animator.bonesByPivot.get(pivot);
        const wpos = bone ? new THREE.Vector3().setFromMatrixPosition(bone.matrixWorld) : null;
        const d = deformByPivot[pivot];
        const dx = d ? d[12].toFixed(3) : '?', dy = d ? d[13].toFixed(3) : '?', dz = d ? d[14].toFixed(3) : '?';
        console.log(`  pivot=${pivot} bone="${bone?.name}" worldPos=(${wpos?.x.toFixed(2)},${wpos?.y.toFixed(2)},${wpos?.z.toFixed(2)}) deform.t=(${dx},${dy},${dz})`);
      }
      console.groupEnd();
    }

    for (let i = 0; i < pos.count; i++) {
      const pivot = i < links.length ? links[i] : 0;
      const deformElems = deformByPivot[pivot];
      if (!deformElems) continue;
      _tmpMatC.fromArray(deformElems);

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
