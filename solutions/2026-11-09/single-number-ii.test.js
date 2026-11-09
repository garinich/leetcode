import { singleNumber } from './single-number-ii.js';

// Example 1: [2,2,3,2] -> 3
console.assert(
  singleNumber([2, 2, 3, 2]) === 3,
  'Test 1 failed: expected 3'
);

// Example 2: [0,1,0,1,0,1,99] -> 99
console.assert(
  singleNumber([0, 1, 0, 1, 0, 1, 99]) === 99,
  'Test 2 failed: expected 99'
);

// Edge case: single element array
console.assert(
  singleNumber([42]) === 42,
  'Test 3 failed: expected 42'
);

// Edge case: single element is 0
console.assert(
  singleNumber([0, 1, 1, 1]) === 0,
  'Test 4 failed: expected 0'
);

// Edge case: negative number is the single element
console.assert(
  singleNumber([-5, -5, -5, 7]) === 7,
  'Test 5 failed: expected 7'
);

// Edge case: single element is a negative number
console.assert(
  singleNumber([3, 3, 3, -1]) === -1,
  'Test 6 failed: expected -1'
);

// Edge case: larger array
console.assert(
  singleNumber([1, 1, 1, 2, 2, 2, 3, 3, 3, 4]) === 4,
  'Test 7 failed: expected 4'
);

// Edge case: single element at the beginning
console.assert(
  singleNumber([100, 5, 5, 5]) === 100,
  'Test 8 failed: expected 100'
);

// Edge case: large positive number
console.assert(
  singleNumber([2147483647, 0, 0, 0]) === 2147483647,
  'Test 9 failed: expected 2147483647'
);

// Edge case: large negative number
console.assert(
  singleNumber([-2147483648, 1, 1, 1]) === -2147483648,
  'Test 10 failed: expected -2147483648'
);

console.log('ALL TESTS PASSED');
