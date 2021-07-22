// MeshLambertMaterial
const materialataprumah = new THREE.MeshLambertMaterial(
    {
        color: 'chocolate',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
    );
    
    const materialtandon = new THREE.MeshLambertMaterial(
      {
            color: 'orange',
            emissive: 'orange',
            emissiveIntensity: 1,
        }
    );

let ataprumah = new THREE.Mesh(atap_rumah ,materialataprumah);
scene.add(ataprumah);
ataprumah.position.setX(0.9); // x
ataprumah.position.setY(2); // z
ataprumah.position.setZ(-2.9); // y

let tandon = new THREE.Mesh(tandon_rumah, materialtandon);
scene.add(tandon);
tandon.position.setX(-1); //atur posisi sumbu x
tandon.position.setY(2.5); //atur posisi sumbu y
tandon.position.setZ(-4); //atur posisi sumbu z