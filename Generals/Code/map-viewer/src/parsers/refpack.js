import { showError } from '../ui/panel.js';

export function decompressRefPack(src) {
  let si = 0;
  let type = (src[si++] << 8) | src[si++];
  let largeSizeField = !!(type & 0x8000);
  let sizeBytes = largeSizeField ? 4 : 3;

  if (type & 0x100) {
    si += sizeBytes;
  }

  let ulen = 0;
  if (largeSizeField) {
    ulen = (src[si++] << 24) | (src[si++] << 16) | (src[si++] << 8) | src[si++];
  } else {
    ulen = (src[si++] << 16) | (src[si++] << 8) | src[si++];
  }

  const dest = new Uint8Array(ulen);
  let di = 0;

  for (;;) {
    let first = src[si++];

    if (!(first & 0x80)) {
      let second = src[si++];
      let run = first & 3;
      while (run--) dest[di++] = src[si++];
      let refOff = di - 1 - (((first & 0x60) << 3) + second);
      run = ((first & 0x1c) >> 2) + 3 - 1;
      do { dest[di++] = dest[refOff++]; } while (run--);
      continue;
    }

    if (!(first & 0x40)) {
      let second = src[si++];
      let third = src[si++];
      let run = second >> 6;
      while (run--) dest[di++] = src[si++];
      let refOff = di - 1 - (((second & 0x3f) << 8) + third);
      run = (first & 0x3f) + 4 - 1;
      do { dest[di++] = dest[refOff++]; } while (run--);
      continue;
    }

    if (!(first & 0x20)) {
      let second = src[si++];
      let third = src[si++];
      let forth = src[si++];
      let run = first & 3;
      while (run--) dest[di++] = src[si++];
      let refOff = di - 1 - (((first & 0x10) >> 4 << 16) + (second << 8) + third);
      run = (((first & 0x0c) >> 2 << 8) + forth + 5) - 1;
      do { dest[di++] = dest[refOff++]; } while (run--);
      continue;
    }

    let run = ((first & 0x1f) << 2) + 4;
    if (run <= 112) {
      while (run--) dest[di++] = src[si++];
      continue;
    }

    run = first & 3;
    while (run--) dest[di++] = src[si++];
    break;
  }

  return dest;
}

export async function tryDecompress(buffer) {
  const u8 = new Uint8Array(buffer);
  if (u8.length < 8) return u8;

  const magic = String.fromCharCode(u8[0], u8[1], u8[2], u8[3]);

  if (magic === 'EAR\0') {
    return decompressRefPack(u8.subarray(8));
  }

  if (magic.startsWith('ZL') && u8[3] === 0) {
    try {
      const compressed = u8.subarray(8);
      const ds = new DecompressionStream('deflate');
      const blob = new Blob([compressed]);
      const stream = blob.stream().pipeThrough(ds);
      const reader = stream.getReader();
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
      const totalLen = chunks.reduce((s, c) => s + c.length, 0);
      const result = new Uint8Array(totalLen);
      let off = 0;
      for (const c of chunks) { result.set(c, off); off += c.length; }
      return result;
    } catch (e) {
      showError('Failed to decompress ZLib-compressed map: ' + e.message);
      return null;
    }
  }

  return u8;
}
