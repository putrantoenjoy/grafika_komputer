const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );

scene.add(camera);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

camera.position.z = 9;
camera.position.y = 3;
camera.position.x = 0;

// camera.position.z = 9;
// camera.position.y = 3;
// camera.position.x = 0;

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let lampu1 = new THREE.PointLight(0xffffff, 1);
lampu1.position.set(-2,-10,10);
scene.add(lampu1);
let lampu2 = new THREE.PointLight(0xffffff, 1);
lampu2.position.set(10,15,10);
scene.add(lampu2);
let lampu3 = new THREE.PointLight(0xffffff, 1);
lampu3.position.set(2,1,-10);
scene.add(lampu3);