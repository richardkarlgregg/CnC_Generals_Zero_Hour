import * as THREE from 'three';
import state from '../state.js';
import { MAP_XY_FACTOR, MAX_TERRAIN_LIGHTS, SUN_DISTANCE } from '../constants.js';

export function extractLightUniforms(lightingData) {
  const defaults = {
    ambient: { r: 0.5, g: 0.39, b: 0.30 },
    diffuse: { r: 0.9, g: 0.71, b: 0.60 },
    lightPos: { x: -0.96, y: 0.05, z: -0.29 },
  };
  const lights = lightingData?.terrainLights || [defaults];
  const objLights = lightingData?.objectLights || lights;

  const ambientColor = new THREE.Vector3(
    lights[0].ambient.r, lights[0].ambient.g, lights[0].ambient.b
  );

  const numLights = Math.min(lights.length, MAX_TERRAIN_LIGHTS);
  const diffuseColors = [];
  const lightDirs = [];

  for (let i = 0; i < MAX_TERRAIN_LIGHTS; i++) {
    if (i < numLights) {
      const lp = lights[i].lightPos;
      const d = lights[i].diffuse;
      diffuseColors.push(new THREE.Vector3(d.r, d.g, d.b));
      lightDirs.push(new THREE.Vector3(-lp.x, -lp.z, lp.y).normalize());
    } else {
      diffuseColors.push(new THREE.Vector3(0, 0, 0));
      lightDirs.push(new THREE.Vector3(0, 1, 0));
    }
  }

  const objNumLights = Math.min(objLights.length, MAX_TERRAIN_LIGHTS);
  const objAmbientColor = new THREE.Vector3(
    objLights[0].ambient.r, objLights[0].ambient.g, objLights[0].ambient.b
  );
  const objDiffuseColors = [];
  const objLightDirs = [];
  for (let i = 0; i < MAX_TERRAIN_LIGHTS; i++) {
    if (i < objNumLights) {
      const lp = objLights[i].lightPos;
      const d = objLights[i].diffuse;
      objDiffuseColors.push(new THREE.Vector3(d.r, d.g, d.b));
      objLightDirs.push(new THREE.Vector3(-lp.x, -lp.z, lp.y).normalize());
    } else {
      objDiffuseColors.push(new THREE.Vector3(0, 0, 0));
      objLightDirs.push(new THREE.Vector3(0, 1, 0));
    }
  }

  return { ambientColor, diffuseColors, lightDirs, numLights,
           objAmbientColor, objDiffuseColors, objLightDirs, objNumLights };
}

export function setupSceneLights(lightingData, playW, playH, minH, maxH) {
  const { scene } = state;

  if (state.sunLight) {
    scene.remove(state.sunLight.target);
    if (state.sunLight.shadow?.map) { state.sunLight.shadow.map.dispose(); }
  }
  const oldLights = [];
  scene.traverse(obj => {
    if (obj.isAmbientLight || obj.isDirectionalLight) oldLights.push(obj);
  });
  oldLights.forEach(l => { scene.remove(l); l.dispose(); });
  state.sunLight = null;

  const lu = extractLightUniforms(lightingData);

  scene.add(new THREE.AmbientLight(
    new THREE.Color(lu.objAmbientColor.x, lu.objAmbientColor.y, lu.objAmbientColor.z), 1.0
  ));

  const cx = (playW * MAP_XY_FACTOR) / 2;
  const cz = (playH * MAP_XY_FACTOR) / 2;

  const mapExtent = Math.max(playW, playH) * MAP_XY_FACTOR;
  const halfExt = mapExtent * 0.55;

  for (let i = 0; i < lu.objNumLights; i++) {
    const dc = lu.objDiffuseColors[i];
    const ld = lu.objLightDirs[i];
    if (dc.x + dc.y + dc.z < 0.001) continue;

    const dirLight = new THREE.DirectionalLight(new THREE.Color(dc.x, dc.y, dc.z), 1.0);

    dirLight.position.set(
      cx + ld.x * SUN_DISTANCE,
      ld.y * SUN_DISTANCE,
      cz + ld.z * SUN_DISTANCE
    );

    if (i === 0) {
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 4096;
      dirLight.shadow.mapSize.height = 4096;
      dirLight.shadow.camera.left = -halfExt;
      dirLight.shadow.camera.right = halfExt;
      dirLight.shadow.camera.top = halfExt;
      dirLight.shadow.camera.bottom = -halfExt;
      dirLight.shadow.camera.near = 1;
      dirLight.shadow.camera.far = SUN_DISTANCE * 2;
      dirLight.shadow.bias = 0;
      dirLight.shadow.normalBias = 0;

      dirLight.target.position.set(cx, 0, cz);
      scene.add(dirLight.target);

      state.sunLight = dirLight;
    }

    scene.add(dirLight);
  }
}

export function applyTimeOfDay(todIndex) {
  if (!state.currentMapData || !state.currentMapData.lighting) return;
  const entries = state.currentMapData.lighting.entries;
  if (!entries || todIndex < 0 || todIndex >= entries.length) return;

  const todData = entries[todIndex];
  const lu = extractLightUniforms(todData);

  if (state.terrainMatTextured) {
    const u = state.terrainMatTextured.uniforms;
    u.ambientColor.value.copy(lu.ambientColor);
    u.numLights.value = lu.numLights;
    u.diffuseColor0.value.copy(lu.diffuseColors[0]);
    u.diffuseColor1.value.copy(lu.diffuseColors[1]);
    u.diffuseColor2.value.copy(lu.diffuseColors[2]);
    u.lightDir0.value.copy(lu.lightDirs[0]);
    u.lightDir1.value.copy(lu.lightDirs[1]);
    u.lightDir2.value.copy(lu.lightDirs[2]);
  }

  const hm = state.currentMapData.heightMap;
  const border = hm.borderSize;
  const playW = hm.width - 2 * border;
  const playH = hm.height - 2 * border;
  let minH = 255, maxH = 0;
  for (let i = 0; i < hm.data.length; i++) {
    if (hm.data[i] < minH) minH = hm.data[i];
    if (hm.data[i] > maxH) maxH = hm.data[i];
  }
  setupSceneLights(todData, playW, playH, minH, maxH);

  const isNight = (todIndex === 3);
  updateLightMeshVisibility(isNight);

  if (state.terrainMatTextured) state.terrainMatTextured.needsUpdate = true;
  if (state.terrainMatColored) state.terrainMatColored.needsUpdate = true;
}

export function updateLightMeshVisibility(isNight) {
  state.objectMarkers.traverse(child => {
    if (child.isMesh && child.userData.isLightMesh) {
      child.visible = isNight;
    }
  });
}
