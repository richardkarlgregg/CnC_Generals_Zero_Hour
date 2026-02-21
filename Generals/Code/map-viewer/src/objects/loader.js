import * as THREE from 'three';
import { getFileFromPool } from '../parsers/big.js';
import { parseW3D, W3D_MESH_FLAG_HIDDEN, W3D_MESH_FLAG_PRELIT_UNLIT,
         W3D_MESH_FLAG_GEOMETRY_TYPE_MASK, W3D_MESH_FLAG_GEOMETRY_TYPE_SKIN,
         W3D_MESH_FLAG_SKIN_LEGACY } from '../parsers/w3d.js';
import { loadTextureFromPool, loadTextureFromPoolWithLuminanceAlpha } from '../roads/mesh.js';
import { w3dFileIndex } from './index.js';

export const w3dModelCache = new Map();
export const w3dTextureCache = new Map();

function w3dMeshToThreeJS(w3dMesh) {
  if (!w3dMesh.vertices || !w3dMesh.triangles) return null;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(w3dMesh.vertices, 3));

  if (w3dMesh.normals) {
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(w3dMesh.normals, 3));
  }

  if (w3dMesh.uvs) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(w3dMesh.uvs, 2));
  }

  const hasVertexColors = !!w3dMesh.vertexColors;
  if (hasVertexColors) {
    const vc = w3dMesh.vertexColors;
    const rgb = new Float32Array((vc.length / 4) * 3);
    for (let i = 0; i < vc.length / 4; i++) {
      rgb[i * 3]     = vc[i * 4];
      rgb[i * 3 + 1] = vc[i * 4 + 1];
      rgb[i * 3 + 2] = vc[i * 4 + 2];
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(rgb, 3));
  }

  geo.setIndex(new THREE.BufferAttribute(w3dMesh.triangles, 1));
  if (!w3dMesh.normals) geo.computeVertexNormals();

  const isPrelitUnlit = !!(w3dMesh.attrs & W3D_MESH_FLAG_PRELIT_UNLIT);
  const mnameLower = w3dMesh.name.toLowerCase();
  const isLight = mnameLower.includes('light') || mnameLower.includes('glow') ||
                  mnameLower.includes('muzzle') || mnameLower.includes('fxfire') ||
                  mnameLower.includes('flame') || mnameLower.includes('beacon');

  let material;
  const texName = w3dMesh.textureNames[0];
  if (texName) {
    const tex = isLight ? loadW3DTextureLuminanceAlpha(texName) : loadW3DTexture(texName);
    if (tex) {
      if (isLight) {
        material = new THREE.MeshBasicMaterial({
          map: tex, transparent: true, depthWrite: false,
          blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
          vertexColors: hasVertexColors,
        });
      } else if (isPrelitUnlit) {
        material = new THREE.MeshBasicMaterial({
          map: tex, transparent: true, depthWrite: false,
          vertexColors: hasVertexColors,
        });
      } else {
        const hasAlpha = texName.toLowerCase().includes('alpha') ||
                         texName.toLowerCase().includes('tree') ||
                         texName.toLowerCase().includes('bush') ||
                         texName.toLowerCase().includes('shrub');
        material = new THREE.MeshLambertMaterial({
          map: tex, transparent: hasAlpha, alphaTest: hasAlpha ? 0.3 : 0,
          vertexColors: hasVertexColors,
        });
      }
    } else if (isLight) {
      console.warn('Missing light texture:', texName, 'for mesh:', w3dMesh.name);
    }
  }
  if (!material) {
    if (isLight) {
      material = new THREE.MeshBasicMaterial({
        color: 0xffffaa, transparent: true, opacity: 0.6,
        depthWrite: false, blending: THREE.AdditiveBlending,
        vertexColors: hasVertexColors,
      });
    } else {
      material = isPrelitUnlit
        ? new THREE.MeshBasicMaterial({ color: hasVertexColors ? 0xffffff : 0xffffcc, vertexColors: hasVertexColors })
        : new THREE.MeshLambertMaterial({ color: hasVertexColors ? 0xffffff : 0xcccccc, vertexColors: hasVertexColors });
    }
  }

  const mesh = new THREE.Mesh(geo, material);
  mesh.userData.isPrelitUnlit = isPrelitUnlit;
  return mesh;
}

