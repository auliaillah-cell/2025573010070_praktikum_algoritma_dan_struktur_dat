// 01-variabel.js
// ================================================
// VARIABEL DAN DEKLARASI
// ================================================

// --- Deklarasi dengan let (nilai bisa diubah) ---
let nama = "budi";
let umur = 20;
let kota = "Banda Aceh";
console.log("=== Data Mahasiswa ===");
console.log("Nama :", nama);
console.log("Umur :", umur);
console.log("Kota :", kota);

// --- Mengubah nilai let ---
umur = 21;
console.log("Ulang tahun! Umur sekarang:", umur);

// --- Deklarasi dengan const (nilai TIDAK bisa diubah) ---
const jurusan = "Teknik Informatika";
const tahunMasuk = 2023;
console.log("Jurusan :", jurusan);
console.log("Tahun Masuk:", tahunMasuk);

// --- Coba hapus '//' di baris bawah ini, lalu jalankan ulang ---
// jurusan = 'Sistem Informasi'; // --> Ini akan menyebabkan ERROR!
