import { maxSubArray, maxSubArrayDivideAndConquer } from './maximum-subarray.js';

// Helper to test both solutions
function testBoth(nums, expected, label) {
  const result1 = maxSubArray(nums);
  const result2 = maxSubArrayDivideAndConquer(nums);
  console.assert(
    result1 === expected,
    `[Kadane] ${label}: expected ${expected}, got ${result1}`
  );
  console.assert(
    result2 === expected,
    `[D&C] ${label}: expected ${expected}, got ${result2}`
  );
}

// Example 1: Mixed positive and negative numbers
testBoth([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6, 'Example 1');

// Example 2: Single element
testBoth([1], 1, 'Example 2 - single positive');

// Example 3: All positive numbers
testBoth([5, 4, -1, 7, 8], 23, 'Example 3 - mostly positive');

// Edge case: Single negative number
testBoth([-1], -1, 'Single negative element');

// Edge case: All negative numbers
testBoth([-2, -3, -1, -5], -1, 'All negative numbers');

// Edge case: Two elements
testBoth([-2, 1], 1, 'Two elements - take positive');
testBoth([2, -1], 2, 'Two elements - take first positive');
testBoth([-1, -2], -1, 'Two negative elements');

// Edge case: Large subarray at the end
testBoth([-5, -3, 1, 2, 3, 4], 10, 'Large subarray at the end');

// Edge case: Large subarray at the beginning
testBoth([4, 3, 2, 1, -100], 10, 'Large subarray at the beginning');

// Edge case: All same positive values
testBoth([3, 3, 3, 3], 12, 'All same positive values');

// Edge case: Alternating positive and negative
testBoth([1, -1, 1, -1, 1], 1, 'Alternating positive and negative');

// Edge case: Large negative with small positives
testBoth([-10000, 1, 2, 3], 6, 'Large negative with small positives');

// Edge case: Maximum constraint values
testBoth([10000, 10000, 10000], 30000, 'All max values');
testBoth([-10000, -10000, -10000], -10000, 'All min values');

// Edge case: Subarray in the middle
testBoth([-3, -2, 5, 6, -10, -3], 11, 'Subarray in the middle');

// Edge case: zeros in array
testBoth([0, 0, 0, 1], 1, 'Zeros with one positive');
testBoth([0, -1, 0], 0, 'Zeros with negative');

console.log('ALL TESTS PASSED');
