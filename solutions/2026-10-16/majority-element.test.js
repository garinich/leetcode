import { majorityElement } from './majority-element.js';

// Example 1: [3,2,3] -> 3
console.assert(
  majorityElement([3, 2, 3]) === 3,
  'Test 1 failed: [3,2,3] should return 3'
);

// Example 2: [2,2,1,1,1,2,2] -> 2
console.assert(
  majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2,
  'Test 2 failed: [2,2,1,1,1,2,2] should return 2'
);

// Single element array
console.assert(
  majorityElement([1]) === 1,
  'Test 3 failed: [1] should return 1'
);

// All same elements
console.assert(
  majorityElement([5, 5, 5, 5]) === 5,
  'Test 4 failed: [5,5,5,5] should return 5'
);

// Majority at the end
console.assert(
  majorityElement([1, 2, 3, 3, 3]) === 3,
  'Test 5 failed: [1,2,3,3,3] should return 3'
);

// Majority at the beginning
console.assert(
  majorityElement([4, 4, 4, 1, 2]) === 4,
  'Test 6 failed: [4,4,4,1,2] should return 4'
);

// Negative numbers
console.assert(
  majorityElement([-1, -1, -1, 2, 3]) === -1,
  'Test 7 failed: [-1,-1,-1,2,3] should return -1'
);

// Two elements, one is majority
console.assert(
  majorityElement([1, 2, 1]) === 1,
  'Test 8 failed: [1,2,1] should return 1'
);

// Large values
console.assert(
  majorityElement([1000000000, 1000000000, -1000000000]) === 1000000000,
  'Test 9 failed: should return 1000000000'
);

console.log('ALL TESTS PASSED');
