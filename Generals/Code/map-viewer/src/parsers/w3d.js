export const W3D_CHUNK_MESH           = 0x00000000;
export const W3D_CHUNK_MESH_HEADER3   = 0x0000001F;
export const W3D_CHUNK_VERTICES       = 0x00000002;
export const W3D_CHUNK_VERTEX_NORMALS = 0x00000003;
export const W3D_CHUNK_TRIANGLES      = 0x00000020;
export const W3D_CHUNK_TEXTURES       = 0x00000030;
export const W3D_CHUNK_TEXTURE        = 0x00000031;
export const W3D_CHUNK_TEXTURE_NAME   = 0x00000032;
export const W3D_CHUNK_MATERIAL_PASS  = 0x00000038;
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

  function readChunks(start, end) {
    let pos = start;
    while (pos + 8 <= end) {
      const chunkId = view.getUint32(pos, true);
      const chunkSizeRaw = view.getUint32(pos + 4, true);
      const isContainer = !!(chunkSizeRaw & 0x80000000);
      const chunkSize = chunkSizeRaw & 0x7FFFFFFF;
      const dataStart = pos + 8;
      const dataEnd = Math.min(dataStart + chunkSize, end);
      pos = dataEnd;

      if (chunkId === W3D_CHUNK_MESH) {
        meshes.push(parseMeshChunk(dataStart, dataEnd));
      } else if (chunkId === W3D_CHUNK_HIERARCHY) {
        hierarchy = parseHierarchy(dataStart, dataEnd);
      } else if (chunkId === W3D_CHUNK_HLOD) {
        hlod = parseHLod(dataStart, dataEnd);
      }
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
    const mesh = { name: '', attrs: 0, vertices: null, normals: null, triangles: null, uvs: null, textureNames: [], numVerts: 0, numTris: 0 };
    let pos = start;
    while (pos + 8 <= end) {
      const id = view.getUint32(pos, true);
      const sizeRaw = view.getUint32(pos + 4, true);
      const size = sizeRaw & 0x7FFFFFFF;
      const dStart = pos + 8;
      const dEnd = Math.min(dStart + size, end);
      pos = dEnd;

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
            mesh.vertices[i*3]   = view.getFloat32(dStart + i*12, true);
            mesh.vertices[i*3+1] = view.getFloat32(dStart + i*12+4, true);
            mesh.vertices[i*3+2] = view.getFloat32(dStart + i*12+8, true);
          }
          break;
        }
        case W3D_CHUNK_VERTEX_NORMALS: {
          const count = Math.min(size / 12, mesh.numVerts || size / 12);
          mesh.normals = new Float32Array(count * 3);
          for (let i = 0; i < count; i++) {
            mesh.normals[i*3]   = view.getFloat32(dStart + i*12, true);
            mesh.normals[i*3+1] = view.getFloat32(dStart + i*12+4, true);
            mesh.normals[i*3+2] = view.getFloat32(dStart + i*12+8, true);
          }
          break;
        }
        case W3D_CHUNK_TRIANGLES: {
          const count = Math.min(size / 32, mesh.numTris || size / 32);
          mesh.triangles = new Uint32Array(count * 3);
          for (let i = 0; i < count; i++) {
            mesh.triangles[i*3]   = view.getUint32(dStart + i*32, true);
            mesh.triangles[i*3+1] = view.getUint32(dStart + i*32+4, true);
            mesh.triangles[i*3+2] = view.getUint32(dStart + i*32+8, true);
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
        case W3D_CHUNK_TEXTURES:
        case W3D_CHUNK_MATERIAL_PASS:
        case W3D_CHUNK_TEXTURE_STAGE: {
          let sp = dStart;
          while (sp + 8 <= dEnd) {
            const sid = view.getUint32(sp, true);
            const ssRaw = view.getUint32(sp + 4, true);
            const ss = ssRaw & 0x7FFFFFFF;
            const sdStart = sp + 8;
            const sdEnd = Math.min(sdStart + ss, dEnd);
            sp = sdEnd;

            if (sid === W3D_CHUNK_TEXTURE) {
              let tp = sdStart;
              while (tp + 8 <= sdEnd) {
                const tid = view.getUint32(tp, true);
                const tsRaw = view.getUint32(tp + 4, true);
                const ts = tsRaw & 0x7FFFFFFF;
                const tdStart = tp + 8;
                tp = Math.min(tdStart + ts, sdEnd);
                if (tid === W3D_CHUNK_TEXTURE_NAME) {
                  mesh.textureNames.push(readString(tdStart, ts));
                }
              }
            } else if (sid === W3D_CHUNK_STAGE_TEXCOORDS) {
              const count = ss / 8;
              mesh.uvs = new Float32Array(count * 2);
              for (let i = 0; i < count; i++) {
                mesh.uvs[i*2]   = view.getFloat32(sdStart + i*8, true);
                mesh.uvs[i*2+1] = view.getFloat32(sdStart + i*8+4, true);
              }
            } else if (sid === W3D_CHUNK_TEXTURE_STAGE) {
              let tsp = sdStart;
              while (tsp + 8 <= sdEnd) {
                const tsid = view.getUint32(tsp, true);
                const tssRaw = view.getUint32(tsp + 4, true);
                const tss = tssRaw & 0x7FFFFFFF;
                const tsdStart = tsp + 8;
                tsp = Math.min(tsdStart + tss, sdEnd);
                if (tsid === W3D_CHUNK_STAGE_TEXCOORDS && !mesh.uvs) {
                  const cnt = tss / 8;
                  mesh.uvs = new Float32Array(cnt * 2);
                  for (let i = 0; i < cnt; i++) {
                    mesh.uvs[i*2]   = view.getFloat32(tsdStart + i*8, true);
                    mesh.uvs[i*2+1] = view.getFloat32(tsdStart + i*8+4, true);
                  }
                }
              }
            }
          }
          break;
        }
      }
    }
    return mesh;
  }

  function parseHierarchy(start, end) {
    const hier = { name: '', pivots: [] };
    let pos = start;
    while (pos + 8 <= end) {
      const id = view.getUint32(pos, true);
      const sizeRaw = view.getUint32(pos + 4, true);
      const size = sizeRaw & 0x7FFFFFFF;
      const dStart = pos + 8;
      pos = Math.min(dStart + size, end);

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
            translation: [view.getFloat32(off+20,true), view.getFloat32(off+24,true), view.getFloat32(off+28,true)],
            rotation: [view.getFloat32(off+44,true), view.getFloat32(off+48,true), view.getFloat32(off+52,true), view.getFloat32(off+56,true)],
          });
        }
      }
    }
    return hier;
  }

  function parseHLod(start, end) {
    const hlod = { name: '', hierarchy: '', lods: [] };
    let pos = start;
    while (pos + 8 <= end) {
      const id = view.getUint32(pos, true);
      const sizeRaw = view.getUint32(pos + 4, true);
      const size = sizeRaw & 0x7FFFFFFF;
      const dStart = pos + 8;
      const dEnd = Math.min(dStart + size, end);
      pos = dEnd;

      if (id === W3D_CHUNK_HLOD_HEADER) {
        hlod.name = readString(dStart + 8, 16);
        hlod.hierarchy = readString(dStart + 24, 16);
      } else if (id === W3D_CHUNK_HLOD_LOD_ARRAY) {
        const subObjects = [];
        let sp = dStart;
        while (sp + 8 <= dEnd) {
          const sid = view.getUint32(sp, true);
          const ssRaw = view.getUint32(sp + 4, true);
          const ss = ssRaw & 0x7FFFFFFF;
          const sdStart = sp + 8;
          sp = Math.min(sdStart + ss, dEnd);
          if (sid === W3D_CHUNK_HLOD_SUB_OBJECT) {
            subObjects.push({
              boneIdx: view.getUint32(sdStart, true),
              name: readString(sdStart + 4, ss - 4),
            });
          }
        }
        hlod.lods.push(subObjects);
      }
    }
    return hlod;
  }

  readChunks(0, buffer.byteLength);
  return { meshes, hierarchy, hlod };
}
