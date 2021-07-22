let width = window.innerWidth * 98/100;
let height = window.innerHeight;


function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('black') });