// 03-stack-ll.js
// ============================================
// IMPLEMENTASI STACK MENGGUNAKAN LINKED LIST
// ============================================

// ── Class Node ──────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ── Class LinkedList ────────────────────────
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Tambah node di awal (O(1))
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Hapus node di awal (O(1))
  removeHead() {
    if (!this.head) return null;

    const removedData = this.head.data;
    this.head = this.head.next;
    this.length--;

    return removedData;
  }

  // Ambil data di head
  getHead() {
    return this.head ? this.head.data : null;
  }

  // Cek kosong
  isEmpty() {
    return this.head === null;
  }

  // Ukuran list
  size() {
    return this.length;
  }

  // Cetak isi list
  print() {
    if (this.isEmpty()) {
      console.log("Stack kosong");
      return;
    }

    let current = this.head;
    let result = "TOP -> ";

    while (current) {
      result += current.data;
      if (current.next) result += " -> ";
      current = current.next;
    }

    result += " -> NULL";
    console.log(result);
  }
}

// ── Class Stack (Komposisi dengan LinkedList) ──
class Stack {
  constructor() {
    this.list = new LinkedList(); // menggunakan LinkedList sebagai penyimpanan internal
  }

  // Push = tambah ke atas stack (prepend)
  push(data) {
    this.list.prepend(data);
  }

  // Pop = hapus elemen teratas
  pop() {
    return this.list.removeHead();
  }

  // Peek = lihat elemen teratas tanpa menghapus
  peek() {
    return this.list.getHead();
  }

  // Cek apakah stack kosong
  isEmpty() {
    return this.list.isEmpty();
  }

  // Jumlah elemen dalam stack
  size() {
    return this.list.size();
  }

  // Cetak stack
  print() {
    this.list.print();
  }
}

// ============================================
// DEMONSTRASI DASAR STACK
// ============================================

console.log("=== DEMONSTRASI STACK ===");
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // TOP -> 30 -> 20 -> 10 -> NULL

console.log("Peek:", stack.peek()); // 30
console.log("Size:", stack.size()); // 3
console.log("Pop:", stack.pop()); // 30

stack.print(); // TOP -> 20 -> 10 -> NULL
console.log("Is Empty?", stack.isEmpty()); // false

// ============================================
// SIMULASI UNDO / REDO SEDERHANA
// ============================================

console.log("\n=== SIMULASI UNDO/REDO ===");

const undoStack = new Stack();

// Array aksi yang dilakukan user
const actions = [
  "Mengetik A",
  "Mengetik B",
  "Mengetik C",
  "Hapus C",
  "Mengetik D",
];

// Push setiap aksi ke stack
console.log("Menyimpan aksi...");
for (const action of actions) {
  console.log("Push:", action);
  undoStack.push(action);
}

console.log("\nIsi Undo Stack:");
undoStack.print();

// Undo beberapa kali menggunakan pop()
console.log("\nMelakukan Undo 3 kali:");
for (let i = 1; i <= 3; i++) {
  const undone = undoStack.pop();
  console.log(`Undo ${i}:`, undone);
}

console.log("\nIsi Stack Setelah Undo:");
undoStack.print();

console.log("\nAksi Terakhir Saat Ini:", undoStack.peek());
console.log("Jumlah Aksi Tersisa:", undoStack.size());
