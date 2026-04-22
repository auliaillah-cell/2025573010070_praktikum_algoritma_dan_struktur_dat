// ===============================
// TUGAS 1 - Analisis & Refactor
// ===============================

// =====================================
// FUNGSI A - INTERSECTION ARRAY
// =====================================

// Versi O(n^2)
function intersectionN2(arr1, arr2) {
  // Time: O(n^2), Space: O(1)
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

// Versi O(n) menggunakan Set
function intersectionN(arr1, arr2) {
  // Time: O(n), Space: O(n)
  const set2 = new Set(arr2);
  const result = [];

  for (let item of arr1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }

  return [...new Set(result)]; // hapus duplikat
}

// =====================================
// FUNGSI B - KELOMPOK ANAGRAM
// =====================================

function groupAnagrams(words) {
  // Time: O(n log k), Space: O(n)
  // n = jumlah kata, k = panjang kata

  const map = new Map();

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

// =====================================
// FUNGSI C - SUM = KUADRAT
// =====================================

// Versi O(n^3)
function sumSquareN3(arr) {
  // Time: O(n^3), Space: O(1)
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }
  return false;
}

// Versi O(n log n)
function sumSquareOptimized(arr) {
  // Time: O(n log n), Space: O(1)
  arr.sort((a, b) => a - b);

  const n = arr.length;

  for (let k = n - 1; k >= 0; k--) {
    let left = 0;
    let right = k - 1;

    const target = arr[k] * arr[k];

    while (left <= right) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return false;
}

// =====================================
// TEST & PENGUKURAN WAKTU
// =====================================

// Data besar
const size = 5000;
const arr1 = Array.from({ length: size }, () =>
  Math.floor(Math.random() * 10000),
);
const arr2 = Array.from({ length: size }, () =>
  Math.floor(Math.random() * 10000),
);

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Fungsi A test
console.time("Intersection O(n^2)");
intersectionN2(arr1, arr2);
console.timeEnd("Intersection O(n^2)");

console.time("Intersection O(n)");
intersectionN(arr1, arr2);
console.timeEnd("Intersection O(n)");

// Fungsi B test
console.log("Anagram:", groupAnagrams(words));

// Fungsi C test
console.time("SumSquare O(n^3)");
sumSquareN3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.timeEnd("SumSquare O(n^3)");

console.time("SumSquare O(n log n)");
sumSquareOptimized([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.timeEnd("SumSquare O(n log n)");
