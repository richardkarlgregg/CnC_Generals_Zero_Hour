export const W3D_CHUNK_MESH           = 0x00000000;
export const W3D_CHUNK_MESH_HEADER3   = 0x0000001F;
export const W3D_CHUNK_VERTICES       = 0x00000002;
export const W3D_CHUNK_VERTEX_NORMALS = 0x00000003;
export const W3D_CHUNK_TRIANGLES      = 0x00000020;
export const W3D_CHUNK_TEXTURES       = 0x00000030;
export const W3D_CHUNK_TEXTURE        = 0x00000031;
export const W3D_CHUNK_TEXTURE_NAME   = 0x00000032;
export const W3D_CHUNK_MATERIAL_PASS  = 0x00000038;
export const W3D_CHUNK_VERTEX_MATERIAL_IDS = 0x00000039;
export const W3D_CHUNK_SHADERS       = 0x00000029;
export const W3D_CHUNK_SHADER_IDS    = 0x0000003A;
export const W3D_CHUNK_DCG           = 0x0000003B;
export const W3D_CHUNK_TEXTURE_STAGE  = 0x00000048;
export const W3D_CHUNK_TEXTURE_IDS    = 0x00000049;
export const W3D_CHUNK_STAGE_TEXCOORDS= 0x0000004A;
export const W3D_CHUNK_VERTEX_MATERIALS= 0x0000002A;
export const W3D_CHUNK_MATERIAL_INFO  = 0x00000028;
export const W3D_CHUNK_HIERARCHY      = 0x00000100;
export const W3D_CHUNK_HIERARCHY_HEADER=0x00000101;
export const W3D_CHUNK_PIVOTS         = 0x00000102;
export const W3D_CHUNK_HLOD           = 0x00000700;
export const W3D_CHUNK_HLOD_HEADER    = 0x00000701;
export const W3D_CHUNK_HLOD_LOD_ARRAY = 0x00000702;
export const W3D_CHUNK_HLOD_SUB_OBJECT_ARRAY_HEADER = 0x00000703;
export const W3D_CHUNK_HLOD_SUB_OBJECT = 0x00000704;
export const W3D_CHUNK_BOX            = 0x00000740;
export const W3D_CHUNK_VERTEX_INFLUENCES = 0x0000000E;

export const W3D_CHUNK_PRELIT_UNLIT                  = 0x00002300;
export const W3D_CHUNK_PRELIT_VERTEX                 = 0x00002301;
export const W3D_CHUNK_PRELIT_LIGHTMAP_MULTI_PASS    = 0x00002302;
export const W3D_CHUNK_PRELIT_LIGHTMAP_MULTI_TEXTURE = 0x00002303;

export const W3D_MESH_FLAG_HIDDEN       = 0x00001000;
export const W3D_MESH_FLAG_PRELIT_UNLIT = 0x01000000;
export const W3D_MESH_FLAG_GEOMETRY_TYPE_MASK = 0x00FF0000;
export const W3D_MESH_FLAG_GEOMETRY_TYPE_SKIN = 0x00020000;
export const W3D_MESH_FLAG_SKIN_LEGACY       = 0x00000002;

