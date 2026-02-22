// Mirrors AI.h, AIStateMachine.h -- all AI enums and command parameter struct

// Mirrors AICommandType enum from AI.h (stored in save file, do not reorder)
export const AICommandType = Object.freeze({
  AICMD_MOVE_TO_POSITION:                 0,
  AICMD_MOVE_TO_OBJECT:                   1,
  AICMD_IDLE:                             5,
  AICMD_FOLLOW_WAYPOINT_PATH:             6,
  AICMD_FOLLOW_PATH:                      9,
  AICMD_ATTACK_OBJECT:                    12,
  AICMD_FORCE_ATTACK_OBJECT:              13,
  AICMD_ATTACK_POSITION:                  15,
  AICMD_ATTACKMOVE_TO_POSITION:           16,
  AICMD_GUARD_POSITION:                   30,
  AICMD_GUARD_OBJECT:                     31,
  AICMD_FOLLOW_PATH_APPEND:              50,
});

// Mirrors AIStateType enum from AIStateMachine.h
export const AIStateType = Object.freeze({
  AI_IDLE:                                0,
  AI_MOVE_TO:                             1,
  AI_FOLLOW_PATH:                         6,
  AI_WAIT:                                8,
  AI_ATTACK_POSITION:                     9,
  AI_ATTACK_OBJECT:                       10,
  AI_FORCE_ATTACK_OBJECT:                 11,
  AI_DEAD:                                13,
  AI_GUARD:                               16,
  AI_ATTACK_MOVE_TO:                      30,
  AI_MOVE_OUT_OF_THE_WAY:                 85,
});

// Mirrors CommandSourceType
export const CommandSourceType = Object.freeze({
  CMD_FROM_PLAYER:   0,
  CMD_FROM_SCRIPT:   1,
  CMD_FROM_AI:       2,
});

/**
 * Mirrors AICommandParms from AI.h.
 * Passed into aiDoCommand to describe one order.
 */
export class AICommandParms {
  constructor(cmd, cmdSource) {
    this.cmd = cmd;
    this.cmdSource = cmdSource;
    this.pos = null;       // { x, y, z }
    this.targetId = null;  // ObjectID
    this.intValue = 0;
  }
}
