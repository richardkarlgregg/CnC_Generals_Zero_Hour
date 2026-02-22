// Mirrors GameEngine\Include\Common\MessageStream.h
// Message types from Generals source -- only the subset we need

export const GameMessageType = Object.freeze({
  // Selection messages
  MSG_MOUSE_LEFT_CLICK:              1,
  MSG_MOUSE_LEFT_DOUBLE_CLICK:       2,
  MSG_AREA_SELECTION:                3,
  MSG_CREATE_SELECTED_GROUP:         4,
  MSG_CREATE_SELECTED_GROUP_NO_SOUND:5,
  MSG_DESTROY_SELECTED_GROUP:        6,
  MSG_REMOVE_FROM_SELECTED_GROUP:    7,

  // Order messages (network range in Generals)
  MSG_DO_MOVETO:                     100,
  MSG_DO_ATTACKMOVETO:               101,
  MSG_DO_FORCEMOVETO:                102,
  MSG_ADD_WAYPOINT:                  103,
  MSG_DO_STOP:                       104,
  MSG_DO_ATTACK_OBJECT:              105,
  MSG_DO_FORCE_ATTACK_OBJECT:        106,
  MSG_DO_FORCE_ATTACK_GROUND:        107,
  MSG_DO_GUARD_POSITION:             108,
  MSG_DO_GUARD_OBJECT:               109,
  MSG_DO_SCATTER:                    110,

  // Control group messages (teams 0-9)
  MSG_CREATE_TEAM0:                  200,
  MSG_CREATE_TEAM1:                  201,
  MSG_CREATE_TEAM2:                  202,
  MSG_CREATE_TEAM3:                  203,
  MSG_CREATE_TEAM4:                  204,
  MSG_CREATE_TEAM5:                  205,
  MSG_CREATE_TEAM6:                  206,
  MSG_CREATE_TEAM7:                  207,
  MSG_CREATE_TEAM8:                  208,
  MSG_CREATE_TEAM9:                  209,
  MSG_SELECT_TEAM0:                  210,
  MSG_SELECT_TEAM1:                  211,
  MSG_SELECT_TEAM2:                  212,
  MSG_SELECT_TEAM3:                  213,
  MSG_SELECT_TEAM4:                  214,
  MSG_SELECT_TEAM5:                  215,
  MSG_SELECT_TEAM6:                  216,
  MSG_SELECT_TEAM7:                  217,
  MSG_SELECT_TEAM8:                  218,
  MSG_SELECT_TEAM9:                  219,
  MSG_ADD_TEAM0:                     220,
  MSG_ADD_TEAM1:                     221,
  MSG_ADD_TEAM2:                     222,
  MSG_ADD_TEAM3:                     223,
  MSG_ADD_TEAM4:                     224,
  MSG_ADD_TEAM5:                     225,
  MSG_ADD_TEAM6:                     226,
  MSG_ADD_TEAM7:                     227,
  MSG_ADD_TEAM8:                     228,
  MSG_ADD_TEAM9:                     229,
});

export class GameMessage {
  constructor(type) {
    this.type = type;
    this.args = [];
    this.consumed = false;
  }

  appendLocationArgument(loc) {
    this.args.push({ type: 'location', location: { x: loc.x, y: loc.y, z: loc.z } });
    return this;
  }

  appendObjectIdArgument(id) {
    this.args.push({ type: 'objectId', objectId: id });
    return this;
  }

  appendPixelRegionArgument(region) {
    this.args.push({ type: 'pixelRegion', pixelRegion: { ...region } });
    return this;
  }

  appendIntArgument(value) {
    this.args.push({ type: 'int', value });
    return this;
  }

  appendBoolArgument(value) {
    this.args.push({ type: 'bool', value });
    return this;
  }

  getArgument(index) {
    return this.args[index] || null;
  }

  getType() {
    return this.type;
  }

  destroy() {
    this.consumed = true;
  }
}

export class MessageStream {
  constructor() {
    this.messages = [];
  }

  appendMessage(type) {
    const msg = new GameMessage(type);
    this.messages.push(msg);
    return msg;
  }

  getMessages() {
    return this.messages;
  }

  consumeMessages() {
    const active = this.messages.filter(m => !m.consumed);
    this.messages = [];
    return active;
  }

  clear() {
    this.messages = [];
  }
}
