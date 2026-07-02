import { threeSumClosest } from './3sum-closest.js';

// Example 1: [-1,2,1,-4], target = 1 => 2
console.assert(
  threeSumClosest([-1, 2, 1, -4], 1) === 2,
  'Test 1 failed: expected 2'
);

// Example 2: [0,0,0], target = 1 => 0
console.assert(
  threeSumClosest([0, 0, 0], 1) === 0,
  'Test 2 failed: expected 0'
);

// Edge case: exact match
console.assert(
  threeSumClosest([1, 1, 1, 0], 3) === 3,
  'Test 3 failed: expected 3'
);

// Edge case: negative target
console.assert(
  threeSumClosest([-1, -2, -3, -4], -6) === -6,
  'Test 4 failed: expected -6'
);

// Edge case: large spread
console.assert(
  threeSumClosest([1, 2, 3, 4, 5], 10) === 10,
  'Test 5 failed: expected 10'
);

// Edge case: minimum length array
console.assert(
  threeSumClosest([1, 2, 3], 10) === 6,
  'Test 6 failed: expected 6'
);

// Edge case: mixed negatives and positives
console.assert(
  threeSumClosest([-100, 0, 100], 0) === 0,
  'Test 7 failed: expected 0'
);

// Edge case: target far above max possible sum
console.assert(
  threeSumClosest([1, 1, 1], 100) === 3,
  'Test 8 failed: expected 3'
);

// Edge case: target far below min possible sum
console.assert(
  threeSumClosest([-1, -1, -1], -100) === -3,
  'Test 9 failed: expected -3'
);

console.log('ALL TESTS PASSED');
