import * as THREE from 'three';
import state from '../state.js';
import { updateCursor } from './cursors.js';
import { showSelectionRect } from './selection.js';
import { handleLeftMouseUp, handleControlGroup } from './selectionTranslator.js';
import { handleRightClick, handleOrderHotkey } from './commandTranslator.js';
import { DRAG_TOLERANCE } from '../constants.js';

export const CAM_DEFAULT_PITCH = -37 * Math.PI / 180;
export const CAM_MIN_PITCH     = -Math.PI / 5;
export const CAM_MAX_PITCH     = -5 * Math.PI / 180;
export const CAM_MIN_HEIGHT    = 5;
export const CAM_MAX_HEIGHT    = 800;
export const CAM_DEFAULT_HEIGHT = 250;
export const CAM_ZOOM_STEP     = 20;
export const CAM_ROTATE_FACTOR = 0.005;
export const CAM_PAN_SPEED     = 1.5;
export const CAM_KEY_SCROLL    = 8;
export const CAM_EDGE_SIZE     = 3;
export const CAM_EDGE_SPEED    = 0.3;
export const CAM_DAMPING       = 0.85;

export const camState = {
  target: new THREE.Vector3(),
  yaw: Math.PI * 0.75,
  pitch: CAM_DEFAULT_PITCH,
  height: CAM_DEFAULT_HEIGHT,
  velocity: new THREE.Vector3(),
  isPanning: false,
  isRotating: false,
  middleDown: false,
  panAnchor: { x: 0, y: 0 },
  rotAnchor: { x: 0, y: 0 },
  rotAnchorYaw: 0,
  rotAnchorPitch: 0,
  keys: {},
  mousePos: { x: 0, y: 0 },
  isDragSelecting: false,
  wasDragSelecting: false,
  dragStart: { x: 0, y: 0 },
  dragEnd: { x: 0, y: 0 },
  dragStartX: 0,
  dragStartY: 0,
  edgeScrollEnabled: false,
  // RMB tracking for distinguishing click from drag
  rightDown: false,
  rightAnchor: { x: 0, y: 0 },
  rightWasDrag: false,
};

export let selectionOverlay = null;

export function initGeneralsCamera(domElement) {
  domElement.addEventListener('contextmenu', e => e.preventDefault());

  domElement.addEventListener('mousedown', e => {
    if (e.button === 2) {
      // RMB: track both pan and potential click
      camState.isPanning = true;
      camState.panAnchor = { x: e.clientX, y: e.clientY };
      camState.rightDown = true;
      camState.rightAnchor = { x: e.clientX, y: e.clientY };
      camState.rightWasDrag = false;
    } else if (e.button === 1) {
      e.preventDefault();
      camState.middleDown = true;
      camState.isRotating = true;
      camState.rotAnchor = { x: e.clientX, y: e.clientY };
      camState.rotAnchorYaw = camState.yaw;
      camState.rotAnchorPitch = camState.pitch;
    } else if (e.button === 0) {
      // LMB: start potential drag selection
      camState.isDragSelecting = true;
      camState.wasDragSelecting = false;
      camState.dragStart = { x: e.clientX, y: e.clientY };
      camState.dragEnd = { x: e.clientX, y: e.clientY };
      camState.dragStartX = e.clientX;
      camState.dragStartY = e.clientY;
      showSelectionRect(false);
    }
  });

  window.addEventListener('mousemove', e => {
    camState.mousePos = { x: e.clientX, y: e.clientY };
    if (camState.isPanning) {
      const dx = e.clientX - camState.panAnchor.x;
      const dy = e.clientY - camState.panAnchor.y;
      camState.panAnchor = { x: e.clientX, y: e.clientY };
      const panScale = camState.height * CAM_PAN_SPEED / window.innerHeight;
      const sinY = Math.sin(camState.yaw), cosY = Math.cos(camState.yaw);
      camState.target.x -= (dx * cosY + dy * sinY) * panScale;
      camState.target.z -= (-dx * sinY + dy * cosY) * panScale;

      // Track if RMB moved enough to be a drag (pan), not a click
      if (camState.rightDown) {
        const rdx = Math.abs(e.clientX - camState.rightAnchor.x);
        const rdy = Math.abs(e.clientY - camState.rightAnchor.y);
        if (rdx > DRAG_TOLERANCE || rdy > DRAG_TOLERANCE) {
          camState.rightWasDrag = true;
        }
      }
    }
    if (camState.isRotating) {
      const dx = e.clientX - camState.rotAnchor.x;
      camState.yaw = camState.rotAnchorYaw - dx * CAM_ROTATE_FACTOR;
    }
    if (camState.isDragSelecting) {
      camState.dragEnd = { x: e.clientX, y: e.clientY };
      const dx = Math.abs(camState.dragEnd.x - camState.dragStart.x);
      const dy = Math.abs(camState.dragEnd.y - camState.dragStart.y);
      if (dx > DRAG_TOLERANCE || dy > DRAG_TOLERANCE) {
        camState.wasDragSelecting = true;
        showSelectionRect(true);
      }
    }
  });

  window.addEventListener('mouseup', e => {
    if (e.button === 2) {
      camState.isPanning = false;
      // If RMB was a click (not drag): issue order
      if (camState.rightDown && !camState.rightWasDrag) {
        handleRightClick(e.clientX, e.clientY, e.shiftKey);
      }
      camState.rightDown = false;
    }
    if (e.button === 1) {
      camState.middleReleaseTime = performance.now();
      camState.middleDown = false;
      if (!camState.isRotating) return;
      camState.isRotating = false;
      const dx = Math.abs(e.clientX - camState.rotAnchor.x);
      const dy = Math.abs(e.clientY - camState.rotAnchor.y);
      if (dx < 3 && dy < 3) {
        camState.pitch = CAM_DEFAULT_PITCH;
        camState.yaw = Math.PI * 0.75;
        camState.height = CAM_DEFAULT_HEIGHT;
      }
    }
    if (e.button === 0) {
      // LMB release: route through selection translator
      const wasActualDrag = camState.wasDragSelecting;
      camState.isDragSelecting = false;
      showSelectionRect(false);
      handleLeftMouseUp(e.clientX, e.clientY, e.shiftKey);
    }
  });

  domElement.addEventListener('wheel', e => {
    e.preventDefault();
    if ((e.buttons & 4) || camState.middleDown ||
        (performance.now() - (camState.middleReleaseTime || 0)) < 150) return;
    const delta = e.deltaY > 0 ? CAM_ZOOM_STEP : -CAM_ZOOM_STEP;
    const zoomScale = Math.max(0.5, camState.height / 200);
    camState.height = Math.max(CAM_MIN_HEIGHT, Math.min(CAM_MAX_HEIGHT,
      camState.height + delta * zoomScale));
  }, { passive: false });

  window.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    camState.keys[e.code] = true;

    // Control groups: Ctrl+0-9 to assign, 0-9 to recall
    const digitMatch = e.code.match(/^Digit(\d)$/);
    if (digitMatch) {
      const idx = parseInt(digitMatch[1]);
      handleControlGroup(idx, e.ctrlKey, e.shiftKey);
      return;
    }

    // Order hotkeys
    if (!e.ctrlKey && !e.altKey) {
      handleOrderHotkey(e.code);
    }
  });
  window.addEventListener('keyup', e => { camState.keys[e.code] = false; });

  selectionOverlay = document.createElement('canvas');
  selectionOverlay.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;display:none;z-index:100;';
  document.body.appendChild(selectionOverlay);
}

