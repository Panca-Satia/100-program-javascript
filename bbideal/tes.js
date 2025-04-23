function cekIdeal() {
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const berat = parseFloat(document.getElementById('berat').value);
  const hasilDiv = document.getElementById('hasil');

  if (!isNaN(tinggi) && !isNaN(berat)) {
      const operasi1 = tinggi - 100;
      const berat_ideal = operasi1 - 0.1;
      let pesan = `Berat badan ideal Anda adalah: ${berat_ideal.toFixed(1)} kg<br>`;

      if (berat >= (berat_ideal - 2) && berat <= (berat_ideal + 2)) {
          pesan += "Berat badan Anda ideal.";
      } else {
          pesan += "Maaf, berat badan Anda tidak ideal.";
      }

      hasilDiv.innerHTML = pesan;
  } else {
      hasilDiv.innerHTML = "Masukan tinggi dan berat badan yang valid!";
  }
}