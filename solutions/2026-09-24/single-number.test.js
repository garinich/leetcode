import { singleNumber } from './single-number.js';

// Example 1: [2,2,1] -> 1
console.assert(
  singleNumber([2, 2, 1]) === 1,
  'Test 1 Failed: expected 1'
);

// Example 2: [4,1,2,1,2] -> 4
console.assert(
  singleNumber([4, 1, 2, 1, 2]) === 4,
  'Test 2 Failed: expected 4'
);

// Example 3: [1] -> 1
console.assert(
  singleNumber([1]) === 1,
  'Test 3 Failed: expected 1'
);

// Edge case: negative numbers
console.assert(
  singleNumber([-1, -1, -2]) === -2,
  'Test 4 Failed: expected -2'
);

// Edge case: single element with larger array
console.assert(
  singleNumber([3, 3, 5, 5, 7]) === 7,
  'Test 5 Failed: expected 7'
);

// Edge case: single element at the beginning
console.assert(
  singleNumber([99, 1, 1, 2, 2]) === 99,
  'Test 6 Failed: expected 99'
);

// Edge case: mix of positive and negative
console.assert(
  singleNumber([-3, 3, -3]) === 3,
  'Test 7 Failed: expected 3'
);

// Edge case: zero as the single number
console.assert(
  singleNumber([0, 5, 5]) === 0,
  'Test 8 Failed: expected 0'
);

console.log('ALL TESTS PASSED');
