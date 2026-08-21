import { partition, arrayToList, listToArray } from './partition-list.js';

// Helper to run partition and return array result
function runPartition(arr, x) {
  const head = arrayToList(arr);
  const result = partition(head, x);
  return listToArray(result);
}

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: head = [1,4,3,2,5,2], x = 3 => [1,2,2,4,3,5]
console.assert(
  arraysEqual(runPartition([1, 4, 3, 2, 5, 2], 3), [1, 2, 2, 4, 3, 5]),
  'Test 1 failed: Expected [1,2,2,4,3,5]'
);

// Example 2: head = [2,1], x = 2 => [1,2]
console.assert(
  arraysEqual(runPartition([2, 1], 2), [1, 2]),
  'Test 2 failed: Expected [1,2]'
);

// Edge case: empty list
console.assert(
  arraysEqual(runPartition([], 3), []),
  'Test 3 failed: Expected []'
);

// Edge case: single node less than x
console.assert(
  arraysEqual(runPartition([1], 3), [1]),
  'Test 4 failed: Expected [1]'
);

// Edge case: single node greater than or equal to x
console.assert(
  arraysEqual(runPartition([5], 3), [5]),
  'Test 5 failed: Expected [5]'
);

// Edge case: all nodes less than x
console.assert(
  arraysEqual(runPartition([1, 2, 3], 5), [1, 2, 3]),
  'Test 6 failed: Expected [1,2,3]'
);

// Edge case: all nodes greater than or equal to x
console.assert(
  arraysEqual(runPartition([5, 6, 7], 3), [5, 6, 7]),
  'Test 7 failed: Expected [5,6,7]'
);

// Edge case: nodes equal to x go to greater partition
console.assert(
  arraysEqual(runPartition([3, 3, 3], 3), [3, 3, 3]),
  'Test 8 failed: Expected [3,3,3]'
);

// Edge case: mixed with negative values
console.assert(
  arraysEqual(runPartition([-1, 0, 3, -2, 5], 0), [-1, -2, 0, 3, 5]),
  'Test 9 failed: Expected [-1,-2,0,3,5]'
);

// Edge case: already partitioned
console.assert(
  arraysEqual(runPartition([1, 2, 4, 5], 3), [1, 2, 4, 5]),
  'Test 10 failed: Expected [1,2,4,5]'
);

// Edge case: x is very large, all nodes go to less partition
console.assert(
  arraysEqual(runPartition([1, 2, 3], 200), [1, 2, 3]),
  'Test 11 failed: Expected [1,2,3]'
);

// Edge case: x is very small, all nodes go to greater partition
console.assert(
  arraysEqual(runPartition([1, 2, 3], -200), [1, 2, 3]),
  'Test 12 failed: Expected [1,2,3]'
);

console.log('ALL TESTS PASSED');
