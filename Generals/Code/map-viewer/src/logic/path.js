// Mirrors Path and PathNode from AIPathfind.h
// Path is a linked list of nodes; optimize() does LOS-based smoothing.

/**
 * Mirrors PathNode (AIPathfind.h ~57-125).
 */
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
   * Mirrors Path::optimize() from AIPathfind.cpp:457-579.
   * Line-of-sight optimization: for each anchor, find the farthest reachable node
   * in a straight passable line, and set it as nextOptimized.
   */
  optimize(grid) {
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

        if (grid && isLinePassable(grid, anchor.pos, test.pos)) {
          farthestPassable = test;
        } else {
          break;
        }
        test = test.next;
      }

      anchor.nextOptimized = farthestPassable;

      // Compute direction and distance for locomotor
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

    // Last node has no next
    if (anchor) {
      anchor.nextOptimized = null;
    }
  }

  getStart() {
    return this.head;
  }
}

/**
 * Bresenham line check on the pathfinding grid.
 * Mirrors isLinePassable in AIPathfind.cpp.
 */
function isLinePassable(grid, from, to) {
  const cellFrom = grid.worldToCell(from.x, from.z);
  const cellTo = grid.worldToCell(to.x, to.z);

  let x0 = cellFrom.x, y0 = cellFrom.y;
  const x1 = cellTo.x, y1 = cellTo.y;

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (!grid.isCellPassable(grid.getCell(x0, y0))) return false;

    if (x0 === x1 && y0 === y1) break;

    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx)  { err += dx; y0 += sy; }
  }
  return true;
}
