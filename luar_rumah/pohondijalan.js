const materialbatang = new THREE.MeshLambertMaterial(
  {
        color: '#3F301D',
        emissive: '#4A3728',
        emissiveIntensity: 0.5,
    }
);

const materialbuah = new THREE.MeshLambertMaterial(
  {
        color: 'red',
        emissive: '#4A3728',
        emissiveIntensity: 0.5,
    }
);



const materialhijaudaun = new THREE.MeshLambertMaterial(
  {
        color: 'green',
        emissive: 'green',
        emissiveIntensity: 0.6,
    }
);

//pohon a
let batang1 = new THREE.Mesh(batangpohon, materialbatang);
scene.add(batang1);
batang1.position.setX(-4); //atur posisi sumbu x
batang1.position.setY(0.5); //atur posisi sumbu y
batang1.position.setZ(4.5); //atur posisi sumbu z

let dauna1 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(dauna1);
dauna1.position.setX(-3.9); //atur posisi sumbu x
dauna1.position.setY(1); //atur posisi sumbu y
dauna1.position.setZ(4.4); //atur posisi sumbu z

let dauna2 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(dauna2);
dauna2.position.setX(-4.1); //atur posisi sumbu x
dauna2.position.setY(1); //atur posisi sumbu y
dauna2.position.setZ(4.4); //atur posisi sumbu z

let dauna3 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(dauna3);
dauna3.position.setX(-4); //atur posisi sumbu x
dauna3.position.setY(1); //atur posisi sumbu y
dauna3.position.setZ(4.6); //atur posisi sumbu z

//pohon b
let batang2 = new THREE.Mesh(batangpohon, materialbatang);
scene.add(batang2);
batang2.position.setX(3); //atur posisi sumbu x
batang2.position.setY(0.5); //atur posisi sumbu y
batang2.position.setZ(4.5); //atur posisi sumbu z

let daunb1 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(daunb1);
daunb1.position.setX(2.9); //atur posisi sumbu x
daunb1.position.setY(1); //atur posisi sumbu y
daunb1.position.setZ(4.4); //atur posisi sumbu z

let daunb2 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(daunb2);
daunb2.position.setX(3.1); //atur posisi sumbu x
daunb2.position.setY(1); //atur posisi sumbu y
daunb2.position.setZ(4.4); //atur posisi sumbu z

let daunb3 = new THREE.Mesh(daun, materialhijaudaun);
scene.add(daunb3);
daunb3.position.setX(3); //atur posisi sumbu x
daunb3.position.setY(1); //atur posisi sumbu y
daunb3.position.setZ(4.6); //atur posisi sumbu z

//buah a
let buaha1 = new THREE.Mesh(buah, materialbuah);
scene.add(buaha1);
buaha1.position.setX(3.1); //atur posisi sumbu x
buaha1.position.setY(1); //atur posisi sumbu y
buaha1.position.setZ(4); //atur posisi sumbu z

let buaha2 = new THREE.Mesh(buah, materialbuah);
scene.add(buaha2);
buaha2.position.setX(3.3); //atur posisi sumbu x
buaha2.position.setY(1); //atur posisi sumbu y
buaha2.position.setZ(4.8); //atur posisi sumbu z

let buaha3 = new THREE.Mesh(buah, materialbuah);
scene.add(buaha3);
buaha3.position.setX(2.53); //atur posisi sumbu x
buaha3.position.setY(1); //atur posisi sumbu y
buaha3.position.setZ(4.5); //atur posisi sumbu z

//buah b
let buahb1 = new THREE.Mesh(buah, materialbuah);
scene.add(buahb1);
buahb1.position.setX(-4.2); //atur posisi sumbu x
buahb1.position.setY(1.3); //atur posisi sumbu y
buahb1.position.setZ(4.7); //atur posisi sumbu z

let buahb2 = new THREE.Mesh(buah, materialbuah);
scene.add(buahb2);
buahb2.position.setX(-3.7); //atur posisi sumbu x
buahb2.position.setY(1.3); //atur posisi sumbu y
buahb2.position.setZ(4.5); //atur posisi sumbu z

let buahb3 = new THREE.Mesh(buah, materialbuah);
scene.add(buahb3);
buahb3.position.setX(-4.3); //atur posisi sumbu x
buahb3.position.setY(1.3); //atur posisi sumbu y
buahb3.position.setZ(4.3); //atur posisi sumbu z