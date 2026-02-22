// Mirrors AIUpdateInterface from AIUpdate.h / AIUpdate.cpp
// Per-unit AI: owns state machine, waypoint queue, path, locomotor reference.

import { AICommandType, AIStateType, AICommandParms, CommandSourceType } from './aiTypes.js';
import { AIStateMachine } from './aiStateMachine.js';
import { Locomotor } from './locomotor.js';
import { MAX_WAYPOINTS } from '../constants.js';
import state from '../state.js';

let _pathfinderRef = null;

/**
 * Set the global pathfinder reference. Called once from gameLoop.js to avoid circular imports.
 */
export function setPathfinderRef(pf) {
  _pathfinderRef = pf;
}

export class AIUpdate {
  constructor(unit) {
    this.unit = unit;
    this.stateMachine = new AIStateMachine(this);
    this.locomotor = new Locomotor(unit);

    this.currentPath = null;
    this.waitingForPath = false;
    this.requestedDestination = null;
    this.lastCommandSource = CommandSourceType.CMD_FROM_PLAYER;

    // Waypoint queue -- mirrors m_waypointQueue[MAX_WAYPOINTS]
    this.waypointQueue = new Array(MAX_WAYPOINTS);
    this.waypointCount = 0;
    this.waypointIndex = 0;
    this.executingWaypointQueue = false;

    this.blockedFrames = 0;
    this.isBlocked = false;
    this.isBlockedAndStuck = false;

    // Repath cooldown (frames since last repath attempt)
    this.repathCooldown = 0;

    // Move-out-of-the-way state (mirrors AI_MOVE_OUT_OF_THE_WAY timer)
    this.moveOutOfWayTimer = 0;
    this._savedState = null;
    this._savedGoal = null;
  }

  /**
   * Mirrors AICommandInterface::aiDoCommand switch in AIUpdate.cpp:2593.
   */
  aiDoCommand(parms) {
    switch (parms.cmd) {
      case AICommandType.AICMD_MOVE_TO_POSITION:
        this.privateMoveToPosition(parms.pos, parms.cmdSource);
        break;
      case AICommandType.AICMD_IDLE:
        this.privateIdle(parms.cmdSource);
        break;
      case AICommandType.AICMD_ATTACK_OBJECT:
        this.privateAttackObject(parms.targetId, parms.cmdSource);
        break;
      case AICommandType.AICMD_FORCE_ATTACK_OBJECT:
        this.privateForceAttackObject(parms.targetId, parms.cmdSource);
        break;
      case AICommandType.AICMD_ATTACKMOVE_TO_POSITION:
        this.privateAttackMoveToPosition(parms.pos, parms.cmdSource);
        break;
      case AICommandType.AICMD_GUARD_POSITION:
        this.privateGuardPosition(parms.pos, parms.cmdSource);
        break;
      case AICommandType.AICMD_FOLLOW_PATH_APPEND:
        this.privateFollowPathAppend(parms.pos, parms.cmdSource);
        break;
    }
  }

  // --- Inline command helpers mirroring AI.h ---

