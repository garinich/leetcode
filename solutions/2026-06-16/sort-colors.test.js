import { sortColors } from './sort-colors.js';

// Helper function to check array equality
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [2,0,2,1,1,0] => [0,0,1,1,2,2]
const test1 = [2, 0, 2, 1, 1, 0];
sortColors(test1);
console.assert(arraysEqual(test1, [0, 0, 1, 1, 2, 2]), 'Test 1 failed: ' + test1);

// Example 2: [2,0,1] => [0,1,2]
const test2 = [2, 0, 1];
sortColors(test2);
console.assert(arraysEqual(test2, [0, 1, 2]), 'Test 2 failed: ' + test2);

// Single element - 0
const test3 = [0];
sortColors(test3);
console.assert(arraysEqual(test3, [0]), 'Test 3 failed: ' + test3);

// Single element - 1
const test4 = [1];
sortColors(test4);
console.assert(arraysEqual(test4, [1]), 'Test 4 failed: ' + test4);

// Single element - 2
const test5 = [2];
sortColors(test5);
console.assert(arraysEqual(test5, [2]), 'Test 5 failed: ' + test5);

// All same - all 0s
const test6 = [0, 0, 0];
sortColors(test6);
console.assert(arraysEqual(test6, [0, 0, 0]), 'Test 6 failed: ' + test6);

// All same - all 1s
const test7 = [1, 1, 1];
sortColors(test7);
console.assert(arraysEqual(test7, [1, 1, 1]), 'Test 7 failed: ' + test7);

// All same - all 2s
const test8 = [2, 2, 2];
sortColors(test8);
console.assert(arraysEqual(test8, [2, 2, 2]), 'Test 8 failed: ' + test8);

// Already sorted
const test9 = [0, 0, 1, 1, 2, 2];
sortColors(test9);
console.assert(arraysEqual(test9, [0, 0, 1, 1, 2, 2]), 'Test 9 failed: ' + test9);

// Reverse sorted
const test10 = [2, 2, 1, 1, 0, 0];
sortColors(test10);
console.assert(arraysEqual(test10, [0, 0, 1, 1, 2, 2]), 'Test 10 failed: ' + test10);

// Only 0s and 2s, no 1s
const test11 = [2, 0, 2, 0];
sortColors(test11);
console.assert(arraysEqual(test11, [0, 0, 2, 2]), 'Test 11 failed: ' + test11);

// Only 0s and 1s, no 2s
const test12 = [1, 0, 1, 0];
sortColors(test12);
console.assert(arraysEqual(test12, [0, 0, 1, 1]), 'Test 12 failed: ' + test12);

// Only 1s and 2s, no 0s
const test13 = [2, 1, 2, 1];
sortColors(test13);
console.assert(arraysEqual(test13, [1, 1, 2, 2]), 'Test 13 failed: ' + test13);

// Large array
const test14 = [];
for (let i = 0; i < 100; i++) {
  test14.push(i % 3 === 0 ? 2 : i % 3 === 1 ? 0 : 1);
}
sortColors(test14);
let isSorted = true;
for (let i = 1; i < test14.length; i++) {
  if (test14[i] < test14[i - 1]) {
    isSorted = false;
    break;
  }
}
console.assert(isSorted, 'Test 14 failed: large array not sorted correctly');

// Two elements
const test15 = [2, 0];
sortColors(test15);
console.assert(arraysEqual(test15, [0, 2]), 'Test 15 failed: ' + test15);

console.log("ALL TESTS PASSED");
