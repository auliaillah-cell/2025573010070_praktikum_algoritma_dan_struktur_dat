// 02-arrow-callback.js
// ================================================
// ARROW FUNCTION DAN CALLBACK
// ================================================

// --- 1. Function biasa vs Arrow function ---

// Cara lama (function declaration)
function kuadratBiasa(x) {
  return x * x;
}

// Cara baru (arrow function - ekuivalen)
const kuadrat = (x) => {
  return x * x;
};

// Arrow function ringkas (implicit return)
const kuadratRingkas = (x) => x * x;

console.log("=== Perbandingan Penulisan ===");
console.log("Biasa   :", kuadratBiasa(5)); // 25
console.log("Arrow   :", kuadrat(5)); // 25
console.log("Ringkas :", kuadratRingkas(5)); // 25

// --- 2. Arrow function dengan beberapa parameter ---

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;

console.log("Luas 4x6 :", luas(4, 6));
console.log(salam("Budi", "Pagi"));

// --- 3. Callback: function sebagai argumen ---

function lakukanOperasi(angka, operasiCallback) {
  console.log(`Angka awal: ${angka}`);
  const hasil = operasiCallback(angka);
  console.log(`Hasil setelah operasi: ${hasil}`);
}

console.log("\n=== Callback ===");
lakukanOperasi(7, kuadratRingkas); // kirim function sebagai argumen
lakukanOperasi(10, (x) => x + 100); // kirim arrow function langsung
lakukanOperasi(20, function (x) {
  // kirim function biasa langsung
  return x / 2;
});
// --- 4. setTimeout sebagai contoh callback nyata ---
console.log("\n=== setTimeout (Callback) ===");
console.log("Pesan 1: Sebelum timer");
setTimeout(() => {
  console.log("Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)");
}, 1000); // 1000 milidetik = 1 detik
console.log("Pesan 2: Setelah mendaftarkan timer");

// ================================================
// LATIHAN TAMBAHAN
// ================================================
// 1. Arrow function keHurufBesar
console.log("\n\nlatihan");

const keHurufBesar = (str) => str.toUpperCase();

// 2. Arrow function tambahSeru
const tambahSeru = (str) => str + "!!!";

// 3. Arrow function hitungKata
const hitungKata = (str) => str.split(" ").length;

// 4. Function dengan callback
function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  console.log(hasil);
}

// 5. Uji coba
const kalimat = "belajar javascript itu menyenangkan";

prosesKalimat(kalimat, keHurufBesar); // BELAJAR JAVASCRIPT ITU MENYENANGKAN
prosesKalimat(kalimat, tambahSeru); // belajar javascript itu menyenangkan!!!
prosesKalimat(kalimat, hitungKata); // 4
