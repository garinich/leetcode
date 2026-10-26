import { removeElement } from './remove-element.js';

// Helper function to check result
function checkResult(nums, val, expectedK, expectedElements) {
  const k = removeElement(nums, val);
  // Check count matches
  console.assert(k === expectedK, `Expected k=${expectedK}, got k=${k}`);
  // Sort the first k elements and compare
  const result = nums.slice(0, k).sort((a, b) => a - b);
  const expected = expectedElements.slice().sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    console.assert(result[i] === expected[i], `Mismatch at index ${i}: expected ${expected[i]}, got ${result[i]}`);
  }
}

// Example 1: nums = [3,2,2,3], val = 3 => k=2, elements=[2,2]
checkResult([3, 2, 2, 3], 3, 2, [2, 2]);

// Example 2: nums = [0,1,2,2,3,0,4,2], val = 2 => k=5, elements=[0,1,3,0,4]
checkResult([0, 1, 2, 2, 3, 0, 4, 2], 2, 5, [0, 1, 3, 0, 4]);

// Edge case: empty array
checkResult([], 3, 0, []);

// Edge case: all elements equal to val
checkResult([2, 2, 2, 2], 2, 0, []);

// Edge case: no elements equal to val
checkResult([1, 3, 5, 7], 2, 4, [1, 3, 5, 7]);

// Edge case: single element equal to val
checkResult([5], 5, 0, []);

// Edge case: single element not equal to val
checkResult([5], 3, 1, [5]);

// Edge case: val at the beginning
checkResult([3, 1, 2, 4], 3, 3, [1, 2, 4]);

// Edge case: val at the end
checkResult([1, 2, 4, 3], 3, 3, [1, 2, 4]);

// Edge case: alternating val and non-val
checkResult([1, 2, 1, 2, 1, 2], 2, 3, [1, 1, 1]);

console.log("ALL TESTS PASSED");
