// Mirrors Pathfinder from AIPathfind.h / AIPathfind.cpp
// 8-directional A* on PathfindGrid with per-frame budget processing.

import { COST_ORTHOGONAL, COST_DIAGONAL, PATHFIND_CELLS_PER_FRAME, PATHFIND_CELL_SIZE } from '../constants.js';
import { Path } from './path.js';
import { CellType } from './pathfindGrid.js';
import { getTerrainHeightAtWorld } from '../terrain/update.js';
import state from '../state.js';

// 8-direction deltas matching Generals AIPathfind.cpp:5636
const DELTA = [
  { dx: 1, dy: 0, cost: COST_ORTHOGONAL },
  { dx: 0, dy: 1, cost: COST_ORTHOGONAL },
  { dx:-1, dy: 0, cost: COST_ORTHOGONAL },
  { dx: 0, dy:-1, cost: COST_ORTHOGONAL },
  { dx: 1, dy: 1, cost: COST_DIAGONAL },
  { dx:-1, dy: 1, cost: COST_DIAGONAL },
  { dx:-1, dy:-1, cost: COST_DIAGONAL },
  { dx: 1, dy:-1, cost: COST_DIAGONAL },
];

// Turn cost penalties matching Generals
const TURN_COST_45  = 1;
const TURN_COST_90  = 2;
const TURN_COST_135 = 4;

class CellInfo {
  constructor() {
    this.reset();
  }
  reset() {
    this.totalCost = Infinity;
    this.costSoFar = 0;
    this.parentX = -1;
    this.parentY = -1;
    this.parentDir = -1;
    this.onOpen = false;
    this.onClosed = false;
  }
}

class BinaryHeap {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
    this._bubbleUp(this.data.length - 1);
  }

  pop() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._sinkDown(0);
    }
    return top;
  }

  get size() {
    return this.data.length;
  }

  clear() {
    this.data.length = 0;
  }

  _bubbleUp(idx) {
    const node = this.data[idx];
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1;
      const parent = this.data[parentIdx];
      if (node.totalCost >= parent.totalCost) break;
      this.data[parentIdx] = node;
      this.data[idx] = parent;
      idx = parentIdx;
    }
  }

  _sinkDown(idx) {
    const length = this.data.length;
    const node = this.data[idx];
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;
      if (left < length && this.data[left].totalCost < this.data[smallest].totalCost) smallest = left;
      if (right < length && this.data[right].totalCost < this.data[smallest].totalCost) smallest = right;
      if (smallest === idx) break;
      this.data[idx] = this.data[smallest];
      this.data[smallest] = node;
      idx = smallest;
    }
  }
}

export class Pathfinder {
  constructor(grid) {
    this.grid = grid;
    this.pathQueue = [];
    this.cellInfoPool = new Map();
    this.openList = new BinaryHeap();
  }

  queueForPath(unitId) {
    if (!this.pathQueue.includes(unitId)) {
      this.pathQueue.push(unitId);
    }
  }

  processPathfindQueue() {
    let cellBudget = PATHFIND_CELLS_PER_FRAME;

    while (this.pathQueue.length > 0 && cellBudget > 0) {
      const unitId = this.pathQueue.shift();
      const unit = state.units.get(unitId);
      if (!unit || !unit.ai || !unit.ai.waitingForPath) continue;

      unit.ai.doPathfind(this);
      cellBudget -= 500;
    }
  }

  findPath(from, to, unit) {
    const grid = this.grid;
    if (!grid) return null;

    const startCell = grid.worldToCell(from.x, from.z);
    const goalCell = grid.worldToCell(to.x, to.z);
    const unitId = unit ? unit.id : 0;

    // Get unit's pathfinding radius (mirrors getRadiusAndCenter)
    const collisionRadius = (unit && unit.ai) ? unit.ai.locomotor.collisionRadius : 5;
    const { radius: pathRadius, centerInCell } = grid.getRadiusAndCenter(collisionRadius);

    let startZone = grid.getZone(startCell.x, startCell.y);
    const goalZone = grid.getZone(goalCell.x, goalCell.y);

    // If unit starts on an obstacle cell (zone 0), find the nearest passable cell
    // and use that as the effective start for zone comparison.
    if (startZone === 0) {
      const fixedStart = this._findNearestPassableCell(startCell.x, startCell.y);
      if (!fixedStart) return null;
      startCell = fixedStart;
      startZone = grid.getZone(fixedStart.x, fixedStart.y);
    }

    if (startZone !== goalZone || startZone === 0) {
      return this.findClosestPath(from, to, unit, startCell, goalCell, pathRadius, centerInCell);
    }

    return this.internalFindPath(startCell, goalCell, from, to, unitId, pathRadius, centerInCell);
  }

