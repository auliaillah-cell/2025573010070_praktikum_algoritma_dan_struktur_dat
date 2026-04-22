// 01-object-literal.js
// ================================================
// OBJECT LITERAL: PROPERTY, METHOD, DAN THIS
// ================================================
// --- 1. Membuat object literal ---
const mahasiswa = {
  nama: "Budi Santoso",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};
// --- 2. Mengakses property ---
console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama); // dot notation
console.log("Jurusan :", mahasiswa["jurusan"]); // bracket notation
// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]); // berguna!
// --- 3. Menambah dan mengubah property ---
mahasiswa.email = "budi@email.com"; // tambah property baru
mahasiswa.umur = 21; // ubah nilai yang ada
console.log("\nSetelah diubah:", mahasiswa);
// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);
// --- 5. Menambahkan method ke object ---
const dosen = {
  nama: "Dr. Aulia illah s.kom",
  mataKuliah: "bahasa china",
  pengalaman: 100, // tahun
  // method: function di dalam object
  perkenalan() {
    // 'this' merujuk ke object dosen itu sendiri
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
// --- 6. Iterasi key-value dengan for...in ---
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    // skip method
    console.log(` ${key}: ${dosen[key]}`);
  }
}
// Object.keys(), Object.values(), Object.entries()
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

console.log("\n \n latihan");
// 2. Membuat object buku
const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Andi",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  // 3. Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // 4. Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Contoh penggunaan
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

// 5. Array koleksiBuku
const koleksiBuku = [
  {
    judul: "HTML Dasar",
    pengarang: "Budi",
    tahunTerbit: 2020,
    harga: 80000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "CSS Lanjutan",
    pengarang: "Siti",
    tahunTerbit: 2021,
    harga: 90000,
    tersedia: false,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
  {
    judul: "NodeJS Pemula",
    pengarang: "Joko",
    tahunTerbit: 2023,
    harga: 120000,
    tersedia: true,
    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

// 6. Menampilkan info semua buku
console.log("=== Semua Buku ===");
koleksiBuku.forEach((b) => {
  console.log(b.info());
});

// 7. Filter buku yang tersedia
const bukuTersedia = koleksiBuku.filter((b) => b.tersedia === true);

console.log("=== Buku Tersedia ===");
bukuTersedia.forEach((b) => {
  console.log(b.info());
});
