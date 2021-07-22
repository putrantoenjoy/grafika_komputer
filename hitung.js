function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x * 2;
}

function urutan() {
    const no_absen = document.getElementById("tulisabsen").value;
    var nama_pengunjung = document.getElementById("tulisnama").value;
    document.getElementById("hasil").innerHTML = "selamat datang, "+ nama_pengunjung;
    document.getElementById("hasil1").innerHTML = "anda adalah pengunjung ke " + no_absen * (3+2)  + " pada situs kami";
}