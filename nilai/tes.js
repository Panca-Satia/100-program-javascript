function cekNilai() {
  const nilai = parseInt(document.getElementById('nilai').value);
  const hasil = document.getElementById('hasil');
  let indeks = '';

  if (nilai >= 90) {
      indeks = 'A';
  } else if (nilai >= 80) {
      indeks = 'B';
  } else if (nilai >= 70) {
      indeks = 'C';
  } else if (nilai >= 60) {
      indeks = 'D';
  } else {
      indeks = 'E';
  }

  hasil.textContent = `Nilai siswa: ${indeks}`;
}