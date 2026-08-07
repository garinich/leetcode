import { thirdMax } from './third-maximum-number.js';

// Example 1: [3,2,1] -> 1
console.assert(
  thirdMax([3, 2, 1]) === 1,
  'Test 1 failed: expected 1'
);

// Example 2: [1,2] -> 2 (third max doesn't exist, return max)
console.assert(
  thirdMax([1, 2]) === 2,
  'Test 2 failed: expected 2'
);

// Example 3: [2,2,3,1] -> 1 (duplicates counted once)
console.assert(
  thirdMax([2, 2, 3, 1]) === 1,
  'Test 3 failed: expected 1'
);

// Edge case: single element
console.assert(
  thirdMax([5]) === 5,
  'Test 4 failed: expected 5'
);

// Edge case: all same elements
console.assert(
  thirdMax([3, 3, 3]) === 3,
  'Test 5 failed: expected 3'
);

// Edge case: two distinct elements
console.assert(
  thirdMax([5, 5, 3]) === 5,
  'Test 6 failed: expected 5'
);

// Edge case: negative numbers
console.assert(
  thirdMax([-1, -2, -3]) === -3,
  'Test 7 failed: expected -3'
);

// Edge case: includes -Infinity equivalent (MIN_SAFE_INTEGER)
console.assert(
  thirdMax([1, 2, -2147483648]) === -2147483648,
  'Test 8 failed: expected -2147483648'
);

// Edge case: large array with duplicates
console.assert(
  thirdMax([1, 1, 2, 2, 3, 3, 4, 4]) === 2,
  'Test 9 failed: expected 2'
);

// Edge case: only two distinct values in larger array
console.assert(
  thirdMax([1, 1, 1, 2, 2, 2]) === 2,
  'Test 10 failed: expected 2'
);

console.log('ALL TESTS PASSED');
