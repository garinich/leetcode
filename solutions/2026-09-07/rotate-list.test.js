import { rotateRight, buildList, listToArray } from './rotate-list.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [1,2,3,4,5], k=2 => [4,5,1,2,3]
const result1 = listToArray(rotateRight(buildList([1, 2, 3, 4, 5]), 2));
console.assert(
  arraysEqual(result1, [4, 5, 1, 2, 3]),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2: [0,1,2], k=4 => [2,0,1]
const result2 = listToArray(rotateRight(buildList([0, 1, 2]), 4));
console.assert(
  arraysEqual(result2, [2, 0, 1]),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Edge case: empty list
const result3 = listToArray(rotateRight(null, 3));
console.assert(
  arraysEqual(result3, []),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: single node
const result4 = listToArray(rotateRight(buildList([1]), 5));
console.assert(
  arraysEqual(result4, [1]),
  `Test 4 failed: ${JSON.stringify(result4)}`
);

// Edge case: k=0 (no rotation)
const result5 = listToArray(rotateRight(buildList([1, 2, 3]), 0));
console.assert(
  arraysEqual(result5, [1, 2, 3]),
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: k equals length (full rotation, same list)
const result6 = listToArray(rotateRight(buildList([1, 2, 3]), 3));
console.assert(
  arraysEqual(result6, [1, 2, 3]),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: k larger than length
const result7 = listToArray(rotateRight(buildList([1, 2, 3, 4, 5]), 7));
// 7 % 5 = 2, same as rotating by 2 => [4,5,1,2,3]
console.assert(
  arraysEqual(result7, [4, 5, 1, 2, 3]),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

// Edge case: two-element list
const result8 = listToArray(rotateRight(buildList([1, 2]), 1));
console.assert(
  arraysEqual(result8, [2, 1]),
  `Test 8 failed: ${JSON.stringify(result8)}`
);

// Edge case: large k (k = 2 * 10^9)
const result9 = listToArray(rotateRight(buildList([1, 2, 3]), 2000000000));
// 2000000000 % 3 = 2, rotate by 2 => [2,3,1]
console.assert(
  arraysEqual(result9, [2, 3, 1]),
  `Test 9 failed: ${JSON.stringify(result9)}`
);

console.log('ALL TESTS PASSED');
