import { camState } from './camera.js';
import { CAM_EDGE_SIZE } from './camera.js';

function makeSvgCursor(svg, hotX, hotY) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotX} ${hotY}, auto`;
}

export const generalsCursors = (() => {
  const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <defs><linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f0d060"/><stop offset="50%" stop-color="#c89820"/>
      <stop offset="100%" stop-color="#8a6810"/></linearGradient></defs>
    <path d="M3 1 L3 27 L8.5 21 L14 30 L18 28 L12.5 19 L20 19 Z" fill="url(#ag)" stroke="#1a1400" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M5 5 L5 23 L9 19 L13.5 26.5 L15.5 25.5 L11 18 L17 18 Z" fill="none" stroke="rgba(255,240,180,0.4)" stroke-width="0.5"/>
  </svg>`;

  const selectSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <line x1="16" y1="1" x2="16" y2="11" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="16" y1="21" x2="16" y2="31" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="1" y1="16" x2="11" y2="16" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <line x1="21" y1="16" x2="31" y2="16" stroke="#33ff33" stroke-width="2" opacity="0.8"/>
    <circle cx="16" cy="16" r="1.5" fill="none" stroke="#33ff33" stroke-width="1" opacity="0.8"/>
  </svg>`;

  function scrollSvg(angle) {
    const cx = 16, cy = 16;
    const rad = angle * Math.PI / 180;
    const c = Math.cos(rad), s = Math.sin(rad);
    const sx = cx - c * 6, sy = cy - s * 6;
    const ex = cx + c * 3, ey = cy + s * 3;
    const tipX = cx + c * 13, tipY = cy + s * 13;
    const hb = 6;
    const bx = cx + c * 3, by = cy + s * 3;
    const lx = bx + (-s) * hb, ly = by + c * hb;
    const rx = bx - (-s) * hb, ry = by - c * hb;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0d060"/><stop offset="100%" stop-color="#a07818"/></linearGradient></defs>
      <line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="#1a1400" stroke-width="5" stroke-linecap="round"/>
      <line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="url(#sg)" stroke-width="3" stroke-linecap="round"/>
      <polygon points="${tipX.toFixed(1)},${tipY.toFixed(1)} ${lx.toFixed(1)},${ly.toFixed(1)} ${rx.toFixed(1)},${ry.toFixed(1)}" fill="url(#sg)" stroke="#1a1400" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`;
  }

  const scrollAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const scrollCursors = scrollAngles.map(a => makeSvgCursor(scrollSvg(a), 16, 16));

  return {
    arrow: makeSvgCursor(arrowSvg, 3, 1),
    select: makeSvgCursor(selectSvg, 16, 16),
    scroll: scrollCursors,
  };
})();

let currentCursorName = '';

export function updateCursor(canvas) {
  if (!canvas) return;
  let name;
  if (camState.isPanning || camState.isRotating) {
    const mp = camState.mousePos;
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const dx = mp.x - cx, dy = mp.y - cy;
    const theta = ((Math.atan2(dy, dx) * 180 / Math.PI) + 360) % 360;
    const dirIdx = Math.round(theta / 45) % 8;
    name = 'scroll' + dirIdx;
    if (name !== currentCursorName) {
      canvas.style.cursor = generalsCursors.scroll[dirIdx];
      currentCursorName = name;
    }
    return;
  }
  if (camState.isDragSelecting) {
    name = 'select';
  } else {
    let edgeDir = -1;
    if (camState.edgeScrollEnabled) {
      const w = window.innerWidth, h = window.innerHeight;
      const mp = camState.mousePos;
      let ex = 0, ey = 0;
      if (mp.x <= CAM_EDGE_SIZE) ex = -1;
      if (mp.x >= w - CAM_EDGE_SIZE) ex = 1;
      if (mp.y <= CAM_EDGE_SIZE) ey = -1;
      if (mp.y >= h - CAM_EDGE_SIZE) ey = 1;
      if (ex !== 0 || ey !== 0) {
        const theta = ((Math.atan2(ey, ex) * 180 / Math.PI) + 360) % 360;
        edgeDir = Math.round(theta / 45) % 8;
      }
    }
    if (edgeDir >= 0) {
      name = 'scroll' + edgeDir;
      if (name !== currentCursorName) {
        canvas.style.cursor = generalsCursors.scroll[edgeDir];
        currentCursorName = name;
      }
      return;
    }
    name = 'arrow';
  }
  if (name !== currentCursorName) {
    canvas.style.cursor = name === 'select' ? generalsCursors.select : generalsCursors.arrow;
    currentCursorName = name;
  }
}
