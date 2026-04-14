// 05-rekursi.js
// ==================================
// REKURSI:BASE CASE DAN RECURSIVE CASE
// ====================================

// --- 1.faktorial:n! = n x (n-1)!---
function faktorial(n) {
  // Base case: berhenti saat n = 1
  if (n <= 1) return 1;

  // Recursive case: n × faktorial(n-1)
  return n * faktorial(n - 1);
}

console.log("=== Faktorial ===");
console.log("0! =", faktorial(0)); // 1 (konvensi matematika)
console.log("1! =", faktorial(1)); // 1
console.log("5! =", faktorial(5)); // 120
console.log("7! =", faktorial(7)); // 5040F

// --- 2. Fibonacci: F(n) = F(n-1) + F(n-2) ---
// Deret: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
function fibonacci(n) {
  // Base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("\n=== Fibonacci ===");
for (let i = 0; i <= 8; i++) {
  process.stdout.write(fibonacci(i) + " ");
}
console.log(""); // pindah baris
// --- 3. Rekursi untuk menelusuri array ---
function jumlahArray(arr, indeks = 0) {
  // Base case: sudah sampai akhir array
  if (indeks === arr.length) return 0;
  // Recursive case: elemen saat ini + jumlah sisa array
  return arr[indeks] + jumlahArray(arr, indeks + 1);
}
const angka = [3, 7, 2, 9, 5];
console.log("\n=== Jumlah Array dengan Rekursi ===");
console.log("Array :", angka);
console.log("Jumlah :", jumlahArray(angka)); // 26
// --- 4. Countdown rekursif ---
function countdown(n) {
  if (n < 0) {
    console.log("Selesai!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}
console.log("\n=== Countdown Rekursif ===");
countdown(5);

