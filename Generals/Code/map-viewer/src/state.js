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
};

export default state;
