import { permuteUnique } from './permutations-ii.js';

function sortPerms(perms) {
  return perms
    .map(p => p.slice().sort((a, b) => a - b).join(','))
    .sort()
    .join('|');
}

function arraysMatch(a, b) {
  return sortPerms(a) === sortPerms(b);
}

// Example 1: [1,1,2]
const result1 = permuteUnique([1, 1, 2]);
const expected1 = [[1, 1, 2], [1, 2, 1], [2, 1, 1]];
console.assert(
  result1.length === expected1.length,
  `Test 1 length failed: expected ${expected1.length}, got ${result1.length}`
);
console.assert(
  arraysMatch(result1, expected1),
  `Test 1 content failed: got ${JSON.stringify(result1)}`
);

// Example 2: [1,2,3]
const result2 = permuteUnique([1, 2, 3]);
const expected2 = [
  [1, 2, 3], [1, 3, 2],
  [2, 1, 3], [2, 3, 1],
  [3, 1, 2], [3, 2, 1]
];
console.assert(
  result2.length === expected2.length,
  `Test 2 length failed: expected ${expected2.length}, got ${result2.length}`
);
console.assert(
  arraysMatch(result2, expected2),
  `Test 2 content failed: got ${JSON.stringify(result2)}`
);

// Edge case: single element
const result3 = permuteUnique([1]);
const expected3 = [[1]];
console.assert(
  result3.length === 1,
  `Test 3 length failed: expected 1, got ${result3.length}`
);
console.assert(
  arraysMatch(result3, expected3),
  `Test 3 content failed: got ${JSON.stringify(result3)}`
);

// Edge case: all duplicates [2,2,2]
const result4 = permuteUnique([2, 2, 2]);
console.assert(
  result4.length === 1,
  `Test 4 length failed: expected 1, got ${result4.length}`
);
console.assert(
  JSON.stringify(result4[0]) === JSON.stringify([2, 2, 2]),
  `Test 4 content failed: got ${JSON.stringify(result4)}`
);

// Edge case: two elements, one duplicate [1,1]
const result5 = permuteUnique([1, 1]);
console.assert(
  result5.length === 1,
  `Test 5 length failed: expected 1, got ${result5.length}`
);

// Edge case: two distinct elements [3,1]
const result6 = permuteUnique([3, 1]);
const expected6 = [[1, 3], [3, 1]];
console.assert(
  result6.length === 2,
  `Test 6 length failed: expected 2, got ${result6.length}`
);
console.assert(
  arraysMatch(result6, expected6),
  `Test 6 content failed: got ${JSON.stringify(result6)}`
);

// Edge case: negatives [1,-1,1]
const result7 = permuteUnique([1, -1, 1]);
const expected7 = [[-1, 1, 1], [1, -1, 1], [1, 1, -1]];
console.assert(
  result7.length === expected7.length,
  `Test 7 length failed: expected ${expected7.length}, got ${result7.length}`
);
console.assert(
  arraysMatch(result7, expected7),
  `Test 7 content failed: got ${JSON.stringify(result7)}`
);

console.log("ALL TESTS PASSED");
