const button = document.getElementById("button");
button.addEventListener("click", function () {
  const pkn = document.getElementById("pkn");
  const mtk = document.getElementById("mtk");
  const inggris = document.getElementById("inggris");

  function jumlahNilai() {
    const total =
      parseInt(pkn.value) + parseInt(mtk.value) + parseInt(inggris.value);
    return total;
  }

  function rata() {
    const totalNilai = jumlahNilai();
    const hasil = totalNilai / 3;
    return Math.floor(hasil);
  }


  function predikat() {
    const total = rata();
    let hasil = "";
    if (total >= 90 && total <= 100) {
      return hasil = "A"
    }
    else if (total >= 80 && total <= 90) {
      return hasil = "B";
    }
    else if (total >= 75 && total <= 80) {
      return hasil = "A";
    } else {
       return hasil = "nilai kamu jelek"
    }

  }

  function keterangan() {
    const total = jumlahNilai();
    let hasil = "";
    if (total >= 75) {
      hasil = "Lulus";
    } else {
      hasil = "tidak lulus";
    }
    return hasil;
  }

  const keterangann = document.getElementById("keterangan");
  const predikatt = document.getElementById("predikat");
  const rataaa = document.getElementById("Rata-rata");
  const jml = document.getElementById("jml_nilai");
  const lulus = document.getElementById("s_kelulusan");

  const totalNilai = jumlahNilai();
  const rata_rata = rata();
  const predikat2 = predikat();
  const keterangan2 = keterangan();
  const lulus2 = predikat();

  console.log(rataaa)
  jml.textContent = totalNilai;
  rataaa.textContent = rata_rata;
  predikatt.textContent = predikat2;
  keterangann.textContent = keterangan2;
  lulus.textContent = lulus2;
});