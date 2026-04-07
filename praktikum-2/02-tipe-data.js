// 02-tipe-data.js
// ================================================
// MENGENAL TIPE DATA JAVASCRIPT
// ================================================

// --- 1. STRING (teks) ---
let namaMahasiswa = "Ahmad Fauzi";
let programStudi = "Teknik Informatika";

// Template literal: gunakan backtick (`) untuk menggabungkan teks & variabel
let perkenalan = `Halo! Nama saya ${namaMahasiswa} dari ${programStudi}.`;
console.log(perkenalan);
console.log("Panjang nama:", namaMahasiswa.length); // property .length

// --- 2. NUMBER (angka) ---
let nilaiUjian = 87; // bilangan bulat
let ipk = 3.75; // bilangan desimal
let suhuKulkas = -4; // bilangan negatif
console.log("Nilai Ujian :", nilaiUjian);
console.log("IPK :", ipk);
console.log("Suhu Kulkas:", suhuKulkas);

// --- 3. BOOLEAN (true / false) ---
let sudahLogin = true;
let sudahLulus = false;
console.log("Sudah login :", sudahLogin);
console.log("Sudah lulus :", sudahLulus);

// --- 4. NULL (nilai kosong yang disengaja) ---
let fotoProfil = null; // belum ada foto
console.log("Foto profil:", fotoProfil);

// --- 5. UNDEFINED (belum diberi nilai) ---
let nomorTelepon;
console.log("No. Telepon:", nomorTelepon);

// --- Mengecek tipe data dengan typeof ---
console.log("--- Tipe Data ---");
console.log("namaMahasiswa :", typeof namaMahasiswa); // string
console.log("nilaiUjian :", typeof nilaiUjian); // number
console.log("sudahLogin :", typeof sudahLogin); // boolean
console.log("fotoProfil :", typeof fotoProfil); // object <- keanehan JS!
console.log("nomorTelepon :", typeof nomorTelepon); // undefined
