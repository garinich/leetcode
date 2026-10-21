import { removeDuplicates } from './remove-duplicates-from-sorted-array-ii.js';

// Helper to compare array prefixes
function arraysEqual(arr, expected, length) {
  if (length !== expected.length) return false;
  for (let i = 0; i < length; i++) {
    if (arr[i] !== expected[i]) return false;
  }
  return true;
}

// Example 1: [1,1,1,2,2,3] -> k=5, [1,1,2,2,3]
{
  const nums = [1, 1, 1, 2, 2, 3];
  const k = removeDuplicates(nums);
  console.assert(k === 5, `Example 1: Expected k=5, got k=${k}`);
  console.assert(
    arraysEqual(nums, [1, 1, 2, 2, 3], k),
    `Example 1: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Example 2: [0,0,1,1,1,1,2,3,3] -> k=7, [0,0,1,1,2,3,3]
{
  const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  const k = removeDuplicates(nums);
  console.assert(k === 7, `Example 2: Expected k=7, got k=${k}`);
  console.assert(
    arraysEqual(nums, [0, 0, 1, 1, 2, 3, 3], k),
    `Example 2: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: single element
{
  const nums = [1];
  const k = removeDuplicates(nums);
  console.assert(k === 1, `Single element: Expected k=1, got k=${k}`);
  console.assert(
    arraysEqual(nums, [1], k),
    `Single element: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: two same elements
{
  const nums = [1, 1];
  const k = removeDuplicates(nums);
  console.assert(k === 2, `Two same: Expected k=2, got k=${k}`);
  console.assert(
    arraysEqual(nums, [1, 1], k),
    `Two same: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: all same elements
{
  const nums = [5, 5, 5, 5, 5];
  const k = removeDuplicates(nums);
  console.assert(k === 2, `All same: Expected k=2, got k=${k}`);
  console.assert(
    arraysEqual(nums, [5, 5], k),
    `All same: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: all unique elements
{
  const nums = [1, 2, 3, 4, 5];
  const k = removeDuplicates(nums);
  console.assert(k === 5, `All unique: Expected k=5, got k=${k}`);
  console.assert(
    arraysEqual(nums, [1, 2, 3, 4, 5], k),
    `All unique: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: negative numbers
{
  const nums = [-3, -3, -3, -1, -1, 0, 0, 0, 2];
  const k = removeDuplicates(nums);
  console.assert(k === 7, `Negative numbers: Expected k=7, got k=${k}`);
  console.assert(
    arraysEqual(nums, [-3, -3, -1, -1, 0, 0, 2], k),
    `Negative numbers: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

// Edge case: two elements, different
{
  const nums = [1, 2];
  const k = removeDuplicates(nums);
  console.assert(k === 2, `Two different: Expected k=2, got k=${k}`);
  console.assert(
    arraysEqual(nums, [1, 2], k),
    `Two different: Array mismatch. Got ${nums.slice(0, k)}`
  );
}

console.log('ALL TESTS PASSED');
