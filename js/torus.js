/* =====================================================
   torus.js
   3D broken-ring animation rendered via Three.js.
   ===================================================== */

import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const canvas = document.getElementById('torus-canvas');
if (!canvas) throw new Error('torus-canvas not found');

/* ── Renderer ── */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;

/* ── Scene & camera ── */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
camera.position.z = 6;

/* ── Environment map (drives metallic reflections) ── */
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

/* ── Ring material — dark chrome silver ── */
const material = new THREE.MeshPhysicalMaterial({
    color: 0x858fa0,
    metalness: 0.98,
    roughness: 0.12,
    envMapIntensity: 4.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 1.0,
});

/* ── Ring geometry — 3 arcs of ~105° with ~15° gaps ── */
const arcAngle = (105 * Math.PI) / 180;
const stepAngle = (120 * Math.PI) / 180;  // 360° / 3 segments
const gapAngle = stepAngle - arcAngle;
const RADIUS = 1.85;
const TUBE = 0.09;

const group = new THREE.Group();
group.rotation.x = 0.4;
scene.add(group);

/* 4 radial segments = square corners; scale.z flattens tube into a ribbon */
for (let i = 0; i < 3; i++) {
    const geo = new THREE.TorusGeometry(RADIUS, TUBE, 4, 256, arcAngle);
    const mesh = new THREE.Mesh(geo, material);
    mesh.rotation.z = i * stepAngle;
    mesh.scale.z = 0.65;
    group.add(mesh);
}

/* ── Gap dots — one glowing orb centered in each gap ── */
const dotColor = new THREE.Color(0x9f92ff).lerp(new THREE.Color(0xffcc6d), 0.35);
const dotGeo = new THREE.SphereGeometry(0.08, 16, 16);

for (let i = 0; i < 3; i++) {
    const angle = i * stepAngle + arcAngle + gapAngle / 2;
    const dot = new THREE.Mesh(dotGeo, new THREE.MeshBasicMaterial({ color: dotColor }));
    dot.position.set(RADIUS * Math.cos(angle), RADIUS * Math.sin(angle), 0);
    group.add(dot);
}

/* ── Lights ── */
const lightDefs = [
    { color: 0xffffff, intensity: 12, pos: [4, 3, 5] },  // soft white key
    { color: 0x9f92ff, intensity: 28, pos: [-4, -2, 2] },  // strong purple fill
    { color: 0x7e6ff0, intensity: 24, pos: [0, 5, -2] },  // purple top
    { color: 0x4a32ff, intensity: 20, pos: [-3, 2, -4] },  // deep purple rim
];
lightDefs.forEach(({ color, intensity, pos }) => {
    const light = new THREE.PointLight(color, intensity, 30);
    light.position.set(...pos);
    scene.add(light);
});
scene.add(new THREE.AmbientLight(0xffffff, 0.15));

/* ── Responsive canvas sizing ── */
function setSize() {
    const wrap = document.querySelector('.torus-wrap');
    if (!wrap) return;
    const size = Math.min(wrap.clientWidth, 520);
    renderer.setSize(size, size);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
}
setSize();
window.addEventListener('resize', setSize);

/* ── Animation loop ── */
let t = 0;
function animate() {
    requestAnimationFrame(animate);
    t += 0.008;

    group.rotation.y += 0.012;
    group.rotation.z += 0.004;

    /* Subtle breathing scale pulse */
    const breathe = 1 + Math.sin(t * 0.6) * 0.012;
    group.scale.set(breathe, breathe, breathe);

    renderer.render(scene, camera);
}
animate();
