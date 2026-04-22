// 04-space-complexity.js
// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}
// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}
// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}
// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));
// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7


console.log("\n \n latihan");
// Latihan 2: Space & Time Complexity

// Fungsi 1: Cara Lambat (Nested Loop)
// Big O Time: O(n^2)
// Big O Space: O(1)
// Alasan: dua loop bersarang, tanpa struktur tambahan
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Fungsi 2: Cara Cepat (Menggunakan Set)
// Big O Time: O(n)
// Big O Space: O(n)
// Alasan: satu loop, tapi pakai Set untuk menyimpan data
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const selisih = target - arr[i];

    if (seen.has(selisih)) {
      return [selisih, arr[i]];
    }

    seen.add(arr[i]);
  }

  return null;
}

// Pengujian kecil (sesuai soal)
const smallArr = [2, 7, 11, 15];
const target = 9;

console.log("Hasil Lambat:", cariPasanganLambat(arr, target)); // [2,7]
console.log("Hasil Cepat :", cariPasanganCepat(arr, target)); // [2,7]

// Pengujian data besar (50.000)

// generate data acak
const arrBesar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);

const targetBesar = -1; // kemungkinan tidak ada

// fungsi ukur waktu
function ukurWaktu(fn, arr, target) {
  const start = Date.now();
  const hasil = fn(arr, target);
  const end = Date.now();
  console.log(fn.name + " => " + (end - start) + " ms | hasil:", hasil);
}

// Jalankan pengujian

console.log("\n=== Pengujian Data Besar ===");

// Fungsi lambat pakai data kecil agar tidak hang
ukurWaktu(cariPasanganLambat, arrBesar.slice(0, 2000), targetBesar);

// Fungsi cepat tetap pakai 50.000 data
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);

// Diskusi

// Fungsi terbaik: cariPasanganCepat
// Karena:
// - Time complexity lebih baik (O(n))
// - Lebih cepat untuk data besar

// Trade-off:
// - Lambat: hemat memori (O(1)) tapi sangat lama
// - Cepat: lebih boros memori (O(n)) tapi jauh lebih efisien
