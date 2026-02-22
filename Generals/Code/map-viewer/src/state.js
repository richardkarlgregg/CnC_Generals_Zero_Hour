import * as THREE from 'three';

const state = {
  renderer: null,
  scene: null,
  camera: null,
  terrainMesh: null,
  terrainGeo: null,
  terrainMatColored: null,
  terrainMatTextured: null,
  objectMarkers: new THREE.Group(),
  roadMesh: null,
  waterPlane: null,
  sunLight: null,
  currentMapData: null,
  currentHeightScale: 1.0,
  colorMode: 'terrain',
  terrainAtlas: null,
  terrainAtlasTex: null,

  // RTS gameplay state
  units: new Map(),
  selectedUnits: [],
  hotkeySquads: new Array(10).fill(null),
  messageStream: null,
  pathfinder: null,
  gameLoop: null,
};

export default state;
