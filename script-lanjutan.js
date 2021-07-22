window.addEventListener('resize', function() {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function update() {
    requestAnimationFrame(update);
    renderer.render(scene, camera);
}
update();