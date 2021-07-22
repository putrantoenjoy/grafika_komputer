const namapalang = new THREE.FontLoader();

namapalang.load(
    'node_modules/three/examples/fonts/helvetiker_bold.typeface.json', function(font){
        const namatempat = new THREE.TextGeometry('Organisasi Kirmago',
        {
            font: font,
            size: 0.2,
            height: 0.01,
            curveSegments:1,
            bevelEnabled: false,
            bevelThickness:1,
            rotate:45
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
        penamaan.position.setX(-1.25); //atur posisi sumbu x
        penamaan.position.setY(2.1); //atur posisi sumbu y
        penamaan.position.setZ(-1); //atur posisi sumbu z

        
    }
)