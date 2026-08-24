import { reverseBetween, buildList, listToArray } from './reverse-linked-list-ii.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: head = [1,2,3,4,5], left = 2, right = 4 => [1,4,3,2,5]
const result1 = listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 2, 4));
console.assert(arraysEqual(result1, [1, 4, 3, 2, 5]), `Test 1 failed: ${result1}`);

// Example 2: head = [5], left = 1, right = 1 => [5]
const result2 = listToArray(reverseBetween(buildList([5]), 1, 1));
console.assert(arraysEqual(result2, [5]), `Test 2 failed: ${result2}`);

// Edge case: Reverse entire list
const result3 = listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 5));
console.assert(arraysEqual(result3, [5, 4, 3, 2, 1]), `Test 3 failed: ${result3}`);

// Edge case: Reverse first two elements
const result4 = listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 2));
console.assert(arraysEqual(result4, [2, 1, 3, 4, 5]), `Test 4 failed: ${result4}`);

// Edge case: Reverse last two elements
const result5 = listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 4, 5));
console.assert(arraysEqual(result5, [1, 2, 3, 5, 4]), `Test 5 failed: ${result5}`);

// Edge case: Two-element list, reverse both
const result6 = listToArray(reverseBetween(buildList([3, 7]), 1, 2));
console.assert(arraysEqual(result6, [7, 3]), `Test 6 failed: ${result6}`);

// Edge case: Single element reversal in the middle
const result7 = listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 3, 3));
console.assert(arraysEqual(result7, [1, 2, 3, 4, 5]), `Test 7 failed: ${result7}`);

// Edge case: Negative values
const result8 = listToArray(reverseBetween(buildList([-5, -3, -1, 0, 2]), 2, 4));
console.assert(arraysEqual(result8, [-5, 0, -1, -3, 2]), `Test 8 failed: ${result8}`);

console.log("ALL TESTS PASSED");
