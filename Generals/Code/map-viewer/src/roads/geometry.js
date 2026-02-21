import { vec2Len, vec2Dot, vec2Norm } from './topology.js';
import {
  ROAD_SEGMENT, ROAD_CURVE, ROAD_TEE, ROAD_FOUR_WAY, ROAD_Y, ROAD_H, ROAD_H_FLIP,
  TEE_WIDTH_ADJUSTMENT, TIGHT_CORNER_RADIUS, MAP_XY_FACTOR
} from '../constants.js';
import { getTerrainHeightAt } from '../terrain/update.js';
import { ROAD_FLOAT_AMOUNT } from '../constants.js';

export function computeSegmentCorners(seg) {
  const loc = seg.pt1;
  const dx = seg.pt2.x - seg.pt1.x;
  const dy = seg.pt2.y - seg.pt1.y;
  const len = vec2Len(dx, dy);

  let rvx, rvy, rnx, rny;
  if (len < 0.01) { rvx = 1; rvy = 0; rnx = 0; rny = 1; }
  else { rvx = dx/len; rvy = dy/len; rnx = -rvy; rny = rvx; }

  const scale = seg.scale;
  const wit = seg.widthInTexture;
  let uOff, vOff, uScale, vScale;
  let corners;

  switch (seg.type) {
    case ROAD_SEGMENT: {
      uOff = 0; vOff = 85/512;
      uScale = scale; vScale = scale;
      const hw = seg.halfWidth;
      corners = {
        bl: { x: seg.pt1.x - rnx*hw, y: seg.pt1.y - rny*hw },
        tl: { x: seg.pt1.x + rnx*hw, y: seg.pt1.y + rny*hw },
        br: { x: seg.pt2.x - rnx*hw, y: seg.pt2.y - rny*hw },
        tr: { x: seg.pt2.x + rnx*hw, y: seg.pt2.y + rny*hw },
      };
      break;
    }
    case ROAD_TEE:
    case ROAD_FOUR_WAY: {
      uOff = 425/512;
      vOff = seg.type === ROAD_FOUR_WAY ? 425/512 : 255/512;
      uScale = scale; vScale = scale;
      const teeFactor = scale * TEE_WIDTH_ADJUSTMENT / 2;
      const left = wit * scale / 2;
      const rvLen = left + teeFactor;
      const lx = loc.x - rvx * left;
      const ly = loc.y - rvy * left;
      corners = {
        bl: { x: lx - rnx*teeFactor, y: ly - rny*teeFactor },
        br: { x: lx + rvx*rvLen - rnx*teeFactor, y: ly + rvy*rvLen - rny*teeFactor },
        tr: { x: lx + rvx*rvLen + rnx*teeFactor, y: ly + rvy*rvLen + rny*teeFactor },
        tl: { x: lx + rnx*teeFactor, y: ly + rny*teeFactor },
      };
      break;
    }
    case ROAD_CURVE: {
      uOff = 4/512;
      vOff = seg.curveRadius === TIGHT_CORNER_RADIUS ? 425/512 : 255/512;
      uScale = scale; vScale = scale;
      const curveH = wit * scale / 2;
      const rVx = rvx * scale, rVy = rvy * scale;
      const rNx = rnx * curveH, rNy = rny * curveH;
      if (seg.curveRadius === TIGHT_CORNER_RADIUS) {
        let blx = loc.x - rNx, bly = loc.y - rNy;
        let brx = blx + rVx*0.5, bry = bly + rVy*0.5;
        let trx = brx + 2*rNx, try_ = bry + 2*rNy;
        let tlx = blx + 2*rNx, tly = bly + 2*rNy;
        brx += rVx*0.1 + rNx*0.2; bry += rVy*0.1 + rNy*0.2;
        blx -= rNx*0.1 + rVx*0.02; bly -= rNy*0.1 + rVy*0.02;
        tlx -= rVx*0.02; tly -= rVy*0.02;
        trx -= rVx*0.4; try_ -= rVy*0.4;
        trx += rNx*0.2; try_ += rNy*0.2;
        corners = {
          bl: {x:blx,y:bly}, br: {x:brx,y:bry}, tr: {x:trx,y:try_}, tl: {x:tlx,y:tly},
        };
      } else {
        let blx = loc.x - rNx, bly = loc.y - rNy;
        let brx = blx + rVx, bry = bly + rVy;
        let trx = brx + 2*rNx, try_ = bry + 2*rNy;
        let tlx = blx + 2*rNx, tly = bly + 2*rNy;
        brx += rVx*0.1 + rNx*0.4; bry += rVy*0.1 + rNy*0.4;
        blx -= rNx*0.2 + rVx*0.02; bly -= rNy*0.2 + rVy*0.02;
        tlx -= rVx*0.02; tly -= rVy*0.02;
        trx -= rVx*0.4; try_ -= rVy*0.4;
        trx += rNx*0.4; try_ += rNy*0.4;
        corners = {
          bl: {x:blx,y:bly}, br: {x:brx,y:bry}, tr: {x:trx,y:try_}, tl: {x:tlx,y:tly},
        };
      }
      break;
    }
    case ROAD_Y: {
      uOff = 255/512; vOff = 226/512;
      uScale = scale; vScale = scale;
      const rw = scale;
      const rvSx = rvx * rw * 1.59, rvSy = rvy * rw * 1.59;
      const rnSx = rnx * rw, rnSy = rny * rw;
      const tlx = loc.x + rnSx*0.29 - rvSx*0.5;
      const tly = loc.y + rnSy*0.29 - rvSy*0.5;
      corners = {
        tl: { x: tlx, y: tly },
        bl: { x: tlx - rnSx*1.08, y: tly - rnSy*1.08 },
        br: { x: tlx - rnSx*1.08 + rvSx, y: tly - rnSy*1.08 + rvSy },
        tr: { x: tlx + rvSx, y: tly + rvSy },
      };
      break;
    }
    case ROAD_H:
    case ROAD_H_FLIP: {
      uOff = 202/512; vOff = 364/512;
      uScale = scale; vScale = scale;
      const rw = scale;
      const rvHx = rvx * rw, rvHy = rvy * rw;
      let rnHx = rnx * rw * 1.35, rnHy = rny * rw * 1.35;
      const flip = seg.type === ROAD_H_FLIP;
      const factor = flip ? 0.20 : 0.80;
      const blx = loc.x - rnHx*factor - rvHx*wit/2;
      const bly = loc.y - rnHy*factor - rvHy*wit/2;
      const wdx = rvHx*wit/2 + rvHx*1.2;
      const wdy = rvHy*wit/2 + rvHy*1.2;
      corners = {
        bl: { x: blx, y: bly },
        br: { x: blx + wdx, y: bly + wdy },
        tr: { x: blx + wdx + rnHx, y: bly + wdy + rnHy },
        tl: { x: blx + rnHx, y: bly + rnHy },
      };
      if (flip) { rnHx = -rnHx; rnHy = -rnHy; }
      break;
    }
    default:
      return null;
  }

  return { corners, uOff, vOff, uScale, vScale, loc, rvx, rvy, rnx, rny };
}

