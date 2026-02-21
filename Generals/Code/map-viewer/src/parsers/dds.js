export function parseDDS(data) {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  const magic = view.getUint32(0, true);
  if (magic !== 0x20534444) throw new Error('Not a DDS file');

  const height = view.getUint32(12, true);
  const width = view.getUint32(16, true);
  const pfFlags = view.getUint32(80, true);
  const fourCC = String.fromCharCode(bytes[84], bytes[85], bytes[86], bytes[87]);

  const DDPF_FOURCC = 0x04;
  const DDPF_RGB = 0x40;
  const DDPF_ALPHAPIXELS = 0x01;
  const headerSize = 128;
  const texData = bytes.subarray(headerSize);

  if (pfFlags & DDPF_FOURCC) {
    if (fourCC === 'DXT1') return decodeDXT1(texData, width, height);
    if (fourCC === 'DXT3') return decodeDXT3(texData, width, height);
    if (fourCC === 'DXT5') return decodeDXT5(texData, width, height);
    throw new Error('Unsupported DDS FourCC: ' + fourCC);
  }

  if (pfFlags & DDPF_RGB) {
    const rgbBitCount = view.getUint32(88, true);
    const rMask = view.getUint32(92, true);
    const gMask = view.getUint32(96, true);
    const bMask = view.getUint32(100, true);
    const aMask = (pfFlags & DDPF_ALPHAPIXELS) ? view.getUint32(104, true) : 0;
    return decodeUncompressedDDS(texData, width, height, rgbBitCount, rMask, gMask, bMask, aMask);
  }

  throw new Error('Unsupported DDS pixel format');
}

function decodeUncompressedDDS(data, width, height, bpp, rMask, gMask, bMask, aMask) {
  const bytesPerPixel = bpp / 8;
  const pixels = new Uint8Array(width * height * 4);
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

  function maskShift(mask) {
    if (!mask) return { shift: 0, bits: 0 };
    let shift = 0;
    let m = mask;
    while (m && !(m & 1)) { shift++; m >>= 1; }
    let bits = 0;
    while (m & 1) { bits++; m >>= 1; }
    return { shift, bits };
  }

  const rS = maskShift(rMask), gS = maskShift(gMask), bS = maskShift(bMask), aS = maskShift(aMask);

  for (let i = 0; i < width * height; i++) {
    let val = 0;
    const off = i * bytesPerPixel;
    for (let b = 0; b < bytesPerPixel; b++) val |= data[off + b] << (b * 8);
    const r = rS.bits ? ((val >> rS.shift) & ((1 << rS.bits) - 1)) * 255 / ((1 << rS.bits) - 1) : 0;
    const g = gS.bits ? ((val >> gS.shift) & ((1 << gS.bits) - 1)) * 255 / ((1 << gS.bits) - 1) : 0;
    const b2 = bS.bits ? ((val >> bS.shift) & ((1 << bS.bits) - 1)) * 255 / ((1 << bS.bits) - 1) : 0;
    const a = aS.bits ? ((val >> aS.shift) & ((1 << aS.bits) - 1)) * 255 / ((1 << aS.bits) - 1) : 255;
    const idx = i * 4;
    pixels[idx] = r; pixels[idx + 1] = g; pixels[idx + 2] = b2; pixels[idx + 3] = a;
  }
  return { width, height, pixels };
}

function unpackRGB565(c) {
  return [
    ((c >> 11) & 0x1F) * 255 / 31 | 0,
    ((c >> 5) & 0x3F) * 255 / 63 | 0,
    (c & 0x1F) * 255 / 31 | 0,
  ];
}

function decodeDXT1(data, width, height) {
  const pixels = new Uint8Array(width * height * 4);
  const bw = (width + 3) >> 2, bh = (height + 3) >> 2;
  let offset = 0;
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      const c0 = data[offset] | (data[offset + 1] << 8);
      const c1 = data[offset + 2] | (data[offset + 3] << 8);
      const r0 = unpackRGB565(c0), r1 = unpackRGB565(c1);
      const palette = [r0, r1];
      if (c0 > c1) {
        palette[2] = [((2*r0[0]+r1[0])/3)|0, ((2*r0[1]+r1[1])/3)|0, ((2*r0[2]+r1[2])/3)|0];
        palette[3] = [((r0[0]+2*r1[0])/3)|0, ((r0[1]+2*r1[1])/3)|0, ((r0[2]+2*r1[2])/3)|0];
      } else {
        palette[2] = [((r0[0]+r1[0])/2)|0, ((r0[1]+r1[1])/2)|0, ((r0[2]+r1[2])/2)|0];
        palette[3] = [0, 0, 0];
      }
      const bits = data[offset+4] | (data[offset+5]<<8) | (data[offset+6]<<16) | (data[offset+7]<<24);
      for (let py = 0; py < 4; py++) {
        for (let px = 0; px < 4; px++) {
          const x = bx * 4 + px, y = by * 4 + py;
          if (x >= width || y >= height) continue;
          const idx = ((y) * width + x) * 4;
          const ci = (bits >> ((py * 4 + px) * 2)) & 3;
          pixels[idx] = palette[ci][0];
          pixels[idx+1] = palette[ci][1];
          pixels[idx+2] = palette[ci][2];
          pixels[idx+3] = (c0 <= c1 && ci === 3) ? 0 : 255;
        }
      }
      offset += 8;
    }
  }
  return { width, height, pixels };
}

