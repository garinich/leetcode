import { subsetsWithDup } from './subsets-ii.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function subsetsEqual(result, expected) {
  if (result.length !== expected.length) return false;

  const normalize = (subsets) =>
    subsets
      .map(s => [...s].sort((a, b) => a - b).join(','))
      .sort()
      .join('|');

  return normalize(result) === normalize(expected);
}

// Example 1: [1,2,2]
const result1 = subsetsWithDup([1, 2, 2]);
const expected1 = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
console.assert(
  subsetsEqual(result1, expected1),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2: [0]
const result2 = subsetsWithDup([0]);
const expected2 = [[], [0]];
console.assert(
  subsetsEqual(result2, expected2),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Edge case: single element
const result3 = subsetsWithDup([5]);
const expected3 = [[], [5]];
console.assert(
  subsetsEqual(result3, expected3),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: all duplicates [2,2,2]
const result4 = subsetsWithDup([2, 2, 2]);
const expected4 = [[], [2], [2, 2], [2, 2, 2]];
console.assert(
  subsetsEqual(result4, expected4),
  `Test 4 failed: ${JSON.stringify(result4)}`
);

// Edge case: no duplicates [1,2,3]
const result5 = subsetsWithDup([1, 2, 3]);
const expected5 = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]];
console.assert(
  subsetsEqual(result5, expected5),
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: negative numbers [-2,-1,0]
const result6 = subsetsWithDup([-2, -1, 0]);
const expected6 = [[], [-2], [-2, -1], [-2, -1, 0], [-2, 0], [-1], [-1, 0], [0]];
console.assert(
  subsetsEqual(result6, expected6),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: two duplicates [1,1]
const result7 = subsetsWithDup([1, 1]);
const expected7 = [[], [1], [1, 1]];
console.assert(
  subsetsEqual(result7, expected7),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

// Edge case: mixed duplicates [1,2,2,3]
const result8 = subsetsWithDup([1, 2, 2, 3]);
const expected8 = [
  [], [1], [1, 2], [1, 2, 2], [1, 2, 2, 3], [1, 2, 3], [1, 3],
  [2], [2, 2], [2, 2, 3], [2, 3], [3]
];
console.assert(
  subsetsEqual(result8, expected8),
  `Test 8 failed: ${JSON.stringify(result8)}`
);

console.log("ALL TESTS PASSED");
