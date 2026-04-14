// 01-function-dasar.js
// ========================================
// FUNCTION:DEKLARASI,PRAMETER,RETURN,SCOPR
// ========================================

// --- 1. Function tanpa parameter dan tanpa return ---
function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript.");
}
sapa(); // memanggil function
sapa(); // bisa dipanggil berkali-kali

// --- 2. Function dengan parameter ---
function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama("Budi");
sapaNama("Siti");

// --- 3. Function dengan beberapa parameter dan return value ---
function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil; // mengembalikan nilai
}
const hasilPenjumlahan = tambah(10, 25);
console.log("10 + 25 =", hasilPenjumlahan);
console.log("7 + 13 =", tambah(7, 13)); // bisa langsung dipakai

// --- 4. Function dengan default parameter ---
// Jika argumen tidak diberikan, gunakan nilai default
function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}
console.log(hitung(5)); // 10 (pengali pakai default: 2)
console.log(hitung(5, 3)); // 15 (pengali diisi: 3)

// --- 5. Scope variabel ---
const pesanGlobal = "Saya ada di mana saja"; // global scope

function cekScope() {
  const pesanLokal = "Saya hanya ada di dalam function ini"; // local scope
  console.log(pesanGlobal); // bisa akses global
  console.log(pesanLokal); // bisa akses lokal
}
cekScope();
console.log("\n\nlatihan");
// 2. Function kurang
function kurang(a, b) {
  return a - b;
}

// 3. Function kali
function kali(a, b) {
  return a * b;
}

// 4. Function bagi
function bagi(a, b) {
  if (b === 0) {
    console.log("Error: tidak bisa membagi dengan nol");
    return null;
  }
  return a / b;
}

// (Tambahan biasanya sudah ada: tambah)
// function tambah(a, b) {
//     return a + b;
// }

// 5. Function kalkulator
function kalkulator(a, operator, b) {
  switch (operator) {
    case "+":
      return tambah(a, b);
    case "-":
      return kurang(a, b);
    case "*":
      return kali(a, b);
    case "/":
      return bagi(a, b);
    default:
      console.log("Operator tidak dikenal");
      return null;
  }
}

// 6. Pengujian (minimal 5)
console.log('10 + 5 = ', kalkulator(10, "+", 5));
console.log('10 - 5 = ',kalkulator(10, "-", 5)); // 5
console.log('10 * 5 = ',kalkulator(10, "*", 5)); // 50
console.log('10 / 5 = ',kalkulator(10, "/", 2)); // 5
console.log('10 / 0 = ',kalkulator(10, "/", 0)); // Error
