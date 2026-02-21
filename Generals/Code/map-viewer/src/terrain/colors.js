export const TERRAIN_COLORS = {
  'AsphaltType1':   0x3a3a3e, 'AsphaltType2':   0x4a4a4e,
  'Concrete':       0x7a7a7a, 'Pavement':       0x6a6a6e,
  'RoadType1':      0x555555, 'RoadType2':      0x4f4f4f,
  'Dirt':           0x8b7355, 'DirtType2':      0x7a6344,
  'DirtType3':      0x6b5535, 'DirtRoad':       0x9a8365,
  'CliffType1':     0x6b5b4b, 'CliffType2':     0x5b4b3b,
  'Sand':           0xc2a96e, 'SandType2':      0xb89e60,
  'SandType3':      0xd4bc7a, 'SandDunes':      0xd9c07f,
  'Desert':         0xc8ab6a, 'DesertSand':     0xc8b070,
  'Grass':          0x4a7a30, 'GrassType2':     0x3a6a24,
  'GrassType3':     0x5a8a3a, 'GrassTall':      0x3f7028,
  'GrassField':     0x4a7a30, 'TallGrass':      0x3f7028,
  'ShortGrass':     0x5a8a3a, 'MediumGrass':    0x4a7a30,
  'Rock':           0x6a6a5e, 'RockType2':      0x5a5a4e,
  'RockType3':      0x7a7a6e,
  'Snow':           0xd8dce6, 'SnowType2':      0xc8ccd6,
  'Ice':            0xa8c8e0,
  'Water':          0x2060a0, 'WaterEdge':      0x408ab0,
  'Mud':            0x5a4a30, 'MudType2':       0x6a5a40,
  'Swamp':          0x3a5a2a,
  'Urban':          0x5a5a60, 'UrbanType2':     0x4a4a50,
  'Field':          0x6a9a40, 'Farmland':       0x7a8a3a,
  'GrassRock':      0x5a7a4a, 'BlendRock':      0x6a6a55,
  'Tundra':         0x8a9a90,
};

export function getTerrainColor(name) {
  if (!name) return 0x808060;
  const nameClean = name.replace(/\.tga$/i, '');

  for (const [key, color] of Object.entries(TERRAIN_COLORS)) {
    if (nameClean.toLowerCase().includes(key.toLowerCase())) return color;
  }

  let hash = 0;
  for (let i = 0; i < nameClean.length; i++) {
    hash = ((hash << 5) - hash + nameClean.charCodeAt(i)) | 0;
  }
  const h = Math.abs(hash) % 360;
  return hslToHex(h, 0.35, 0.45);
}

export function hslToHex(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return (Math.round((r + m) * 255) << 16) | (Math.round((g + m) * 255) << 8) | Math.round((b + m) * 255);
}
