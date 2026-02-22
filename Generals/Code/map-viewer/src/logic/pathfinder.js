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

/**
 * A* cell info used during pathfinding. Pooled per-search.
 * Mirrors PathfindCellInfo.
 */
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

/**
 * Binary min-heap for the A* open list.
 * Sorted by totalCost (costSoFar + heuristic).
 */
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

  /**
   * Queue a unit for pathfinding. Mirrors Pathfinder::queueForPath.
   */
  queueForPath(unitId) {
    if (!this.pathQueue.includes(unitId)) {
      this.pathQueue.push(unitId);
    }
  }

  /**
   * Process queued pathfinding requests with a per-frame cell budget.
   * Mirrors Pathfinder::processPathfindQueue (AIPathfind.cpp:5415).
   */
  processPathfindQueue() {
    let cellBudget = PATHFIND_CELLS_PER_FRAME;

    while (this.pathQueue.length > 0 && cellBudget > 0) {
      const unitId = this.pathQueue.shift();
      const unit = state.units.get(unitId);
      if (!unit || !unit.ai || !unit.ai.waitingForPath) continue;

      unit.ai.doPathfind(this);
      cellBudget -= 500; // approximate cost per path
    }
  }

  /**
   * Find a path from start to goal using A*.
   * Mirrors Pathfinder::internalFindPath (AIPathfind.cpp:6098).
   */
  findPath(from, to, unit) {
    const grid = this.grid;
    if (!grid) return null;

    const startCell = grid.worldToCell(from.x, from.z);
    const goalCell = grid.worldToCell(to.x, to.z);

    // Zone check -- quick reject if unreachable
    const startZone = grid.getZone(startCell.x, startCell.y);
    const goalZone = grid.getZone(goalCell.x, goalCell.y);
    if (startZone !== goalZone || startZone === 0) {
      return this.findClosestPath(from, to, unit, startCell, goalCell);
    }

    return this.internalFindPath(startCell, goalCell, from, to);
  }

  /**
   * If goal is unreachable, find path to nearest reachable cell.
   * Mirrors Pathfinder::findClosestPath.
   */
  findClosestPath(from, to, unit, startCell, goalCell) {
    // Find closest passable cell to the goal
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
    return this.internalFindPath(startCell, newGoal, from, { x: world.x, y: 0, z: world.z });
  }

  internalFindPath(startCell, goalCell, fromWorld, toWorld) {
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

      // Goal reached
      if (cx === goalCell.x && cy === goalCell.y) {
        return this.buildActualPath(getCellInfo, startCell, goalCell, fromWorld, toWorld);
      }

      // Examine 8 neighbors (mirrors examineNeighboringCells)
      for (let i = 0; i < 8; i++) {
        const nx = cx + DELTA[i].dx;
        const ny = cy + DELTA[i].dy;

        if (nx < 0 || nx >= grid.width || ny < 0 || ny >= grid.height) continue;

        const cellType = grid.getCell(nx, ny);
        if (!grid.isCellPassable(cellType)) continue;

        // Diagonal movement: check both adjacent cells are passable
        if (i >= 4) {
          const adj1 = grid.getCell(cx + DELTA[i].dx, cy);
          const adj2 = grid.getCell(cx, cy + DELTA[i].dy);
          if (!grid.isCellPassable(adj1) || !grid.isCellPassable(adj2)) continue;
        }

        const neighborInfo = getCellInfo(nx, ny);
        if (neighborInfo.onClosed) continue;

        let moveCost = DELTA[i].cost;

        // Turn cost (mirrors PathfindCell::costSoFar with turn penalty)
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

    // No path found
    return null;
  }

  /**
   * Build the path by tracing parents from goal to start.
   * Mirrors Pathfinder::buildActualPath (AIPathfind.cpp:8358).
   */
  buildActualPath(getCellInfo, startCell, goalCell, fromWorld, toWorld) {
    const grid = this.grid;
    const path = new Path();

    // Trace back from goal to start
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

    // Prepend exact start position
    path.prependNode(fromWorld.x, fromWorld.y, fromWorld.z);

    // Set exact goal position on last node
    if (path.tail && toWorld) {
      path.tail.pos.x = toWorld.x;
      path.tail.pos.z = toWorld.z;
      path.tail.pos.y = getTerrainHeightAtSafe(toWorld.x, toWorld.z);
    }

    // Optimize path with LOS checks
    path.optimize(grid);
    return path;
  }
}

/**
 * Octile distance heuristic matching PathfindCell::costToGoal.
 */
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
