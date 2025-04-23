function cekGanjilGenap() {
  const angka = parseInt(document.getElementById('angka').value);
  const hasil = document.getElementById('hasil');

  if (isNaN(angka)) {
      hasil.textContent = "Mohon masukkan angka yang valid.";
      return;
  }

  if (angka % 2 === 0) {
      hasil.textContent = angka + " adalah bilangan genap.";
  } else {
      hasil.textContent = angka + " adalah bilangan ganjil.";
  }
}