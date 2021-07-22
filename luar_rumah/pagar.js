// material pagar
const materialpagar = new THREE.MeshLambertMaterial(
    {
        color: 'blue',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

const materialpagarlampu = new THREE.MeshLambertMaterial(
    {
        color: 'blue',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

// pagar lampu kanan
let pagarlampukanan = new THREE.Mesh(pagarlampu, materialpagarlampu);
scene.add(pagarlampukanan);
pagarlampukanan.position.setX(1.14); //atur posisi sumbu x
pagarlampukanan.position.setY(0.87); //atur posisi sumbu y
pagarlampukanan.position.setZ(1.20); //atur posisi sumbu z

// pagar lampu kiri
let pagarlampukiri = new THREE.Mesh(pagarlampu, materialpagarlampu);
scene.add(pagarlampukiri);
pagarlampukiri.position.setX(-1.15); //atur posisi sumbu x
pagarlampukiri.position.setY(0.87); //atur posisi sumbu y
pagarlampukiri.position.setZ(1.20); //atur posisi sumbu z


// pagar kanan
let pagarkanan = new THREE.Mesh(pagar, materialpagar);
scene.add(pagarkanan);
pagarkanan.position.setX(3.14); //atur posisi sumbu x
pagarkanan.position.setY(0.87); //atur posisi sumbu y
pagarkanan.position.setZ(1.20); //atur posisi sumbu z

// pagar kiri
let pagarkiri = new THREE.Mesh(pagar, materialpagar);
scene.add(pagarkiri);
pagarkiri.position.setX(-3.15); //atur posisi sumbu x
pagarkiri.position.setY(0.87); //atur posisi sumbu y
pagarkiri.position.setZ(1.20); //atur posisi sumbu z

// pagar belakang rumah
let pagarbelakang = new THREE.Mesh(pagar_belakang, materialpagar);
scene.add(pagarbelakang);
pagarbelakang.position.setX(0); //atur posisi sumbu x
pagarbelakang.position.setY(0.87); //atur posisi sumbu y
pagarbelakang.position.setZ(-4.96); //atur posisi sumbu z

// pagar samping kanan
let pagarsampingkanan = new THREE.Mesh(pagarsamping, materialpagar);
scene.add(pagarsampingkanan);
pagarsampingkanan.position.setX(4.943); //atur posisi sumbu x
pagarsampingkanan.position.setY(0.87); //atur posisi sumbu y
pagarsampingkanan.position.setZ(-1.88); //atur posisi sumbu z

// pagar samping kiri
let pagarsampingkiri = new THREE.Mesh(pagarsamping, materialpagar);
scene.add(pagarsampingkiri);
pagarsampingkiri.position.setX(-4.95); //atur posisi sumbu x
pagarsampingkiri.position.setY(0.87); //atur posisi sumbu y
pagarsampingkiri.position.setZ(-1.88); //atur posisi sumbu z