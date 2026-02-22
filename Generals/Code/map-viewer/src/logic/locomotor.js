// Mirrors Locomotor from Locomotor.h / Locomotor.cpp
// Drives unit movement along a path each frame.
//
// Collision architecture (matching Generals):
// - PhysicsUpdate detects overlap between objects
// - processCollision in AIUpdate sets m_isBlocked / m_blockedFrames
// - doLocomotor reads blocked = (m_blockedFrames > 0), passes to locomotor
// - When blocked: locomotor scrubs velocity to desiredSpeed, still turns, no motive force
// - When not blocked: normal motive force applied

import { DEFAULT_MOVE_SPEED, DEFAULT_TURN_RATE, DEFAULT_ACCELERATION, DEFAULT_BRAKING, PATHFIND_CELL_SIZE } from '../constants.js';
import { getTerrainHeightAtWorld } from '../terrain/update.js';
import state from '../state.js';

export const LocomotorAppearance = Object.freeze({
  LOCO_LEGS:   0,
  LOCO_WHEELS: 1,
  LOCO_TREADS: 2,
  LOCO_HOVER:  3,
  LOCO_THRUST: 4,
  LOCO_WINGS:  5,
});

// Approximate collision radius per unit type (mirrors GeometryInfo bounding circle)
const COLLISION_RADIUS_INFANTRY = 4;
const COLLISION_RADIUS_VEHICLE = 8;
const COLLISION_RADIUS_DEFAULT = 5;

// Mirrors PhysicsUpdate: max overlap force for mobile-mobile (AIPathfind.cpp overlap cap)
const MAX_OVERLAP_FORCE = 5.0;

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

    this.collisionRadius = this.inferCollisionRadius(unit);

    // Velocity vector (mirrors PhysicsUpdate velocity for force-based collision)
    this.velocityX = 0;
    this.velocityZ = 0;
  }

  inferAppearance(unit) {
    if (!unit.kindOf) return LocomotorAppearance.LOCO_LEGS;
    if (unit.kindOf.has('AIRCRAFT')) return LocomotorAppearance.LOCO_WINGS;
    if (unit.kindOf.has('VEHICLE') || unit.kindOf.has('HUGE_VEHICLE')) return LocomotorAppearance.LOCO_TREADS;
    if (unit.kindOf.has('INFANTRY')) return LocomotorAppearance.LOCO_LEGS;
    return LocomotorAppearance.LOCO_LEGS;
  }

  inferCollisionRadius(unit) {
    if (!unit.kindOf) return COLLISION_RADIUS_DEFAULT;
    if (unit.kindOf.has('INFANTRY')) return COLLISION_RADIUS_INFANTRY;
    if (unit.kindOf.has('VEHICLE') || unit.kindOf.has('HUGE_VEHICLE')) return COLLISION_RADIUS_VEHICLE;
    return COLLISION_RADIUS_DEFAULT;
  }

  stop() {
    this.currentSpeed = 0;
    this.currentPathNode = null;
    this.stopped = true;
    this.velocityX = 0;
    this.velocityZ = 0;
  }

  /**
   * Follow the optimized path. Returns true when the unit reaches the end.
   * Mirrors the interaction between doLocomotor and locoUpdate_moveTowardsPosition:
   *
   * 1. doLocomotor: blocked = (m_blockedFrames > 0), pass to locomotor
   * 2. locoUpdate_moveTowardsPosition: if blocked, scrub velocity + turn only; else apply force
   * 3. PhysicsUpdate handles overlap detection and force application separately
   */
  followPath(path, unit, dt) {
    if (!path || !path.head) return true;

    if (!this.currentPathNode) {
      this.currentPathNode = path.head;
      this.stopped = false;
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

    const closeEnough = 3.0;
    if (distToTarget < closeEnough) {
      if (target.nextOptimized) {
        this.currentPathNode = target.nextOptimized;
        return false;
      } else if (target.next) {
        this.currentPathNode = target.next;
        return false;
      } else {
        this.stop();
        return true;
      }
    }

    // Compute desired heading
    const desiredHeading = Math.atan2(dx, dz);

    // Turn toward target (always allowed, even when blocked -- matches Generals)
    let headingDiff = desiredHeading - unit.rotation;
    while (headingDiff > Math.PI) headingDiff -= 2 * Math.PI;
    while (headingDiff < -Math.PI) headingDiff += 2 * Math.PI;

    const maxTurn = this.turnRate * dt;
    if (Math.abs(headingDiff) > maxTurn) {
      unit.rotation += Math.sign(headingDiff) * maxTurn;
    } else {
      unit.rotation = desiredHeading;
    }

    // Mirrors doLocomotor: blocked = (m_blockedFrames > 0)
    const blocked = unit.ai.blockedFrames > 0;

    if (blocked) {
      // Mirrors locoUpdate_moveTowardsPosition when *blocked is true:
      // scrubVelocity2D(desiredSpeed) -- cap speed, don't apply new motive force
      this.currentSpeed *= 0.5;
      if (this.currentSpeed < 1.0) this.currentSpeed = 0;
      this.velocityX = Math.sin(unit.rotation) * this.currentSpeed;
      this.velocityZ = Math.cos(unit.rotation) * this.currentSpeed;
      // Apply remaining velocity (scrubbed)
      pos.x += this.velocityX * dt;
      pos.z += this.velocityZ * dt;
    } else {
      // Normal movement: compute speed and apply motive force
      let speedFactor = 1.0;
      const turnRatio = Math.abs(headingDiff) / Math.PI;
      if (this.appearance === LocomotorAppearance.LOCO_TREADS ||
          this.appearance === LocomotorAppearance.LOCO_WHEELS) {
        speedFactor = Math.max(0.3, 1.0 - turnRatio * 0.7);
      } else {
        speedFactor = Math.max(0.5, 1.0 - turnRatio * 0.5);
      }

      const brakingDist = (this.currentSpeed * this.currentSpeed) / (2 * this.braking);
      const isNearGoal = distToTarget < brakingDist + 5;

      const targetSpeed = isNearGoal
        ? Math.max(5, this.maxSpeed * (distToTarget / (brakingDist + 5)))
        : this.maxSpeed * speedFactor;

      if (this.currentSpeed < targetSpeed) {
        this.currentSpeed = Math.min(targetSpeed, this.currentSpeed + this.acceleration * dt);
      } else {
        this.currentSpeed = Math.max(targetSpeed, this.currentSpeed - this.braking * dt);
      }

      this.velocityX = Math.sin(unit.rotation) * this.currentSpeed;
      this.velocityZ = Math.cos(unit.rotation) * this.currentSpeed;

      const newX = pos.x + this.velocityX * dt;
      const newZ = pos.z + this.velocityZ * dt;

      // Check grid collision (obstacle cells) before applying movement
      if (this.checkGridCollision(newX, newZ)) {
        // Try sliding along one axis (matches how Generals objects slide along walls)
        const slideX = !this.checkGridCollision(newX, pos.z);
        const slideZ = !this.checkGridCollision(pos.x, newZ);

        if (slideX && !slideZ) {
          pos.x = newX;
        } else if (slideZ && !slideX) {
          pos.z = newZ;
        } else {
          // Fully blocked by terrain obstacle
          this.currentSpeed *= 0.1;
          unit.ai.blockedFrames++;
          unit.ai.isBlocked = true;
        }
      } else {
        pos.x = newX;
        pos.z = newZ;
      }
    }

    // Snap to terrain height
    try {
      pos.y = getTerrainHeightAtWorld(pos.x, pos.z);
    } catch {
      // Terrain data may not cover the full area
    }

    return false;
  }

  /**
   * Check if the proposed position collides with grid obstacles.
   * Mirrors Generals' approach: the pathfind grid is the sole authority for
   * building collision. There is no separate mesh-based check in Generals --
   * buildings are marked as CELL_OBSTACLE on the grid by classifyObjectFootprint,
   * and all movement checks use the grid (checkForMovement / validMovementPosition).
   */
  checkGridCollision(newX, newZ) {
    const pathfinder = state.pathfinder;
    if (!pathfinder || !pathfinder.grid) return false;

    const grid = pathfinder.grid;
    const { radius: pathRadius, centerInCell } = grid.getRadiusAndCenter(this.collisionRadius);
    const centerCell = grid.worldToCell(newX, newZ);

    return !grid.checkMovementBlock(centerCell.x, centerCell.y, this.unit.id, pathRadius, centerInCell);
  }
}

