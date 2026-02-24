import * as THREE from 'three';
import { getFileFromPool } from '../parsers/big.js';
import { parseW3D, W3D_MESH_FLAG_COLLISION_BOX, W3D_MESH_FLAG_COLLISION_TYPE_MASK,
         W3D_MESH_FLAG_HIDDEN, W3D_MESH_FLAG_PRELIT_UNLIT,
         W3D_MESH_FLAG_GEOMETRY_TYPE_MASK, W3D_MESH_FLAG_GEOMETRY_TYPE_SKIN,
         W3D_MESH_FLAG_SKIN_LEGACY } from '../parsers/w3d.js';
import { loadTextureFromPool, loadTextureFromPoolWithLuminanceAlpha } from '../roads/mesh.js';
import { w3dFileIndex } from './index.js';

export const w3dModelCache = new Map();
export const w3dTextureCache = new Map();
export const w3dAnimationCache = new Map();
const ENABLE_SKINNED_MESHES = false;
const DEBUG_ANIM = true;

function buildW3DMeshGeometryAndMaterial(w3dMesh) {
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
        const shader = w3dMesh.shaders && w3dMesh.shaders[0];
        const shaderAlphaTest = shader && shader.alphaTest === 1;
        const shaderAlphaBlend = shader && shader.srcBlend === 2 && shader.destBlend === 5;
        const needsAlpha = shaderAlphaTest || shaderAlphaBlend;
        material = new THREE.MeshLambertMaterial({
          map: tex,
          transparent: needsAlpha,
          alphaTest: shaderAlphaTest ? 0.376 : 0,
          depthWrite: shader ? shader.depthMask !== 0 : true,
          side: needsAlpha ? THREE.DoubleSide : THREE.FrontSide,
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

  return { geo, material, isPrelitUnlit };
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
    if (DEBUG_ANIM && (key.includes('cmdo-skin') || key.includes('skeleton'))) {
      console.log(`[ANIM] loadW3DModel ${w3dPath}: meshes=${w3d.meshes.length}, hierarchy=${w3d.hierarchy?.name || 'none'}, hlodHierarchy=${w3d.hlod?.hierarchy || 'none'}`);
    }

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
              if (DEBUG_ANIM) {
                console.log(`[ANIM] hierarchy resolved from HLOD "${w3d.hlod.hierarchy}" via ${skelPath}`);
              }
            }
          } catch (e) { /* skip */ }
        }
      }
    }
    if (!w3d.hierarchy) {
      const hintedHierarchy = w3d.meshes.find(m => m.hierarchyModelName)?.hierarchyModelName;
      if (hintedHierarchy) {
        const hintedPath = w3dFileIndex.get(hintedHierarchy.toLowerCase());
        if (hintedPath) {
          const hintedEntry = getFileFromPool(hintedPath);
          if (hintedEntry) {
            try {
              const hintedW3D = parseW3D(hintedEntry.buffer.slice(hintedEntry.offset, hintedEntry.offset + hintedEntry.size));
              if (hintedW3D.hierarchy) {
                w3d.hierarchy = hintedW3D.hierarchy;
                if (DEBUG_ANIM) {
                  console.log(`[ANIM] hierarchy resolved from mesh header "${hintedHierarchy}" via ${hintedPath}`);
                }
              }
            } catch { /* ignore */ }
          }
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
        const node = new THREE.Bone();
        node.name = p.name;
        node.userData.pivotIndex = i;
        if (i === 0) {
          // Mirrors Generals HTreeClass::Base_Update / Anim_Update:
          // pivot 0 is set from object root transform, not from pivot base.
          node.position.set(0, 0, 0);
          node.quaternion.identity();
        } else {
          node.position.set(p.translation[0], p.translation[1], p.translation[2]);
          const q = p.rotation;
          if (q[0] !== 0 || q[1] !== 0 || q[2] !== 0 || q[3] !== 1) {
            node.quaternion.set(q[0], q[1], q[2], q[3]);
          }
        }
        node.userData.bindPosition = node.position.clone();
        node.userData.bindQuaternion = node.quaternion.clone();
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

    // Precompute bind-pose world matrices for safe fallback rendering of skin meshes.
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
      if (mname.includes('shadow') || mname.includes('collision')) continue;
      if (m.attrs & W3D_MESH_FLAG_HIDDEN) continue;
      if (m.attrs & (W3D_MESH_FLAG_COLLISION_BOX | W3D_MESH_FLAG_COLLISION_TYPE_MASK)) continue;

      const isSkin = m.boneLinks && m.boneLinks.length > 0 &&
        ((m.attrs & W3D_MESH_FLAG_GEOMETRY_TYPE_MASK) === W3D_MESH_FLAG_GEOMETRY_TYPE_SKIN ||
         (m.attrs & W3D_MESH_FLAG_SKIN_LEGACY));

      const isLightMesh = mname.includes('light') || mname.includes('glow') ||
                          mname.includes('muzzle') || mname.includes('fxfire') ||
                          mname.includes('flame') || mname.includes('beacon');
      const built = buildW3DMeshGeometryAndMaterial(m);
      if (built) {
        let mesh;
        if (isSkin && boneNodes.length > 0 && ENABLE_SKINNED_MESHES) {
          const vertexCount = built.geo.getAttribute('position').count;
          const links = m.boneLinks || [];
          const skinIndices = new Uint16Array(vertexCount * 4);
          const skinWeights = new Float32Array(vertexCount * 4);
          for (let vi = 0; vi < vertexCount; vi++) {
            const bi = vi < links.length ? links[vi] : 0;
            skinIndices[vi * 4] = bi < boneNodes.length ? bi : 0;
            skinWeights[vi * 4] = 1.0;
          }
          built.geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
          built.geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

          const skinMat = built.material.clone();
          skinMat.skinning = true;
          mesh = new THREE.SkinnedMesh(built.geo, skinMat);
          const skeleton = new THREE.Skeleton(boneNodes);
          // Infantry assets often use external hierarchy + skin files.
          // Detached bind keeps skeleton world-space independent of mesh parent,
          // which matches this split-asset setup.
          mesh.bindMode = 'detached';
          mesh.bind(skeleton, new THREE.Matrix4());
          mesh.userData.hasSkeleton = true;
        } else {
          // Safe fallback for non-animated skin meshes without hierarchy.
          // If we do have bones (CPU skin runtime), keep original bind vertices.
          if (isSkin && boneNodes.length === 0 && boneMats.length > 0) {
            const posAttr = built.geo.getAttribute('position');
            const normAttr = built.geo.getAttribute('normal');
            const links = m.boneLinks || [];
            const tmpV = new THREE.Vector3();
            const tmpN = new THREE.Vector3();
            const normalMat = new THREE.Matrix3();
            for (let vi = 0; vi < posAttr.count; vi++) {
              const bi = vi < links.length ? links[vi] : 0;
              if (bi < boneMats.length) {
                tmpV.fromBufferAttribute(posAttr, vi).applyMatrix4(boneMats[bi]);
                posAttr.setXYZ(vi, tmpV.x, tmpV.y, tmpV.z);
                if (normAttr) {
                  normalMat.getNormalMatrix(boneMats[bi]);
                  tmpN.fromBufferAttribute(normAttr, vi).applyMatrix3(normalMat).normalize();
                  normAttr.setXYZ(vi, tmpN.x, tmpN.y, tmpN.z);
                }
              }
            }
            posAttr.needsUpdate = true;
            if (normAttr) normAttr.needsUpdate = true;
            built.geo.computeBoundingSphere();
          }
          mesh = new THREE.Mesh(built.geo, built.material);
        }

        mesh.userData.isPrelitUnlit = built.isPrelitUnlit;
        mesh.castShadow = !isLightMesh && !mesh.userData.isPrelitUnlit;
        mesh.receiveShadow = !isLightMesh;
        mesh.userData.isLightMesh = isLightMesh;
        if (isLightMesh) mesh.renderOrder = 100;

        if (isSkin) {
          mesh.userData.cpuSkinTemplate = { links: Uint16Array.from(m.boneLinks || []) };
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
    group.userData.w3dHierarchyName = w3d.hierarchy?.name?.toLowerCase() || null;

    const result = meshCount > 0 ? group : null;
    if (DEBUG_ANIM && (key.includes('cmdo-skin') || key.includes('skeleton'))) {
      console.log(`[ANIM] model built ${w3dPath}: meshCount=${meshCount}, bones=${boneNodes.length}, hasHierarchy=${!!w3d.hierarchy}`);
    }
    w3dModelCache.set(key, result);
    return result;
  } catch (e) {
    console.warn('Failed to parse W3D:', w3dPath, e);
    w3dModelCache.set(key, null);
    return null;
  }
}

export function loadW3DAnimationClip(animationToken) {
  if (!animationToken) return null;
  const key = animationToken.toLowerCase();
  if (w3dAnimationCache.has(key)) return w3dAnimationCache.get(key);

  const parts = key.split('.');
  if (parts.length < 2) {
    w3dAnimationCache.set(key, null);
    return null;
  }

  // Mirrors Generals WW3DAssetManager::Get_HAnim:
  // for "HierarchyName.AnimName", load "<AnimName>.w3d" on demand.
  const animName = parts.slice(1).join('.');
  let w3dPath = w3dFileIndex.get(animName);
  if (!w3dPath) {
    // Fallback for non-standard assets: try hierarchy container as well.
    const animContainerName = parts[0];
    w3dPath = w3dFileIndex.get(animContainerName);
  }
  if (!w3dPath) {
    w3dAnimationCache.set(key, null);
    if (DEBUG_ANIM) {
      console.warn(`[ANIM] clip not found in index for token "${animationToken}" (animName="${animName}")`);
    }
    return null;
  }

  const entry = getFileFromPool(w3dPath);
  if (!entry) {
    w3dAnimationCache.set(key, null);
    if (DEBUG_ANIM) {
      console.warn(`[ANIM] clip file missing in pool for token "${animationToken}" path="${w3dPath}"`);
    }
    return null;
  }

  try {
    const parsed = parseW3D(entry.buffer.slice(entry.offset, entry.offset + entry.size));
    if (parsed.animations && parsed.animations.length > 0) {
      for (const anim of parsed.animations) {
        if (anim.key) {
          w3dAnimationCache.set(anim.key.toLowerCase(), anim);
        }
      }
    }
    if (parsed.compressedAnimations && parsed.compressedAnimations.length > 0) {
      for (const anim of parsed.compressedAnimations) {
        if (anim.key && !w3dAnimationCache.has(anim.key.toLowerCase())) {
          w3dAnimationCache.set(anim.key.toLowerCase(), null);
        }
      }
    }
    if (!w3dAnimationCache.has(key)) {
      w3dAnimationCache.set(key, null);
    }
    if (DEBUG_ANIM && (key.includes('skeleton.') || key.includes('uirgrd_'))) {
      const hit = w3dAnimationCache.get(key);
      console.log(`[ANIM] token "${animationToken}" -> ${w3dPath}, parsedAnims=${parsed.animations?.length || 0}, clipResolved=${!!hit}`);
      if (hit) {
        console.log(`[ANIM] clip details ${hit.key}: frames=${hit.numFrames}, fps=${hit.frameRate}, channels=${hit.channels?.length || 0}`);
      }
    }
    return w3dAnimationCache.get(key);
  } catch {
    w3dAnimationCache.set(key, null);
    if (DEBUG_ANIM) {
      console.warn(`[ANIM] failed parsing animation file for token "${animationToken}" path="${w3dPath}"`);
    }
    return null;
  }
}
