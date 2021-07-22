const buatbulan = new THREE.DodecahedronGeometry( 0.9,5 );

const materialbulan = new THREE.MeshLambertMaterial(
    {
          color: 'yellow',
      }
  );
  //generate pohon

  let bulan = new THREE.Mesh(buatbulan, materialbulan);
  scene.add(bulan);
  bulan.position.setX(1); //atur posisi sumbu x
  bulan.position.setY(7); //atur posisi sumbu y
  bulan.position.setZ(-19); //atur posisi sumbu z