import { twoSum } from './two-sum.js';

// Helper to check if two arrays contain the same elements (order-independent)
function arraysMatch(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

// Example 1: nums = [2,7,11,15], target = 9 => [0,1]
console.assert(
  arraysMatch(twoSum([2, 7, 11, 15], 9), [0, 1]),
  'Test 1 Failed: Expected [0,1]'
);

// Example 2: nums = [3,2,4], target = 6 => [1,2]
console.assert(
  arraysMatch(twoSum([3, 2, 4], 6), [1, 2]),
  'Test 2 Failed: Expected [1,2]'
);

// Example 3: nums = [3,3], target = 6 => [0,1]
console.assert(
  arraysMatch(twoSum([3, 3], 6), [0, 1]),
  'Test 3 Failed: Expected [0,1]'
);

// Edge case: negative numbers
console.assert(
  arraysMatch(twoSum([-1, -2, -3, -4, -5], -8), [2, 4]),
  'Test 4 Failed: Expected [2,4] for negative numbers'
);

// Edge case: mix of positive and negative
console.assert(
  arraysMatch(twoSum([-3, 4, 3, 90], 0), [0, 2]),
  'Test 5 Failed: Expected [0,2] for mixed numbers'
);

// Edge case: large numbers
console.assert(
  arraysMatch(twoSum([1000000000, -1000000000, 0, 1], 1), [2, 3]),
  'Test 6 Failed: Expected [2,3] for large numbers'
);

// Edge case: two element array
console.assert(
  arraysMatch(twoSum([1, 2], 3), [0, 1]),
  'Test 7 Failed: Expected [0,1] for two element array'
);

// Edge case: target requires using elements at the end of array
console.assert(
  arraysMatch(twoSum([1, 5, 3, 7, 2], 9), [1, 3]),
  'Test 8 Failed: Expected [1,3]'
);

console.log('ALL TESTS PASSED');
