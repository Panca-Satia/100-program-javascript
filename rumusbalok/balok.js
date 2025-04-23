function hitungBalok() {
  const p = parseInt(document.getElementById("panjang").value);
  const l = parseInt(document.getElementById("lebar").value);
  const t = parseInt(document.getElementById("tinggi").value);

  if (isNaN(p) || isNaN(l) || isNaN(t)) {
    document.getElementById("hasil").textContent = "Mohon isi semua nilai dengan angka!";
    return;
  }

  const luasPermukaan = 2 * (p * l + p * t + l * t);
  const volume = p * l * t;

  document.getElementById("hasil").innerHTML =
    `<strong>Luas Permukaan:</strong> ${luasPermukaan} <br>
     <strong>Volume:</strong> ${volume}`;
}