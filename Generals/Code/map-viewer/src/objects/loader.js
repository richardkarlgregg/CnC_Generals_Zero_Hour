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
export const w3dAnimFileCache = new Map();
export const w3dAnimClipCache = new Map();

function normalizeW3DPath(path) {
  return (path || '').toLowerCase().replace(/\\/g, '/');
}

function isRebelTraceEnabled() {
  return globalThis.__w3dRebelTrace !== false;
}

function shouldTraceRebelByPath(path, hierarchyName = null) {
  const p = normalizeW3DPath(path);
  const h = (hierarchyName || '').toLowerCase();
  return p.endsWith('/cmdo-skin.w3d') || h === 'skeleton';
}

function resolveW3DPathByName(baseName, preferredSourcePath = null) {
  const name = (baseName || '').toLowerCase().replace(/\.w3d$/, '');
  if (!name) return null;

  // Prefer sibling file in the same directory as the source model/anim.
  if (preferredSourcePath) {
    const src = normalizeW3DPath(preferredSourcePath);
    const slash = src.lastIndexOf('/');
    if (slash >= 0) {
      const sibling = `${src.slice(0, slash + 1)}${name}.w3d`;
      if (getFileFromPool(sibling)) return sibling;
    }
  }

  // Fallback to basename index.
  return w3dFileIndex.get(name) || null;
}

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

/**
 * After cloning a model group, `cpuSkin.posAttr` / `cpuSkin.normAttr`
 * still point to the template's BufferAttributes.  Three.js deep-clones
 * the geometry (giving each clone its own attribute arrays) but shallow-copies
 * userData, so we must relink the refs to the clone's own attributes.
 */
/**
 * Three.js r147+ deep-copies userData via JSON.parse(JSON.stringify()) in
 * Object3D.clone().  This destroys every typed array and every class instance
 * stored there.  Call this once immediately after template.clone() to repair
 * all userData fields that the skinning/animation system depends on.
 */
export function fixCpuSkinRefsAfterClone(clonedGroup) {
  clonedGroup.traverse(node => {
    // ── Bone nodes: restore bindPosition / bindQuaternion ──────────────────
    // THREE.Vector3 survives JSON (uses .x/.y/.z), but THREE.Quaternion does
    // NOT: it stores data as ._x/._y/._z/._w with getter aliases .x/.y/.z/.w.
    // After JSON round-trip the getter aliases are gone, so .copy() reads
    // undefined → NaN → NaN bone matrix → NaN vertex positions → invisible mesh.
    if (Number.isInteger(node.userData?.pivotIndex)) {
      if (!(node.userData.bindPosition instanceof THREE.Vector3)) {
        node.userData.bindPosition = node.position.clone();
      }
      if (!(node.userData.bindQuaternion instanceof THREE.Quaternion)) {
        node.userData.bindQuaternion = node.quaternion.clone();
      }
    }

    // ── Skinned mesh nodes: relink BufferAttribute refs ────────────────────
    if (!node.isMesh) return;
    const skin = node.userData?.cpuSkin;
    if (!skin) return;

    // THREE.Mesh.copy() (used by .clone()) shares the geometry by reference,
    // NOT by value.  Without this clone every instance deforms the same shared
    // buffer, so unit N+1's bindPositions are snapshotted from unit N's
    // already-deformed data → progressive corruption → mangled mesh.
    node.geometry = node.geometry.clone();

    const posAttr = node.geometry.getAttribute('position');
    const normAttr = node.geometry.getAttribute('normal') || null;
    skin.posAttr  = posAttr;
    skin.normAttr = normAttr;
    skin.bindPositions = Float32Array.from(posAttr.array);
    skin.bindNormals   = normAttr ? Float32Array.from(normAttr.array) : null;

    // Safety net: if links was a Uint16Array it becomes {"0":n,"1":n,...} with
    // no .length after JSON round-trip.  Convert it back to a plain Array.
    // (Primary fix: links is now stored as Array in loadW3DModel, but guard
    //  against any path that still produces a non-array here.)
    if (skin.links && !Array.isArray(skin.links)) {
      const numericKeys = Object.keys(skin.links).filter(k => !isNaN(Number(k)));
      const len = numericKeys.length > 0 ? Math.max(...numericKeys.map(Number)) + 1 : 0;
      const arr = new Array(len);
      for (let j = 0; j < len; j++) arr[j] = skin.links[j] ?? 0;
      skin.links = arr;
    }
  });
}

