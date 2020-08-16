import * as THREE from "/build/three.module.js";
import { OrbitControls } from '/jsm/controls/OrbitControls'


const scene: THREE.Scene = new THREE.Scene()

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const canvas1 : HTMLCanvasElement= <HTMLCanvasElement>document.getElementById("c1");

const renderer1 : THREE.WebGLRenderer = new THREE.WebGLRenderer({canvas: canvas1});
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer1.setSize(200, 200)
//document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    controls.update()

    renderer1.render(scene,camera)
   // renderer.render(scene, camera)
};

animate();