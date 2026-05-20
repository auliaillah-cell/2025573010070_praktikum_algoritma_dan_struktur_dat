// tugas/tugas-1.js
// ============================================
// DOUBLY LINKED LIST — Implementasi Lengkap
// ============================================
// Setiap node memiliki:
// - data : nilai yang disimpan
// - next : pointer ke node berikutnya
// - prev : pointer ke node sebelumnya
//
// Class DoublyLinkedList memiliki:
// - head : node pertama
// - tail : node terakhir (akses O(1))
// - length : jumlah node
//
// Method yang diimplementasikan:
// - append(data)
// - prepend(data)
// - insertAt(index, data)
// - delete(data)
// - reverse()
// - printForward()
// - printBackward()
//
// Semua method diberi komentar Big O.
// ============================================

// ── Class Node ──────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// ── Class DoublyLinkedList ──────────────────
class DoublyLinkedList {
  constructor() {
    this.head = null; // node pertama
    this.tail = null; // node terakhir (akses O(1))
    this.length = 0; // jumlah node
  }

  // ==========================================
  // append(data)
  // Menambahkan node di akhir list.
  // Big O: O(1)
  // Karena kita langsung menggunakan pointer tail
  // tanpa perlu traversal dari head ke node terakhir.
  // ==========================================
  append(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan tail lama ke node baru
      newNode.prev = this.tail;
      this.tail.next = newNode;

      // Update tail ke node baru
      this.tail = newNode;
    }

    this.length++;
  }

  // ==========================================
  // prepend(data)
  // Menambahkan node di awal list.
  // Big O: O(1)
  // ==========================================
  prepend(data) {
    const newNode = new Node(data);

    // Jika list kosong
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // ==========================================
  // insertAt(index, data)
  // Menyisipkan node pada posisi tertentu.
  // Big O: O(n)
  // Karena perlu traversal ke index tertentu.
  // ==========================================
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log("Index di luar batas.");
      return;
    }

    // Jika di awal
    if (index === 0) {
      this.prepend(data);
      return;
    }

    // Jika di akhir
    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    // Traversal ke posisi index
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    // current = node yang saat ini berada di index
    const previous = current.prev;

    // previous <-> newNode <-> current
    previous.next = newNode;
    newNode.prev = previous;

    newNode.next = current;
    current.prev = newNode;

    this.length++;
  }

  // ==========================================
  // delete(data)
  // Menghapus node pertama yang memiliki nilai data.
  // Big O: O(n)
  // Karena perlu mencari data terlebih dahulu.
  // ==========================================
  delete(data) {
    if (!this.head) {
      console.log("List kosong.");
      return;
    }

    let current = this.head;

    // Cari node yang akan dihapus
    while (current && current.data !== data) {
      current = current.next;
    }

    // Data tidak ditemukan
    if (!current) {
      console.log("Data tidak ditemukan.");
      return;
    }

    // Jika hanya ada satu node
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    // Jika node pertama
    else if (current === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    // Jika node terakhir
    else if (current === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    // Jika node di tengah
    else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;
  }

  // ==========================================
  // reverse()
  // Membalik arah linked list.
  // Big O: O(n)
  // Karena setiap node harus diproses sekali.
  // ==========================================
  reverse() {
    if (!this.head || this.head === this.tail) {
      return;
    }

    let current = this.head;
    let temp = null;

    // Tukar next dan prev pada setiap node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev; // karena next dan prev sudah ditukar
    }

    // Tukar head dan tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // ==========================================
  // printForward()
  // Menampilkan data dari head ke tail.
  // Big O: O(n)
  // ==========================================
  printForward() {
    let current = this.head;
    let result = "HEAD -> ";

    while (current) {
      result += current.data;
      if (current.next) result += " <-> ";
      current = current.next;
    }

    result += " -> NULL";
    console.log(result);
  }

  // ==========================================
  // printBackward()
  // Menampilkan data dari tail ke head.
  // Big O: O(n)
  // Menggunakan pointer tail.
  // ==========================================
  printBackward() {
    let current = this.tail;
    let result = "TAIL -> ";

    while (current) {
      result += current.data;
      if (current.prev) result += " <-> ";
      current = current.prev;
    }

    result += " -> NULL";
    console.log(result);
  }
}

// ============================================
// DEMONSTRASI PROGRAM
// ============================================

const dll = new DoublyLinkedList();

console.log("=== APPEND (O(1)) ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward(); // HEAD -> 10 <-> 20 <-> 30 -> NULL
dll.printBackward(); // TAIL -> 30 <-> 20 <-> 10 -> NULL

console.log("\n=== PREPEND (O(1)) ===");
dll.prepend(5);
dll.printForward(); // HEAD -> 5 <-> 10 <-> 20 <-> 30 -> NULL

console.log("\n=== INSERT AT INDEX 2 ===");
dll.insertAt(2, 15);
dll.printForward(); // HEAD -> 5 <-> 10 <-> 15 <-> 20 <-> 30 -> NULL

console.log("\n=== DELETE DATA 20 ===");
dll.delete(20);
dll.printForward(); // HEAD -> 5 <-> 10 <-> 15 <-> 30 -> NULL

console.log("\n=== REVERSE ===");
dll.reverse();
dll.printForward(); // HEAD -> 30 <-> 15 <-> 10 <-> 5 -> NULL
dll.printBackward(); // TAIL -> 5 <-> 10 <-> 15 <-> 30 -> NULL

console.log("\n=== PANJANG LIST ===");
console.log("Length:", dll.length);
