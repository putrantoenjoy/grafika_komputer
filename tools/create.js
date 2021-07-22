// RUMAH
// atap rumah
let atap_rumah = new THREE.BoxGeometry( 8, 0.05, 4 );
const tandon_rumah = new THREE.CylinderGeometry( 0.4, 0.4, 1, 64 );

// lantai
let lantai_rumah = new THREE.BoxGeometry( 8, 0.6, 4 );
let tekan = new THREE.BoxGeometry( 2, 0.3, 2 );

// tangga rumah
let tangga_rumah1 = new THREE.BoxGeometry( 0.9, 0.4, 0.2 );
let tangga_rumah2 = new THREE.BoxGeometry( 0.9, 0.2, 0.2 );

// tiang rumah
const tiang = new THREE.BoxGeometry( 0.03, 1.5, 0.03 );
const tembokx = new THREE.BoxGeometry( 7.9, 1.5, 0.09 );
const temboky = new THREE.BoxGeometry( 0.09, 1.5, 3.85 );
const penghalang_x1 = new THREE.BoxGeometry( 2, 0.03, 0.03 );
const penghalang_x2 = new THREE.BoxGeometry( 3.8, 0.03, 0.03 );
const penghalang_x3 = new THREE.BoxGeometry( 0.03, 0.03, 3.8 ); 
const kotak_baner = new THREE.BoxGeometry( 0.05, 1, 3 ); 

// LUAR RUMAH
// aspal jalan
const jalanraya = new THREE.BoxGeometry( 9.99, 0.09, 2 ); //panjang  tinggi lebar
const garisaspal = new THREE.BoxGeometry( 1, 0.091, 0.2 ); //panjang tinggi lebar

//jalan trotoar
const jalantrotoar1= new THREE.BoxGeometry( 4, 0.3, 0.5);
const jalantrotoar2= new THREE.BoxGeometry( 3.99, 0.3, 0.5 );

//membuat sepeda
const sepeda = new THREE.BoxGeometry( 0.5, 0.2, 0.1 ); 
const roda= new THREE.TorusGeometry( 0.06, 0.035, 7, 17 ); 
const bodydepan = new THREE.BoxGeometry(0.1,0.3,0.1); 
const stirsepeda = new THREE.BoxGeometry( 0.01, 0.01, 0.35 );
const kotakkecil = new THREE.BoxGeometry( 0.05, 0.05, 0.05 );

// lampu pagar
const penyanggalampu = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
const lampupagar = new THREE.DodecahedronGeometry( 0.15,5 );

// deklarasi pagar
const pagar = new THREE.BoxGeometry( 3.7, 1.5, 0.1 );
const pagar_belakang = new THREE.BoxGeometry( 9.99, 1.5, 0.1 );
const pagarsamping = new THREE.BoxGeometry( 0.1, 1.5, 6.08 );
const pagarlampu = new THREE.BoxGeometry( 0.31, 1.5, 0.3 );

// pohon
const batangpohon = new THREE.CylinderGeometry( 0.07, 0.07, 0.9, 64 );
const daun = new THREE.DodecahedronGeometry( 0.4,1 );
const buah = new THREE.DodecahedronGeometry( 0.04,5 );

// palang
const kotak_palang = new THREE.BoxGeometry( 0.05, 0.75, 1 ); 

