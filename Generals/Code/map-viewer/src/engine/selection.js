import * as THREE from 'three';
import state from '../state.js';
import { camState, selectionOverlay as getOverlay } from './camera.js';

const SEL_GRID_SIZE = 24;
const SEL_FADE_SPEED_IN  = 0.8;
const SEL_FADE_SPEED_OUT = 0.5;
const SEL_MAX_ALPHA = 0.35;
const selCellAlpha = new Map();
let selLastTime = 0;

const SEL_TECH_INTERVAL = 120;
const SEL_TECH_FONT = '7px monospace';
let selTechItems = [];
let selTechLastGen = 0;

function genTechSnippet() {
  const types = [
    () => `0x${(Math.random()*0xFFFFFF|0).toString(16).toUpperCase().padStart(6,'0')}`,
    () => `${(Math.random()*360|0)}.${(Math.random()*100|0).toString().padStart(2,'0')}\u00B0`,
    () => `R:${(Math.random()*999|0).toString().padStart(3,'0')}`,
    () => `${(Math.random()*100|0).toFixed(0)}%`,
    () => `ID:${(Math.random()*9999|0).toString().padStart(4,'0')}`,
    () => `T+${(Math.random()*99|0).toFixed(0)}s`,
    () => `${(Math.random()*255|0)}.${(Math.random()*255|0)}.${(Math.random()*255|0)}`,
    () => `SIG ${(Math.random()*10).toFixed(2)}`,
    () => `BRG ${(Math.random()*360|0)}`,
    () => `${String.fromCharCode(65+Math.random()*26|0)}${String.fromCharCode(65+Math.random()*26|0)}-${(Math.random()*99|0)}`,
    () => `DST ${(Math.random()*500|0)}m`,
    () => `PWR ${(Math.random()*100|0).toFixed(0)}kW`,
    () => `FRQ ${(20+Math.random()*80|0).toFixed(0)}MHz`,
    () => `ALT ${(Math.random()*200|0)}`,
    () => `VEL ${(Math.random()*60|0).toFixed(1)}`,
  ];
  return types[Math.random() * types.length | 0]();
}

function generateTechData(x1, y1, x2, y2, now) {
  if (now - selTechLastGen < SEL_TECH_INTERVAL) return;
  selTechLastGen = now;

  const w = x2 - x1, h = y2 - y1;
  if (w < 30 || h < 30) return;

  const edge = Math.random() * 4 | 0;
  let tx, ty, align;
  const margin = 4;
  switch (edge) {
    case 0: tx = x1 + Math.random() * w; ty = y1 - margin; align = 'bottom'; break;
    case 1: tx = x1 + Math.random() * w; ty = y2 + margin; align = 'top'; break;
    case 2: tx = x1 - margin; ty = y1 + Math.random() * h; align = 'right'; break;
    case 3: tx = x2 + margin; ty = y1 + Math.random() * h; align = 'left'; break;
  }

  selTechItems.push({
    text: genTechSnippet(),
    x: tx, y: ty, align,
    born: now,
    life: 800 + Math.random() * 1200,
  });

  if (selTechItems.length > 18) selTechItems.shift();
}

function drawTechData(ctx, now) {
  ctx.font = SEL_TECH_FONT;
  selTechItems = selTechItems.filter(item => {
    const age = now - item.born;
    if (age > item.life) return false;

    const fadeIn = Math.min(1, age / 200);
    const fadeOut = Math.max(0, 1 - (age - (item.life - 300)) / 300);
    const alpha = Math.min(fadeIn, fadeOut) * 0.7;
    if (alpha <= 0) return false;

    ctx.fillStyle = `rgba(51, 255, 51, ${alpha.toFixed(3)})`;
    switch (item.align) {
      case 'bottom': ctx.textAlign = 'center'; ctx.textBaseline = 'bottom'; break;
      case 'top':    ctx.textAlign = 'center'; ctx.textBaseline = 'top'; break;
      case 'right':  ctx.textAlign = 'right';  ctx.textBaseline = 'middle'; break;
      case 'left':   ctx.textAlign = 'left';   ctx.textBaseline = 'middle'; break;
    }
    ctx.fillText(item.text, item.x, item.y);
    return true;
  });
}