  aiMoveToPosition(pos, cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_MOVE_TO_POSITION, cmdSource);
    parms.pos = { ...pos };
    this.aiDoCommand(parms);
  }

  aiIdle(cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_IDLE, cmdSource || CommandSourceType.CMD_FROM_PLAYER);
    this.aiDoCommand(parms);
  }

  aiAttackMoveToPosition(pos, cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_ATTACKMOVE_TO_POSITION, cmdSource);
    parms.pos = { ...pos };
    this.aiDoCommand(parms);
  }

  aiAttackObject(targetId, cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_ATTACK_OBJECT, cmdSource);
    parms.targetId = targetId;
    this.aiDoCommand(parms);
  }

  aiGuardPosition(pos, cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_GUARD_POSITION, cmdSource);
    parms.pos = { ...pos };
    this.aiDoCommand(parms);
  }

  aiFollowPathAppend(pos, cmdSource) {
    const parms = new AICommandParms(AICommandType.AICMD_FOLLOW_PATH_APPEND, cmdSource);
    parms.pos = { ...pos };
    this.aiDoCommand(parms);
  }

  /**
   * Ask this unit to move out of another unit's way.
   * Mirrors AIUpdate::privateMoveAwayFromUnit (AIUpdate.cpp:3068-3124).
   *
   * In Generals: gets the blocker's path, calls getMoveAwayFromPath to find
   * a proper pathed route away, sets temporary state AI_MOVE_OUT_OF_THE_WAY
   * for 10 seconds, then calls moveAllies on that path.
   */
  aiMoveAwayFromUnit(requestingUnit) {
    if (!this.unit.isMobile()) return;
    // Don't interrupt player commands (unless idle)
    if (this.lastCommandSource === CommandSourceType.CMD_FROM_PLAYER &&
        this.stateMachine.getState() !== AIStateType.AI_IDLE) return;

    // Mirrors privateMoveAwayFromUnit: use pathfinder to find move-away path
    if (_pathfinderRef) {
      const newPath = _pathfinderRef.getMoveAwayFromPath(this.unit, requestingUnit);
      if (newPath) {
        this.stateMachine.clear();
        this.currentPath = newPath;
        this.waitingForPath = false;
        this.blockedFrames = 0;
        this.isBlocked = false;
        // Mirrors: setTemporaryState(AI_MOVE_OUT_OF_THE_WAY, 10*LOGICFRAMES_PER_SECOND)
        // 10 seconds at 30fps = 300 frames
        this.moveOutOfWayTimer = 300;
        this.stateMachine.currentState = AIStateType.AI_MOVE_OUT_OF_THE_WAY;
        return;
      }
    }
  }

  // --- Private command handlers mirroring AIUpdate.cpp ---

  /**
   * Mirrors AIUpdateInterface::privateMoveToPosition (AIUpdate.cpp:2765).
   */
  privateMoveToPosition(pos, cmdSource) {
    if (!this.unit.isMobile()) return;
    this.stateMachine.clear();
    this.stateMachine.goalPosition = { ...pos };
    this.blockedFrames = 0;
    this.isBlocked = false;
    this.lastCommandSource = cmdSource;
    this.executingWaypointQueue = false;
    this.waypointCount = 0;
    this.stateMachine.setState(AIStateType.AI_MOVE_TO);
  }

  privateIdle(cmdSource) {
    this.stateMachine.clear();
    this.currentPath = null;
    this.waitingForPath = false;
    this.lastCommandSource = cmdSource;
    this.executingWaypointQueue = false;
    this.locomotor.stop();
  }

  privateAttackObject(targetId, cmdSource) {
    // Simplified: treat as move-to for now (attack requires weapon system)
    this.lastCommandSource = cmdSource;
    this.stateMachine.goalObjectId = targetId;
    this.stateMachine.setState(AIStateType.AI_ATTACK_OBJECT);
  }

  privateForceAttackObject(targetId, cmdSource) {
    this.lastCommandSource = cmdSource;
    this.stateMachine.goalObjectId = targetId;
    this.stateMachine.setState(AIStateType.AI_FORCE_ATTACK_OBJECT);
  }

  privateAttackMoveToPosition(pos, cmdSource) {
    if (!this.unit.isMobile()) return;
    this.stateMachine.clear();
    this.stateMachine.goalPosition = { ...pos };
    this.blockedFrames = 0;
    this.isBlocked = false;
    this.lastCommandSource = cmdSource;
    this.executingWaypointQueue = false;
    this.waypointCount = 0;
    this.stateMachine.setState(AIStateType.AI_ATTACK_MOVE_TO);
  }

  privateGuardPosition(pos, cmdSource) {
    this.stateMachine.clear();
    this.stateMachine.goalPosition = { ...pos };
    this.lastCommandSource = cmdSource;
    this.stateMachine.setState(AIStateType.AI_GUARD);
  }

  privateFollowPathAppend(pos, cmdSource) {
    if (!this.unit.isMobile()) return;
    this.queueWaypoint(pos);
    this.lastCommandSource = cmdSource;
  }

  // --- Waypoint queue -- mirrors AIUpdate.cpp:1156 ---

  queueWaypoint(pos) {
    if (this.waypointCount < MAX_WAYPOINTS) {
      this.waypointQueue[this.waypointCount++] = { ...pos };
      return true;
    }
    return false;
  }

  clearWaypointQueue() {
    this.waypointCount = 0;
    this.waypointIndex = 0;
    this.executingWaypointQueue = false;
  }

  executeWaypointQueue() {
    if (this.waypointCount > 0) {
      this.waypointIndex = 0;
      this.executingWaypointQueue = true;
      const first = this.waypointQueue[this.waypointIndex++];
      this.stateMachine.clear();
      this.stateMachine.goalPosition = { ...first };
      this.stateMachine.setState(AIStateType.AI_MOVE_TO);
    }
  }

  // --- Path request interface ---

  requestPath(destination) {
    if (!destination) return;
    this.requestedDestination = { ...destination };
    this.waitingForPath = true;
    this.currentPath = null;

    if (_pathfinderRef) {
      _pathfinderRef.queueForPath(this.unit.id);
    }
  }

  /**
   * Called by Pathfinder::processPathfindQueue when this unit's turn comes.
   * Mirrors AIUpdateInterface::doPathfind (AIUpdate.cpp:397).
   */
  doPathfind(pathfinderService) {
    if (!this.requestedDestination) {
      this.waitingForPath = false;
      return;
    }

    const from = this.unit.position;
    const to = this.requestedDestination;
    const path = pathfinderService.findPath(from, to, this.unit);
    this.currentPath = path;
    this.waitingForPath = false;
    this.requestedDestination = null;
  }

  onIdle() {
    this.locomotor.stop();
  }

  /**
   * Per-frame update. Mirrors AIUpdateInterface::update().
   * Includes unit occupancy grid updates and blocked/repath handling.
   */
  update(dt) {
    // Update unit position on the pathfind grid (mirrors Pathfinder::updatePos)
    this.updateGridOccupancy();

    // Handle blocked/stuck detection and repath (mirrors processCollision + doLocomotor)
    this.handleBlocked();

    this.stateMachine.update(dt);
    this.unit.syncMeshFromPosition();

    if (this.repathCooldown > 0) this.repathCooldown--;
  }

  /**
   * Update this unit's position and goal on the pathfind grid.
   * Mirrors the Object position change -> Pathfinder::updatePos call.
   */
  updateGridOccupancy() {
    if (!_pathfinderRef || !_pathfinderRef.grid) return;
    const grid = _pathfinderRef.grid;
    const isMoving = !this.locomotor.stopped;

    grid.updateUnitPos(this.unit.id, this.unit.position.x, this.unit.position.z, isMoving);

    // Update goal cell if we have a destination
    if (this.stateMachine.goalPosition) {
      grid.updateUnitGoal(this.unit.id, this.stateMachine.goalPosition.x, this.stateMachine.goalPosition.z);
    }
  }

  /**
   * Handle blocked/stuck state. Mirrors AIUpdate's m_blockedFrames logic:
   * - After ~30 blocked frames, mark as stuck and request a repath.
   * - Repath uses the current goal but generates a new path from the current position.
   */
  handleBlocked() {
    const BLOCKED_REPATH_THRESHOLD = 30;
    const ASK_MOVE_THRESHOLD = 15;

    if (this.blockedFrames > ASK_MOVE_THRESHOLD && this.blockedFrames <= BLOCKED_REPATH_THRESHOLD) {
      // Ask blocking unit to move out of the way (mirrors moveAllies / aiMoveAwayFromUnit)
      this.askBlockerToMove();
    }

    if (this.blockedFrames > BLOCKED_REPATH_THRESHOLD && this.repathCooldown <= 0) {
      this.isBlockedAndStuck = true;

      if (this.stateMachine.goalPosition && this.stateMachine.getState() !== AIStateType.AI_IDLE) {
        this.blockedFrames = 0;
        this.isBlocked = false;
        this.isBlockedAndStuck = false;
        this.repathCooldown = 60;
        this.requestPath(this.stateMachine.goalPosition);
      }
    }
  }

  /**
   * Find the nearest blocking unit and ask it to move away.
   * Mirrors processCollision deadlock handling + aiMoveAwayFromUnit.
   */
  askBlockerToMove() {
    const pos = this.unit.position;
    const myRadius = this.locomotor.collisionRadius;
    let closestDist = Infinity;
    let blocker = null;

    for (const other of state.units.values()) {
      if (other.id === this.unit.id) continue;
      if (!other.ai || !other.isMobile()) continue;
      if (!other.ai.locomotor.stopped) continue;

      const dx = pos.x - other.position.x;
      const dz = pos.z - other.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const minDist = myRadius + other.ai.locomotor.collisionRadius;

      if (dist < minDist * 1.5 && dist < closestDist) {
        closestDist = dist;
        blocker = other;
      }
    }

    if (blocker && blocker.ai.stateMachine.getState() === AIStateType.AI_IDLE) {
      blocker.ai.aiMoveAwayFromUnit(this.unit);
    }
  }
}
