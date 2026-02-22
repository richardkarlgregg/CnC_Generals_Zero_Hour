// Mirrors PathfindCell and grid from AIPathfind.h
// Cell-based grid built from heightmap data for A* pathfinding.

import { PATHFIND_CELL_SIZE } from '../constants.js';
import { MAP_XY_FACTOR, MAP_HEIGHT_SCALE } from '../constants.js';
import { objectKindOfMap, objectGeometryMap } from '../parsers/ini.js';

export const CellType = Object.freeze({
  CELL_CLEAR:      0,
  CELL_WATER:      1,
  CELL_CLIFF:      2,
  CELL_RUBBLE:     3,
  CELL_OBSTACLE:   4,
  CELL_IMPASSABLE: 5,
});

// Unit presence flags -- mirrors AIPathfind.h:263-269
export const UnitPresence = Object.freeze({
  NO_UNITS:             0,
  UNIT_GOAL:            1,
  UNIT_PRESENT_MOVING:  2,
  UNIT_PRESENT_FIXED:   3,
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

// Default geometry radii (world units) for structures without GeometryInfo.
// Typical Generals buildings have majorRadius ~12-30.
const DEFAULT_GEOM_RADIUS = 15;
const LARGE_GEOM_RADIUS = 25;
const SMALL_GEOM_RADIUS = 8;

export class PathfindGrid {
  constructor() {
    this.cells = null;
    this.width = 0;
    this.height = 0;
    this.zones = null;
    this.nextZoneId = 1;

    // Unit occupancy layer -- mirrors setPosUnit/setGoalUnit
    // Stores unitId per cell (0 = empty)
    this.unitPos = null;
    this.unitGoal = null;
    this.unitPresence = null;
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

    const totalCells = this.width * this.height;
    this.cells = new Uint8Array(totalCells);
    this.cells.fill(CellType.CELL_CLEAR);

    // Unit occupancy layers
    this.unitPos = new Int32Array(totalCells);
    this.unitGoal = new Int32Array(totalCells);
    this.unitPresence = new Uint8Array(totalCells);

    // Per-unit cell tracking for O(1) clear instead of full-array scan
    this._unitPosCell = new Map();   // unitId -> cellIndex
    this._unitGoalCell = new Map();  // unitId -> cellIndex

    // Classify cells by terrain slope
    for (let cy = 0; cy < this.height; cy++) {
      for (let cx = 0; cx < this.width; cx++) {
        const threeX = cx * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        const threeZ = cy * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        const mapY = (playH - 1) * MAP_XY_FACTOR - threeZ;
        const cellType = this.classifyCell(threeX, mapY, hm, border);
        this.cells[cy * this.width + cx] = cellType;
      }
    }

    // Mark obstacle cells for structures (mirrors classifyObjectFootprint loop at map load)
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
   * Mirrors Pathfinder::classifyObjectFootprint + internal_classifyObjectFootprint
   * (AIPathfind.cpp:3660-3892).
   *
   * Filter (from Generals):
   *   - Skip KINDOF_MINE, KINDOF_PROJECTILE, KINDOF_BRIDGE_TOWER
   *   - Must be KINDOF_STRUCTURE
   *   - Must NOT be mobile
   *   - GeometryIsSmall must be false
   *
   * Footprint (from Generals):
   *   BOX: rotated rectangle using majorRadius/minorRadius, sampled at STEP_SIZE = CELL/2
   *   SPHERE/CYLINDER: circular, size = (majorRadius / CELL_SIZE) + 0.4
   */
  /**
   * Mirrors the map-load loop in AIPathfind.cpp:4103-4112:
   *   for (obj = getFirstObject(); obj; obj = obj->getNextObject())
   *     classifyObjectFootprint(obj, true);
   *
   * Each object's classifyObjectFootprint (lines 3660-3734) filters:
   *   - Skip KINDOF_MINE, KINDOF_PROJECTILE, KINDOF_BRIDGE_TOWER
   *   - Must be KINDOF_STRUCTURE
   *   - Must not be mobile
   *   - GeometryIsSmall must be false
   * Then internal_classifyObjectFootprint marks cells from GeometryInfo.
   *
   * Objects without a ThingTemplate (no KindOf data) are logged as warnings
   * -- in Generals these would not be placed on the map at all.
   */
  classifyObjectFootprints(objects, playH) {
    let obstacleCount = 0;
    let obstacleCells = 0;
    const missingTemplate = new Map();

    for (const obj of objects) {
      const lname = obj.name.toLowerCase();
      const kindOf = objectKindOfMap.get(lname);
      const geomInfo = objectGeometryMap.get(lname);

      if (!kindOf) {
        // In Generals, objects without a ThingTemplate are not placed (GameLogic.cpp:1620-1632).
        // Log as warning so user knows which objects lack INI data.
        missingTemplate.set(obj.name, (missingTemplate.get(obj.name) || 0) + 1);
        continue;
      }

      // --- Generals filter: classifyObjectFootprint lines 3663-3735 ---
      if (kindOf.has('MINE') || kindOf.has('PROJECTILE') || kindOf.has('BRIDGE_TOWER')) continue;
      if (!kindOf.has('STRUCTURE')) continue;

      // Skip small geometry (Generals: getGeometryInfo().getIsSmall())
      if (geomInfo && geomInfo.isSmall) continue;

      // Determine footprint from GeometryInfo (parsed from INI).
      // Default in Generals: GEOMETRY_SPHERE, majorRadius=1, isSmall=false
      let geomType = 'CYLINDER';
      let majorRadius = DEFAULT_GEOM_RADIUS;
      let minorRadius = DEFAULT_GEOM_RADIUS;

      if (geomInfo) {
        geomType = geomInfo.type;
        majorRadius = geomInfo.majorRadius || DEFAULT_GEOM_RADIUS;
        minorRadius = geomInfo.minorRadius || majorRadius;
      } else {
        if (kindOf.has('HUGE') || kindOf.has('TECH_BUILDING') || kindOf.has('SUPPLY_SOURCE')) {
          majorRadius = LARGE_GEOM_RADIUS;
          minorRadius = LARGE_GEOM_RADIUS;
        } else if (kindOf.has('DEFENSIVE_WALL')) {
          majorRadius = SMALL_GEOM_RADIUS;
          minorRadius = SMALL_GEOM_RADIUS;
        }
      }

      const threeX = obj.x;
      const threeZ = (playH - 1) * MAP_XY_FACTOR - obj.y;

      obstacleCount++;
      const cellCenter = this.worldToCell(threeX, threeZ);

      let markedCells;
      if (geomType === 'BOX') {
        markedCells = this._markBoxFootprint(threeX, threeZ, majorRadius, minorRadius, obj.angle || 0);
      } else {
        markedCells = this._markCircularFootprint(threeX, threeZ, majorRadius);
      }
      obstacleCells += markedCells;
      console.log(`  Obstacle: ${obj.name} at world(${threeX.toFixed(1)}, ${threeZ.toFixed(1)}) cell(${cellCenter.x}, ${cellCenter.y}) geom=${geomType} r=${majorRadius.toFixed(1)} → ${markedCells} cells`);
    }

    console.log(`Pathfind obstacles: ${obstacleCount} objects, ${obstacleCells} cells marked`);

    if (missingTemplate.size > 0) {
      console.groupCollapsed(`Pathfind: ${missingTemplate.size} object types have no INI template (need game data BIG files)`);
      for (const [name, count] of [...missingTemplate].sort((a, b) => b[1] - a[1])) {
        console.log(`  ${name} (x${count})`);
      }
      console.groupEnd();
    }
  }

  /**
   * Mirrors internal_classifyObjectFootprint for GEOMETRY_BOX (AIPathfind.cpp:3739-3785).
   * Samples a rotated rectangle at STEP_SIZE = CELL_SIZE * 0.5 intervals.
   */
  _markBoxFootprint(threeX, threeZ, halfX, halfY, angle) {
    const STEP_SIZE = PATHFIND_CELL_SIZE * 0.5;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const numStepsX = Math.ceil(2 * halfX / STEP_SIZE);
    const numStepsY = Math.ceil(2 * halfY / STEP_SIZE);

    // Top-left corner in world coordinates (rotated)
    const tlX = threeX - halfX * cosA - halfY * sinA;
    const tlZ = threeZ + halfY * cosA - halfX * sinA;

    const stepXX = (2 * halfX * cosA) / Math.max(numStepsX, 1);
    const stepXZ = -(2 * halfX * sinA) / Math.max(numStepsX, 1);
    const stepYX = (2 * halfY * sinA) / Math.max(numStepsY, 1);
    const stepYZ = (2 * halfY * cosA) / Math.max(numStepsY, 1);

    let marked = 0;
    const alreadyMarked = new Set();

    for (let iy = 0; iy <= numStepsY; iy++) {
      for (let ix = 0; ix <= numStepsX; ix++) {
        const wx = tlX + stepXX * ix + stepYX * iy;
        const wz = tlZ + stepXZ * ix + stepYZ * iy;

        const cx = Math.floor((wx + 0.5) / PATHFIND_CELL_SIZE);
        const cz = Math.floor((wz + 0.5) / PATHFIND_CELL_SIZE);

        if (cx < 0 || cx >= this.width || cz < 0 || cz >= this.height) continue;
        const key = cz * this.width + cx;
        if (alreadyMarked.has(key)) continue;
        alreadyMarked.add(key);

        this.cells[key] = CellType.CELL_OBSTACLE;
        marked++;
      }
    }
    return marked;
  }

  /**
   * Mirrors internal_classifyObjectFootprint for GEOMETRY_SPHERE/CYLINDER
   * (AIPathfind.cpp:3788-3835).
   */
  _markCircularFootprint(threeX, threeZ, radius) {
    const centerCellX = threeX / PATHFIND_CELL_SIZE;
    const centerCellZ = threeZ / PATHFIND_CELL_SIZE;

    // Generals: size = (radius / PATHFIND_CELL_SIZE_F) + 0.4f
    const size = (radius / PATHFIND_CELL_SIZE) + 0.4;
    const r2 = size * size;

    // Generals: topLeft = floor(0.5 + (pos - radius) / CELL_SIZE) - 1
    const topLeftX = Math.floor(0.5 + (threeX - radius) / PATHFIND_CELL_SIZE) - 1;
    const topLeftZ = Math.floor(0.5 + (threeZ - radius) / PATHFIND_CELL_SIZE) - 1;

    // Generals: bottomRight = topLeft + 2*size + 2
    const bottomRightX = topLeftX + Math.ceil(2 * size) + 2;
    const bottomRightZ = topLeftZ + Math.ceil(2 * size) + 2;

    let marked = 0;
    for (let gz = topLeftZ; gz < bottomRightZ; gz++) {
      for (let gx = topLeftX; gx < bottomRightX; gx++) {
        if (gx < 0 || gx >= this.width || gz < 0 || gz >= this.height) continue;
        const deltaX = gx + 0.5 - centerCellX;
        const deltaZ = gz + 0.5 - centerCellZ;
        if (deltaX * deltaX + deltaZ * deltaZ <= r2) {
          this.cells[gz * this.width + gx] = CellType.CELL_OBSTACLE;
          marked++;
        }
      }
    }
    return marked;
  }

  // --- Unit occupancy tracking (mirrors updatePos / updateGoal / removePos) ---

  /**
   * Update a unit's position on the grid.
   * Mirrors Pathfinder::updatePos (AIPathfind.cpp:9316).
   */
  updateUnitPos(unitId, worldX, worldZ, isMoving) {
    const cell = this.worldToCell(worldX, worldZ);
    if (cell.x < 0 || cell.x >= this.width || cell.y < 0 || cell.y >= this.height) {
      this.clearUnitPos(unitId);
      return;
    }
    const idx = cell.y * this.width + cell.x;

    // Skip update if already in same cell with same state
    const oldIdx = this._unitPosCell.get(unitId);
    const presence = isMoving ? UnitPresence.UNIT_PRESENT_MOVING : UnitPresence.UNIT_PRESENT_FIXED;
    if (oldIdx === idx && this.unitPresence[idx] === presence) return;

    this.clearUnitPos(unitId);
    this.unitPos[idx] = unitId;
    this.unitPresence[idx] = presence;
    this._unitPosCell.set(unitId, idx);
  }

  /**
   * Update a unit's goal cell on the grid.
   * Mirrors Pathfinder::updateGoal (AIPathfind.cpp:9105).
   */
  updateUnitGoal(unitId, worldX, worldZ) {
    const cell = this.worldToCell(worldX, worldZ);
    if (cell.x < 0 || cell.x >= this.width || cell.y < 0 || cell.y >= this.height) {
      this.clearUnitGoal(unitId);
      return;
    }
    const idx = cell.y * this.width + cell.x;

    const oldIdx = this._unitGoalCell.get(unitId);
    if (oldIdx === idx) return;

    this.clearUnitGoal(unitId);
    this.unitGoal[idx] = unitId;
    this._unitGoalCell.set(unitId, idx);
  }

  clearUnitPos(unitId) {
    const oldIdx = this._unitPosCell.get(unitId);
    if (oldIdx !== undefined) {
      if (this.unitPos[oldIdx] === unitId) {
        this.unitPos[oldIdx] = 0;
        this.unitPresence[oldIdx] = UnitPresence.NO_UNITS;
      }
      this._unitPosCell.delete(unitId);
    }
  }

  clearUnitGoal(unitId) {
    const oldIdx = this._unitGoalCell.get(unitId);
    if (oldIdx !== undefined) {
      if (this.unitGoal[oldIdx] === unitId) {
        this.unitGoal[oldIdx] = 0;
      }
      this._unitGoalCell.delete(unitId);
    }
  }

  removeUnitFromGrid(unitId) {
    this.clearUnitPos(unitId);
    this.clearUnitGoal(unitId);
  }

  /**
   * Get the pathfinding radius for a unit in cells.
   * Mirrors Pathfinder::getRadiusAndCenter (AIPathfind.cpp:9072-9108).
   * Uses getBoundingCircleRadius (approximated from collision radius).
   */
  getRadiusAndCenter(collisionRadius) {
    const MAX_RADIUS = 2;
    let diameter = 2 * collisionRadius;
    if (diameter > PATHFIND_CELL_SIZE && diameter < 2 * PATHFIND_CELL_SIZE) {
      diameter = 2 * PATHFIND_CELL_SIZE;
    }
    let iRadius = Math.floor(diameter / PATHFIND_CELL_SIZE + 0.3);
    let centerInCell = false;
    if (iRadius === 0) iRadius = 1;
    if (iRadius & 1) centerInCell = true;
    iRadius = Math.floor(iRadius / 2);
    if (iRadius > MAX_RADIUS) {
      iRadius = MAX_RADIUS;
      centerInCell = true;
    }
    return { radius: iRadius, centerInCell };
  }

  /**
   * Check if a block of cells is passable for a unit with given radius.
   * Mirrors checkForMovement (AIPathfind.cpp:4505-4608).
   * Checks a square block [cell-radius, cell+radius) around the given cell.
   */
  checkMovementBlock(cellX, cellY, requestingUnitId, pathRadius, centerInCell) {
    const numAbove = centerInCell ? pathRadius + 1 : pathRadius;

    for (let j = cellY - pathRadius; j < cellY + numAbove; j++) {
      for (let i = cellX - pathRadius; i < cellX + numAbove; i++) {
        if (i < 0 || i >= this.width || j < 0 || j >= this.height) return false;
        const idx = j * this.width + i;
        const cellType = this.cells[idx];
        if (cellType === CellType.CELL_OBSTACLE || cellType === CellType.CELL_IMPASSABLE ||
            cellType === CellType.CELL_CLIFF) {
          return false;
        }

        const posUnit = this.unitPos[idx];
        if (posUnit !== 0 && posUnit !== requestingUnitId) {
          const presence = this.unitPresence[idx];
          if (presence === UnitPresence.UNIT_PRESENT_FIXED) {
            return false;
          }
        }
      }
    }
    return true;
  }

  /**
   * Mirrors validMovementPosition (AIPathfind.cpp:4366-4430).
   * Checks ONLY the single center cell's type (obstacle/terrain).
   * Generals uses this for the destination cell in A* and LOS checks.
   * checkForMovement (unit occupancy) is separate.
   */
  validMovementPosition(cellX, cellY) {
    if (cellX < 0 || cellX >= this.width || cellY < 0 || cellY >= this.height) return false;
    const cellType = this.cells[cellY * this.width + cellX];
    return cellType === CellType.CELL_CLEAR || cellType === CellType.CELL_RUBBLE;
  }

  /**
   * Single-cell passability check (for basic terrain queries).
   * Mirrors checkForMovement with radius=0.
   */
  isCellPassableForUnit(cellX, cellY, requestingUnitId) {
    if (cellX < 0 || cellX >= this.width || cellY < 0 || cellY >= this.height) return false;
    const idx = cellY * this.width + cellX;
    const cellType = this.cells[idx];
    if (cellType === CellType.CELL_OBSTACLE || cellType === CellType.CELL_IMPASSABLE ||
        cellType === CellType.CELL_CLIFF) {
      return false;
    }

    const posUnit = this.unitPos[idx];
    if (posUnit !== 0 && posUnit !== requestingUnitId) {
      if (this.unitPresence[idx] === UnitPresence.UNIT_PRESENT_FIXED) {
        return false;
      }
    }
    return true;
  }

  // --- Standard accessors ---

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

  /**
   * Debug: build a Three.js Group showing obstacle cells as red planes
   * and zone boundaries. Toggle with 'G' key.
   */
  buildDebugOverlay(THREE, getTerrainHeight) {
    const group = new THREE.Group();
    group.name = 'pathfindDebugOverlay';

    const obstacleMat = new THREE.MeshBasicMaterial({
      color: 0xff0000, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false
    });
    const cliffMat = new THREE.MeshBasicMaterial({
      color: 0xff8800, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false
    });
    const impassMat = new THREE.MeshBasicMaterial({
      color: 0x880088, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false
    });

    const cellGeo = new THREE.PlaneGeometry(PATHFIND_CELL_SIZE * 0.9, PATHFIND_CELL_SIZE * 0.9);
    cellGeo.rotateX(-Math.PI / 2);

    for (let cy = 0; cy < this.height; cy++) {
      for (let cx = 0; cx < this.width; cx++) {
        const cellType = this.cells[cy * this.width + cx];
        let mat = null;
        if (cellType === CellType.CELL_OBSTACLE) mat = obstacleMat;
        else if (cellType === CellType.CELL_CLIFF) mat = cliffMat;
        else if (cellType === CellType.CELL_IMPASSABLE) mat = impassMat;
        if (!mat) continue;

        const wx = cx * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        const wz = cy * PATHFIND_CELL_SIZE + PATHFIND_CELL_SIZE / 2;
        let wy = 0;
        try { wy = getTerrainHeight(wx, wz) + 0.5; } catch { wy = 0.5; }

        const mesh = new THREE.Mesh(cellGeo, mat);
        mesh.position.set(wx, wy, wz);
        group.add(mesh);
      }
    }

    console.log(`Debug overlay: ${group.children.length} cells visualized`);
    return group;
  }
}
