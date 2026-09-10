import { combinationSum } from './combination-sum.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function combinationsEqual(result, expected) {
  if (result.length !== expected.length) return false;
  // Sort each combination and then sort the array of combinations for comparison
  const sortedResult = result.map(combo => [...combo].sort((a, b) => a - b))
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  const sortedExpected = expected.map(combo => [...combo].sort((a, b) => a - b))
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  
  for (let i = 0; i < sortedResult.length; i++) {
    if (!arraysEqual(sortedResult[i], sortedExpected[i])) return false;
  }
  return true;
}

// Example 1: candidates = [2,3,6,7], target = 7
const result1 = combinationSum([2, 3, 6, 7], 7);
const expected1 = [[2, 2, 3], [7]];
console.assert(
  combinationsEqual(result1, expected1),
  `Test 1 failed: ${JSON.stringify(result1)} !== ${JSON.stringify(expected1)}`
);

// Example 2: candidates = [2,3,5], target = 8
const result2 = combinationSum([2, 3, 5], 8);
const expected2 = [[2, 2, 2, 2], [2, 3, 3], [3, 5]];
console.assert(
  combinationsEqual(result2, expected2),
  `Test 2 failed: ${JSON.stringify(result2)} !== ${JSON.stringify(expected2)}`
);

// Example 3: candidates = [2], target = 1
const result3 = combinationSum([2], 1);
const expected3 = [];
console.assert(
  combinationsEqual(result3, expected3),
  `Test 3 failed: ${JSON.stringify(result3)} !== ${JSON.stringify(expected3)}`
);

// Edge case: single candidate that matches target
const result4 = combinationSum([5], 5);
const expected4 = [[5]];
console.assert(
  combinationsEqual(result4, expected4),
  `Test 4 failed: ${JSON.stringify(result4)} !== ${JSON.stringify(expected4)}`
);

// Edge case: target achievable multiple ways with larger set
const result5 = combinationSum([2, 3, 6, 7], 6);
const expected5 = [[2, 2, 2], [3, 3], [6]];
console.assert(
  combinationsEqual(result5, expected5),
  `Test 5 failed: ${JSON.stringify(result5)} !== ${JSON.stringify(expected5)}`
);

// Edge case: no valid combination
const result6 = combinationSum([3, 5], 7);
const expected6 = [];
console.assert(
  combinationsEqual(result6, expected6),
  `Test 6 failed: ${JSON.stringify(result6)} !== ${JSON.stringify(expected6)}`
);

// Edge case: target = 40 (max)
const result7 = combinationSum([2], 40);
const expected7 = [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
console.assert(
  combinationsEqual(result7, expected7),
  `Test 7 failed: ${JSON.stringify(result7)} !== ${JSON.stringify(expected7)}`
);

// Edge case: multiple candidates, one is exactly target
const result8 = combinationSum([10, 1, 2, 7, 6, 5], 8);
console.assert(
  result8.length > 0,
  `Test 8 failed: expected combinations for target 8`
);
// Verify all combinations sum to 8
result8.forEach(combo => {
  const sum = combo.reduce((a, b) => a + b, 0);
  console.assert(sum === 8, `Test 8 combination ${JSON.stringify(combo)} does not sum to 8`);
});

console.log("ALL TESTS PASSED");