function loadW3DTexture(name) {
  const key = name.toLowerCase().replace(/\.[^.]+$/, '');
  if (w3dTextureCache.has(key)) return w3dTextureCache.get(key);
  const tex = loadTextureFromPool(name, { flipDDS: true });
  w3dTextureCache.set(key, tex);
  return tex;
}

function loadW3DTextureLuminanceAlpha(name) {
  const key = 'lum_' + name.toLowerCase().replace(/\.[^.]+$/, '');
  if (w3dTextureCache.has(key)) return w3dTextureCache.get(key);
  const tex = loadTextureFromPoolWithLuminanceAlpha(name, { flipDDS: true });
  w3dTextureCache.set(key, tex);
  return tex;
}

export function loadW3DModel(w3dPath) {
  const key = w3dPath.toLowerCase();
  if (w3dModelCache.has(key)) return w3dModelCache.get(key);

  const entry = getFileFromPool(w3dPath);
  if (!entry) { w3dModelCache.set(key, null); return null; }

  try {
    const w3d = parseW3D(entry.buffer.slice(entry.offset, entry.offset + entry.size));
    if (w3d.meshes.length === 0) { w3dModelCache.set(key, null); return null; }

    if (!w3d.hierarchy && w3d.hlod && w3d.hlod.hierarchy) {
      const skelName = w3d.hlod.hierarchy.toLowerCase();
      const skelPath = w3dFileIndex.get(skelName);
      if (skelPath) {
        const skelEntry = getFileFromPool(skelPath);
        if (skelEntry) {
          try {
            const skelW3D = parseW3D(skelEntry.buffer.slice(skelEntry.offset, skelEntry.offset + skelEntry.size));
            if (skelW3D.hierarchy) {
              w3d.hierarchy = skelW3D.hierarchy;
            }
          } catch (e) { /* skip */ }
        }
      }
    }

    const meshPivotIdx = new Map();
    if (w3d.hlod && w3d.hlod.lods.length > 0) {
      const lod0 = w3d.hlod.lods[w3d.hlod.lods.length - 1];
      for (const sub of lod0) {
        const parts = sub.name.split('.');
        const meshName = parts.length > 1 ? parts[1].toLowerCase() : parts[0].toLowerCase();
        meshPivotIdx.set(meshName, sub.boneIdx);
      }
    }

    const boneNodes = [];
    const innerGroup = new THREE.Group();
    innerGroup.rotation.x = -Math.PI / 2;

    if (w3d.hierarchy && w3d.hierarchy.pivots.length > 0) {
      for (let i = 0; i < w3d.hierarchy.pivots.length; i++) {
        const p = w3d.hierarchy.pivots[i];
        const node = new THREE.Object3D();
        node.name = p.name;
        if (i > 0) {
          node.position.set(p.translation[0], p.translation[1], p.translation[2]);
          const q = p.rotation;
          if (q[0] !== 0 || q[1] !== 0 || q[2] !== 0 || q[3] !== 1) {
            node.quaternion.set(q[0], q[1], q[2], q[3]);
          }
        }
        boneNodes.push(node);
      }
      for (let i = 0; i < w3d.hierarchy.pivots.length; i++) {
        const parentIdx = w3d.hierarchy.pivots[i].parentIdx;
        if (parentIdx === 0xFFFFFFFF || parentIdx >= boneNodes.length) {
          innerGroup.add(boneNodes[i]);
        } else {
          boneNodes[parentIdx].add(boneNodes[i]);
        }
      }
    }

    const boneMats = [];
    if (w3d.hierarchy) {
      for (let i = 0; i < w3d.hierarchy.pivots.length; i++) {
        const mat = new THREE.Matrix4();
        if (i === 0) {
          mat.identity();
        } else {
          const p = w3d.hierarchy.pivots[i];
          const local = new THREE.Matrix4();
          local.compose(
            new THREE.Vector3(p.translation[0], p.translation[1], p.translation[2]),
            new THREE.Quaternion(p.rotation[0], p.rotation[1], p.rotation[2], p.rotation[3]),
            new THREE.Vector3(1, 1, 1)
          );
          const parentIdx = p.parentIdx;
          if (parentIdx !== 0xFFFFFFFF && parentIdx < boneMats.length) {
            mat.multiplyMatrices(boneMats[parentIdx], local);
          } else {
            mat.copy(local);
          }
        }
        boneMats.push(mat);
      }
    }

    let meshCount = 0;
    for (const m of w3d.meshes) {
      const mname = m.name.toLowerCase();
      if (mname.includes('shadow') || mname.includes('collision') || mname.startsWith('box')) continue;
      if (m.attrs & W3D_MESH_FLAG_HIDDEN) continue;

      const isSkin = m.boneLinks && m.boneLinks.length > 0 &&
        ((m.attrs & W3D_MESH_FLAG_GEOMETRY_TYPE_MASK) === W3D_MESH_FLAG_GEOMETRY_TYPE_SKIN ||
         (m.attrs & W3D_MESH_FLAG_SKIN_LEGACY));
      if (isSkin && boneMats.length > 0) {
        const verts = m.vertices;
        const norms = m.normals;
        const links = m.boneLinks;
        const tmpV = new THREE.Vector3();
        const tmpN = new THREE.Vector3();
        const normMat = new THREE.Matrix3();
        for (let vi = 0; vi < links.length && vi * 3 + 2 < verts.length; vi++) {
          const bi = links[vi];
          if (bi < boneMats.length) {
            tmpV.set(verts[vi*3], verts[vi*3+1], verts[vi*3+2]);
            tmpV.applyMatrix4(boneMats[bi]);
            verts[vi*3] = tmpV.x; verts[vi*3+1] = tmpV.y; verts[vi*3+2] = tmpV.z;
            if (norms) {
              normMat.getNormalMatrix(boneMats[bi]);
              tmpN.set(norms[vi*3], norms[vi*3+1], norms[vi*3+2]);
              tmpN.applyMatrix3(normMat).normalize();
              norms[vi*3] = tmpN.x; norms[vi*3+1] = tmpN.y; norms[vi*3+2] = tmpN.z;
            }
          }
        }
      }

      const isLightMesh = mname.includes('light') || mname.includes('glow') ||
                          mname.includes('muzzle') || mname.includes('fxfire') ||
                          mname.includes('flame') || mname.includes('beacon');
      const mesh = w3dMeshToThreeJS(m);
      if (mesh) {
        mesh.castShadow = !isLightMesh && !mesh.userData.isPrelitUnlit;
        mesh.receiveShadow = !isLightMesh;
        mesh.userData.isLightMesh = isLightMesh;
        if (isLightMesh) mesh.renderOrder = 100;

        if (isSkin) {
          innerGroup.add(mesh);
        } else {
          const boneIdx = meshPivotIdx.get(mname);
          if (boneIdx !== undefined && boneIdx < boneNodes.length) {
            boneNodes[boneIdx].add(mesh);
          } else {
            innerGroup.add(mesh);
          }
        }
        meshCount++;
      }
    }

    const group = new THREE.Group();
    group.add(innerGroup);

    const result = meshCount > 0 ? group : null;
    w3dModelCache.set(key, result);
    return result;
  } catch (e) {
    console.warn('Failed to parse W3D:', w3dPath, e);
    w3dModelCache.set(key, null);
    return null;
  }
}
