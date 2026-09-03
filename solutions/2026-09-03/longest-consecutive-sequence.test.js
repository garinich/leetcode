import { longestConsecutive } from './longest-consecutive-sequence.js';

// Example 1: [100,4,200,1,3,2] => 4
console.assert(
  longestConsecutive([100, 4, 200, 1, 3, 2]) === 4,
  'Test 1 failed: expected 4'
);

// Example 2: [0,3,7,2,5,8,4,6,0,1] => 9
console.assert(
  longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9,
  'Test 2 failed: expected 9'
);

// Example 3: [1,0,1,2] => 3
console.assert(
  longestConsecutive([1, 0, 1, 2]) === 3,
  'Test 3 failed: expected 3'
);

// Edge case: empty array
console.assert(
  longestConsecutive([]) === 0,
  'Test 4 failed: expected 0 for empty array'
);

// Edge case: single element
console.assert(
  longestConsecutive([42]) === 1,
  'Test 5 failed: expected 1 for single element'
);

// Edge case: all duplicates
console.assert(
  longestConsecutive([5, 5, 5, 5]) === 1,
  'Test 6 failed: expected 1 for all duplicates'
);

// Edge case: negative numbers
console.assert(
  longestConsecutive([-3, -2, -1, 0, 1]) === 5,
  'Test 7 failed: expected 5 for negative sequence'
);

// Edge case: two separate sequences, pick longer
console.assert(
  longestConsecutive([10, 11, 12, 1, 2]) === 3,
  'Test 8 failed: expected 3'
);

// Edge case: no consecutive elements
console.assert(
  longestConsecutive([10, 20, 30, 40]) === 1,
  'Test 9 failed: expected 1 when no consecutive elements'
);

// Edge case: large consecutive range
console.assert(
  longestConsecutive([5, 4, 3, 2, 1, 0, -1, -2]) === 8,
  'Test 10 failed: expected 8'
);

console.log('ALL TESTS PASSED');
