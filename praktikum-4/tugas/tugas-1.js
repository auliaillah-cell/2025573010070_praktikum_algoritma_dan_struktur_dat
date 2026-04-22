//Tugas 1: Sistem Manajemen Toko Online (OOP)
// 2. Parent class Produk
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }
  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`,
    );
  }
  tersedia() {
    return this.stok > 0;
  }
  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: jumlah harus > 0");
      return;
    }
    if (jumlah > this.stok) {
      console.log("Stok tidak mencukupi!");
      return;
    }
    this.stok -= jumlah;
    console.log(`Berhasil menjual ${jumlah} ${this.nama}`);
  }
}

// 3. Child class ProdukDigital
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }
  // override info()
  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | File: ${this.ukuranFile}MB (${this.formatFile})`,
    );
  }
  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }
  // override jual (tidak mengurangi stok)
  jual(jumlah) {
    console.log(`Produk digital "${this.nama}" berhasil dibeli (${jumlah}x)`);
  }
}

// 4. Child class ProdukFisik
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }
  // override info()
  info() {
    console.log(
      `ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`,
    );
  }
  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

// 5. Membuat instance
const p1 = new ProdukDigital(1, "Ebook JavaScript", 50000, 999, 5, "PDF");
const p2 = new ProdukDigital(2, "Template Website", 75000, 999, 10, "ZIP");
const p3 = new ProdukFisik(3, "Mouse Gaming", 150000, 10, 300, "10x5x3 cm");
const p4 = new ProdukFisik(
  4,
  "Keyboard Mechanical",
  500000,
  5,
  800,
  "45x15x4 cm",
);

// 5. Masukkan ke array
const daftarProduk = [p1, p2, p3, p4];

// 6a. Menampilkan semua info produk
console.log("\n=== Semua Produk ===");
daftarProduk.forEach((produk) => produk.info());

// 6b. Filter produk yang tersedia
const produkTersedia = daftarProduk.filter((produk) => produk.tersedia());
console.log("\n=== Produk Tersedia ===");
produkTersedia.forEach((produk) => produk.info());

// 6c. Ambil nama produk saja
const namaProduk = daftarProduk.map((produk) => produk.nama);
console.log("\n=== Nama Produk ===");
console.log(namaProduk);

// Tambahan uji method
console.log("\n=== Uji Method ===");
p3.jual(2); // produk fisik
p1.download(); // produk digital
console.log("Ongkir Mouse:", p3.hitungOngkir(10000));
