import {
  FLAG_ROAD_POINT1, FLAG_ROAD_POINT2, FLAG_ROAD_CORNER_ANGLED,
  FLAG_ROAD_CORNER_TIGHT, DEFAULT_ROAD_SCALE, ROAD_SEGMENT, ROAD_CURVE,
  ROAD_TEE, ROAD_FOUR_WAY, ROAD_Y, ROAD_H, ROAD_H_FLIP,
  CORNER_RADIUS, TIGHT_CORNER_RADIUS, TEE_WIDTH_ADJUSTMENT,
  POSITION_TOLERANCE
} from '../constants.js';
import { roadTypeMap } from '../parsers/ini.js';

export function vec2Len(x, y) { return Math.sqrt(x*x + y*y); }
export function vec2Dot(ax, ay, bx, by) { return ax*bx + ay*by; }
export function vec2Cross(ax, ay, bx, by) { return ax*by - ay*bx; }
export function vec2Norm(x, y) { const l = vec2Len(x, y); return l < 1e-9 ? {x:0,y:0} : {x:x/l,y:y/l}; }
export function vec2Rot(x, y, angle) {
  const c = Math.cos(angle), s = Math.sin(angle);
  return { x: x*c - y*s, y: x*s + y*c };
}

function ptEq(a, b) {
  return Math.abs(a.x - b.x) < POSITION_TOLERANCE && Math.abs(a.y - b.y) < POSITION_TOLERANCE;
}

export function extractRoadSegments(objects) {
  const segments = [];
  for (let i = 0; i < objects.length - 1; i++) {
    const o1 = objects[i];
    if (!(o1.flags & FLAG_ROAD_POINT1)) continue;
    const o2 = objects[i + 1];
    if (!(o2.flags & FLAG_ROAD_POINT2)) continue;
    const typeName = o1.name.toLowerCase();
    const typeInfo = roadTypeMap.get(typeName);
    const scale = typeInfo ? typeInfo.roadWidth : DEFAULT_ROAD_SCALE;
    const widthInTex = typeInfo ? typeInfo.roadWidthInTexture : 1.0;
    const isAngled = !!(o1.flags & FLAG_ROAD_CORNER_ANGLED);
    const isTight  = !!(o1.flags & FLAG_ROAD_CORNER_TIGHT);
    const curveRadius = isTight ? TIGHT_CORNER_RADIUS : CORNER_RADIUS;

    segments.push({
      pt1: { x: o1.x, y: o1.y, count: 0, last: true },
      pt2: { x: o2.x, y: o2.y, count: 0, last: true },
      name: o1.name,
      typeName,
      halfWidth: scale * widthInTex / 2.0,
      widthInTexture: widthInTex,
      scale,
      type: ROAD_SEGMENT,
      isAngled,
      curveRadius,
    });
    i++;
  }
  return segments;
}

