// tugas/tugas-2.js
// ============================================
// LATIHAN LINKED LIST
// ============================================
// 1. palindromLL(head)
//    -> Mengecek apakah Linked List merupakan palindrom
//
// 2. hapusNDariAkhir(head, n)
//    -> Menghapus node ke-n dari akhir list
//
// 3. tengahLinkedList(head)
//    -> Mengembalikan node tengah
//       Jika jumlah node genap, kembalikan node tengah kedua
//
// 4. Pengujian minimal 3 kasus berbeda per fungsi
// ============================================

// ── Class Node ──────────────────────────────
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ============================================
// FUNGSI BANTUAN
// ============================================

// Membuat linked list dari array
// Big O: O(n)
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

// Mengubah linked list menjadi string
// Big O: O(n)
function printLinkedList(head) {
  if (!head) return "NULL";

  let result = "";
  let current = head;

  while (current) {
    result += current.data;
    if (current.next) result += " -> ";
    current = current.next;
  }

  result += " -> NULL";
  return result;
}

// ============================================
// 1. palindromLL(head)
// Mengecek apakah linked list adalah palindrom
// Contoh: 1 -> 2 -> 3 -> 2 -> 1  => true
// Hint: Konversi ke array
// Big O: O(n)
// ============================================
function palindromLL(head) {
  const values = [];
  let current = head;

  // Simpan semua data ke array
  while (current) {
    values.push(current.data);
    current = current.next;
  }

  // Bandingkan dari depan dan belakang
  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// ============================================
// 2. hapusNDariAkhir(head, n)
// Menghapus node ke-n dari akhir
// Contoh:
// 1 -> 2 -> 3 -> 4 -> 5, n = 2
// Hasil: 1 -> 2 -> 3 -> 5
//
// Hint: Two Pointer
// Big O: O(n)
// ============================================
function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Geser fast sebanyak n + 1 langkah
  for (let i = 0; i <= n; i++) {
    if (fast === null) return head; // n lebih besar dari panjang list
    fast = fast.next;
  }

  // Geser fast dan slow bersama-sama
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Hapus node target
  if (slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}

// ============================================
// 3. tengahLinkedList(head)
// Mengembalikan node tengah
// Jika jumlah node genap, kembalikan node tengah kedua
//
// Contoh:
// 1 -> 2 -> 3 -> 4 -> 5     => 3
// 1 -> 2 -> 3 -> 4          => 3
//
// Hint: Fast & Slow Pointer
// Big O: O(n)
// ============================================
function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// ============================================
// PENGUJIAN palindromLL()
// ============================================
console.log("=== UJI palindromLL() ===");

// Kasus 1: Palindrom ganjil
let list1 = createLinkedList([1, 2, 3, 2, 1]);
console.log(printLinkedList(list1));
console.log("Palindrom:", palindromLL(list1)); // true

// Kasus 2: Palindrom genap
let list2 = createLinkedList([1, 2, 2, 1]);
console.log(printLinkedList(list2));
console.log("Palindrom:", palindromLL(list2)); // true

// Kasus 3: Bukan palindrom
let list3 = createLinkedList([1, 2, 3, 4]);
console.log(printLinkedList(list3));
console.log("Palindrom:", palindromLL(list3)); // false

// ============================================
// PENGUJIAN hapusNDariAkhir()
// ============================================
console.log("\n=== UJI hapusNDariAkhir() ===");

// Kasus 1: Hapus node ke-2 dari akhir
let list4 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Sebelum :", printLinkedList(list4));
list4 = hapusNDariAkhir(list4, 2);
console.log("Sesudah :", printLinkedList(list4)); // 1 -> 2 -> 3 -> 5

// Kasus 2: Hapus node terakhir
let list5 = createLinkedList([10, 20, 30]);
console.log("Sebelum :", printLinkedList(list5));
list5 = hapusNDariAkhir(list5, 1);
console.log("Sesudah :", printLinkedList(list5)); // 10 -> 20

// Kasus 3: Hapus node pertama
let list6 = createLinkedList([7, 8, 9]);
console.log("Sebelum :", printLinkedList(list6));
list6 = hapusNDariAkhir(list6, 3);
console.log("Sesudah :", printLinkedList(list6)); // 8 -> 9

// ============================================
// PENGUJIAN tengahLinkedList()
// ============================================
console.log("\n=== UJI tengahLinkedList() ===");

// Kasus 1: Jumlah ganjil
let list7 = createLinkedList([1, 2, 3, 4, 5]);
console.log(printLinkedList(list7));
console.log("Tengah:", tengahLinkedList(list7).data); // 3

// Kasus 2: Jumlah genap (tengah kedua)
let list8 = createLinkedList([1, 2, 3, 4]);
console.log(printLinkedList(list8));
console.log("Tengah:", tengahLinkedList(list8).data); // 3

// Kasus 3: Satu elemen
let list9 = createLinkedList([99]);
console.log(printLinkedList(list9));
console.log("Tengah:", tengahLinkedList(list9).data); // 99