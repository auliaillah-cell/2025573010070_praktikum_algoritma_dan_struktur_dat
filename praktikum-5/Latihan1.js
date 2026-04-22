// Latihan 1: Identifikasi Kompleksitas

// Fungsi A
// Big O: O(1)
// Alasan: Operasi konstan, tidak bergantung pada n
function fnA(n) {
  return n * 2;
}

// Fungsi B
// Big O: O(n^2)
// Alasan: Dua perulangan bersarang (nested loop)
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(i, j);
    }
  }
}

// Fungsi C
// Big O: O(log n)
// Alasan: i dikali 2 setiap iterasi (pertumbuhan eksponensial)
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// Fungsi D
// Big O: O(n^3)
// Alasan: Tiga perulangan bersarang
function fnD(n) {
  let arr = Array.from({ length: n }, (_, i) => i);

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        // console.log(x, y, z);
      });
    });
  });
}

// Fungsi untuk menghitung waktu eksekusi
function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(fn.name + " => " + (end - start) + " ms");
}

// Pengujian
const n = 1000;

hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnB);
hitungKompleksitas(n, fnC);

// Hati-hati: fnD sangat berat jika n besar
hitungKompleksitas(50, fnD);    