  findClosestPath(from, to, unit, startCell, goalCell, pathRadius, centerInCell) {
    const grid = this.grid;
    const startZone = grid.getZone(startCell.x, startCell.y);
    let bestDist = Infinity;
    let bestX = goalCell.x, bestY = goalCell.y;
    const searchRadius = 20;

    for (let dy = -searchRadius; dy <= searchRadius; dy++) {
      for (let dx = -searchRadius; dx <= searchRadius; dx++) {
        const cx = goalCell.x + dx;
        const cy = goalCell.y + dy;
        if (grid.getZone(cx, cy) === startZone) {
          const dist = dx * dx + dy * dy;
          if (dist < bestDist) {
            bestDist = dist;
            bestX = cx;
            bestY = cy;
          }
        }
      }
    }

    if (bestDist === Infinity) return null;

    const newGoal = { x: bestX, y: bestY };
    const world = grid.cellToWorld(bestX, bestY);
    const unitId = unit ? unit.id : 0;
    return this.internalFindPath(startCell, newGoal, from, { x: world.x, y: 0, z: world.z }, unitId, pathRadius, centerInCell);
  }

  /**
   * A* pathfinding. Mirrors examineNeighboringCells (AIPathfind.cpp:5610-5855).
   *
   * Generals uses two separate checks per neighbor:
   *   1. validMovementPosition (single cell: terrain/obstacle type)
   *   2. checkForMovement (radius block: unit occupancy)
   * Diagonals require at least one adjacent orthogonal to be open (neighborFlags).
   */
  internalFindPath(startCell, goalCell, fromWorld, toWorld, requestingUnitId = 0, pathRadius = 0, centerInCell = false) {
    const grid = this.grid;
    this.cellInfoPool.clear();
    this.openList.clear();

    const getCellInfo = (x, y) => {
      const key = y * grid.width + x;
      let info = this.cellInfoPool.get(key);
      if (!info) {
        info = new CellInfo();
        this.cellInfoPool.set(key, info);
      }
      return info;
    };

    const startInfo = getCellInfo(startCell.x, startCell.y);
    startInfo.costSoFar = 0;
    startInfo.totalCost = costToGoal(startCell.x, startCell.y, goalCell.x, goalCell.y);
    startInfo.onOpen = true;

    this.openList.push({
      x: startCell.x, y: startCell.y,
      totalCost: startInfo.totalCost,
    });

    let cellCount = 0;
    const maxCells = PATHFIND_CELLS_PER_FRAME;

    while (this.openList.size > 0 && cellCount < maxCells) {
      const current = this.openList.pop();
      const cx = current.x, cy = current.y;
      const currentInfo = getCellInfo(cx, cy);

      if (currentInfo.onClosed) continue;
      currentInfo.onClosed = true;
      currentInfo.onOpen = false;
      cellCount++;

      if (cx === goalCell.x && cy === goalCell.y) {
        return this.buildActualPath(getCellInfo, startCell, goalCell, fromWorld, toWorld, pathRadius, centerInCell, requestingUnitId);
      }

      // Track which orthogonal neighbors are passable (mirrors neighborFlags[8])
      // Used to gate diagonal moves (Generals: AIPathfind.cpp:5637-5647)
      const neighborOpen = [false, false, false, false, false, false, false, false];

      for (let i = 0; i < 8; i++) {
        const nx = cx + DELTA[i].dx;
        const ny = cy + DELTA[i].dy;

        if (nx < 0 || nx >= grid.width || ny < 0 || ny >= grid.height) continue;

        // Step 1: validMovementPosition on the destination cell (single cell type check)
        if (!grid.validMovementPosition(nx, ny)) continue;

        // Step 2: checkMovementBlock for the radius block (obstacle + unit occupancy)
        if (!grid.checkMovementBlock(nx, ny, requestingUnitId, pathRadius, centerInCell)) continue;

        // Diagonal gating: at least one adjacent orthogonal must be open
        // Mirrors: if (!neighborFlags[adjacent[i-4]] && !neighborFlags[adjacent[i-3]]) continue;
        // adjacent[] = {0, 1, 2, 3, 0}
        if (i >= 4) {
          const adj1 = (i - 4);       // e.g. i=4(NE): adj1=0(E)
          const adj2 = (i - 4 + 1);   // e.g. i=4(NE): adj2=1(N)
          if (!neighborOpen[adj1] && !neighborOpen[adj2 % 4]) continue;
        }

        neighborOpen[i] = true;

        const neighborInfo = getCellInfo(nx, ny);
        if (neighborInfo.onClosed) continue;

        let moveCost = DELTA[i].cost;

        const nIdx = ny * grid.width + nx;
        if (grid.unitPresence[nIdx] !== 0 && grid.unitPos[nIdx] !== requestingUnitId) {
          moveCost += COST_ORTHOGONAL * 3;
        }

        if (currentInfo.parentDir >= 0) {
          const dirDiff = Math.abs(i - currentInfo.parentDir);
          const turnAmount = Math.min(dirDiff, 8 - dirDiff);
          if (turnAmount === 1) moveCost += TURN_COST_45;
          else if (turnAmount === 2) moveCost += TURN_COST_90;
          else if (turnAmount >= 3) moveCost += TURN_COST_135;
        }

        const newCost = currentInfo.costSoFar + moveCost;
        if (newCost < neighborInfo.costSoFar || !neighborInfo.onOpen) {
          neighborInfo.costSoFar = newCost;
          neighborInfo.totalCost = newCost + costToGoal(nx, ny, goalCell.x, goalCell.y);
          neighborInfo.parentX = cx;
          neighborInfo.parentY = cy;
          neighborInfo.parentDir = i;
          neighborInfo.onOpen = true;

          this.openList.push({
            x: nx, y: ny,
            totalCost: neighborInfo.totalCost,
          });
        }
      }
    }

    return null;
  }