export function loadW3DModel(w3dPath) {
  const key = normalizeW3DPath(w3dPath);
  if (w3dModelCache.has(key)) return w3dModelCache.get(key);

  const entry = getFileFromPool(w3dPath);
  if (!entry) { w3dModelCache.set(key, null); return null; }

  try {
    const w3d = parseW3D(entry.buffer.slice(entry.offset, entry.offset + entry.size));
    if (w3d.meshes.length === 0) { w3dModelCache.set(key, null); return null; }

    let resolvedSkeletonPath = null;
    if (!w3d.hierarchy && w3d.hlod && w3d.hlod.hierarchy) {
      const skelName = w3d.hlod.hierarchy.toLowerCase();
      const skelPath = resolveW3DPathByName(skelName, w3dPath);
      resolvedSkeletonPath = skelPath || null;
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

    // Build bone-index lookup from ALL LOD arrays (lods[0] = highest detail).
    // Using all LODs ensures meshes that only appear in high-detail LODs (e.g. weapons)
    // still get their correct bone assignment.  Earlier code used lods[last] which would
    // miss weapon meshes in models that have multiple LODs (low-detail LOD strips the gun).
    const meshPivotIdx = new Map();
    if (w3d.hlod && w3d.hlod.lods.length > 0) {
      // Iterate in reverse so that lods[0] (highest detail) takes final priority.
      for (let li = w3d.hlod.lods.length - 1; li >= 0; li--) {
        for (const sub of w3d.hlod.lods[li]) {
          const parts = sub.name.split('.');
          const meshName = parts.length > 1 ? parts[1].toLowerCase() : parts[0].toLowerCase();
          meshPivotIdx.set(meshName, sub.boneIdx);
        }
      }
    }

    const boneNodes = [];
    const bonesByPivot = new Map();
    const innerGroup = new THREE.Group();
    innerGroup.rotation.x = -Math.PI / 2;

    if (w3d.hierarchy && w3d.hierarchy.pivots.length > 0) {
      for (let i = 0; i < w3d.hierarchy.pivots.length; i++) {
        const p = w3d.hierarchy.pivots[i];
        const node = new THREE.Bone();
        node.name = p.name;
        if (i > 0) {
          node.position.set(p.translation[0], p.translation[1], p.translation[2]);
          const q = p.rotation;
          if (q[0] !== 0 || q[1] !== 0 || q[2] !== 0 || q[3] !== 1) {
            node.quaternion.set(q[0], q[1], q[2], q[3]);
          }
        }
        node.userData = node.userData || {};
        node.userData.pivotIndex = i;
        node.userData.bindPosition = node.position.clone();
        node.userData.bindQuaternion = node.quaternion.clone();
        boneNodes.push(node);
        bonesByPivot.set(i, node);
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
      const mesh = w3dMeshToThreeJS(m);
      if (mesh) {
        mesh.castShadow = !isLightMesh && !mesh.userData.isPrelitUnlit;
        mesh.receiveShadow = !isLightMesh;
        mesh.userData.isLightMesh = isLightMesh;
        if (isLightMesh) {
          mesh.renderOrder = 100;
          // Muzzle flash / FX effect meshes are hidden by default and controlled per-state
          // via HideSubObject/ShowSubObject INI directives (mirrors W3DModelDraw hideAllMuzzleFlashes)
          if (mname.includes('muzzle') || mname.includes('fxfire') || mname.includes('beacon')) {
            mesh.visible = false;
          }
        }

        if (isSkin && bonesByPivot.size > 0) {
          const posAttr = mesh.geometry.getAttribute('position');
          const normAttr = mesh.geometry.getAttribute('normal');
          if (posAttr) {
            // Store links as a plain Array (not Uint16Array) so it survives
          // Three.js's JSON.parse(JSON.stringify(userData)) clone deep-copy.
          const linksArray = Array.from(m.boneLinks);
          const usedPivots = Array.from(new Set(linksArray));
            mesh.userData.cpuSkin = {
              posAttr,
              normAttr: normAttr || null,
              links: linksArray,
              usedPivots,
              bindPositions: Float32Array.from(posAttr.array),
              bindNormals: normAttr ? Float32Array.from(normAttr.array) : null,
            };
          }
        }

        if (isSkin) {
          innerGroup.add(mesh);
        } else {
          const boneIdx = meshPivotIdx.get(mname);
          if (boneIdx !== undefined && boneIdx < boneNodes.length) {
            boneNodes[boneIdx].add(mesh);
          } else {
            innerGroup.add(mesh);
          }
          // Debug: log non-skinned mesh bone assignments for skeletal models
          if (boneNodes.length > 0 && globalThis.__w3dBoneDebug) {
            const assignedIdx = meshPivotIdx.get(mname);
            const boneName = assignedIdx !== undefined && assignedIdx < boneNodes.length
              ? boneNodes[assignedIdx].name : '(innerGroup)';
            const verts = m.vertices;
            const v0 = verts ? `(${verts[0].toFixed(2)},${verts[1].toFixed(2)},${verts[2].toFixed(2)})` : 'N/A';
            console.log(`[W3D BONE] ${key} mesh="${mname}" hlodBone=${assignedIdx ?? 'NONE'} boneName="${boneName}" vert0=${v0} numVerts=${m.vertices?.length/3|0}`);
          }
        }
        meshCount++;
      }
    }

    // Load HLOD aggregate sub-objects — these are separate .w3d files always attached to a bone
    // regardless of LOD level (mirrors HLodClass constructor: Add_Sub_Object_To_Bone, hlod.cpp:1131)
    if (w3d.hlod && w3d.hlod.aggregates && boneNodes.length > 0) {
      for (const agg of w3d.hlod.aggregates) {
        if (!agg.name) continue;
        // aggregate name format is "HLODNAME.MODELNAME" — take the model name part
        const parts = agg.name.split('.');
        const aggModelName = (parts.length > 1 ? parts[1] : parts[0]).toLowerCase();
        if (!aggModelName) continue;
        const aggPath = resolveW3DPathByName(aggModelName, w3dPath);
        if (!aggPath) continue;
        const aggEntry = getFileFromPool(aggPath);
        if (!aggEntry) continue;
        try {
          const aggW3D = parseW3D(aggEntry.buffer.slice(aggEntry.offset, aggEntry.offset + aggEntry.size));
          for (const am of aggW3D.meshes) {
            const amname = am.name.toLowerCase();
            if (amname.includes('shadow') || amname.includes('collision')) continue;
            if (am.attrs & W3D_MESH_FLAG_HIDDEN) continue;
            if (am.attrs & (W3D_MESH_FLAG_COLLISION_BOX | W3D_MESH_FLAG_COLLISION_TYPE_MASK)) continue;
            const aggMesh = w3dMeshToThreeJS(am);
            if (aggMesh) {
              aggMesh.castShadow = true;
              aggMesh.receiveShadow = true;
              const boneIdx = agg.boneIdx;
              if (boneIdx !== undefined && boneIdx < boneNodes.length) {
                boneNodes[boneIdx].add(aggMesh);
              } else {
                innerGroup.add(aggMesh);
              }
              meshCount++;
            }
          }
        } catch (e) { /* skip malformed aggregates */ }
      }
    }

    const group = new THREE.Group();
    group.add(innerGroup);
    group.updateMatrixWorld(true);
    group.userData = group.userData || {};
    group.userData.w3dSource = key;
    group.userData.skeletonW3D = resolvedSkeletonPath;
    group.userData.hierarchyName = w3d.hlod?.hierarchy || null;
    group.userData.hasHierarchy = !!w3d.hierarchy;
    group.userData.boneCount = boneNodes.length;

    if (isRebelTraceEnabled() && shouldTraceRebelByPath(w3dPath, w3d.hlod?.hierarchy)) {
      let skinnedMeshes = 0;
      group.traverse(node => {
        if (node?.isMesh && node.userData?.cpuSkin) skinnedMeshes++;
      });
      console.log(
        `[W3D REBEL TRACE] model=${key} hierarchy=${group.userData.hierarchyName || 'none'} skeleton=${resolvedSkeletonPath || 'none'} bones=${boneNodes.length} skinnedMeshes=${skinnedMeshes}`
      );
    }

    const result = meshCount > 0 ? group : null;
    w3dModelCache.set(key, result);
    return result;
  } catch (e) {
    console.warn('Failed to parse W3D:', w3dPath, e);
    w3dModelCache.set(key, null);
    return null;
  }
}

function splitAnimToken(token) {
  const normalized = (token || '').toLowerCase().trim();
  if (!normalized) return { fileHint: null, clipName: null };
  const dot = normalized.indexOf('.');
  if (dot < 0) return { fileHint: normalized, clipName: normalized };
  return {
    fileHint: normalized.slice(0, dot),
    clipName: normalized.slice(dot + 1),
  };
}

function loadAnimationFile(path) {
  const key = normalizeW3DPath(path);
  if (w3dAnimFileCache.has(key)) return w3dAnimFileCache.get(key);

  const entry = getFileFromPool(path);
  if (!entry) {
    w3dAnimFileCache.set(key, null);
    return null;
  }

  try {
    const parsed = parseW3D(entry.buffer.slice(entry.offset, entry.offset + entry.size));
    w3dAnimFileCache.set(key, parsed);
    return parsed;
  } catch (e) {
    console.warn('Failed to parse animation W3D:', path, e);
    w3dAnimFileCache.set(key, null);
    return null;
  }
}

export function loadW3DAnimationClip(token, preferredSourcePath = null) {
  const normalized = (token || '').toLowerCase();
  if (!normalized) return null;
  const preferred = normalizeW3DPath(preferredSourcePath);
  const cacheKey = preferred ? `${normalized}|${preferred}` : normalized;
  if (w3dAnimClipCache.has(cacheKey)) return w3dAnimClipCache.get(cacheKey);

  const { fileHint, clipName } = splitAnimToken(normalized);
  const candidateBases = [];
  if (fileHint) candidateBases.push(fileHint);
  if (clipName && clipName !== fileHint) candidateBases.push(clipName);

  let resolvedClip = null;
  let resolvedFrom = null;
  const traceAnimResolve = isRebelTraceEnabled() && (preferred.endsWith('/cmdo-skin.w3d') || normalized.startsWith('skeleton.'));

  for (const base of candidateBases) {
    const path = resolveW3DPathByName(base, preferredSourcePath);
    if (traceAnimResolve) {
      console.log(
        `[W3D REBEL TRACE] anim token="${normalized}" base="${base}" preferred="${preferred || 'none'}" resolvedPath="${path || 'NOT FOUND'}"`
      );
    }
    if (!path) continue;
    const parsed = loadAnimationFile(path);
    if (!parsed || !parsed.animations || parsed.animations.length === 0) continue;

    let clip = parsed.animations.find(a => a.name === clipName) || null;
    if (!clip && clipName) {
      clip = parsed.animations.find(a => a.name.includes(clipName)) || null;
    }
    if (!clip) {
      clip = parsed.animations[0];
    }
    if (clip) {
      resolvedClip = clip;
      resolvedFrom = path;
      break;
    }
  }

  if (!resolvedClip) {
    if (traceAnimResolve) {
      console.log(`[W3D REBEL TRACE] final clip token="${normalized}" source=none clip=none`);
    }
    w3dAnimClipCache.set(cacheKey, null);
    return null;
  }

  if (traceAnimResolve) {
    console.log(
      `[W3D REBEL TRACE] final clip token="${normalized}" source="${resolvedFrom}" clip="${resolvedClip.name}"`
    );
  }

  if (globalThis.__w3dAnimDebug !== false) {
    console.log(
      `[W3D ANIM] clip "${normalized}" resolved via ${resolvedFrom} -> ${resolvedClip.name} (${resolvedClip.channels.length} channels)`
    );
  }

  w3dAnimClipCache.set(cacheKey, resolvedClip);
  return resolvedClip;
}
