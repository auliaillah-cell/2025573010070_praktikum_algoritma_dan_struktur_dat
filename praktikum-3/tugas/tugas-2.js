// Function rekursif pangkat
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1; // base case
  return basis * pangkat(basis, eksponen - 1);
}

// Uji pangkat
console.log("=== Uji Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`);
console.log(`5^2 = ${pangkat(5, 2)}`);
console.log(`3^4 = ${pangkat(3, 4)}`);
console.log(`10^0 = ${pangkat(10, 0)}`);

// Function rekursif balik string
function balikString(str) {
  if (str.length <= 1) return str; // base case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// Uji balik string
console.log("\n=== Uji Balik String ===");
console.log(`halo -> ${balikString("halo")}`);
console.log(`javascript -> ${balikString("javascript")}`);

// Function cek palindrom
function cekPalindrom(str) {
  const dibalik = balikString(str);
  return str === dibalik;
}

// Uji palindrom
console.log("\n=== Uji Palindrom ===");
const kata = ["katak", "civic", "level", "halo"];

kata.forEach((k) => {
  if (cekPalindrom(k)) {
    console.log(`${k} adalah palindrom`);
  } else {
    console.log(`${k} bukan palindrom`);
  }
});