export function buildRoadTopology(segments) {
  for (let j = segments.length - 1; j > 0; j--) {
    const s2 = segments[j];
    if (s2.type !== ROAD_SEGMENT) continue;
    for (let i = 0; i < j; i++) {
      const s1 = segments[i];
      if (s1.type !== ROAD_SEGMENT) continue;
      if (s1.typeName !== s2.typeName) continue;
      if (ptEq(s1.pt1, s2.pt1)) { s1.pt1.count++; s2.pt1.count++; s1.pt1.last = false; }
      if (ptEq(s1.pt1, s2.pt2)) { s1.pt1.count++; s2.pt2.count++; s1.pt1.last = false; }
      if (ptEq(s1.pt2, s2.pt1)) { s1.pt2.count++; s2.pt1.count++; s1.pt2.last = false; }
      if (ptEq(s1.pt2, s2.pt2)) { s1.pt2.count++; s2.pt2.count++; s1.pt2.last = false; }
    }
  }

  const junctionLocs = [];
  const numOrig = segments.length;
  for (let i = 0; i < numOrig; i++) {
    const s = segments[i];
    if (s.type !== ROAD_SEGMENT) continue;
    if (s.pt1.count === 2) {
      junctionLocs.push({ x: s.pt1.x, y: s.pt1.y });
      insertTee(segments, s.pt1, i);
    }
    if (s.pt2.count === 2) {
      junctionLocs.push({ x: s.pt2.x, y: s.pt2.y });
      insertTee(segments, s.pt2, i);
    }
    if (s.pt1.count === 3) {
      junctionLocs.push({ x: s.pt1.x, y: s.pt1.y });
      insert4Way(segments, s.pt1, i);
    }
    if (s.pt2.count === 3) {
      junctionLocs.push({ x: s.pt2.x, y: s.pt2.y });
      insert4Way(segments, s.pt2, i);
    }
  }

  function isNearJunction(pt) {
    for (const jl of junctionLocs) {
      if (Math.abs(pt.x - jl.x) < POSITION_TOLERANCE && Math.abs(pt.y - jl.y) < POSITION_TOLERANCE) return true;
    }
    return false;
  }

  const numBeforeCurves = segments.length;
  let segmentStartIndex = -1;
  for (let i = 0; i < numBeforeCurves; i++) {
    if (segments[i].type !== ROAD_SEGMENT) continue;
    if (i < numBeforeCurves - 1
        && segments[i+1].type === ROAD_SEGMENT
        && segments[i].typeName === segments[i+1].typeName
        && ptEq(segments[i].pt1, segments[i+1].pt2)
        && segments[i].pt1.count === 1
        && segments[i+1].pt2.count === 1
        && !isNearJunction(segments[i].pt1)) {
      insertCurveAt(segments, i, i + 1);
      if (segmentStartIndex < 0) segmentStartIndex = i;
    } else if (segmentStartIndex >= 0) {
      if (segments[i].type === ROAD_SEGMENT
          && segments[i].typeName === segments[segmentStartIndex].typeName
          && ptEq(segments[i].pt1, segments[segmentStartIndex].pt2)
          && segments[segmentStartIndex].pt2.count === 1
          && segments[i].pt1.count === 1
          && !isNearJunction(segments[i].pt1)) {
        insertCurveAt(segments, i, segmentStartIndex);
      }
      segmentStartIndex = -1;
    }
  }

  return segments;
}

function findSegmentsAt(segments, loc, excludeIdx, typeName) {
  const result = [];
  for (let i = 0; i < segments.length; i++) {
    if (i === excludeIdx) continue;
    const s = segments[i];
    if (s.typeName !== typeName) continue;
    if (ptEq(s.pt1, loc)) result.push({ seg: s, centerPt: s.pt1, remotePt: s.pt2, idx: i });
    else if (ptEq(s.pt2, loc)) result.push({ seg: s, centerPt: s.pt2, remotePt: s.pt1, idx: i });
  }
  return result;
}

function markAllEndpointsAt(segments, loc, typeName, newCount) {
  for (const s of segments) {
    if (s.typeName !== typeName) continue;
    if (ptEq(s.pt1, loc)) s.pt1.count = newCount;
    if (ptEq(s.pt2, loc)) s.pt2.count = newCount;
  }
}