export function updateGeneralsCamera() {
  const { camera, renderer } = state;
  const k = camState.keys;
  let mx = 0, mz = 0;

  if (k['KeyW'] || k['ArrowUp'])    mz -= 1;
  if (k['KeyS'] || k['ArrowDown'])  mz += 1;
  if (k['KeyA'] || k['ArrowLeft'])  mx -= 1;
  if (k['KeyD'] || k['ArrowRight']) mx += 1;

  let edgeMx = 0, edgeMz = 0;
  if (camState.edgeScrollEnabled) {
    const w = window.innerWidth, h = window.innerHeight;
    const mp = camState.mousePos;
    if (mp.x <= CAM_EDGE_SIZE)     edgeMx -= 1;
    if (mp.x >= w - CAM_EDGE_SIZE) edgeMx += 1;
    if (mp.y <= CAM_EDGE_SIZE)     edgeMz -= 1;
    if (mp.y >= h - CAM_EDGE_SIZE) edgeMz += 1;
  }

  if (mx !== 0 || mz !== 0 || edgeMx !== 0 || edgeMz !== 0) {
    const scrollSpeed = CAM_KEY_SCROLL * (camState.height / 200);
    const sinY = Math.sin(camState.yaw), cosY = Math.cos(camState.yaw);
    const totalMx = mx + edgeMx * CAM_EDGE_SPEED;
    const totalMz = mz + edgeMz * CAM_EDGE_SPEED;
    camState.velocity.x += (totalMx * cosY + totalMz * sinY) * scrollSpeed;
    camState.velocity.z += (-totalMx * sinY + totalMz * cosY) * scrollSpeed;
  }

  camState.target.add(camState.velocity);
  camState.velocity.multiplyScalar(CAM_DAMPING);

  const dist = camState.height / Math.sin(-camState.pitch);
  const horizDist = dist * Math.cos(-camState.pitch);
  camera.position.set(
    camState.target.x + Math.sin(camState.yaw) * horizDist,
    camState.target.y + camState.height,
    camState.target.z + Math.cos(camState.yaw) * horizDist
  );
  camera.lookAt(camState.target);

  updateCursor(renderer?.domElement);

  if (camState.isDragSelecting) {
    const dx = Math.abs(camState.dragEnd.x - camState.dragStart.x);
    const dy = Math.abs(camState.dragEnd.y - camState.dragStart.y);
    if (dx > DRAG_TOLERANCE || dy > DRAG_TOLERANCE) showSelectionRect(true);
  }
}
