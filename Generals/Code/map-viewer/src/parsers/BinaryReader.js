export class BinaryReader {
  constructor(data) {
    if (data instanceof Uint8Array) {
      this.buffer = data.buffer;
      this.view = new DataView(data.buffer, data.byteOffset, data.byteLength);
      this.bytes = data;
    } else {
      this.buffer = data;
      this.view = new DataView(data);
      this.bytes = new Uint8Array(data);
    }
    this.pos = 0;
  }

  get eof() { return this.pos >= this.bytes.length; }
  get remaining() { return this.bytes.length - this.pos; }

  readUInt32() { const v = this.view.getUint32(this.pos, true); this.pos += 4; return v; }
  readInt32()  { const v = this.view.getInt32(this.pos, true);  this.pos += 4; return v; }
  readUInt16() { const v = this.view.getUint16(this.pos, true); this.pos += 2; return v; }
  readInt16()  { const v = this.view.getInt16(this.pos, true);  this.pos += 2; return v; }
  readFloat32(){ const v = this.view.getFloat32(this.pos, true);this.pos += 4; return v; }
  readByte()   { return this.bytes[this.pos++]; }

  readBytes(n) {
    const slice = this.bytes.subarray(this.pos, this.pos + n);
    this.pos += n;
    return slice;
  }

  readInt16Array(count) {
    const arr = new Int16Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = this.view.getInt16(this.pos, true);
      this.pos += 2;
    }
    return arr;
  }

  readAsciiString() {
    const len = this.readUInt16();
    if (len === 0) return '';
    const bytes = this.readBytes(len);
    let str = '';
    for (let i = 0; i < len; i++) str += String.fromCharCode(bytes[i]);
    return str;
  }

  readUnicodeString() {
    const len = this.readUInt16();
    if (len === 0) return '';
    let str = '';
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.readUInt16());
    }
    return str;
  }

  readDict(tocNames) {
    const count = this.readUInt16();
    const dict = {};
    for (let i = 0; i < count; i++) {
      const keyAndType = this.readInt32();
      const type = keyAndType & 0xff;
      const nameId = keyAndType >>> 8;
      const keyName = tocNames[nameId] || `key_${nameId}`;
      switch (type) {
        case 1: dict[keyName] = !!this.readByte(); break;
        case 2: dict[keyName] = this.readInt32(); break;
        case 3: dict[keyName] = this.readFloat32(); break;
        case 4: dict[keyName] = this.readAsciiString(); break;
        case 5: dict[keyName] = this.readUnicodeString(); break;
        default: throw new Error(`Unknown dict type ${type}`);
      }
    }
    return dict;
  }

  seek(pos) { this.pos = pos; }
  skip(n)   { this.pos += n; }
  tell()    { return this.pos; }
}
