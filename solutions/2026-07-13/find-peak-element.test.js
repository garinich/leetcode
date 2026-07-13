import { findPeakElement } from './find-peak-element.js';

// Helper to verify a valid peak index
function isPeak(nums, index) {
  const left = index === 0 ? -Infinity : nums[index - 1];
  const right = index === nums.length - 1 ? -Infinity : nums[index + 1];
  return nums[index] > left && nums[index] > right;
}

// Example 1: [1,2,3,1] => peak at index 2
const result1 = findPeakElement([1, 2, 3, 1]);
console.assert(isPeak([1, 2, 3, 1], result1), `Test 1 failed: got index ${result1}`);

// Example 2: [1,2,1,3,5,6,4] => peak at index 1 or 5
const result2 = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
console.assert(isPeak([1, 2, 1, 3, 5, 6, 4], result2), `Test 2 failed: got index ${result2}`);

// Single element: the only element is always a peak
const result3 = findPeakElement([1]);
console.assert(result3 === 0, `Test 3 failed: expected 0, got ${result3}`);

// Two elements ascending: peak is the last element
const result4 = findPeakElement([1, 2]);
console.assert(result4 === 1, `Test 4 failed: expected 1, got ${result4}`);

// Two elements descending: peak is the first element
const result5 = findPeakElement([2, 1]);
console.assert(result5 === 0, `Test 5 failed: expected 0, got ${result5}`);

// Strictly increasing array: peak is the last element
const result6 = findPeakElement([1, 2, 3, 4, 5]);
console.assert(result6 === 4, `Test 6 failed: expected 4, got ${result6}`);

// Strictly decreasing array: peak is the first element
const result7 = findPeakElement([5, 4, 3, 2, 1]);
console.assert(result7 === 0, `Test 7 failed: expected 0, got ${result7}`);

// Peak at beginning
const result8 = findPeakElement([5, 1, 2]);
console.assert(isPeak([5, 1, 2], result8), `Test 8 failed: got index ${result8}`);

// Peak at end
const result9 = findPeakElement([1, 2, 5]);
console.assert(isPeak([1, 2, 5], result9), `Test 9 failed: got index ${result9}`);

// Large negative values
const result10 = findPeakElement([-3, -2, -1, -4]);
console.assert(isPeak([-3, -2, -1, -4], result10), `Test 10 failed: got index ${result10}`);

console.log("ALL TESTS PASSED");
