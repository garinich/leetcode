import { merge } from './merge-sorted-array.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: Basic merge
{
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  console.assert(
    arraysEqual(nums1, [1, 2, 2, 3, 5, 6]),
    `Test 1 failed: ${nums1}`
  );
}

// Example 2: nums2 is empty
{
  const nums1 = [1];
  merge(nums1, 1, [], 0);
  console.assert(
    arraysEqual(nums1, [1]),
    `Test 2 failed: ${nums1}`
  );
}

// Example 3: nums1 has no valid elements
{
  const nums1 = [0];
  merge(nums1, 0, [1], 1);
  console.assert(
    arraysEqual(nums1, [1]),
    `Test 3 failed: ${nums1}`
  );
}

// Edge case: both arrays empty
{
  const nums1 = [];
  merge(nums1, 0, [], 0);
  console.assert(
    arraysEqual(nums1, []),
    `Test 4 failed: ${nums1}`
  );
}

// Edge case: all nums2 elements are smaller
{
  const nums1 = [4, 5, 6, 0, 0, 0];
  merge(nums1, 3, [1, 2, 3], 3);
  console.assert(
    arraysEqual(nums1, [1, 2, 3, 4, 5, 6]),
    `Test 5 failed: ${nums1}`
  );
}

// Edge case: all nums1 elements are smaller
{
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [4, 5, 6], 3);
  console.assert(
    arraysEqual(nums1, [1, 2, 3, 4, 5, 6]),
    `Test 6 failed: ${nums1}`
  );
}

// Edge case: negative numbers
{
  const nums1 = [-5, -3, -1, 0, 0, 0];
  merge(nums1, 3, [-4, -2, 0], 3);
  console.assert(
    arraysEqual(nums1, [-5, -4, -3, -2, -1, 0]),
    `Test 7 failed: ${nums1}`
  );
}

// Edge case: duplicates
{
  const nums1 = [1, 1, 1, 0, 0, 0];
  merge(nums1, 3, [1, 1, 1], 3);
  console.assert(
    arraysEqual(nums1, [1, 1, 1, 1, 1, 1]),
    `Test 8 failed: ${nums1}`
  );
}

// Edge case: single elements that need swapping
{
  const nums1 = [2, 0];
  merge(nums1, 1, [1], 1);
  console.assert(
    arraysEqual(nums1, [1, 2]),
    `Test 9 failed: ${nums1}`
  );
}

// Edge case: large values
{
  const nums1 = [-1000000000, 0, 1000000000, 0, 0];
  merge(nums1, 3, [-500000000, 500000000], 2);
  console.assert(
    arraysEqual(nums1, [-1000000000, -500000000, 0, 500000000, 1000000000]),
    `Test 10 failed: ${nums1}`
  );
}

console.log('ALL TESTS PASSED');