function decodeDXT3(data, width, height) {
  const pixels = new Uint8Array(width * height * 4);
  const bw = (width + 3) >> 2, bh = (height + 3) >> 2;
  let offset = 0;
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      const alphaBlock = [];
      for (let i = 0; i < 8; i++) alphaBlock.push(data[offset + i]);
      offset += 8;
      const c0 = data[offset] | (data[offset+1] << 8);
      const c1 = data[offset+2] | (data[offset+3] << 8);
      const r0 = unpackRGB565(c0), r1 = unpackRGB565(c1);
      const palette = [r0, r1,
        [((2*r0[0]+r1[0])/3)|0, ((2*r0[1]+r1[1])/3)|0, ((2*r0[2]+r1[2])/3)|0],
        [((r0[0]+2*r1[0])/3)|0, ((r0[1]+2*r1[1])/3)|0, ((r0[2]+2*r1[2])/3)|0]
      ];
      const bits = data[offset+4] | (data[offset+5]<<8) | (data[offset+6]<<16) | (data[offset+7]<<24);
      for (let py = 0; py < 4; py++) {
        for (let px = 0; px < 4; px++) {
          const x = bx * 4 + px, y = by * 4 + py;
          if (x >= width || y >= height) continue;
          const idx = (y * width + x) * 4;
          const ci = (bits >> ((py * 4 + px) * 2)) & 3;
          pixels[idx] = palette[ci][0];
          pixels[idx+1] = palette[ci][1];
          pixels[idx+2] = palette[ci][2];
          const alphaIdx = py * 4 + px;
          const alphaByte = alphaBlock[alphaIdx >> 1];
          pixels[idx+3] = ((alphaIdx & 1) ? (alphaByte >> 4) : (alphaByte & 0x0F)) * 17;
        }
      }
      offset += 8;
    }
  }
  return { width, height, pixels };
}

function decodeDXT5(data, width, height) {
  const pixels = new Uint8Array(width * height * 4);
  const bw = (width + 3) >> 2, bh = (height + 3) >> 2;
  let offset = 0;
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      const a0 = data[offset], a1 = data[offset + 1];
      const alphaLUT = [a0, a1];
      if (a0 > a1) {
        for (let i = 1; i <= 6; i++) alphaLUT.push(((6-i)*a0 + i*a1 + 3) / 7 | 0);
      } else {
        for (let i = 1; i <= 4; i++) alphaLUT.push(((4-i)*a0 + i*a1 + 2) / 5 | 0);
        alphaLUT.push(0, 255);
      }
      let alphaBits = 0n;
      for (let i = 0; i < 6; i++) alphaBits |= BigInt(data[offset + 2 + i]) << BigInt(i * 8);
      offset += 8;

      const c0 = data[offset] | (data[offset+1] << 8);
      const c1 = data[offset+2] | (data[offset+3] << 8);
      const r0 = unpackRGB565(c0), r1 = unpackRGB565(c1);
      const palette = [r0, r1,
        [((2*r0[0]+r1[0])/3)|0, ((2*r0[1]+r1[1])/3)|0, ((2*r0[2]+r1[2])/3)|0],
        [((r0[0]+2*r1[0])/3)|0, ((r0[1]+2*r1[1])/3)|0, ((r0[2]+2*r1[2])/3)|0]
      ];
      const bits = data[offset+4] | (data[offset+5]<<8) | (data[offset+6]<<16) | (data[offset+7]<<24);
      for (let py = 0; py < 4; py++) {
        for (let px = 0; px < 4; px++) {
          const x = bx * 4 + px, y = by * 4 + py;
          if (x >= width || y >= height) continue;
          const idx = (y * width + x) * 4;
          const ci = (bits >> ((py * 4 + px) * 2)) & 3;
          pixels[idx] = palette[ci][0];
          pixels[idx+1] = palette[ci][1];
          pixels[idx+2] = palette[ci][2];
          const ai = py * 4 + px;
          pixels[idx+3] = alphaLUT[Number((alphaBits >> BigInt(ai * 3)) & 7n)];
        }
      }
      offset += 8;
    }
  }
  return { width, height, pixels };
}
