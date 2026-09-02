import { generate } from './pascals-triangle.js';

// Helper to compare arrays deeply
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

// Example 1
console.assert(
  arraysEqual(generate(5), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]),
  'Test 1 failed: numRows = 5'
);

// Example 2
console.assert(
  arraysEqual(generate(1), [[1]]),
  'Test 2 failed: numRows = 1'
);

// Edge case: numRows = 2
console.assert(
  arraysEqual(generate(2), [[1],[1,1]]),
  'Test 3 failed: numRows = 2'
);

// Edge case: numRows = 3
console.assert(
  arraysEqual(generate(3), [[1],[1,1],[1,2,1]]),
  'Test 4 failed: numRows = 3'
);

// Edge case: numRows = 6
console.assert(
  arraysEqual(generate(6), [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]),
  'Test 5 failed: numRows = 6'
);

// Edge case: numRows = 30 (large input, just check length)
const result30 = generate(30);
console.assert(
  result30.length === 30,
  'Test 6 failed: numRows = 30 should have 30 rows'
);
console.assert(
  result30[29].length === 30,
  'Test 7 failed: last row of numRows=30 should have 30 elements'
);
console.assert(
  result30[29][0] === 1 && result30[29][29] === 1,
  'Test 8 failed: first and last of last row should be 1'
);

console.log('ALL TESTS PASSED');
