class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Tambah data di akhir
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  // Tambah data di awal
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  // Insert data di index tertentu
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    const newNode = new Node(data);

    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    newNode.next = current;
    previous.next = newNode;

    this.size++;
    return true;
  }

  // Hapus berdasarkan data
  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Cari data
  search(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // LATIHAN TAMBAHAN

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return false;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next;

    this.size--;
    return true;
  }

  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Cek apakah list kosong
  isEmpty() {
    return this.size === 0;
  }

  // Hapus semua node
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Print linked list
  print() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let result = "";
    let current = this.head;

    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

      current = current.next;
    }

    console.log(result, `(size: ${this.size})`);
  }

  // Reverse linked list
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Ubah linked list menjadi array
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }
}

// TESTING PROGRAM

const ll = new LinkedList();

console.log("=== Append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();

console.log("\n=== Prepend ===");
ll.prepend(5);
ll.print();

console.log("\n=== Insert di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();

console.log("\n=== Search ===");
console.log("Indeks nilai 20:", ll.search(20));
console.log("Indeks nilai 99:", ll.search(99));

console.log("\n=== Delete 20 ===");
ll.delete(20);
ll.print();

console.log("\n=== Reverse ===");
ll.reverse();
ll.print();

// ===Latihan 1 menambah fitur Linked list=== //
console.log("\n=== getAt ===");
console.log("Data pada index 2:", ll.getAt(2));

console.log("\n=== deleteAt ===");
ll.deleteAt(1);
ll.print();

console.log("\n=== indexOf ===");
console.log("Index data 30:", ll.indexOf(30));
console.log("Index data 100:", ll.indexOf(100));

console.log("\n=== isEmpty ===");
console.log(ll.isEmpty());

console.log("\n=== toArray ===");
console.log(ll.toArray());

console.log("\n=== clear ===");
ll.clear();
ll.print();

console.log("\n=== isEmpty setelah clear ===");
console.log(ll.isEmpty());