  buildActualPath(getCellInfo, startCell, goalCell, fromWorld, toWorld, pathRadius, centerInCell, requestingUnitId = 0) {
    const grid = this.grid;
    const path = new Path();

    let cx = goalCell.x, cy = goalCell.y;
    const visited = new Set();

    while (!(cx === startCell.x && cy === startCell.y)) {
      const key = cy * grid.width + cx;
      if (visited.has(key)) break;
      visited.add(key);

      const world = grid.cellToWorld(cx, cy);
      const hy = getTerrainHeightAtSafe(world.x, world.z);
      path.prependNode(world.x, hy, world.z);

      const info = getCellInfo(cx, cy);
      if (info.parentX < 0) break;
      cx = info.parentX;
      cy = info.parentY;
    }

    path.prependNode(fromWorld.x, fromWorld.y, fromWorld.z);

    if (path.tail && toWorld) {
      path.tail.pos.x = toWorld.x;
      path.tail.pos.z = toWorld.z;
      path.tail.pos.y = getTerrainHeightAtSafe(toWorld.x, toWorld.z);
    }

    const preOptNodes = path.nodeCount;
    path.optimize(grid, pathRadius, centerInCell, requestingUnitId);

    let optNodes = 0;
    let n = path.head;
    while (n) { optNodes++; n = n.nextOptimized || null; if (!n) break; }

    console.log(`Path: ${preOptNodes} raw → ${optNodes} optimized nodes (radius=${pathRadius}, center=${centerInCell})`);

    return path;
  }

