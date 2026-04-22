// 02-destructuring-spread.js
// ================================================
// DESTRUCTURING, SPREAD OPERATOR, REST PARAMETER
// ================================================
// --- 1. Object Destructuring ---
const produk = {
  nama: "Laptop Gaming",
  merk: "TechBrand",
  harga: 12500000,
  stok: 15,
  garansi: "1 tahun",
};
// Cara lama
// const nama = produk.nama;
// const harga = produk.harga;
// Cara baru: object destructuring
const { nama, harga, stok } = produk;
console.log("=== Object Destructuring ===");
console.log(`${nama} | Rp${harga.toLocaleString()} | Stok: ${stok}`);
// Destructuring dengan rename (alias)
const { nama: namaProduk, garansi: periodeGaransi } = produk;
console.log(`Produk: ${namaProduk}, Garansi: ${periodeGaransi}`);
// Destructuring dengan nilai default
const { warna = "Tidak diketahui", stok: jumlahStok = 0 } = produk;
console.log(`Warna: ${warna} | Stok: ${jumlahStok}`);
// --- 2. Array Destructuring ---
const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;
console.log("\n=== Array Destructuring ===");
console.log(`x=${x}, y=${y}, z=${z}`);
// Skip elemen dengan koma
const [, kedua, ,] = [100, 200, 300, 400];
console.log("Elemen kedua:", kedua); // 200
// Swap dua variabel dengan destructuring
let a = "pertama",
  b = "kedua";
console.log("Sebelum swap:", a, b);
[a, b] = [b, a];
console.log("Setelah swap:", a, b);
// --- 3. Spread Operator ---
const buah = ["Apel", "Mangga", "Jeruk"];
const sayur = ["Bayam", "Wortel"];
// Menyalin array (bukan referensi)
const salinanBuah = [...buah];
salinanBuah.push("Pisang");
console.log("\n=== Spread Operator ===");
console.log("Asli :", buah); // tidak berubah
console.log("Salinan:", salinanBuah);
// Menggabungkan array
const semuaMakanan = [...buah, ...sayur, "Tempe"];
console.log("Gabungan:", semuaMakanan);
// Spread pada object: menyalin dan override
const profil = { nama: "Siti", umur: 22, kota: "Jakarta" };
const profilUpdate = { ...profil, kota: "Bandung", pekerjaan: "Developer" };
console.log("Profil asli :", profil);
console.log("Profil update:", profilUpdate);
// --- 4. Rest Parameter ---
function jumlahkanSemua(...angka) {
  console.log("Argumen diterima:", angka); // angka adalah array
  return angka.reduce((total, n) => total + n, 0);
}
console.log("\n=== Rest Parameter ===");
console.log("Total:", jumlahkanSemua(1, 2, 3));
console.log("Total:", jumlahkanSemua(10, 20, 30, 40, 50));
// Rest di destructuring: ambil sisanya
const [kepala, ...ekor] = [1, 2, 3, 4, 5];
console.log("Kepala:", kepala); // 1
console.log("Ekor :", ekor); // [2, 3, 4, 5]

console.log("\n\n latihan");
// 2. Deklarasikan array timA dan timB
const timA = ["Budi", "Siti", "Ahmad"];
const timB = ["Rina", "Doni"];

// 3. Gabungkan dengan spread + tambah 'Zahra'
const timGabungan = [...timA, ...timB, "Zahra"];

console.log("Tim Gabungan:", timGabungan);

// 4. Destructuring
const [kapten, ...anggota] = timGabungan;

console.log("Kapten:", kapten);
console.log("Anggota:", anggota);

// 5. Object pengaturanDefault
const pengaturanDefault = {
  tema: "terang",
  bahasa: "id",
  notifikasi: true,
  fontSize: 14,
};

// 6. Spread untuk pengaturanUser
const pengaturanUser = {
  ...pengaturanDefault,
  tema: "gelap",
  fontSize: 16,
};

console.log("Pengaturan User:", pengaturanUser);

// 7. Destructuring object
const { tema, fontSize } = pengaturanUser;

console.log("Tema:", tema);
console.log("Font Size:", fontSize);
