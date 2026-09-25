import { searchRange } from './find-first-and-last-position-of-element-in-sorted-array.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

// Example 1: target exists multiple times
console.assert(
  arraysEqual(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]),
  'Test 1 failed: expected [3, 4]'
);

// Example 2: target not in array
console.assert(
  arraysEqual(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]),
  'Test 2 failed: expected [-1, -1]'
);

// Example 3: empty array
console.assert(
  arraysEqual(searchRange([], 0), [-1, -1]),
  'Test 3 failed: expected [-1, -1]'
);

// Edge case: single element, target found
console.assert(
  arraysEqual(searchRange([5], 5), [0, 0]),
  'Test 4 failed: expected [0, 0]'
);

// Edge case: single element, target not found
console.assert(
  arraysEqual(searchRange([5], 3), [-1, -1]),
  'Test 5 failed: expected [-1, -1]'
);

// Edge case: all elements are the target
console.assert(
  arraysEqual(searchRange([2, 2, 2, 2, 2], 2), [0, 4]),
  'Test 6 failed: expected [0, 4]'
);

// Edge case: target at beginning only
console.assert(
  arraysEqual(searchRange([1, 2, 3, 4, 5], 1), [0, 0]),
  'Test 7 failed: expected [0, 0]'
);

// Edge case: target at end only
console.assert(
  arraysEqual(searchRange([1, 2, 3, 4, 5], 5), [4, 4]),
  'Test 8 failed: expected [4, 4]'
);

// Edge case: target in middle (single occurrence)
console.assert(
  arraysEqual(searchRange([1, 2, 3, 4, 5], 3), [2, 2]),
  'Test 9 failed: expected [2, 2]'
);

// Edge case: large array with consecutive duplicates at start
console.assert(
  arraysEqual(searchRange([1, 1, 1, 2, 3, 4], 1), [0, 2]),
  'Test 10 failed: expected [0, 2]'
);

// Edge case: large array with consecutive duplicates at end
console.assert(
  arraysEqual(searchRange([1, 2, 3, 4, 4, 4], 4), [3, 5]),
  'Test 11 failed: expected [3, 5]'
);

// Edge case: negative numbers
console.assert(
  arraysEqual(searchRange([-5, -3, -3, -1, 0, 2], -3), [1, 2]),
  'Test 12 failed: expected [1, 2]'
);

// Edge case: target less than all elements
console.assert(
  arraysEqual(searchRange([3, 5, 7], 1), [-1, -1]),
  'Test 13 failed: expected [-1, -1]'
);

// Edge case: target greater than all elements
console.assert(
  arraysEqual(searchRange([3, 5, 7], 10), [-1, -1]),
  'Test 14 failed: expected [-1, -1]'
);

console.log('ALL TESTS PASSED');
