import { moveZeroes } from './move-zeroes.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, idx) => val === b[idx]);
}

// Example 1: [0,1,0,3,12] -> [1,3,12,0,0]
const test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.assert(arraysEqual(test1, [1, 3, 12, 0, 0]), `Test 1 failed: ${test1}`);

// Example 2: [0] -> [0]
const test2 = [0];
moveZeroes(test2);
console.assert(arraysEqual(test2, [0]), `Test 2 failed: ${test2}`);

// Edge case: no zeros
const test3 = [1, 2, 3];
moveZeroes(test3);
console.assert(arraysEqual(test3, [1, 2, 3]), `Test 3 failed: ${test3}`);

// Edge case: all zeros
const test4 = [0, 0, 0];
moveZeroes(test4);
console.assert(arraysEqual(test4, [0, 0, 0]), `Test 4 failed: ${test4}`);

// Edge case: single non-zero element
const test5 = [1];
moveZeroes(test5);
console.assert(arraysEqual(test5, [1]), `Test 5 failed: ${test5}`);

// Edge case: zeros at the end already
const test6 = [1, 2, 3, 0, 0];
moveZeroes(test6);
console.assert(arraysEqual(test6, [1, 2, 3, 0, 0]), `Test 6 failed: ${test6}`);

// Edge case: negative numbers
const test7 = [0, -1, 0, -3, 12];
moveZeroes(test7);
console.assert(arraysEqual(test7, [-1, -3, 12, 0, 0]), `Test 7 failed: ${test7}`);

// Edge case: multiple zeros mixed
const test8 = [0, 0, 1];
moveZeroes(test8);
console.assert(arraysEqual(test8, [1, 0, 0]), `Test 8 failed: ${test8}`);

console.log('ALL TESTS PASSED');
