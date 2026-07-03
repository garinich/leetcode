import { removeDuplicates } from './remove-duplicates-from-sorted-array.js';

// Helper to check the first k elements of nums match expected
function checkResult(nums, expectedNums) {
  const k = removeDuplicates(nums);
  console.assert(k === expectedNums.length, `Expected k=${expectedNums.length}, got k=${k}`);
  for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i], `At index ${i}: expected ${expectedNums[i]}, got ${nums[i]}`);
  }
  return k;
}

// Example 1: [1,1,2] => k=2, nums=[1,2,...]
checkResult([1, 1, 2], [1, 2]);

// Example 2: [0,0,1,1,1,2,2,3,3,4] => k=5, nums=[0,1,2,3,4,...]
checkResult([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]);

// Edge case: single element
checkResult([1], [1]);

// Edge case: all same elements
checkResult([5, 5, 5, 5], [5]);

// Edge case: no duplicates
checkResult([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// Edge case: two elements, same
checkResult([3, 3], [3]);

// Edge case: two elements, different
checkResult([3, 4], [3, 4]);

// Edge case: negative numbers
checkResult([-3, -3, -1, 0, 0, 2], [-3, -1, 0, 2]);

// Edge case: larger sorted array with duplicates at end
checkResult([1, 1, 2, 3, 3, 4, 4, 4, 5, 5], [1, 2, 3, 4, 5]);

console.log('ALL TESTS PASSED');