export function showSelectionRect(show) {
  // Access the overlay via the imported binding (it's a module-level let in camera.js)
  // We import it as getOverlay, but since it's a live binding we need to access from camera module
  const overlay = getOverlay;
  if (!overlay) return;
  if (!show) {
    overlay.style.display = 'none';
    selCellAlpha.clear();
    selLastTime = 0;
    selTechItems = [];
    selTechLastGen = 0;
    return;
  }

  const x1 = Math.min(camState.dragStart.x, camState.dragEnd.x);
  const y1 = Math.min(camState.dragStart.y, camState.dragEnd.y);
  const x2 = Math.max(camState.dragStart.x, camState.dragEnd.x);
  const y2 = Math.max(camState.dragStart.y, camState.dragEnd.y);
  const w = x2 - x1, h = y2 - y1;
  if (w < 2 || h < 2) return;

  const { camera, objectMarkers } = state;
  const dpr = window.devicePixelRatio || 1;
  const cw = window.innerWidth, ch = window.innerHeight;
  overlay.width = cw * dpr;
  overlay.height = ch * dpr;
  overlay.style.width = cw + 'px';
  overlay.style.height = ch + 'px';
  overlay.style.display = 'block';

  const ctx = overlay.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cw, ch);

  const objScreenPoints = [];
  if (camera && objectMarkers.visible) {
    const tmpV = new THREE.Vector3();
    objectMarkers.children.forEach(child => {
      if (!child.visible) return;
      const k = child.userData?.kindOf;
      const name = (child.userData?.name || '').toLowerCase();
      const isUnit = k
        ? (k.has('VEHICLE') || k.has('INFANTRY') || k.has('AIRCRAFT') || k.has('HUGE_VEHICLE'))
        : (name.includes('vehicle') || name.includes('infantry') || name.includes('tank') ||
           name.includes('humvee') || name.includes('soldier') || name.includes('ranger') ||
           name.includes('missile') || name.includes('raptor') || name.includes('comanche') ||
           name.includes('crusader') || name.includes('paladin') || name.includes('ambulance'));
      if (!isUnit) return;
      child.traverse(node => {
        if (!node.isMesh || !node.geometry) return;
        const pos = node.geometry.attributes.position;
        if (!pos) return;
        const step = Math.max(1, Math.floor(pos.count / 24));
        for (let i = 0; i < pos.count; i += step) {
          tmpV.set(pos.getX(i), pos.getY(i), pos.getZ(i));
          node.localToWorld(tmpV);
          tmpV.project(camera);
          if (tmpV.z > 0 && tmpV.z < 1) {
            objScreenPoints.push(
              (tmpV.x * 0.5 + 0.5) * cw,
              (-tmpV.y * 0.5 + 0.5) * ch
            );
          }
        }
      });
    });
  }

  const now = performance.now();
  const dt = selLastTime ? Math.min((now - selLastTime) / 1000, 0.1) : 0.016;
  selLastTime = now;

  const gs = SEL_GRID_SIZE;
  const cols = Math.ceil(w / gs), rows = Math.ceil(h / gs);

  const occupiedCells = new Set();
  for (let i = 0; i < objScreenPoints.length; i += 2) {
    const sx = objScreenPoints[i], sy = objScreenPoints[i + 1];
    if (sx < x1 || sx >= x2 || sy < y1 || sy >= y2) continue;
    const gx = Math.floor((sx - x1) / gs);
    const gy = Math.floor((sy - y1) / gs);
    occupiedCells.add(`${gx},${gy}`);
  }

  const activeKeys = new Set();

  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      const cx = x1 + gx * gs;
      const cy = y1 + gy * gs;
      const cw2 = Math.min(gs, x2 - cx);
      const ch2 = Math.min(gs, y2 - cy);

      const hasObject = occupiedCells.has(`${gx},${gy}`);

      const key = `${gx},${gy}`;
      activeKeys.add(key);
      let alpha = selCellAlpha.get(key) || 0;
      alpha = hasObject
        ? Math.min(SEL_MAX_ALPHA, alpha + SEL_FADE_SPEED_IN * dt)
        : Math.max(0, alpha - SEL_FADE_SPEED_OUT * dt);
      selCellAlpha.set(key, alpha);

      if (alpha > 0.001) {
        ctx.fillStyle = `rgba(51, 255, 51, ${alpha.toFixed(3)})`;
        ctx.fillRect(cx, cy, cw2, ch2);
      }

      ctx.strokeStyle = 'rgba(51, 255, 51, 0.3)';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(cx + 0.5, cy + 0.5, cw2 - 1, ch2 - 1);
    }
  }

  for (const k of selCellAlpha.keys()) {
    if (!activeKeys.has(k)) selCellAlpha.delete(k);
  }

  ctx.strokeStyle = 'rgba(51, 255, 51, 0.6)';
  ctx.lineWidth = 2;
  ctx.strokeRect(x1, y1, w, h);

  generateTechData(x1, y1, x2, y2, now);
  drawTechData(ctx, now);
}
