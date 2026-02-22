// Mirrors AIStateMachine from AIStateMachine.h / AIStates.cpp
import { AIStateType } from './aiTypes.js';

export class AIStateMachine {
  constructor(aiUpdate) {
    this.aiUpdate = aiUpdate;
    this.currentState = AIStateType.AI_IDLE;
    this.goalPosition = null;
    this.goalObjectId = null;
  }

  setState(stateType) {
    this.currentState = stateType;
    this.onEnterState(stateType);
  }

  getState() {
    return this.currentState;
  }

  /**
   * Mirrors AIStateMachine::clear() + StateMachine::clear().
   * In Generals: calls onExit(EXIT_RESET) on current state, clears m_goalPath,
   * sets currentState to null, then internalClear() zeroes goals.
   */
  clear() {
    const ai = this.aiUpdate;

    // Exit the current state (mirrors onExit(EXIT_RESET))
    // Clean up any in-progress path/movement
    ai.currentPath = null;
    ai.waitingForPath = false;
    ai.requestedDestination = null;
    ai.locomotor.stop();

    this.currentState = AIStateType.AI_IDLE;
    this.goalPosition = null;
    this.goalObjectId = null;
  }

  onEnterState(stateType) {
    const ai = this.aiUpdate;
    switch (stateType) {
      case AIStateType.AI_MOVE_TO:
        ai.requestPath(this.goalPosition);
        break;
      case AIStateType.AI_ATTACK_MOVE_TO:
        ai.requestPath(this.goalPosition);
        break;
      case AIStateType.AI_IDLE:
        ai.onIdle();
        break;
      case AIStateType.AI_MOVE_OUT_OF_THE_WAY:
        ai.requestPath(this.goalPosition);
        break;
    }
  }

  /**
   * Per-frame update. Delegates to state-specific logic.
   * Mirrors AIStateMachine running inside AIUpdateInterface::update().
   */
  update(dt) {
    const ai = this.aiUpdate;
    switch (this.currentState) {
      case AIStateType.AI_IDLE:
        break;

      case AIStateType.AI_MOVE_TO:
        this.updateMoveTo(dt);
        break;

      case AIStateType.AI_ATTACK_MOVE_TO:
        this.updateMoveTo(dt);
        break;

      case AIStateType.AI_GUARD:
        break;

      case AIStateType.AI_DEAD:
        break;

      case AIStateType.AI_MOVE_OUT_OF_THE_WAY:
        this.updateMoveOutOfTheWay(dt);
        break;
    }
  }

  /**
   * Mirrors AIMoveOutOfTheWayState: move along path, then revert to previous state.
   * Timer-based: after moveOutOfWayTimer expires or path completes, go idle.
   */
  updateMoveOutOfTheWay(dt) {
    const ai = this.aiUpdate;

    ai.moveOutOfWayTimer--;
    if (ai.moveOutOfWayTimer <= 0) {
      ai.currentPath = null;
      ai.locomotor.stop();
      this.setState(AIStateType.AI_IDLE);
      return;
    }

    if (ai.waitingForPath) return;

    if (!ai.currentPath) {
      this.setState(AIStateType.AI_IDLE);
      return;
    }

    const arrived = ai.locomotor.followPath(ai.currentPath, ai.unit, dt);
    if (arrived) {
      ai.currentPath = null;
      this.setState(AIStateType.AI_IDLE);
    }
  }

  updateMoveTo(dt) {
    const ai = this.aiUpdate;

    if (ai.waitingForPath) return;

    if (!ai.currentPath) {
      this.setState(AIStateType.AI_IDLE);
      return;
    }

    const arrived = ai.locomotor.followPath(ai.currentPath, ai.unit, dt);
    if (arrived) {
      ai.currentPath = null;
      // Check waypoint queue -- mirrors executeWaypointQueue behavior
      if (ai.executingWaypointQueue && ai.waypointIndex < ai.waypointCount) {
        const nextWP = ai.waypointQueue[ai.waypointIndex++];
        this.goalPosition = nextWP;
        ai.requestPath(nextWP);
      } else {
        ai.executingWaypointQueue = false;
        this.setState(AIStateType.AI_IDLE);
      }
    }
  }
}
