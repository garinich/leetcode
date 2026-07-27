import { getRow } from './pascals-triangle-ii.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: rowIndex = 3 => [1,3,3,1]
console.assert(
  arraysEqual(getRow(3), [1, 3, 3, 1]),
  `Test 1 failed: expected [1,3,3,1], got ${getRow(3)}`
);

// Example 2: rowIndex = 0 => [1]
console.assert(
  arraysEqual(getRow(0), [1]),
  `Test 2 failed: expected [1], got ${getRow(0)}`
);

// Example 3: rowIndex = 1 => [1,1]
console.assert(
  arraysEqual(getRow(1), [1, 1]),
  `Test 3 failed: expected [1,1], got ${getRow(1)}`
);

// Edge case: rowIndex = 2 => [1,2,1]
console.assert(
  arraysEqual(getRow(2), [1, 2, 1]),
  `Test 4 failed: expected [1,2,1], got ${getRow(2)}`
);

// Edge case: rowIndex = 4 => [1,4,6,4,1]
console.assert(
  arraysEqual(getRow(4), [1, 4, 6, 4, 1]),
  `Test 5 failed: expected [1,4,6,4,1], got ${getRow(4)}`
);

// Edge case: rowIndex = 5 => [1,5,10,10,5,1]
console.assert(
  arraysEqual(getRow(5), [1, 5, 10, 10, 5, 1]),
  `Test 6 failed: expected [1,5,10,10,5,1], got ${getRow(5)}`
);

// Edge case: rowIndex = 33 (max constraint)
const row33 = getRow(33);
console.assert(
  row33.length === 34,
  `Test 7 failed: expected length 34, got ${row33.length}`
);
console.assert(
  row33[0] === 1 && row33[33] === 1,
  `Test 7 failed: first and last elements should be 1`
);
console.assert(
  row33[1] === 33 && row33[32] === 33,
  `Test 7 failed: second and second-to-last elements should be 33`
);

console.log('ALL TESTS PASSED');
