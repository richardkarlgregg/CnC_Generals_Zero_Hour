// Mirrors PathfindCell and grid from AIPathfind.h
// Cell-based grid built from heightmap data for A* pathfinding.

import { PATHFIND_CELL_SIZE } from '../constants.js';
import { MAP_XY_FACTOR, MAP_HEIGHT_SCALE } from '../constants.js';

export const CellType = Object.freeze({
  CELL_CLEAR:      0,
  CELL_WATER:      1,
  CELL_CLIFF:      2,
  CELL_RUBBLE:     3,
  CELL_OBSTACLE:   4,
  CELL_IMPASSABLE: 5,
});

// Surface types that locomotors can traverse (bitmask)
export const LocomotorSurface = Object.freeze({
  GROUND: 1,
  WATER:  2,
  CLIFF:  4,
  AIR:    8,
  RUBBLE: 16,
});

const CLIFF_SLOPE_THRESHOLD = 0.6;

export class PathfindGrid {
  constructor() {
    this.cells = null;
    this.width = 0;
    this.height = 0;
    this.zones = null;
    this.nextZoneId = 1;
  }

  /**
   * Build the pathfinding grid from heightmap data.
   * Grid uses Three.js world coordinates: X = map X, grid Y = Three.js Z direction.
   * Mirrors Pathfinder::classifyMap / classifyMapCell.
   */
  buildFromHeightmap(heightMap, waterAreas, objectsList) {
    const hm = heightMap;
    const hmW = hm.width;
    const hmH = hm.height;
    const border = hm.borderSize;

    const playW = hmW - 2 * border;
    const playH = hmH - 2 * border;
    this.playH = playH;

    // Grid dimensions: Three.js world size / cell size
    this.width = Math.floor((playW * MAP_XY_FACTOR) / PATHFIND_CELL_SIZE);
    this.height = Math.floor((playH * MAP_XY_FACTOR) / PATHFIND_CELL_SIZE);

    this.cells = new Uint8Array(this.width * this.height);
    this.cells.fill(CellType.CELL_CLEAR);

    // Classify cells by terrain slope
    // Grid cell (cx, cy) corresponds to Three.js world (cx*CELL_SIZE, cy*CELL_SIZE)
    for (let cy = 0; cy < this.height; cy++) {
      for (let cx = 0; cx < this.width; cx++) {
        const threeX = cx * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        const threeZ = cy * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        // Convert Three.js Z back to map Y for heightmap lookup
        const mapY = (playH - 1) * MAP_XY_FACTOR - threeZ;
        const cellType = this.classifyCell(threeX, mapY, hm, border);
        this.cells[cy * this.width + cx] = cellType;
      }
    }

    // Mark obstacle cells for structures
    if (objectsList) {
      this.classifyObjectFootprints(objectsList, playH);
    }

    // Build zones via flood fill
    this.buildZones();
  }

  classifyCell(mapX, mapY, hm, border) {
    const gx = mapX / MAP_XY_FACTOR + border;
    const gy = (hm.height - 1 - border) - mapY / MAP_XY_FACTOR;

    const ix = Math.floor(gx);
    const iy = Math.floor(gy);
    if (ix < 0 || iy < 0 || ix >= hm.width - 1 || iy >= hm.height - 1) {
      return CellType.CELL_IMPASSABLE;
    }

    // Sample 4 corners of the cell to detect slope
    const h00 = hm.data[iy * hm.width + ix] * MAP_HEIGHT_SCALE;
    const h10 = hm.data[iy * hm.width + (ix + 1)] * MAP_HEIGHT_SCALE;
    const h01 = hm.data[(iy + 1) * hm.width + ix] * MAP_HEIGHT_SCALE;
    const h11 = hm.data[(iy + 1) * hm.width + (ix + 1)] * MAP_HEIGHT_SCALE;

    const maxH = Math.max(h00, h10, h01, h11);
    const minH = Math.min(h00, h10, h01, h11);
    const slope = (maxH - minH) / PATHFIND_CELL_SIZE;

    if (slope > CLIFF_SLOPE_THRESHOLD) return CellType.CELL_CLIFF;

    return CellType.CELL_CLEAR;
  }

  /**
   * Mark structure footprints as obstacles.
   * Mirrors Pathfinder::classifyObjectFootprint.
   */
  classifyObjectFootprints(objects, playH) {
    for (const obj of objects) {
      const lname = obj.name.toLowerCase();
      const isStructure = lname.includes('structure') || lname.includes('building') ||
                          lname.includes('commandcenter') || lname.includes('barracks') ||
                          lname.includes('factory') || lname.includes('power') ||
                          lname.includes('supply') || lname.includes('techbuilding');
      if (!isStructure) continue;

      // Convert to Three.js world coords (same as markers.js)
      const threeX = obj.x;
      const threeZ = (playH - 1) * MAP_XY_FACTOR - obj.y;

      const footprintRadius = 2;
      const cell = this.worldToCell(threeX, threeZ);

      for (let dy = -footprintRadius; dy <= footprintRadius; dy++) {
        for (let dx = -footprintRadius; dx <= footprintRadius; dx++) {
          const gx = cell.x + dx;
          const gy = cell.y + dy;
          if (gx >= 0 && gx < this.width && gy >= 0 && gy < this.height) {
            this.cells[gy * this.width + gx] = CellType.CELL_OBSTACLE;
          }
        }
      }
    }
  }

  /**
   * Flood-fill zones for quick reachability checks.
   * Mirrors PathfindZoneManager.
   */
  buildZones() {
    this.zones = new Int32Array(this.width * this.height);
    this.zones.fill(0);
    this.nextZoneId = 1;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = y * this.width + x;
        if (this.zones[idx] !== 0) continue;
        if (!this.isCellPassable(this.cells[idx])) continue;
        this.floodFillZone(x, y, this.nextZoneId++);
      }
    }
  }

  floodFillZone(startX, startY, zoneId) {
    const stack = [[startX, startY]];
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      if (x < 0 || x >= this.width || y < 0 || y >= this.height) continue;
      const idx = y * this.width + x;
      if (this.zones[idx] !== 0) continue;
      if (!this.isCellPassable(this.cells[idx])) continue;

      this.zones[idx] = zoneId;

      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
  }

  isCellPassable(cellType) {
    return cellType === CellType.CELL_CLEAR || cellType === CellType.CELL_RUBBLE;
  }

  getCell(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return CellType.CELL_IMPASSABLE;
    return this.cells[y * this.width + x];
  }

  getZone(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return 0;
    return this.zones[y * this.width + x];
  }

  worldToCell(worldX, worldZ) {
    return {
      x: Math.floor(worldX / PATHFIND_CELL_SIZE),
      y: Math.floor(worldZ / PATHFIND_CELL_SIZE),
    };
  }

  cellToWorld(cellX, cellY) {
    return {
      x: cellX * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2,
      z: cellY * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2,
    };
  }
}
