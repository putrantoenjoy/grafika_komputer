// tiang rumah
const materialtiang = new THREE.MeshLambertMaterial(
    {
        color: 'black',
        emissiveIntensity: 0.5,
    }
);

//tangga kayu
const tanggakayu_texture = new THREE.TextureLoader().load('./texture/lantai_kayu.jpg');
const materialtanggarumah = new THREE.MeshLambertMaterial(
    {
        map: tanggakayu_texture,
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

// baner
const baner_texture = new THREE.TextureLoader().load('./texture/foto_kirmago1.jpg');
const materialbaner = new THREE.MeshLambertMaterial(
    {
        map: baner_texture,
        emissiveIntensity: 0.5,
    }
);

//texture kayu
const lantaikayu_texture = new THREE.TextureLoader().load('./texture/lantai_kayu.jpg');
const materiallantairumah = new THREE.MeshLambertMaterial(
    {
        color: '#ffffff',
        map: lantaikayu_texture,
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

const materiallantaidepan = new THREE.MeshLambertMaterial(
    {
        color: '#ffffff',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);
        
const tembok_texture = new THREE.TextureLoader().load('./texture/tembok.jpg');
const materialtembok = new THREE.MeshLambertMaterial(
    {
        map: tembok_texture,
        emissiveIntensity: 0.5,
    }
);

// material palang
const palangtexture = new THREE.TextureLoader().load('./texture/texturepalang.png');
const materialpalang = new THREE.MeshLambertMaterial(
    {
        map: palangtexture,
        emissiveIntensity: 0.5,
    }
)



// material aspal
const materialaspal = new THREE.MeshLambertMaterial(
    {
        color: '#0A0F13',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);
const materialgarisaspal = new THREE.MeshLambertMaterial(
    {
        color: '#ffffff',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);

// material trotoar
const materialjalantrotoar = new THREE.MeshLambertMaterial(
    {
        color: '#adadad',
        emissive: '#10161C',
        emissiveIntensity: 0.5,
    }
);