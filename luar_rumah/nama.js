const loader = new THREE.FontLoader();

loader.load(
    'node_modules/three/examples/fonts/helvetiker_bold.typeface.json', function(font){
        const namatempat = new THREE.TextGeometry('Rumah Portofolio',
        {
            font: font,
            size: 0.2,
            height: 0.01,
            curveSegments:1,
            bevelEnabled: false,
            bevelThickness:1,
        }

        );
        const materialnama = new THREE.MeshLambertMaterial(
            {
                  color: 'blue',
                  emissive: 'yellow',
                  emissiveIntensity: 0.5,
              }
          );

        let penamaan = new THREE.Mesh(namatempat, materialnama);
        scene.add(penamaan);
        penamaan.position.setX(-3.7); //atur posisi sumbu x
        penamaan.position.setY(1); //atur posisi sumbu y
        penamaan.position.setZ(1.25); //atur posisi sumbu z

    }
)