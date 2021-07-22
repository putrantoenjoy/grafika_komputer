

//texture sepeda
const texturesepeda = new THREE.TextureLoader().load('./texture/sticker_kendaraan.png');

//material
const bodysepeda = new THREE.MeshLambertMaterial(
    {
        map: texturesepeda,
        emissiveIntensity: 1,
    }
);
const materialmerah = new THREE.MeshLambertMaterial(
    {
        color: 'red',
        emissiveIntensity: 0.5,
    }
);
const materiallampulisting = new THREE.MeshLambertMaterial(
    {
        color: '#ff8100',
        emissive: '#DC143C',
        emissiveIntensity: 0.5,
    }
);

const ban = new THREE.MeshLambertMaterial(
    {
        color: '#1B252E',
        emissive: '#485063',
        emissiveIntensity: 0.25,
    }
);
//belakang sepeda
let belakangsepeda = new THREE.Mesh(sepeda, bodysepeda);
scene.add(belakangsepeda);
belakangsepeda.position.setX(3.5); //atur posisi sumbu x
belakangsepeda.position.setY(0.35); //atur posisi sumbu y
belakangsepeda.position.setZ(0.5); //atur posisi sumbu z


//depan sepeda
let depansepeda = new THREE.Mesh(bodydepan, bodysepeda);
scene.add(depansepeda);
depansepeda.position.setX(3.195); //atur posisi sumbu x
depansepeda.position.setY(0.40); //atur posisi sumbu y
depansepeda.position.setZ(0.5); //atur posisi sumbu z

//tumpu stir
let tumpustir = new THREE.Mesh(kotakkecil, materialmerah);
scene.add(tumpustir);
tumpustir.position.setX(3.18); //atur posisi sumbu x
tumpustir.position.setY(0.6); //atur posisi sumbu y
tumpustir.position.setZ(0.5); //atur posisi sumbu z

let lampusepeda = new THREE.Mesh(kotakkecil, materialmerah);
scene.add(lampusepeda);
lampusepeda.position.setX(3.16); //atur posisi sumbu x
lampusepeda.position.setY(0.5); //atur posisi sumbu y
lampusepeda.position.setZ(0.5); //atur posisi sumbu z

//lampu listing
let lampulisting1 = new THREE.Mesh(kotakkecil, materiallampulisting);
let lampulisting2 = new THREE.Mesh(kotakkecil, materiallampulisting);
let lampulisting3 = new THREE.Mesh(kotakkecil, materiallampulisting);
let lampulisting4 = new THREE.Mesh(kotakkecil, materiallampulisting);

// depan
scene.add(lampulisting1);
lampulisting1.position.setX(3.18); //atur posisi sumbu x
lampulisting1.position.setY(0.5); //atur posisi sumbu y
lampulisting1.position.setZ(0.54); //atur posisi sumbu z

scene.add(lampulisting2);
lampulisting2.position.setX(3.18); //atur posisi sumbu x
lampulisting2.position.setY(0.5); //atur posisi sumbu y
lampulisting2.position.setZ(0.46); //atur posisi sumbu z

// belakang
scene.add(lampulisting3);
lampulisting3.position.setX(3.71); //atur posisi sumbu x
lampulisting3.position.setY(0.4); //atur posisi sumbu y
lampulisting3.position.setZ(0.54); //atur posisi sumbu z

scene.add(lampulisting4);
lampulisting4.position.setX(3.71); //atur posisi sumbu x
lampulisting4.position.setY(0.4); //atur posisi sumbu y
lampulisting4.position.setZ(0.46); //atur posisi sumbu z

//stir sepeda
let kacadepan = new THREE.Mesh(stirsepeda, materialmerah);
scene.add(kacadepan);
kacadepan.position.setX(3.18); //atur posisi sumbu x
kacadepan.position.setY(0.6); //atur posisi sumbu y
kacadepan.position.setZ(0.5); //atur posisi sumbu z

//roda1
let roda1 = new THREE.Mesh(roda, ban);
scene.add(roda1);
roda1.position.setX(3.19); //atur posisi sumbu x
roda1.position.setY(0.24); //atur posisi sumbu y
roda1.position.setZ(0.5); //atur posisi sumbu z

//roda2
let roda2 = new THREE.Mesh(roda, ban);
scene.add(roda2);
roda2.position.setX(3.6); //atur posisi sumbu x
roda2.position.setY(0.24); //atur posisi sumbu y
roda2.position.setZ(0.5); //atur posisi sumbu z
