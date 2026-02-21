export function parseTGA(data) {
  const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  const idLength = bytes[0];
  const colorMapType = bytes[1];
  const imageType = bytes[2];
  const width = view.getInt16(12, true);
  const height = view.getInt16(14, true);
  const pixelDepth = bytes[16];
  const flags = bytes[17];

  if (colorMapType !== 0) throw new Error('Indexed TGA not supported');
  const bpp = Math.floor((pixelDepth + 7) / 8);
  if (bpp < 3 || bpp > 4) throw new Error(`Unsupported pixel depth: ${pixelDepth}`);
  const compressed = !!(imageType & 0x08);
  if ((imageType & 0x07) !== 2) throw new Error(`Unsupported image type: ${imageType}`);
  const topToBottom = !!(flags & 0x20);

  let p = 18 + idLength;
  const pixels = new Uint8Array(width * height * 4);

  if (compressed) {
    let count = 0;
    while (count < width * height) {
      const packet = bytes[p++];
      const len = (packet & 0x7F) + 1;
      if (packet & 0x80) {
        const b = bytes[p++], g = bytes[p++], r = bytes[p++];
        const a = bpp === 4 ? bytes[p++] : 255;
        for (let j = 0; j < len; j++) {
          const idx = count++ * 4;
          pixels[idx] = r; pixels[idx+1] = g; pixels[idx+2] = b; pixels[idx+3] = a;
        }
      } else {
        for (let j = 0; j < len; j++) {
          const idx = count++ * 4;
          pixels[idx] = bytes[p+2]; pixels[idx+1] = bytes[p+1];
          pixels[idx+2] = bytes[p]; pixels[idx+3] = bpp === 4 ? bytes[p+3] : 255;
          p += bpp;
        }
      }
    }
  } else {
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4;
      pixels[idx] = bytes[p+2]; pixels[idx+1] = bytes[p+1];
      pixels[idx+2] = bytes[p]; pixels[idx+3] = bpp === 4 ? bytes[p+3] : 255;
      p += bpp;
    }
  }

  if (topToBottom) {
    const rowBytes = width * 4;
    const temp = new Uint8Array(rowBytes);
    for (let y = 0; y < Math.floor(height / 2); y++) {
      const top = y * rowBytes, bot = (height - 1 - y) * rowBytes;
      temp.set(pixels.subarray(top, top + rowBytes));
      pixels.set(pixels.subarray(bot, bot + rowBytes), top);
      pixels.set(temp, bot);
    }
  }

  return { width, height, pixels };
}
