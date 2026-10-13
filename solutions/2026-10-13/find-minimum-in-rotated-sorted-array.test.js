import { findMin } from './find-minimum-in-rotated-sorted-array.js';

// Example test cases from the problem
console.assert(findMin([3, 4, 5, 1, 2]) === 1, 'Test 1 failed: [3,4,5,1,2] should return 1');
console.assert(findMin([4, 5, 6, 7, 0, 1, 2]) === 0, 'Test 2 failed: [4,5,6,7,0,1,2] should return 0');
console.assert(findMin([11, 13, 15, 17]) === 11, 'Test 3 failed: [11,13,15,17] should return 11');

// Edge cases

// Single element
console.assert(findMin([1]) === 1, 'Test 4 failed: [1] should return 1');

// Two elements, rotated
console.assert(findMin([2, 1]) === 1, 'Test 5 failed: [2,1] should return 1');

// Two elements, not rotated
console.assert(findMin([1, 2]) === 1, 'Test 6 failed: [1,2] should return 1');

// Already sorted (rotated n times, back to original)
console.assert(findMin([1, 2, 3, 4, 5]) === 1, 'Test 7 failed: [1,2,3,4,5] should return 1');

// Minimum at the end
console.assert(findMin([2, 3, 4, 5, 1]) === 1, 'Test 8 failed: [2,3,4,5,1] should return 1');

// Minimum at the beginning
console.assert(findMin([1, 2, 3, 4, 5]) === 1, 'Test 9 failed: [1,2,3,4,5] should return 1');

// Minimum in the middle
console.assert(findMin([5, 6, 1, 2, 3]) === 1, 'Test 10 failed: [5,6,1,2,3] should return 1');

// Negative numbers
console.assert(findMin([3, -1, 0, 1, 2]) === -1, 'Test 11 failed: [3,-1,0,1,2] should return -1');

// All negative numbers
console.assert(findMin([-5, -4, -3, -2, -1]) === -5, 'Test 12 failed: [-5,-4,-3,-2,-1] should return -5');

// Rotated negative numbers
console.assert(findMin([-3, -2, -1, -5, -4]) === -5, 'Test 13 failed: [-3,-2,-1,-5,-4] should return -5');

// Large rotation
console.assert(findMin([2, 3, 4, 5, 6, 7, 0, 1]) === 0, 'Test 14 failed: [2,3,4,5,6,7,0,1] should return 0');

console.log('ALL TESTS PASSED');
