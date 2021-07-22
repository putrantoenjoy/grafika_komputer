//membuat trotoar
let trotoarkanan = new THREE.Mesh(jalantrotoar1, materialjalantrotoar);
scene.add(trotoarkanan);
trotoarkanan.position.setX(2.99); //atur posisi sumbu x
trotoarkanan.position.setY(0.1); //atur posisi sumbu y
trotoarkanan.position.setZ(1.5); //atur posisi sumbu z

let trotoarkiri = new THREE.Mesh(jalantrotoar2, materialjalantrotoar);
scene.add(trotoarkiri);
trotoarkiri.position.setX(-3); //atur posisi sumbu x
trotoarkiri.position.setY(0.1); //atur posisi sumbu y
trotoarkiri.position.setZ(1.5); //atur posisi sumbu z