// 03-array-dasar.js
// ================================================
// ARRAY: DEKLARASI, AKSES, DAN MANIPULASI
// ================================================
// --- 1. Membuat array ---
const mahasiswa = ["Budi", "Siti", "Ahmad", "Rina"];
const nilai = [85, 92, 78, 95, 88];
console.log("=== Array Awal ===");
console.log("Mahasiswa:", mahasiswa);
console.log("Nilai :", nilai);
console.log("Jumlah mahasiswa:", mahasiswa.length);
// --- 2. Mengakses elemen ---
console.log("\n=== Akses Elemen ===");
console.log("Elemen pertama :", mahasiswa[0]); // indeks 0
console.log("Elemen ketiga :", mahasiswa[2]); // indeks 2
console.log("Elemen terakhir:", mahasiswa[mahasiswa.length - 1]);
// --- 3. Mengubah elemen ---
mahasiswa[1] = "Siti Rahayu"; // ubah elemen indeks 1
console.log("\nSetelah diubah:", mahasiswa);
// --- 4. Menambah dan menghapus elemen ---
console.log("\n=== Manipulasi Array ===");
mahasiswa.push("Doni"); // tambah di akhir
console.log("Setelah push :", mahasiswa);
mahasiswa.unshift("Zahra"); // tambah di awal
console.log("Setelah unshift :", mahasiswa);
const dihapusAkhir = mahasiswa.pop(); // hapus dari akhir
console.log("Dihapus (pop) :", dihapusAkhir);
console.log("Setelah pop :", mahasiswa);
const dihapusAwal = mahasiswa.shift(); // hapus dari awal
console.log("Dihapus (shift) :", dihapusAwal);
console.log("Setelah shift :", mahasiswa);
// --- 5. Mencari elemen ---
console.log("\n=== Pencarian ===");
console.log("Indeks Ahmad :", mahasiswa.indexOf("Ahmad"));
console.log("Ada Rina? :", mahasiswa.includes("Rina"));
console.log("Ada Budi? :", mahasiswa.includes("Budi"));
// --- 6. Mengiris array dengan slice ---
const sebagian = nilai.slice(1, 4); // dari indeks 1 sampai sebelum 4
console.log("\nNilai asli :", nilai);
console.log("Slice [1,4] :", sebagian);

console.log("\n\nlatihan");
// ================================================
// LATIHAN ARRAY DASAR
// ================================================

// 1. Membuat array daftar belanja
let daftarBelanja = ["Beras", "Gula", "Minyak", "Telur", "Garam"];

// 2. Menampilkan isi array dengan nomor urut
console.log("Daftar Belanja:");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

// 3. Menambahkan 2 item baru
daftarBelanja.push("Susu", "Kopi");
console.log("\nSetelah ditambah item:");
console.log(daftarBelanja);

// 4. Menghapus item pertama
let itemDihapus = daftarBelanja.shift();
console.log(`\nItem yang dihapus: ${itemDihapus}`);

// 5. Cek apakah 'Susu' ada di daftar
let adaSusu = daftarBelanja.includes("Susu");
console.log(`Apakah ada 'Susu'? ${adaSusu ? "Ya, ada" : "Tidak ada"}`);

// 6. Menampilkan jumlah item akhir
console.log(`Jumlah item akhir: ${daftarBelanja.length}`);
