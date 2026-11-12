import { threeSum } from './3sum.js';

// Helper to sort and stringify triplets for comparison
function normalize(triplets) {
  return triplets
    .map(t => [...t].sort((a, b) => a - b).join(','))
    .sort()
    .join('|');
}

// Example 1: [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
const result1 = threeSum([-1, 0, 1, 2, -1, -4]);
console.assert(
  normalize(result1) === normalize([[-1, -1, 2], [-1, 0, 1]]),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2: [0,1,1] => []
const result2 = threeSum([0, 1, 1]);
console.assert(
  result2.length === 0,
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Example 3: [0,0,0] => [[0,0,0]]
const result3 = threeSum([0, 0, 0]);
console.assert(
  normalize(result3) === normalize([[0, 0, 0]]),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: all positive numbers
const result4 = threeSum([1, 2, 3, 4]);
console.assert(
  result4.length === 0,
  `Test 4 failed: ${JSON.stringify(result4)}`
);

// Edge case: all negative numbers
const result5 = threeSum([-1, -2, -3, -4]);
console.assert(
  result5.length === 0,
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: multiple valid triplets with duplicates
const result6 = threeSum([-2, 0, 0, 2, 2]);
console.assert(
  normalize(result6) === normalize([[-2, 0, 2]]),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: exactly 3 elements that sum to 0
const result7 = threeSum([-1, 0, 1]);
console.assert(
  normalize(result7) === normalize([[-1, 0, 1]]),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

// Edge case: exactly 3 elements that don't sum to 0
const result8 = threeSum([-1, 0, 2]);
console.assert(
  result8.length === 0,
  `Test 8 failed: ${JSON.stringify(result8)}`
);

// Edge case: larger array with multiple triplets
const result9 = threeSum([-4, -1, -1, 0, 1, 2]);
console.assert(
  normalize(result9) === normalize([[-1, -1, 2], [-1, 0, 1]]),
  `Test 9 failed: ${JSON.stringify(result9)}`
);

console.log('ALL TESTS PASSED');
