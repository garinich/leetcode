import { nextPermutation } from './next-permutation.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [1,2,3] -> [1,3,2]
let nums1 = [1, 2, 3];
nextPermutation(nums1);
console.assert(arraysEqual(nums1, [1, 3, 2]), `Test 1 failed: ${nums1}`);

// Example 2: [3,2,1] -> [1,2,3]
let nums2 = [3, 2, 1];
nextPermutation(nums2);
console.assert(arraysEqual(nums2, [1, 2, 3]), `Test 2 failed: ${nums2}`);

// Example 3: [1,1,5] -> [1,5,1]
let nums3 = [1, 1, 5];
nextPermutation(nums3);
console.assert(arraysEqual(nums3, [1, 5, 1]), `Test 3 failed: ${nums3}`);

// Edge case: single element
let nums4 = [1];
nextPermutation(nums4);
console.assert(arraysEqual(nums4, [1]), `Test 4 failed: ${nums4}`);

// Edge case: two elements ascending
let nums5 = [1, 2];
nextPermutation(nums5);
console.assert(arraysEqual(nums5, [2, 1]), `Test 5 failed: ${nums5}`);

// Edge case: two elements descending
let nums6 = [2, 1];
nextPermutation(nums6);
console.assert(arraysEqual(nums6, [1, 2]), `Test 6 failed: ${nums6}`);

// Edge case: [2,3,1] -> [3,1,2]
let nums7 = [2, 3, 1];
nextPermutation(nums7);
console.assert(arraysEqual(nums7, [3, 1, 2]), `Test 7 failed: ${nums7}`);

// Edge case: [1,3,2] -> [2,1,3]
let nums8 = [1, 3, 2];
nextPermutation(nums8);
console.assert(arraysEqual(nums8, [2, 1, 3]), `Test 8 failed: ${nums8}`);

// Edge case: all same elements
let nums9 = [2, 2, 2];
nextPermutation(nums9);
console.assert(arraysEqual(nums9, [2, 2, 2]), `Test 9 failed: ${nums9}`);

// Edge case: longer array
let nums10 = [1, 2, 3, 4, 5];
nextPermutation(nums10);
console.assert(arraysEqual(nums10, [1, 2, 3, 5, 4]), `Test 10 failed: ${nums10}`);

// Edge case: [5, 4, 3, 2, 1] -> [1, 2, 3, 4, 5]
let nums11 = [5, 4, 3, 2, 1];
nextPermutation(nums11);
console.assert(arraysEqual(nums11, [1, 2, 3, 4, 5]), `Test 11 failed: ${nums11}`);

// Edge case: [1, 5, 1] -> [5, 1, 1]
let nums12 = [1, 5, 1];
nextPermutation(nums12);
console.assert(arraysEqual(nums12, [5, 1, 1]), `Test 12 failed: ${nums12}`);

console.log("ALL TESTS PASSED");
