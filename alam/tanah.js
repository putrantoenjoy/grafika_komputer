const luastanah1 = new THREE.BoxGeometry( 10, 0.25, 10 );
const rumputtexture = new THREE.TextureLoader().load('./texture/rumput.jpg');
const materialrumput = new THREE.MeshLambertMaterial(
    {
        map: rumputtexture,
        emissiveIntensity: 0.5,
    }
);
let tanah = new THREE.Mesh(luastanah1 , materialrumput);
scene.add(tanah);
tanah.position.setX(0); //atur posisi sumbu x
tanah.position.setY(0); //atur posisi sumbu y
tanah.position.setZ(0); //atur posisi sumbu z