const materialpenyanggalampu = new THREE.MeshLambertMaterial(
    {
          color: 'black',
          emissiveIntensity: 0.6,
      }
  );
const materiallampu = new THREE.MeshLambertMaterial(
    {
          color: 'white',
          emissive: 'white',
          emissiveIntensity: 1,
    }
  );

let lampupagarkanan = new THREE.Mesh(penyanggalampu, materialpenyanggalampu);
scene.add(lampupagarkanan);
lampupagarkanan.position.setX(1.15); //atur posisi sumbu x
lampupagarkanan.position.setY(1.67); //atur posisi sumbu y
lampupagarkanan.position.setZ(1.2); //atur posisi sumbu z

let lampupagarkiri = new THREE.Mesh(penyanggalampu, materialpenyanggalampu);
scene.add(lampupagarkiri);
lampupagarkiri.position.setX(-1.15); //atur posisi sumbu x
lampupagarkiri.position.setY(1.67); //atur posisi sumbu y
lampupagarkiri.position.setZ(1.2); //atur posisi sumbu z

let lampukanan = new THREE.Mesh(lampupagar, materiallampu);
scene.add(lampukanan);
lampukanan.position.setX(1.15); //atur posisi sumbu x
lampukanan.position.setY(1.85); //atur posisi sumbu y
lampukanan.position.setZ(1.2); //atur posisi sumbu z

let lampukiri = new THREE.Mesh(lampupagar, materiallampu);
scene.add(lampukiri);
lampukiri.position.setX(-1.15); //atur posisi sumbu x
lampukiri.position.setY(1.85); //atur posisi sumbu y
lampukiri.position.setZ(1.2); //atur posisi sumbu z