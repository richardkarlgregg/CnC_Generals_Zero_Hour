// Mirrors AIUpdateInterface from AIUpdate.h / AIUpdate.cpp
// Per-unit AI: owns state machine, waypoint queue, path, locomotor reference.

import { AICommandType, AIStateType, AICommandParms, CommandSourceType } from './aiTypes.js';
import { AIStateMachine } from './aiStateMachine.js';
import { Locomotor } from './locomotor.js';
import { MAX_WAYPOINTS } from '../constants.js';

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
   */
  update(dt) {
    this.stateMachine.update(dt);
    this.unit.syncMeshFromPosition();
  }
}
