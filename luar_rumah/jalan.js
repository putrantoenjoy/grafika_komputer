//menambahkan aspal
let aspal = new THREE.Mesh(jalanraya, materialaspal);
scene.add(aspal);
aspal.position.setX(0); // x
aspal.position.setY(0.1); // z
aspal.position.setZ(3); // y

//menambahkan garis aspal
let garisaspal1 = new THREE.Mesh(garisaspal, materialgarisaspal);
scene.add(garisaspal1);
garisaspal1.position.setX(0); // x
garisaspal1.position.setY(0.1); // z
garisaspal1.position.setZ(3); // y

let garisaspal2 = new THREE.Mesh(garisaspal, materialgarisaspal);
scene.add(garisaspal2);
garisaspal2.position.setX(1.9); // x
garisaspal2.position.setY(0.1); // z
garisaspal2.position.setZ(3); // y

let garisaspal3 = new THREE.Mesh(garisaspal, materialgarisaspal);
scene.add(garisaspal3);
garisaspal3.position.setX(3.8); // x
garisaspal3.position.setY(0.1); // z
garisaspal3.position.setZ(3); // y

let garisaspal4 = new THREE.Mesh(garisaspal, materialgarisaspal);
scene.add(garisaspal4);
garisaspal4.position.setX(-1.9); // x
garisaspal4.position.setY(0.1); // z
garisaspal4.position.setZ(3); // y

let garisaspal5 = new THREE.Mesh(garisaspal, materialgarisaspal);
scene.add(garisaspal5);
garisaspal5.position.setX(-3.8); // x
garisaspal5.position.setY(0.1); // z
garisaspal5.position.setZ(3); // y