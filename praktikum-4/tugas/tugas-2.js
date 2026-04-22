//Tugas 2: Stack Kalkulator (Evaluasi Ekspresi)
// 2. Implementasi class Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// 3. Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();
  for (let char of ekspresi) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

// 4-9. Pengujian dengan 5 contoh
const testCases = [
  "(2 + 3) * (4 - 1)", // seimbang
  "((a + b)", // tidak seimbang
  ")(", // tidak seimbang
  "((()))", // seimbang
  "(a + b) * (c + d))", // tidak seimbang
];
console.log("=== Hasil Pengujian ===");
testCases.forEach((ekspresi) => {
  const hasil = cekKurungSeimbang(ekspresi);
  console.log(`'${ekspresi}' → Seimbang: ${hasil}`);
});