/**
 * Mirrors PhysicsUpdate overlap detection and force application.
 * Called from the game loop, not from inside the locomotor.
 * Applies forces to resolve overlaps between mobile units.
 *
 * Generals flow: PhysicsUpdate detects overlap -> processCollision ->
 *   if returns true, apply force = -overlap * delta/dist
 */
export function resolvePhysicsCollisions() {
  const units = [];
  for (const u of state.units.values()) {
    if (u.ai && u.isMobile() && u.mesh.visible) {
      units.push(u);
    }
  }

  for (let i = 0; i < units.length; i++) {
    const a = units[i];
    const aR = a.ai.locomotor.collisionRadius;

    for (let j = i + 1; j < units.length; j++) {
      const b = units[j];
      const bR = b.ai.locomotor.collisionRadius;

      const deltaX = b.position.x - a.position.x;
      const deltaZ = b.position.z - a.position.z;
      const distSqr = deltaX * deltaX + deltaZ * deltaZ;
      const minDist = aR + bR;

      if (distSqr >= minDist * minDist) continue;

      let dist = Math.sqrt(distSqr);
      let dirX = deltaX, dirZ = deltaZ;

      if (dist < 1.0) {
        // Nearly coincident: use a pseudo-random direction based on unit IDs
        // so they separate consistently (Generals clamps dist to 1.0 but
        // objects are never truly coincident due to spawn spread)
        dist = 1.0;
        const angle = ((a.id * 7 + b.id * 13) % 100) / 100 * Math.PI * 2;
        dirX = Math.cos(angle);
        dirZ = Math.sin(angle);
      }

      const overlap = minDist - dist;

      const factor = -Math.min(overlap, MAX_OVERLAP_FORCE);

      const forceX = factor * dirX / dist;
      const forceZ = factor * dirZ / dist;

      const aMoving = !a.ai.locomotor.stopped;
      const bMoving = !b.ai.locomotor.stopped;

      // Apply separation force. In Generals, applyForce adds to the physics velocity.
      // We apply directly as position offset. Full force to each unit
      // (split evenly since both are equal participants in the collision).
      a.position.x += forceX * 0.5;
      a.position.z += forceZ * 0.5;
      b.position.x -= forceX * 0.5;
      b.position.z -= forceZ * 0.5;

      // Set blocked flags (mirrors processCollision -> blockedBy)
      if (aMoving && !bMoving) {
        a.ai.isBlocked = true;
        if (a.ai.blockedFrames === 0) a.ai.blockedFrames = 1;
      }
      if (bMoving && !aMoving) {
        b.ai.isBlocked = true;
        if (b.ai.blockedFrames === 0) b.ai.blockedFrames = 1;
      }
    }
  }
}
