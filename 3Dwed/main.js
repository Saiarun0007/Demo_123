import * as Three from 'three';

// 1. Create the scene
const scene = new Three.Scene();
scene.background = new Three.Color('#F0F0F0');

// 2. Add a camera with the correct aspect ratio
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// 3. Create and add a cube object
const geometry = new Three.BoxGeometry();
const material = new Three.MeshLambertMaterial({ color: '#590d22', emissive: '#52b788' });
const cube = new Three.Mesh(geometry, material);
scene.add(cube);

// 4. Add lighting
const light = new Three.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Create and set up the renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Render loop to animate the scene
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;  // Optional: Rotate the cube for animation
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

// 7. Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// 8. Check if WebGL is supported
if (WebGLRenderingContext == undefined || !renderer.getContext()) {
    alert("Your browser does not support WebGL");
}
