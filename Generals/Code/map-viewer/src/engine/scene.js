import * as THREE from 'three';
import state from '../state.js';
import { initGeneralsCamera, updateGeneralsCamera } from './camera.js';
import { updateGameSystems } from './gameLoop.js';

let lastTime = 0;

export function initThree() {
  const canvas = document.getElementById('canvas');
  state.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  state.renderer.setSize(window.innerWidth, window.innerHeight);
  state.renderer.setClearColor(0x6b8cae);
  state.renderer.shadowMap.enabled = true;
  state.renderer.shadowMap.type = THREE.BasicShadowMap;
  state.renderer.toneMapping = THREE.NoToneMapping;
  state.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  state.scene = new THREE.Scene();
  state.scene.fog = new THREE.FogExp2(0x6b8cae, 0.00012);

  state.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 50000);

  initGeneralsCamera(state.renderer.domElement);

  window.addEventListener('resize', () => {
    state.camera.aspect = window.innerWidth / window.innerHeight;
    state.camera.updateProjectionMatrix();
    state.renderer.setSize(window.innerWidth, window.innerHeight);
  });

  lastTime = performance.now();
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  updateGeneralsCamera();
  updateGameSystems(dt);
  state.renderer.render(state.scene, state.camera);
}
