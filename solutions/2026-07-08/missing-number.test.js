import { missingNumber } from './missing-number.js';

// Example 1: [3,0,1] => 2
console.assert(
  missingNumber([3, 0, 1]) === 2,
  'Test 1 failed: expected 2'
);

// Example 2: [0,1] => 2
console.assert(
  missingNumber([0, 1]) === 2,
  'Test 2 failed: expected 2'
);

// Example 3: [9,6,4,2,3,5,7,0,1] => 8
console.assert(
  missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) === 8,
  'Test 3 failed: expected 8'
);

// Edge case: single element [0] => 1
console.assert(
  missingNumber([0]) === 1,
  'Test 4 failed: expected 1'
);

// Edge case: single element [1] => 0
console.assert(
  missingNumber([1]) === 0,
  'Test 5 failed: expected 0'
);

// Edge case: missing 0
console.assert(
  missingNumber([1, 2, 3]) === 0,
  'Test 6 failed: expected 0'
);

// Edge case: missing last number
console.assert(
  missingNumber([0, 1, 2, 3]) === 4,
  'Test 7 failed: expected 4'
);

// Larger array missing middle element
console.assert(
  missingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9, 10]) === 5,
  'Test 8 failed: expected 5'
);

console.log('ALL TESTS PASSED');
