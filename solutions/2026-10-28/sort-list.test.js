import { sortList, arrayToList, listToArray } from './sort-list.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [4,2,1,3] -> [1,2,3,4]
const result1 = listToArray(sortList(arrayToList([4, 2, 1, 3])));
console.assert(
  arraysEqual(result1, [1, 2, 3, 4]),
  `Test 1 failed: expected [1,2,3,4], got [${result1}]`
);

// Example 2: [-1,5,3,4,0] -> [-1,0,3,4,5]
const result2 = listToArray(sortList(arrayToList([-1, 5, 3, 4, 0])));
console.assert(
  arraysEqual(result2, [-1, 0, 3, 4, 5]),
  `Test 2 failed: expected [-1,0,3,4,5], got [${result2}]`
);

// Example 3: [] -> []
const result3 = listToArray(sortList(arrayToList([])));
console.assert(
  arraysEqual(result3, []),
  `Test 3 failed: expected [], got [${result3}]`
);

// Edge case: single element
const result4 = listToArray(sortList(arrayToList([1])));
console.assert(
  arraysEqual(result4, [1]),
  `Test 4 failed: expected [1], got [${result4}]`
);

// Edge case: already sorted
const result5 = listToArray(sortList(arrayToList([1, 2, 3, 4, 5])));
console.assert(
  arraysEqual(result5, [1, 2, 3, 4, 5]),
  `Test 5 failed: expected [1,2,3,4,5], got [${result5}]`
);

// Edge case: reverse sorted
const result6 = listToArray(sortList(arrayToList([5, 4, 3, 2, 1])));
console.assert(
  arraysEqual(result6, [1, 2, 3, 4, 5]),
  `Test 6 failed: expected [1,2,3,4,5], got [${result6}]`
);

// Edge case: duplicates
const result7 = listToArray(sortList(arrayToList([3, 1, 2, 1, 3])));
console.assert(
  arraysEqual(result7, [1, 1, 2, 3, 3]),
  `Test 7 failed: expected [1,1,2,3,3], got [${result7}]`
);

// Edge case: two elements
const result8 = listToArray(sortList(arrayToList([2, 1])));
console.assert(
  arraysEqual(result8, [1, 2]),
  `Test 8 failed: expected [1,2], got [${result8}]`
);

// Edge case: negative numbers
const result9 = listToArray(sortList(arrayToList([-5, -1, -3, -2, -4])));
console.assert(
  arraysEqual(result9, [-5, -4, -3, -2, -1]),
  `Test 9 failed: expected [-5,-4,-3,-2,-1], got [${result9}]`
);

// Edge case: all same values
const result10 = listToArray(sortList(arrayToList([3, 3, 3, 3])));
console.assert(
  arraysEqual(result10, [3, 3, 3, 3]),
  `Test 10 failed: expected [3,3,3,3], got [${result10}]`
);

console.log('ALL TESTS PASSED');
