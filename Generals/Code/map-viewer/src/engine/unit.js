// Mirrors Generals Object + Drawable combined
// Wraps a Three.js Object3D with gameplay state

// W3D models face +X by default; our heading 0 = +Z.
// This offset rotates the mesh so the model's +X forward aligns with the heading.
const MODEL_HEADING_OFFSET = -Math.PI / 2;

let nextUnitId = 1;

export class Unit {
  constructor(mesh, name, kindOf) {
    this.id = nextUnitId++;
    this.name = name;
    this.kindOf = kindOf || new Set();
    this.mesh = mesh;

    this.position = { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z };
    // Convert the mesh's visual rotation back to a logical heading
    this.rotation = (mesh.rotation.y || 0) - MODEL_HEADING_OFFSET;

    this.selected = false;
    this.selectionIndicator = null;

    // AI reference, set in Phase 3
    this.ai = null;

    // Link unit back to mesh for picking
    mesh.userData.unitId = this.id;
    mesh.userData.unit = this;
  }

  isSelectable() {
    if (this.kindOf.has('UNSELECTABLE')) return false;
    if (!this.kindOf.has('SELECTABLE') && this.kindOf.size > 0) {
      // In Generals, most game objects have SELECTABLE in their KindOf
      // For fallback cubes without KindOf, allow selection
    }
    return true;
  }

  isMobile() {
    if (this.kindOf.has('STRUCTURE')) return false;
    if (this.kindOf.has('IMMOBILE')) return false;
    return true;
  }

  isLocallyControlled() {
    // Single-player viewer: all units are "ours"
    return true;
  }

  isUnit() {
    return this.kindOf.has('VEHICLE') ||
           this.kindOf.has('INFANTRY') ||
           this.kindOf.has('AIRCRAFT') ||
           this.kindOf.has('HUGE_VEHICLE');
  }

  isStructure() {
    return this.kindOf.has('STRUCTURE');
  }

  syncPositionFromMesh() {
    this.position.x = this.mesh.position.x;
    this.position.y = this.mesh.position.y;
    this.position.z = this.mesh.position.z;
    this.rotation = this.mesh.rotation.y - MODEL_HEADING_OFFSET;
  }

  syncMeshFromPosition() {
    this.mesh.position.x = this.position.x;
    this.mesh.position.y = this.position.y;
    this.mesh.position.z = this.position.z;
    this.mesh.rotation.y = this.rotation + MODEL_HEADING_OFFSET;
  }
}

export function resetUnitIdCounter() {
  nextUnitId = 1;
}