function insertTee(segments, locPt, index1) {
  const loc = { x: locPt.x, y: locPt.y };
  const s1 = segments[index1];
  const others = findSegmentsAt(segments, loc, index1, s1.typeName);
  if (others.length < 2) return;

  const pr1 = ptEq(s1.pt1, loc) ? s1.pt2 : s1.pt1;
  const pr2 = others[0].remotePt;
  const pr3 = others[1].remotePt;

  const v1 = vec2Norm(pr1.x - loc.x, pr1.y - loc.y);
  const v2 = vec2Norm(pr2.x - loc.x, pr2.y - loc.y);
  const v3 = vec2Norm(pr3.x - loc.x, pr3.y - loc.y);

  const dot12 = vec2Dot(v1.x, v1.y, v2.x, v2.y);
  const dot13 = vec2Dot(v1.x, v1.y, v3.x, v3.y);
  const dot32 = vec2Dot(v3.x, v3.y, v2.x, v2.y);

  let upVector, decider;
  if (dot12 <= dot13 && dot12 <= dot32) {
    upVector = { x: v2.x - v1.x, y: v2.y - v1.y };
    decider = v3;
  } else if (dot13 <= dot32) {
    upVector = { x: v3.x - v1.x, y: v3.y - v1.y };
    decider = v2;
  } else {
    upVector = { x: v2.x - v3.x, y: v2.y - v3.y };
    decider = v1;
  }
  const upN = vec2Norm(upVector.x, upVector.y);

  const angle = (vec2Cross(upN.x, upN.y, decider.x, decider.y) < 0) ? -Math.PI/2 : Math.PI/2;
  const upScaled = { x: upN.x * 0.5 * s1.scale, y: upN.y * 0.5 * s1.scale };
  const teeVec = vec2Rot(upScaled.x, upScaled.y, angle);

  const dot = Math.abs(vec2Dot(upN.x, upN.y, decider.x, decider.y));
  const isSlanted = dot > 0.5;

  let segType;
  if (isSlanted) {
    const flip = vec2Cross(teeVec.x, teeVec.y, decider.x, decider.y) > 0;
    segType = flip ? ROAD_H_FLIP : ROAD_H;
  } else {
    segType = ROAD_TEE;
  }

  markAllEndpointsAt(segments, loc, s1.typeName, -3);

  segments.push({
    pt1: { x: loc.x, y: loc.y, count: -3, last: true },
    pt2: { x: loc.x + teeVec.x, y: loc.y + teeVec.y, count: 0, last: true },
    name: s1.name,
    typeName: s1.typeName,
    halfWidth: s1.halfWidth,
    widthInTexture: s1.widthInTexture,
    scale: s1.scale,
    type: segType,
    isAngled: false,
    curveRadius: s1.curveRadius,
  });
}

function insert4Way(segments, locPt, index1) {
  const loc = { x: locPt.x, y: locPt.y };
  const s1 = segments[index1];
  const others = findSegmentsAt(segments, loc, index1, s1.typeName);
  if (others.length < 3) return;

  const pr1 = ptEq(s1.pt1, loc) ? s1.pt2 : s1.pt1;
  const arms = [pr1, others[0].remotePt, others[1].remotePt, others[2].remotePt];
  const dirs = arms.map(p => vec2Norm(p.x - loc.x, p.y - loc.y));

  let bestDot = 2, bestI = 0, bestJ = 1;
  for (let i = 0; i < 4; i++) {
    for (let j = i+1; j < 4; j++) {
      const d = vec2Dot(dirs[i].x, dirs[i].y, dirs[j].x, dirs[j].y);
      if (d < bestDot) { bestDot = d; bestI = i; bestJ = j; }
    }
  }
  const alignDir = vec2Norm(dirs[bestI].x - dirs[bestJ].x, dirs[bestI].y - dirs[bestJ].y);
  const alignVec = { x: alignDir.x * 0.5 * s1.scale, y: alignDir.y * 0.5 * s1.scale };

  markAllEndpointsAt(segments, loc, s1.typeName, -3);

  segments.push({
    pt1: { x: loc.x, y: loc.y, count: -3, last: true },
    pt2: { x: loc.x + alignVec.x, y: loc.y + alignVec.y, count: 0, last: true },
    name: s1.name,
    typeName: s1.typeName,
    halfWidth: s1.halfWidth,
    widthInTexture: s1.widthInTexture,
    scale: s1.scale,
    type: ROAD_FOUR_WAY,
    isAngled: false,
    curveRadius: s1.curveRadius,
  });
}

