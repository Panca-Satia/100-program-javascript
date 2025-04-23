let bantuan, angka;
let sisa = 5;
let random = Math.floor(Math.random() * 50) + 1;

function main() {
  angka = parseInt(document.getElementById("angka_pilihan").value);

  if (isNaN(angka)) {
    bantuan = "Silakan pilih angka terlebih dahulu!";
    return;
  }

  if (angka === random) {
    bantuan = `Kamu benar!\nAngka pilihan nya adalah ${random}`;
    sisa = 0;
  } else if (angka < random) {
    bantuan = "Angka anda terlalu kecil";
    sisa -= 1;
  } else if (angka > random) {
    bantuan = "Angka anda terlalu besar";
    sisa -= 1;
  }

  if (sisa === 0 && angka !== random) {
    bantuan = `Waktu Habis\nAngka pilihan nya adalah ${random}`;
  }

  document.getElementById("hint").textContent = bantuan;
  document.getElementById("sisa_pilihan").textContent = sisa;

  if (sisa === 0) {
    document.getElementById("pilihan").disabled = true;
  }
}

document.getElementById("sisa_pilihan").textContent = sisa;
document.getElementById("pilihan").onclick = main;