export function buildRoadQuadGeo(seg, playH) {
  const info = computeSegmentCorners(seg);
  if (!info) return null;
  const { corners, uOff, vOff, uScale, vScale, loc, rvx, rvy, rnx, rny } = info;

  const uLen = vec2Len(
    (corners.br.x - corners.bl.x + corners.tr.x - corners.tl.x) / 2,
    (corners.br.y - corners.bl.y + corners.tr.y - corners.tl.y) / 2
  );
  const vLen = vec2Len(
    (corners.tl.x - corners.bl.x + corners.tr.x - corners.br.x) / 2,
    (corners.tl.y - corners.bl.y + corners.tr.y - corners.br.y) / 2
  );

  const uSteps = Math.max(2, Math.ceil(uLen / MAP_XY_FACTOR) + 1);
  const vSteps = Math.max(2, Math.ceil(vLen / MAP_XY_FACTOR) + 1);
  const positions = [], uvs = [], indices = [];

  for (let ui = 0; ui < uSteps; ui++) {
    const uf = ui / (uSteps - 1);
    for (let vi = 0; vi < vSteps; vi++) {
      const vf = vi / (vSteps - 1);
      const wx = corners.bl.x*(1-uf)*(1-vf) + corners.br.x*uf*(1-vf) +
                 corners.tl.x*(1-uf)*vf     + corners.tr.x*uf*vf;
      const wy = corners.bl.y*(1-uf)*(1-vf) + corners.br.y*uf*(1-vf) +
                 corners.tl.y*(1-uf)*vf     + corners.tr.y*uf*vf;
      const wz = getTerrainHeightAt(wx, wy) + ROAD_FLOAT_AMOUNT;

      positions.push(wx, wz, (playH - 1) * MAP_XY_FACTOR - wy);

      const cvx = wx - loc.x, cvy = wy - loc.y;
      uvs.push(
        uOff + vec2Dot(rvx, rvy, cvx, cvy) / (uScale * 4),
        vOff - vec2Dot(rnx, rny, cvx, cvy) / (vScale * 4)
      );
    }
  }

  for (let ui = 0; ui < uSteps - 1; ui++) {
    for (let vi = 0; vi < vSteps - 1; vi++) {
      const base = ui * vSteps + vi;
      indices.push(base, base+1, base+vSteps, base+1, base+vSteps+1, base+vSteps);
    }
  }

  return { positions, uvs, indices };
}
