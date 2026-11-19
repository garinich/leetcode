import { minPathSum } from './minimum-path-sum.js';

// Example 1: standard 3x3 grid
console.assert(
  minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) === 7,
  'Example 1 failed: expected 7'
);

// Example 2: 2x3 grid
console.assert(
  minPathSum([[1, 2, 3], [4, 5, 6]]) === 12,
  'Example 2 failed: expected 12'
);

// Edge case: single cell
console.assert(
  minPathSum([[5]]) === 5,
  'Single cell failed: expected 5'
);

// Edge case: single row
console.assert(
  minPathSum([[1, 2, 3, 4]]) === 10,
  'Single row failed: expected 10'
);

// Edge case: single column
console.assert(
  minPathSum([[1], [2], [3], [4]]) === 10,
  'Single column failed: expected 10'
);

// Edge case: all zeros
console.assert(
  minPathSum([[0, 0], [0, 0]]) === 0,
  'All zeros failed: expected 0'
);

// Edge case: 1x2 grid
console.assert(
  minPathSum([[1, 5]]) === 6,
  '1x2 grid failed: expected 6'
);

// Edge case: 2x1 grid
console.assert(
  minPathSum([[3], [7]]) === 10,
  '2x1 grid failed: expected 10'
);

// Larger grid test
console.assert(
  minPathSum([[1, 2], [1, 1]]) === 3,
  '2x2 grid failed: expected 3'
);

// Grid where going down then right is better
console.assert(
  minPathSum([[5, 9, 1], [1, 1, 1]]) === 8,
  'Down-right path failed: expected 8'
);

console.log('ALL TESTS PASSED');
