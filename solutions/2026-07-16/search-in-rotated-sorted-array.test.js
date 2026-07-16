import { search } from './search-in-rotated-sorted-array.js';

// Example 1: target found in rotated array
console.assert(
  search([4, 5, 6, 7, 0, 1, 2], 0) === 4,
  'Test 1 failed: expected 4'
);

// Example 2: target not in array
console.assert(
  search([4, 5, 6, 7, 0, 1, 2], 3) === -1,
  'Test 2 failed: expected -1'
);

// Example 3: single element, not found
console.assert(
  search([1], 0) === -1,
  'Test 3 failed: expected -1'
);

// Single element, found
console.assert(
  search([1], 1) === 0,
  'Test 4 failed: expected 0'
);

// Target at beginning
console.assert(
  search([4, 5, 6, 7, 0, 1, 2], 4) === 0,
  'Test 5 failed: expected 0'
);

// Target at end
console.assert(
  search([4, 5, 6, 7, 0, 1, 2], 2) === 6,
  'Test 6 failed: expected 6'
);

// No rotation
console.assert(
  search([1, 2, 3, 4, 5], 3) === 2,
  'Test 7 failed: expected 2'
);

// No rotation, not found
console.assert(
  search([1, 2, 3, 4, 5], 6) === -1,
  'Test 8 failed: expected -1'
);

// Two elements rotated
console.assert(
  search([2, 1], 1) === 1,
  'Test 9 failed: expected 1'
);

// Two elements rotated, find first
console.assert(
  search([2, 1], 2) === 0,
  'Test 10 failed: expected 0'
);

// Rotated at first position (no effective rotation)
console.assert(
  search([1, 3, 5], 5) === 2,
  'Test 11 failed: expected 2'
);

// Large rotated array
console.assert(
  search([6, 7, 8, 1, 2, 3, 4, 5], 8) === 2,
  'Test 12 failed: expected 2'
);

console.assert(
  search([6, 7, 8, 1, 2, 3, 4, 5], 1) === 3,
  'Test 13 failed: expected 3'
);

console.assert(
  search([6, 7, 8, 1, 2, 3, 4, 5], 9) === -1,
  'Test 14 failed: expected -1'
);

console.log('ALL TESTS PASSED');
