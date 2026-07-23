import { search } from './search-in-rotated-sorted-array-ii.js';

// Example test cases from problem
console.assert(search([2, 5, 6, 0, 0, 1, 2], 0) === true, 'Test 1 failed: target 0 should be found');
console.assert(search([2, 5, 6, 0, 0, 1, 2], 3) === false, 'Test 2 failed: target 3 should not be found');

// Edge cases
console.assert(search([1], 0) === false, 'Test 3 failed: single element, target not found');
console.assert(search([1], 1) === true, 'Test 4 failed: single element, target found');

// All same elements
console.assert(search([1, 1, 1, 1, 1], 1) === true, 'Test 5 failed: all same elements, target found');
console.assert(search([1, 1, 1, 1, 1], 2) === false, 'Test 6 failed: all same elements, target not found');

// No rotation
console.assert(search([1, 2, 3, 4, 5], 3) === true, 'Test 7 failed: no rotation, target found');
console.assert(search([1, 2, 3, 4, 5], 6) === false, 'Test 8 failed: no rotation, target not found');

// Target at beginning
console.assert(search([4, 5, 6, 7, 0, 1, 2], 4) === true, 'Test 9 failed: target at beginning');

// Target at end
console.assert(search([4, 5, 6, 7, 0, 1, 2], 2) === true, 'Test 10 failed: target at end');

// Rotation with duplicates at pivot
console.assert(search([1, 1, 3, 1], 3) === true, 'Test 11 failed: duplicates around pivot, target found');
console.assert(search([1, 1, 3, 1], 2) === false, 'Test 12 failed: duplicates around pivot, target not found');

// Large array
console.assert(search([4, 4, 5, 6, 6, 7, 0, 1, 2, 4, 4], 7) === true, 'Test 13 failed: large array, target found');
console.assert(search([4, 4, 5, 6, 6, 7, 0, 1, 2, 4, 4], 3) === false, 'Test 14 failed: large array, target not found');

// Two elements
console.assert(search([1, 3], 3) === true, 'Test 15 failed: two elements, target found at end');
console.assert(search([3, 1], 3) === true, 'Test 16 failed: two elements rotated, target found at start');
console.assert(search([3, 1], 1) === true, 'Test 17 failed: two elements rotated, target found at end');
console.assert(search([3, 1], 2) === false, 'Test 18 failed: two elements rotated, target not found');

// Negative numbers
console.assert(search([-4, -3, -1, -5, -5], -5) === true, 'Test 19 failed: negative numbers, target found');
console.assert(search([-4, -3, -1, -5, -5], -2) === false, 'Test 20 failed: negative numbers, target not found');

console.log('ALL TESTS PASSED');