  _findNearestPassableCell(cx, cy) {
    const grid = this.grid;
    for (let r = 1; r <= 10; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue;
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || nx >= grid.width || ny < 0 || ny >= grid.height) continue;
          if (grid.getZone(nx, ny) > 0) {
            return { x: nx, y: ny };
          }
        }
      }
    }
    return null;
  }

  /**
   * Mirrors Pathfinder::isLinePassable (AIPathfind.cpp:9025-9041).
   * Uses Generals' iterateCellsAlongLine which checks intermediate cells
   * during diagonal steps to prevent corner-cutting.
   */
  isLinePassable(grid, from, to, pathRadius, centerInCell, requestingUnitId = 0) {
    const cellFrom = grid.worldToCell(from.x, from.z);
    const cellTo = grid.worldToCell(to.x, to.z);
    return this._iterateCellsAlongLine(grid, cellFrom.x, cellFrom.y,
      cellTo.x, cellTo.y, requestingUnitId, pathRadius, centerInCell);
  }

  /**
   * Mirrors Generals' iterateCellsAlongLine (AIPathfind.cpp:8506-8586).
   */
  _iterateCellsAlongLine(grid, startX, startY, endX, endY, requestingUnitId, pathRadius, centerInCell) {
    const delta_x = Math.abs(endX - startX);
    const delta_y = Math.abs(endY - startY);
    let x = startX, y = startY;

    let xinc1, xinc2, yinc1, yinc2;
    xinc1 = xinc2 = endX >= startX ? 1 : -1;
    yinc1 = yinc2 = endY >= startY ? 1 : -1;

    let den, num, numadd, numpixels;
    if (delta_x >= delta_y) {
      xinc1 = 0;
      yinc2 = 0;
      den = delta_x;
      num = delta_x >> 1;
      numadd = delta_y;
      numpixels = delta_x;
    } else {
      xinc2 = 0;
      yinc1 = 0;
      den = delta_y;
      num = delta_y >> 1;
      numadd = delta_x;
      numpixels = delta_y;
    }

    for (let curpixel = 0; curpixel <= numpixels; curpixel++) {
      if (!grid.validMovementPosition(x, y)) return false;
      if (!grid.checkMovementBlock(x, y, requestingUnitId, pathRadius, centerInCell)) return false;

      num += numadd;
      if (num >= den) {
        num -= den;
        x += xinc1;
        y += yinc1;
        if (!grid.validMovementPosition(x, y)) return false;
        if (!grid.checkMovementBlock(x, y, requestingUnitId, pathRadius, centerInCell)) return false;
      }
      x += xinc2;
      y += yinc2;
    }
    return true;
  }

  /**
   * Mirrors getMoveAwayFromPath (AIPathfind.cpp).
   * Finds a short path for a unit to step aside from a blocking unit's path.
   * Uses the pathfinder to find a valid destination (not a naive offset).
   */
  getMoveAwayFromPath(unit, blockerUnit) {
    const grid = this.grid;
    if (!grid) return null;

    const pos = unit.position;
    const blockerPos = blockerUnit.position;

    // Compute away direction
    const awayDx = pos.x - blockerPos.x;
    const awayDz = pos.z - blockerPos.z;
    const awayDist = Math.sqrt(awayDx * awayDx + awayDz * awayDz);
    if (awayDist < 0.001) return null;

    const nx = awayDx / awayDist;
    const nz = awayDz / awayDist;

    // Try several distances to find a passable cell (spiral outward)
    const collisionRadius = unit.ai ? unit.ai.locomotor.collisionRadius : 5;
    const { radius: pathRadius, centerInCell } = grid.getRadiusAndCenter(collisionRadius);
    const stepDist = PATHFIND_CELL_SIZE * 2;

    for (let dist = stepDist; dist <= stepDist * 4; dist += stepDist) {
      // Try the away direction first, then perpendicular
      const candidates = [
        { x: pos.x + nx * dist, z: pos.z + nz * dist },
        { x: pos.x + nz * dist, z: pos.z - nx * dist },
        { x: pos.x - nz * dist, z: pos.z + nx * dist },
      ];

      for (const cand of candidates) {
        const cell = grid.worldToCell(cand.x, cand.z);
        if (grid.checkMovementBlock(cell.x, cell.y, unit.id, pathRadius, centerInCell)) {
          // Valid destination -- find path to it
          const startCell = grid.worldToCell(pos.x, pos.z);
          const goalCell = cell;
          return this.internalFindPath(startCell, goalCell, pos,
            { x: cand.x, y: pos.y, z: cand.z }, unit.id, pathRadius, centerInCell);
        }
      }
    }
    return null;
  }
}

function costToGoal(x, y, gx, gy) {
  const dx = Math.abs(x - gx);
  const dy = Math.abs(y - gy);
  return COST_ORTHOGONAL * (dx + dy) + (COST_DIAGONAL - 2 * COST_ORTHOGONAL) * Math.min(dx, dy);
}

function getTerrainHeightAtSafe(worldX, worldZ) {
  try {
    return getTerrainHeightAtWorld(worldX, worldZ);
  } catch {
    return 0;
  }
}
