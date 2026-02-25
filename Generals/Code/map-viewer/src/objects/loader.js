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

export function loadW3DModel(w3dPath) {
  const key = normalizeW3DPath(w3dPath);
  if (w3dModelCache.has(key)) return w3dModelCache.get(key);

  const entry = getFileFromPool(w3dPath);
  if (!entry) { w3dModelCache.set(key, null); return null; }

  try {
    const w3d = parseW3D(entry.buffer.slice(entry.offset, entry.offset + entry.size));
    if (w3d.meshes.length === 0) { w3dModelCache.set(key, null); return null; }

    if (!w3d.hierarchy && w3d.hlod && w3d.hlod.hierarchy) {
      const skelName = w3d.hlod.hierarchy.toLowerCase();
      const skelPath = resolveW3DPathByName(skelName, w3dPath);
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
        if (isLightMesh) mesh.renderOrder = 100;

        if (isSkin && bonesByPivot.size > 0) {
          const posAttr = mesh.geometry.getAttribute('position');
          const normAttr = mesh.geometry.getAttribute('normal');
          if (posAttr) {
            const usedPivots = Array.from(new Set(m.boneLinks));
            mesh.userData.cpuSkin = {
              posAttr,
              normAttr: normAttr || null,
              links: m.boneLinks,
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
        }
        meshCount++;
      }
    }

    const group = new THREE.Group();
    group.add(innerGroup);
    group.updateMatrixWorld(true);

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
  const cacheKey = preferredSourcePath ? `${normalized}|${normalizeW3DPath(preferredSourcePath)}` : normalized;
  if (w3dAnimClipCache.has(cacheKey)) return w3dAnimClipCache.get(cacheKey);

  const { fileHint, clipName } = splitAnimToken(normalized);
  const candidateBases = [];
  if (fileHint) candidateBases.push(fileHint);
  if (clipName && clipName !== fileHint) candidateBases.push(clipName);

  let resolvedClip = null;
  let resolvedFrom = null;

  for (const base of candidateBases) {
    const path = resolveW3DPathByName(base, preferredSourcePath);
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
    w3dAnimClipCache.set(cacheKey, null);
    return null;
  }

  if (globalThis.__w3dAnimDebug !== false) {
    console.log(
      `[W3D ANIM] clip "${normalized}" resolved via ${resolvedFrom} -> ${resolvedClip.name} (${resolvedClip.channels.length} channels)`
    );
  }

  w3dAnimClipCache.set(cacheKey, resolvedClip);
  return resolvedClip;
}
