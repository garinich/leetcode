import { minimumTotal } from './triangle.js';

// Example 1: Standard triangle
console.assert(
  minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]) === 11,
  'Test 1 failed: Expected 11'
);

// Example 2: Single element
console.assert(
  minimumTotal([[-10]]) === -10,
  'Test 2 failed: Expected -10'
);

// Edge case: Two rows
console.assert(
  minimumTotal([[1],[2,3]]) === 3,
  'Test 3 failed: Expected 3'
);

// Edge case: All negative numbers
console.assert(
  minimumTotal([[-1],[-2,-3],[-4,-5,-6]]) === -10,
  'Test 4 failed: Expected -10 (path: -1 + -3 + -6)'
);

// Edge case: Single column path (always go left)
console.assert(
  minimumTotal([[1],[1,2],[1,2,3]]) === 3,
  'Test 5 failed: Expected 3'
);

// Edge case: Best path goes right
console.assert(
  minimumTotal([[5],[1,9],[2,3,10]]) === 9,
  'Test 6 failed: Expected 9 (path: 5 + 1 + 3)'
);

// Edge case: Three rows with mixed values
console.assert(
  minimumTotal([[-1],[2,3],[1,-1,-3]]) === -1,
  'Test 7 failed: Expected -1 (path: -1 + 3 + -3)'
);

console.log('ALL TESTS PASSED');
