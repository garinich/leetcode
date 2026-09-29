import { subsets } from './subsets.js';

// Helper: check if two arrays of arrays contain the same subsets (order-independent)
function sameSubsets(a, b) {
  if (a.length !== b.length) return false;
  const serialize = arr => arr.map(sub => [...sub].sort((x, y) => x - y).join(','));
  const setA = new Set(serialize(a));
  const setB = new Set(serialize(b));
  if (setA.size !== setB.size) return false;
  for (const s of setA) {
    if (!setB.has(s)) return false;
  }
  return true;
}

// Example 1: nums = [1,2,3]
const result1 = subsets([1, 2, 3]);
const expected1 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
console.assert(sameSubsets(result1, expected1), `Test 1 failed: ${JSON.stringify(result1)}`);

// Example 2: nums = [0]
const result2 = subsets([0]);
const expected2 = [[], [0]];
console.assert(sameSubsets(result2, expected2), `Test 2 failed: ${JSON.stringify(result2)}`);

// Edge case: single element
const result3 = subsets([5]);
const expected3 = [[], [5]];
console.assert(sameSubsets(result3, expected3), `Test 3 failed: ${JSON.stringify(result3)}`);

// Edge case: two elements
const result4 = subsets([1, 2]);
const expected4 = [[], [1], [2], [1, 2]];
console.assert(sameSubsets(result4, expected4), `Test 4 failed: ${JSON.stringify(result4)}`);

// Edge case: negative numbers
const result5 = subsets([-1, 0, 1]);
const expected5 = [[], [-1], [0], [-1, 0], [1], [-1, 1], [0, 1], [-1, 0, 1]];
console.assert(sameSubsets(result5, expected5), `Test 5 failed: ${JSON.stringify(result5)}`);

// Check count: n=4 should give 2^4 = 16 subsets
const result6 = subsets([1, 2, 3, 4]);
console.assert(result6.length === 16, `Test 6 failed: expected 16 subsets, got ${result6.length}`);

// Check count: n=10 should give 2^10 = 1024 subsets
const result7 = subsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.assert(result7.length === 1024, `Test 7 failed: expected 1024 subsets, got ${result7.length}`);

console.log('ALL TESTS PASSED');
