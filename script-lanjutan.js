window.addEventListener('resize', function() {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function update() {
    lampupagarkanan.rotation.y += 0.01; //animasi rotasi sumbu x
    lampupagarkiri.rotation.y -= 0.01; //animasi rotasi sumbu x
    requestAnimationFrame(update);
    renderer.render(scene, camera);
}
update();