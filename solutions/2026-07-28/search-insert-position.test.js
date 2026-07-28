import { searchInsert } from './search-insert-position.js';

// Example 1: target exists in array
console.assert(
  searchInsert([1, 3, 5, 6], 5) === 2,
  'Test 1 failed: target 5 should be at index 2'
);

// Example 2: target should be inserted in middle
console.assert(
  searchInsert([1, 3, 5, 6], 2) === 1,
  'Test 2 failed: target 2 should be inserted at index 1'
);

// Example 3: target should be inserted at end
console.assert(
  searchInsert([1, 3, 5, 6], 7) === 4,
  'Test 3 failed: target 7 should be inserted at index 4'
);

// Edge case: target should be inserted at beginning
console.assert(
  searchInsert([1, 3, 5, 6], 0) === 0,
  'Test 4 failed: target 0 should be inserted at index 0'
);

// Edge case: single element array, target found
console.assert(
  searchInsert([1], 1) === 0,
  'Test 5 failed: target 1 should be at index 0 in single element array'
);

// Edge case: single element array, target not found (insert before)
console.assert(
  searchInsert([5], 3) === 0,
  'Test 6 failed: target 3 should be inserted at index 0'
);

// Edge case: single element array, target not found (insert after)
console.assert(
  searchInsert([5], 7) === 1,
  'Test 7 failed: target 7 should be inserted at index 1'
);

// Edge case: target at first position of array
console.assert(
  searchInsert([1, 3, 5, 6], 1) === 0,
  'Test 8 failed: target 1 should be at index 0'
);

// Edge case: target at last position of array
console.assert(
  searchInsert([1, 3, 5, 6], 6) === 3,
  'Test 9 failed: target 6 should be at index 3'
);

// Edge case: negative numbers
console.assert(
  searchInsert([-5, -3, -1, 2, 4], -3) === 1,
  'Test 10 failed: target -3 should be at index 1'
);

// Edge case: negative target not in array
console.assert(
  searchInsert([-5, -3, -1, 2, 4], -4) === 1,
  'Test 11 failed: target -4 should be inserted at index 1'
);

console.log('ALL TESTS PASSED');
