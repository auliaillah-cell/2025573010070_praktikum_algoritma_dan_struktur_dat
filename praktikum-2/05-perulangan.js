// 05-perulangan.js
// ================================================
// PERULANGAN: for, while, break, continue
// ================================================
// --- FOR LOOP ---
// Struktur: for (inisialisasi; kondisi; update)
console.log("=== For Loop: Hitung 1 sampai 5 ===");
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}
// --- WHILE LOOP ---
console.log("\n=== While Loop: Countdown ===");
let hitung = 5;
while (hitung > 0) {
  console.log(`Hitung mundur: ${hitung}`);
  hitung--; // WAJIB: kurangi nilai agar loop tidak berjalan selamanya
}
console.log("Selesai!");
// --- FOR LOOP: Mencetak bilangan genap ---
console.log("\n=== Bilangan Genap antara 1 - 20 ===");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // jika i habis dibagi 2 (sisa = 0), maka genap
    process.stdout.write(i + " "); // cetak di baris yang sama
  }
}
console.log(""); // pindah baris
// --- BREAK dan CONTINUE ---
console.log("\n=== Break dan Continue ===");
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log(`Melewati angka ${i} (continue)`);
    continue; // lewati angka 4, lanjut ke i=5
  }
  if (i === 8) {
    console.log(`Berhenti di angka ${i} (break)`);
    break; // hentikan loop di angka 8
  }
  console.log(`Angka: ${i}`);
}
console.log("===latihan bintang===");
for (let i = 1; i <= 5; i++) {
  let bintang = "";
  for (let j = 1; j <= i; j++) {
    bintang += "*";
  }
  console.log(bintang);
}
console.log("===latihan 2===");

for (let i = 2; i <= 50; i++) {
  let isPrima = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrima = false;
      break;
    }
  }

  if (isPrima) {
    console.log(i);
  }
}
