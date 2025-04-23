function cekSegitiga() {
  const alas1 = parseInt(document.getElementById('alas1').value);
  const alas2 = parseInt(document.getElementById('alas2').value);
  const tinggi = parseInt(document.getElementById('tinggi').value);
  const hasilDiv = document.getElementById('hasil');

  if (alas1 + alas2 + tinggi !== 180) {
      hasilDiv.textContent = "Jumlah sudut bukan 180°, bukan segitiga yang valid.";
      return;
  }

  let jenis = "";

  if (alas1 === alas2 && alas2 === tinggi) {
      jenis = "Segitiga sama sisi";
  } else if (alas1 === alas2 || alas2 === tinggi || alas1 === tinggi) {
      jenis = "Segitiga sama kaki";
  } else if (alas1 === 90 || alas2 === 90 || tinggi === 90) {
      jenis = "Segitiga siku-siku";
  } else if (alas1 > 90 || alas2 > 90 || tinggi > 90) {
      jenis = "Segitiga tumpul";
  } else {
      jenis = "Segitiga sembarang";
  }

  hasilDiv.textContent = jenis;
}