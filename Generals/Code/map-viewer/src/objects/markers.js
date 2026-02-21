import * as THREE from 'three';
import state from '../state.js';
import { MAP_XY_FACTOR, MAP_HEIGHT_SCALE, FLAG_ROAD_FLAGS, FLAG_BRIDGE_FLAGS } from '../constants.js';
import { w3dFileIndex } from './index.js';
import { findW3DForObject } from './index.js';
import { loadW3DModel } from './loader.js';
import { objectKindOfMap } from '../parsers/ini.js';
import { getTerrainHeightAt } from '../terrain/update.js';
import { updateLightMeshVisibility } from '../engine/lighting.js';

export function buildObjectMarkers(objects, fullW, fullH, border) {
  if (!objects || objects.length === 0) return;

  const hasW3D = w3dFileIndex.size > 0;

  const markerGeo = new THREE.BoxGeometry(6, 6, 6);
  const matStructure = new THREE.MeshLambertMaterial({ color: 0xff4444 });
  const matUnit      = new THREE.MeshLambertMaterial({ color: 0x44aaff });
  const matCivilian  = new THREE.MeshLambertMaterial({ color: 0xffaa44 });
  const matOther     = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });

  const playH = fullH - 2 * border;

  const instanceLimit = 5000;
  const visibleObjects = objects.filter(o =>
    !(o.flags & 0x100) && !(o.flags & FLAG_ROAD_FLAGS) && !(o.flags & FLAG_BRIDGE_FLAGS)
  ).slice(0, instanceLimit);

  let loadedCount = 0, fallbackCount = 0;

  for (const obj of visibleObjects) {
    const wx = obj.x;
    const wz = (playH - 1) * MAP_XY_FACTOR - obj.y;
    const wy = (obj.z && Math.abs(obj.z) > 0.1) ? obj.z * MAP_HEIGHT_SCALE : getTerrainHeightAt(obj.x, obj.y);

    let placed = false;

    if (hasW3D) {
      const w3dPath = findW3DForObject(obj.name);
      if (w3dPath) {
        const template = loadW3DModel(w3dPath);
        if (template) {
          const model = template.clone();
          model.position.set(wx, wy, wz);
          if (obj.angle) model.rotation.y = obj.angle;
          model.traverse(child => {
            if (child.isMesh) { child.castShadow = true; child.receiveShadow = true; }
          });
          const kindOf = objectKindOfMap.get(obj.name.toLowerCase());
          model.userData = { name: obj.name, w3d: w3dPath, kindOf: kindOf || null };
          state.objectMarkers.add(model);
          loadedCount++;
          placed = true;
        }
      }
    }

    if (!placed) {
      let mat = matOther;
      const lname = obj.name.toLowerCase();
      if (lname.includes('structure') || lname.includes('building') || lname.includes('commandcenter') ||
          lname.includes('barracks') || lname.includes('factory') || lname.includes('power') ||
          lname.includes('supply') || lname.includes('techbuilding'))
        mat = matStructure;
      else if (lname.includes('vehicle') || lname.includes('infantry') || lname.includes('tank') ||
               lname.includes('unit') || lname.includes('soldier'))
        mat = matUnit;
      else if (lname.includes('civilian') || lname.includes('civ'))
        mat = matCivilian;

      const marker = new THREE.Mesh(markerGeo, mat);
      marker.castShadow = true;
      marker.receiveShadow = true;
      marker.position.set(wx, wy + 3, wz);
      const kindOf = objectKindOfMap.get(obj.name.toLowerCase());
      marker.userData = { name: obj.name, kindOf: kindOf || null };
      state.objectMarkers.add(marker);
      fallbackCount++;
    }
  }

  if (hasW3D) {
    console.log(`Objects: ${loadedCount} W3D models loaded, ${fallbackCount} fallback cubes`);
  }

  const todIndex = state.currentMapData?.lighting?.todIndex ?? 1;
  updateLightMeshVisibility(todIndex === 3);
}