export function parseW3D(buffer) {
  const view = new DataView(buffer);
  const meshes = [];
  let hierarchy = null;
  let hlod = null;

  function iterChunks(start, end, handler) {
    let pos = start;
    while (pos + 8 <= end) {
      const id = view.getUint32(pos, true);
      const sizeRaw = view.getUint32(pos + 4, true);
      const size = sizeRaw & 0x7FFFFFFF;
      const dStart = pos + 8;
      const dEnd = Math.min(dStart + size, end);
      pos = dEnd;
      handler(id, dStart, dEnd, size);
    }
  }

  function readString(offset, maxLen) {
    let s = '';
    for (let i = 0; i < maxLen; i++) {
      const c = view.getUint8(offset + i);
      if (c === 0) break;
      s += String.fromCharCode(c);
    }
    return s;
  }

  function parseMeshChunk(start, end) {
    const mesh = {
      name: '', attrs: 0,
      vertices: null, normals: null, triangles: null,
      uvs: null, vertexColors: null,
      textureNames: [], numVerts: 0, numTris: 0,
      boneLinks: null,
      shaders: null,
    };

    function parseTextures(tStart, tEnd) {
      iterChunks(tStart, tEnd, (id, dStart, dEnd, size) => {
        if (id === W3D_CHUNK_TEXTURE) {
          iterChunks(dStart, dEnd, (tid, tdStart, _tdEnd, tSize) => {
            if (tid === W3D_CHUNK_TEXTURE_NAME) {
              mesh.textureNames.push(readString(tdStart, tSize));
            }
          });
        }
      });
    }

    function parseTextureStage(tsStart, tsEnd) {
      iterChunks(tsStart, tsEnd, (id, dStart, _dEnd, size) => {
        if (id === W3D_CHUNK_STAGE_TEXCOORDS && !mesh.uvs) {
          const count = size / 8;
          if (mesh.numVerts && count !== mesh.numVerts) {
            console.warn(`W3D "${mesh.name}": UV count (${count}) != vertex count (${mesh.numVerts})`);
          }
          mesh.uvs = new Float32Array(count * 2);
          for (let i = 0; i < count; i++) {
            mesh.uvs[i * 2]     = view.getFloat32(dStart + i * 8, true);
            mesh.uvs[i * 2 + 1] = view.getFloat32(dStart + i * 8 + 4, true);
          }
        }
      });
    }

    function parseMaterialPass(mpStart, mpEnd) {
      iterChunks(mpStart, mpEnd, (id, dStart, dEnd, size) => {
        if (id === W3D_CHUNK_TEXTURE_STAGE) {
          parseTextureStage(dStart, dEnd);
        } else if (id === W3D_CHUNK_STAGE_TEXCOORDS && !mesh.uvs) {
          const count = size / 8;
          if (mesh.numVerts && count !== mesh.numVerts) {
            console.warn(`W3D "${mesh.name}": UV count (${count}) != vertex count (${mesh.numVerts})`);
          }
          mesh.uvs = new Float32Array(count * 2);
          for (let i = 0; i < count; i++) {
            mesh.uvs[i * 2]     = view.getFloat32(dStart + i * 8, true);
            mesh.uvs[i * 2 + 1] = view.getFloat32(dStart + i * 8 + 4, true);
          }
        } else if (id === W3D_CHUNK_DCG && !mesh.vertexColors) {
          const count = Math.min(size / 4, mesh.numVerts || size / 4);
          mesh.vertexColors = new Float32Array(count * 4);
          for (let i = 0; i < count; i++) {
            mesh.vertexColors[i * 4]     = view.getUint8(dStart + i * 4) / 255;
            mesh.vertexColors[i * 4 + 1] = view.getUint8(dStart + i * 4 + 1) / 255;
            mesh.vertexColors[i * 4 + 2] = view.getUint8(dStart + i * 4 + 2) / 255;
            mesh.vertexColors[i * 4 + 3] = view.getUint8(dStart + i * 4 + 3) / 255;
          }
        }
      });
    }

    iterChunks(start, end, (id, dStart, dEnd, size) => {
      switch (id) {
        case W3D_CHUNK_MESH_HEADER3: {
          mesh.attrs = view.getUint32(dStart + 4, true);
          mesh.name = readString(dStart + 8, 16);
          mesh.numTris = view.getUint32(dStart + 40, true);
          mesh.numVerts = view.getUint32(dStart + 44, true);
          break;
        }
        case W3D_CHUNK_VERTICES: {
          const count = Math.min(size / 12, mesh.numVerts || size / 12);
          mesh.vertices = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            mesh.vertices[i * 3]     = view.getFloat32(dStart + i * 12, true);
            mesh.vertices[i * 3 + 1] = view.getFloat32(dStart + i * 12 + 4, true);
            mesh.vertices[i * 3 + 2] = view.getFloat32(dStart + i * 12 + 8, true);
          }
          break;
        }
        case W3D_CHUNK_VERTEX_NORMALS: {
          const count = Math.min(size / 12, mesh.numVerts || size / 12);
          mesh.normals = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            mesh.normals[i * 3]     = view.getFloat32(dStart + i * 12, true);
            mesh.normals[i * 3 + 1] = view.getFloat32(dStart + i * 12 + 4, true);
            mesh.normals[i * 3 + 2] = view.getFloat32(dStart + i * 12 + 8, true);
          }
          break;
        }
        case W3D_CHUNK_TRIANGLES: {
          const count = Math.min(size / 32, mesh.numTris || size / 32);
          mesh.triangles = new Uint32Array(count * 3);
          for (let i = 0; i < count; i++) {
            mesh.triangles[i * 3]     = view.getUint32(dStart + i * 32, true);
            mesh.triangles[i * 3 + 1] = view.getUint32(dStart + i * 32 + 4, true);
            mesh.triangles[i * 3 + 2] = view.getUint32(dStart + i * 32 + 8, true);
          }
          break;
        }
        case W3D_CHUNK_VERTEX_INFLUENCES: {
          const count = Math.min(size / 8, mesh.numVerts || size / 8);
          mesh.boneLinks = new Uint16Array(count);
          for (let i = 0; i < count; i++) {
            mesh.boneLinks[i] = view.getUint16(dStart + i * 8, true);
          }
          break;
        }
        case W3D_CHUNK_SHADERS: {
          const count = Math.floor(size / 16);
          mesh.shaders = [];
          for (let i = 0; i < count; i++) {
            const off = dStart + i * 16;
            mesh.shaders.push({
              depthMask:  view.getUint8(off + 1),
              destBlend:  view.getUint8(off + 3),
              srcBlend:   view.getUint8(off + 7),
              alphaTest:  view.getUint8(off + 12),
            });
          }
          break;
        }
        case W3D_CHUNK_TEXTURES:
          parseTextures(dStart, dEnd);
          break;
        case W3D_CHUNK_MATERIAL_PASS:
        case W3D_CHUNK_PRELIT_UNLIT:
        case W3D_CHUNK_PRELIT_VERTEX:
        case W3D_CHUNK_PRELIT_LIGHTMAP_MULTI_PASS:
        case W3D_CHUNK_PRELIT_LIGHTMAP_MULTI_TEXTURE:
          parseMaterialPass(dStart, dEnd);
          break;
      }
    });
    return mesh;
  }

  function parseHierarchy(start, end) {
    const hier = { name: '', pivots: [] };
    iterChunks(start, end, (id, dStart, _dEnd, size) => {
      if (id === W3D_CHUNK_HIERARCHY_HEADER) {
        hier.name = readString(dStart + 4, 16);
        hier.numPivots = view.getUint32(dStart + 20, true);
      } else if (id === W3D_CHUNK_PIVOTS) {
        const count = Math.floor(size / 60);
        for (let i = 0; i < count; i++) {
          const off = dStart + i * 60;
          hier.pivots.push({
            name: readString(off, 16),
            parentIdx: view.getUint32(off + 16, true),
            translation: [view.getFloat32(off + 20, true), view.getFloat32(off + 24, true), view.getFloat32(off + 28, true)],
            rotation: [view.getFloat32(off + 44, true), view.getFloat32(off + 48, true), view.getFloat32(off + 52, true), view.getFloat32(off + 56, true)],
          });
        }
      }
    });
    return hier;
  }

  function parseHLod(start, end) {
    const hlod = { name: '', hierarchy: '', lods: [] };
    iterChunks(start, end, (id, dStart, dEnd, size) => {
      if (id === W3D_CHUNK_HLOD_HEADER) {
        hlod.name = readString(dStart + 8, 16);
        hlod.hierarchy = readString(dStart + 24, 16);
      } else if (id === W3D_CHUNK_HLOD_LOD_ARRAY) {
        const subObjects = [];
        iterChunks(dStart, dEnd, (sid, sdStart, _sdEnd, ss) => {
          if (sid === W3D_CHUNK_HLOD_SUB_OBJECT) {
            subObjects.push({
              boneIdx: view.getUint32(sdStart, true),
              name: readString(sdStart + 4, ss - 4),
            });
          }
        });
        hlod.lods.push(subObjects);
      }
    });
    return hlod;
  }

  iterChunks(0, buffer.byteLength, (id, dStart, dEnd) => {
    if (id === W3D_CHUNK_MESH) {
      meshes.push(parseMeshChunk(dStart, dEnd));
    } else if (id === W3D_CHUNK_HIERARCHY) {
      hierarchy = parseHierarchy(dStart, dEnd);
    } else if (id === W3D_CHUNK_HLOD) {
      hlod = parseHLod(dStart, dEnd);
    }
  });

  return { meshes, hierarchy, hlod };
}
