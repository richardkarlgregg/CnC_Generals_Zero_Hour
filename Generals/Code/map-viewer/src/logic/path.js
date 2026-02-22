// Mirrors Path and PathNode from AIPathfind.h
// Path is a linked list of nodes; optimize() does LOS-based smoothing.

export class PathNode {
  constructor(x, y, z) {
    this.pos = { x, y, z };
    this.next = null;
    this.prev = null;
    this.nextOptimized = null;
    this.canOptimize = true;
  }
}

/**
 * Mirrors Path (AIPathfind.h ~141-192).
 * Linked list of PathNodes with LOS optimization.
 */
export class Path {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentNode = null;
    this.nodeCount = 0;
  }

  prependNode(x, y, z) {
    const node = new PathNode(x, y, z);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.nodeCount++;
    return node;
  }

  appendNode(x, y, z) {
    const node = new PathNode(x, y, z);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.nodeCount++;
    return node;
  }

  /**
   * Mirrors Path::optimize() from AIPathfind.cpp:454-583.
   * For each anchor, finds the farthest node with clear LOS and sets nextOptimized.
   *
   * In Generals, isLinePassable is called with the unit's pathfind radius
   * (from getRadiusAndCenter), so at each cell along the Bresenham line, a
   * radius-sized block is checked via checkForMovement. We mirror this by
   * checking a block of cells at each step.
   */
  optimize(grid, pathRadius = 0, centerInCell = false, requestingUnitId = 0) {
    if (!this.head || this.nodeCount < 2) {
      if (this.head) {
        this.head.nextOptimized = null;
        this.currentNode = this.head;
      }
      return;
    }

    let anchor = this.head;
    this.currentNode = this.head;

    while (anchor && anchor.next) {
      let farthestPassable = anchor.next;
      let test = anchor.next.next;

      while (test) {
        if (!farthestPassable.canOptimize) break;

        if (grid && isLinePassableWithRadius(grid, anchor.pos, test.pos, pathRadius, centerInCell, requestingUnitId)) {
          farthestPassable = test;
        } else {
          break;
        }
        test = test.next;
      }

      anchor.nextOptimized = farthestPassable;

      const dx = farthestPassable.pos.x - anchor.pos.x;
      const dz = farthestPassable.pos.z - anchor.pos.z;
      anchor.nextOptDist = Math.sqrt(dx * dx + dz * dz);
      if (anchor.nextOptDist > 0.001) {
        anchor.nextOptDirX = dx / anchor.nextOptDist;
        anchor.nextOptDirZ = dz / anchor.nextOptDist;
      } else {
        anchor.nextOptDirX = 0;
        anchor.nextOptDirZ = 0;
      }

      anchor = farthestPassable;
    }

    if (anchor) {
      anchor.nextOptimized = null;
    }
  }

  getStart() {
    return this.head;
  }
}

/**
 * Mirrors Pathfinder::iterateCellsAlongLine + linePassableCallback
 * (AIPathfind.cpp:8489-8586, 8957-8996).
 *
 * Generals' version checks intermediate cells during diagonal steps,
 * visiting MORE cells than standard Bresenham. This prevents the LOS
 * optimization from cutting through obstacle corners.
 *
 * At each cell: checks validMovementPosition (single cell type) AND
 * checkMovementBlock (radius block for unit occupancy).
 */
function isLinePassableWithRadius(grid, from, to, pathRadius, centerInCell, requestingUnitId = 0) {
  const cellFrom = grid.worldToCell(from.x, from.z);
  const cellTo = grid.worldToCell(to.x, to.z);

  return iterateCellsAlongLine(grid, cellFrom.x, cellFrom.y, cellTo.x, cellTo.y,
    requestingUnitId, pathRadius, centerInCell);
}

/**
 * Mirrors Generals' iterateCellsAlongLine (AIPathfind.cpp:8506-8586).
 * Uses Bresenham with intermediate cell checks on diagonal steps.
 */
function iterateCellsAlongLine(grid, startX, startY, endX, endY, requestingUnitId, pathRadius, centerInCell) {
  const delta_x = Math.abs(endX - startX);
  const delta_y = Math.abs(endY - startY);
  let x = startX;
  let y = startY;

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
    if (!cellPassableForLine(grid, x, y, requestingUnitId, pathRadius, centerInCell)) return false;

    num += numadd;
    if (num >= den) {
      num -= den;
      x += xinc1;
      y += yinc1;
      // Intermediate diagonal cell check (matches Generals)
      if (!cellPassableForLine(grid, x, y, requestingUnitId, pathRadius, centerInCell)) return false;
    }
    x += xinc2;
    y += yinc2;
  }
  return true;
}

/**
 * Mirrors linePassableCallback: checks both cell type (validMovementPosition)
 * and unit block (checkMovementBlock) for a cell along a LOS line.
 */
function cellPassableForLine(grid, x, y, requestingUnitId, pathRadius, centerInCell) {
  if (!grid.validMovementPosition(x, y)) return false;
  if (!grid.checkMovementBlock(x, y, requestingUnitId, pathRadius, centerInCell)) return false;
  return true;
}