function insertCurveAt(segments, ndx1, ndx2) {
  const s1 = segments[ndx1], s2 = segments[ndx2];
  if (s1.isAngled) return;

  const d1 = vec2Norm(s1.pt2.x - s1.pt1.x, s1.pt2.y - s1.pt1.y);
  const d2 = vec2Norm(s2.pt2.x - s2.pt1.x, s2.pt2.y - s2.pt1.y);
  const curSin = vec2Dot(d1.x, d1.y, d2.x, d2.y);
  const xpdct = vec2Cross(d1.x, d1.y, d2.x, d2.y);

  const angle = Math.acos(Math.max(-1, Math.min(1, curSin)));
  const count = angle / (Math.PI / 6);
  if (count < 0.9) return;

  const radius = s1.curveRadius * s1.scale;

  let pr1, pr2, pr3, pr4;
  let ld1 = d1, ld2 = d2;
  if (xpdct > 0) {
    pr1 = s1.pt1; pr2 = s1.pt2; pr3 = s2.pt1; pr4 = s2.pt2;
  } else {
    pr4 = s1.pt1; pr3 = s1.pt2; pr2 = s2.pt1; pr1 = s2.pt2;
    ld1 = vec2Norm(pr2.x - pr1.x, pr2.y - pr1.y);
    ld2 = vec2Norm(pr4.x - pr3.x, pr4.y - pr3.y);
  }

  const off1x = ld1.y * radius, off1y = -ld1.x * radius;
  const off2x = ld2.y * radius, off2y = -ld2.x * radius;

  const o1ax = pr1.x + off1x, o1ay = pr1.y + off1y;
  const o1bx = pr2.x + off1x, o1by = pr2.y + off1y;
  const o2ax = pr3.x + off2x, o2ay = pr3.y + off2y;
  const o2bx = pr4.x + off2x, o2by = pr4.y + off2y;

  const d1x = o1bx - o1ax, d1y = o1by - o1ay;
  const d2x = o2bx - o2ax, d2y = o2by - o2ay;
  const denom = d1x * d2y - d1y * d2x;
  if (Math.abs(denom) < 1e-6) return;

  const t = ((o2ax - o1ax) * d2y - (o2ay - o1ay) * d2x) / denom;
  const intX = o1ax + d1x * t, intY = o1ay + d1y * t;

  const newPr4x = intX - off2x, newPr4y = intY - off2y;
  const newPr1x = intX - off1x, newPr1y = intY - off1y;

  const dotCheck1 = vec2Dot(ld2.x, ld2.y, newPr4x - pr3.x, newPr4y - pr3.y);
  if (dotCheck1 < 0.5) return;
  const dotCheck2 = vec2Dot(ld1.x, ld1.y, pr2.x - newPr1x, pr2.y - newPr1y);
  if (dotCheck2 < 0.5) return;

  const stepAngle = -Math.PI / 6;
  let ptX = newPr4x, ptY = newPr4y;
  const dirFromPt = vec2Norm(pr3.x - newPr4x, pr3.y - newPr4y);

  const cOffX = -dirFromPt.y * radius, cOffY = dirFromPt.x * radius;
  const centerX = ptX + cOffX, centerY = ptY + cOffY;

  const numSteps = Math.max(1, Math.floor(count));
  for (let step = 0; step < numSteps; step++) {
    const relX = ptX - centerX, relY = ptY - centerY;
    const rot = vec2Rot(relX, relY, stepAngle);
    const newPtX = centerX + rot.x, newPtY = centerY + rot.y;

    const curDir = vec2Norm(ptX - centerX, ptY - centerY);
    const rotDir = vec2Rot(curDir.x, curDir.y, stepAngle);
    const tangentX = -rotDir.y, tangentY = rotDir.x;
    const endX = newPtX + tangentX * s1.scale;
    const endY = newPtY + tangentY * s1.scale;

    segments.push({
      pt1: { x: newPtX, y: newPtY, count: 0, last: true },
      pt2: { x: endX, y: endY, count: 0, last: true },
      name: s1.name,
      typeName: s1.typeName,
      halfWidth: s1.halfWidth,
      widthInTexture: s1.widthInTexture,
      scale: s1.scale,
      type: ROAD_CURVE,
      isAngled: false,
      curveRadius: s1.curveRadius,
    });

    ptX = newPtX; ptY = newPtY;
  }
}
