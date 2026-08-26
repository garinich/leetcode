import { maxArea } from './container-with-most-water.js';

// Example 1: Expected output 49
console.assert(
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49,
  'Test 1 Failed: Expected 49'
);

// Example 2: Expected output 1
console.assert(
  maxArea([1, 1]) === 1,
  'Test 2 Failed: Expected 1'
);

// Edge case: Two elements where heights differ
console.assert(
  maxArea([4, 3]) === 3,
  'Test 3 Failed: Expected 3'
);

// Edge case: All same heights
console.assert(
  maxArea([5, 5, 5, 5, 5]) === 20,
  'Test 4 Failed: Expected 20'
);

// Edge case: Increasing heights
console.assert(
  maxArea([1, 2, 3, 4, 5]) === 6,
  'Test 5 Failed: Expected 6'
);

// Edge case: Decreasing heights
console.assert(
  maxArea([5, 4, 3, 2, 1]) === 6,
  'Test 6 Failed: Expected 6'
);

// Edge case: One tall line in the middle
console.assert(
  maxArea([1, 2, 100, 2, 1]) === 4,
  'Test 7 Failed: Expected 4'
);

// Edge case: Large container at ends
console.assert(
  maxArea([10, 1, 1, 1, 10]) === 40,
  'Test 8 Failed: Expected 40'
);

// Edge case: Minimum input size
console.assert(
  maxArea([0, 0]) === 0,
  'Test 9 Failed: Expected 0'
);

// Edge case: Single tall line at each end
console.assert(
  maxArea([10000, 10000]) === 10000,
  'Test 10 Failed: Expected 10000'
);

console.log('ALL TESTS PASSED');
