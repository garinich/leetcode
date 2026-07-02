import { containsNearbyDuplicate } from './contains-duplicate-ii.js';

// Example 1: nums = [1,2,3,1], k = 3 => true
console.assert(
  containsNearbyDuplicate([1, 2, 3, 1], 3) === true,
  'Test 1 failed'
);

// Example 2: nums = [1,0,1,1], k = 1 => true
console.assert(
  containsNearbyDuplicate([1, 0, 1, 1], 1) === true,
  'Test 2 failed'
);

// Example 3: nums = [1,2,3,1,2,3], k = 2 => false
console.assert(
  containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2) === false,
  'Test 3 failed'
);

// Edge case: single element
console.assert(
  containsNearbyDuplicate([1], 1) === false,
  'Test 4 failed: single element'
);

// Edge case: k = 0 (indices must be equal, impossible for distinct indices)
console.assert(
  containsNearbyDuplicate([1, 1], 0) === false,
  'Test 5 failed: k=0'
);

// Edge case: all same elements, k = 1
console.assert(
  containsNearbyDuplicate([1, 1, 1, 1], 1) === true,
  'Test 6 failed: all same, k=1'
);

// Edge case: duplicates exist but too far apart
console.assert(
  containsNearbyDuplicate([1, 2, 3, 4, 5, 1], 3) === false,
  'Test 7 failed: duplicates too far'
);

// Edge case: duplicates exactly at distance k
console.assert(
  containsNearbyDuplicate([1, 2, 3, 1], 3) === true,
  'Test 8 failed: duplicates at exact distance k'
);

// Edge case: large k covering full array
console.assert(
  containsNearbyDuplicate([1, 2, 3, 1], 100) === true,
  'Test 9 failed: large k'
);

// Edge case: no duplicates at all
console.assert(
  containsNearbyDuplicate([1, 2, 3, 4, 5], 3) === false,
  'Test 10 failed: no duplicates'
);

// Edge case: negative numbers
console.assert(
  containsNearbyDuplicate([-1, -2, -3, -1], 3) === true,
  'Test 11 failed: negative numbers'
);

console.log('ALL TESTS PASSED');
