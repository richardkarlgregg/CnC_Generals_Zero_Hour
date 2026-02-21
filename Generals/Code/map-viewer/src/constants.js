export const MAP_XY_FACTOR = 10.0;
export const MAP_HEIGHT_SCALE = MAP_XY_FACTOR / 16.0;

// Road flags from MapObject.h
export const FLAG_ROAD_POINT1 = 0x02;
export const FLAG_ROAD_POINT2 = 0x04;
export const FLAG_ROAD_FLAGS  = FLAG_ROAD_POINT1 | FLAG_ROAD_POINT2;
export const FLAG_ROAD_CORNER_ANGLED = 0x08;
export const FLAG_ROAD_CORNER_TIGHT  = 0x40;
export const FLAG_ROAD_JOIN   = 0x80;
export const FLAG_BRIDGE_FLAGS = 0x30;
export const DEFAULT_ROAD_SCALE = 8.0;
export const ROAD_FLOAT_AMOUNT = MAP_HEIGHT_SCALE / 8;

// Segment types mirroring W3DRoadBuffer TCorner enum
export const ROAD_SEGMENT  = 0;
export const ROAD_CURVE    = 1;
export const ROAD_TEE      = 2;
export const ROAD_FOUR_WAY = 3;
export const ROAD_Y        = 4;
export const ROAD_H        = 5;
export const ROAD_H_FLIP   = 6;

export const CORNER_RADIUS = 1.5;
export const TIGHT_CORNER_RADIUS = 0.5;
export const TEE_WIDTH_ADJUSTMENT = 1.03;
export const POSITION_TOLERANCE = 0.5;

export const TILE_SIZE = 64;

export const MAX_TERRAIN_LIGHTS = 3;
export const SUN_DISTANCE = 10000;
