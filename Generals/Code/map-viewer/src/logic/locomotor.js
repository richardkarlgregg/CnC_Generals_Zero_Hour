// Mirrors Locomotor from Locomotor.h / Locomotor.cpp
// Drives unit movement along a path each frame.

import { DEFAULT_MOVE_SPEED, DEFAULT_TURN_RATE, DEFAULT_ACCELERATION, DEFAULT_BRAKING } from '../constants.js';
import { getTerrainHeightAtWorld } from '../terrain/update.js';

export const LocomotorAppearance = Object.freeze({
  LOCO_LEGS:   0,
  LOCO_WHEELS: 1,
  LOCO_TREADS: 2,
  LOCO_HOVER:  3,
  LOCO_THRUST: 4,
  LOCO_WINGS:  5,
});

export class Locomotor {
  constructor(unit) {
    this.unit = unit;
    this.appearance = this.inferAppearance(unit);

    this.maxSpeed = DEFAULT_MOVE_SPEED;
    this.turnRate = DEFAULT_TURN_RATE * Math.PI / 180;
    this.acceleration = DEFAULT_ACCELERATION;
    this.braking = DEFAULT_BRAKING;

    this.currentSpeed = 0;
    this.currentPathNode = null;
    this.stopped = true;
  }

  inferAppearance(unit) {
    if (!unit.kindOf) return LocomotorAppearance.LOCO_LEGS;
    if (unit.kindOf.has('AIRCRAFT')) return LocomotorAppearance.LOCO_WINGS;
    if (unit.kindOf.has('VEHICLE') || unit.kindOf.has('HUGE_VEHICLE')) return LocomotorAppearance.LOCO_TREADS;
    if (unit.kindOf.has('INFANTRY')) return LocomotorAppearance.LOCO_LEGS;
    return LocomotorAppearance.LOCO_LEGS;
  }

  stop() {
    this.currentSpeed = 0;
    this.currentPathNode = null;
    this.stopped = true;
  }

  /**
   * Follow the optimized path. Returns true when the unit reaches the end.
   * Mirrors Locomotor::locoUpdate_moveTowardsPosition.
   */
  followPath(path, unit, dt) {
    if (!path || !path.head) return true;

    // Initialize path traversal
    if (!this.currentPathNode) {
      this.currentPathNode = path.head;
      this.stopped = false;
      // Advance past the starting node to the first optimized target
      if (this.currentPathNode.nextOptimized) {
        this.currentPathNode = this.currentPathNode.nextOptimized;
      } else if (this.currentPathNode.next) {
        this.currentPathNode = this.currentPathNode.next;
      }
    }

    const target = this.currentPathNode;
    if (!target) return true;

    const pos = unit.position;
    const dx = target.pos.x - pos.x;
    const dz = target.pos.z - pos.z;
    const distToTarget = Math.sqrt(dx * dx + dz * dz);

    // Close enough to this node -- advance
    const closeEnough = 3.0;
    if (distToTarget < closeEnough) {
      if (target.nextOptimized) {
        this.currentPathNode = target.nextOptimized;
        return false;
      } else if (target.next) {
        this.currentPathNode = target.next;
        return false;
      } else {
        // Reached the end of the path
        this.stop();
        return true;
      }
    }

    // Compute desired heading
    const desiredHeading = Math.atan2(dx, dz);

    // Turn toward target (mirrors locomotor turn rate logic)
    let headingDiff = desiredHeading - unit.rotation;
    while (headingDiff > Math.PI) headingDiff -= 2 * Math.PI;
    while (headingDiff < -Math.PI) headingDiff += 2 * Math.PI;

    const maxTurn = this.turnRate * dt;
    if (Math.abs(headingDiff) > maxTurn) {
      unit.rotation += Math.sign(headingDiff) * maxTurn;
    } else {
      unit.rotation = desiredHeading;
    }

    // Speed modulation: slow down when turning sharply (mirrors treads/wheels behavior)
    let speedFactor = 1.0;
    const turnRatio = Math.abs(headingDiff) / Math.PI;
    if (this.appearance === LocomotorAppearance.LOCO_TREADS ||
        this.appearance === LocomotorAppearance.LOCO_WHEELS) {
      speedFactor = Math.max(0.3, 1.0 - turnRatio * 0.7);
    } else {
      speedFactor = Math.max(0.5, 1.0 - turnRatio * 0.5);
    }

    // Braking near goal
    const brakingDist = (this.currentSpeed * this.currentSpeed) / (2 * this.braking);
    const isNearGoal = distToTarget < brakingDist + 5;

    // Accelerate or brake
    const targetSpeed = isNearGoal
      ? Math.max(5, this.maxSpeed * (distToTarget / (brakingDist + 5)))
      : this.maxSpeed * speedFactor;

    if (this.currentSpeed < targetSpeed) {
      this.currentSpeed = Math.min(targetSpeed, this.currentSpeed + this.acceleration * dt);
    } else {
      this.currentSpeed = Math.max(targetSpeed, this.currentSpeed - this.braking * dt);
    }

    // Move along heading
    const moveX = Math.sin(unit.rotation) * this.currentSpeed * dt;
    const moveZ = Math.cos(unit.rotation) * this.currentSpeed * dt;

    pos.x += moveX;
    pos.z += moveZ;

    // Snap to terrain height
    try {
      pos.y = getTerrainHeightAtWorld(pos.x, pos.z);
    } catch {
      // Terrain data may not cover the full area
    }

    return false;
  }
}
