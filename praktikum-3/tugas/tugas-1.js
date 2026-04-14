// Data mahasiswa (minimal 6)
const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dina", nilai: 60 },
  { nama: "Eka", nilai: 75 },
  { nama: "Fajar", nilai: 50 },
];

// Function hitung statistik
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs) => {
      acc.total += 1;
      acc.jumlahNilai += mhs.nilai;
      if (mhs.nilai > acc.tertinggi) acc.tertinggi = mhs.nilai;
      if (mhs.nilai < acc.terendah) acc.terendah = mhs.nilai;
      return acc;
    },
    {
      total: 0,
      jumlahNilai: 0,
      tertinggi: -Infinity,
      terendah: Infinity,
    },
  );

  return {
    total: hasil.total,
    rataRata: hasil.jumlahNilai / hasil.total,
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

// Function filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

// Function tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;
    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 55) grade = "D";
    else grade = "E";

    return { ...mhs, grade };
  });
}

// Pemanggilan function
const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// Output statistik
console.log("=== Statistik Nilai Mahasiswa ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai : ${statistik.rataRata}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

// Output mahasiswa lulus
console.log("\n=== Mahasiswa Lulus (>= 70) ===");
mahasiswaLulus.forEach((mhs) => {
  console.log(`${mhs.nama} - ${mhs.nilai}`);
});

// Output semua mahasiswa dengan grade
console.log("\n=== Data Mahasiswa + Grade ===");
mahasiswaDenganGrade.forEach((mhs) => {
  console.log(`${mhs.nama} - Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});
