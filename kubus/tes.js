function hitungKubus() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  const hasilDiv = document.getElementById('hasil');

  if (!isNaN(sisi) && sisi > 0) {
      const LP = 6 * sisi * sisi;
      const V = sisi * sisi * sisi;
      hasilDiv.innerHTML = `Luas Permukaan = ${LP} cm²<br>Volume = ${V} cm³`;
  } else {
      hasilDiv.innerHTML = "Masukan sisi yang valid!";
  }
}