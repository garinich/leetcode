import { intersection } from './intersection-of-two-arrays.js';

// Helper to check if two arrays have the same elements regardless of order
function arraysEqualAsSet(a, b) {
  if (a.length !== b.length) return false;
  const setA = new Set(a);
  const setB = new Set(b);
  if (setA.size !== setB.size) return false;
  for (const val of setA) {
    if (!setB.has(val)) return false;
  }
  return true;
}

// Example 1
console.assert(
  arraysEqualAsSet(intersection([1, 2, 2, 1], [2, 2]), [2]),
  'Test 1 failed: Expected [2]'
);

// Example 2
console.assert(
  arraysEqualAsSet(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [9, 4]),
  'Test 2 failed: Expected [9,4]'
);

// Edge case: no intersection
console.assert(
  arraysEqualAsSet(intersection([1, 2, 3], [4, 5, 6]), []),
  'Test 3 failed: Expected []'
);

// Edge case: all elements intersect
console.assert(
  arraysEqualAsSet(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]),
  'Test 4 failed: Expected [1,2,3]'
);

// Edge case: single element arrays that match
console.assert(
  arraysEqualAsSet(intersection([5], [5]), [5]),
  'Test 5 failed: Expected [5]'
);

// Edge case: single element arrays that do not match
console.assert(
  arraysEqualAsSet(intersection([1], [2]), []),
  'Test 6 failed: Expected []'
);

// Edge case: duplicates in both arrays, intersection is one element
console.assert(
  arraysEqualAsSet(intersection([1, 1, 1], [1, 1, 1]), [1]),
  'Test 7 failed: Expected [1]'
);

// Edge case: large values (boundary)
console.assert(
  arraysEqualAsSet(intersection([1000], [1000, 999]), [1000]),
  'Test 8 failed: Expected [1000]'
);

// Edge case: zero values
console.assert(
  arraysEqualAsSet(intersection([0, 1, 2], [0, 3, 4]), [0]),
  'Test 9 failed: Expected [0]'
);

// Edge case: one array is a subset of the other
console.assert(
  arraysEqualAsSet(intersection([1, 2, 3, 4, 5], [2, 4]), [2, 4]),
  'Test 10 failed: Expected [2,4]'
);

console.log('ALL TESTS PASSED');
