import { insert } from './insert-interval.js';

// Helper to compare arrays deeply
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

// Example 1: newInterval overlaps with first interval
console.assert(
  arraysEqual(insert([[1,3],[6,9]], [2,5]), [[1,5],[6,9]]),
  'Test 1 Failed: Expected [[1,5],[6,9]]'
);

// Example 2: newInterval overlaps with multiple intervals
console.assert(
  arraysEqual(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]), [[1,2],[3,10],[12,16]]),
  'Test 2 Failed: Expected [[1,2],[3,10],[12,16]]'
);

// Edge case: empty intervals array
console.assert(
  arraysEqual(insert([], [2,5]), [[2,5]]),
  'Test 3 Failed: Expected [[2,5]]'
);

// Edge case: newInterval before all intervals
console.assert(
  arraysEqual(insert([[3,5],[6,9]], [1,2]), [[1,2],[3,5],[6,9]]),
  'Test 4 Failed: Expected [[1,2],[3,5],[6,9]]'
);

// Edge case: newInterval after all intervals
console.assert(
  arraysEqual(insert([[1,3],[6,9]], [10,15]), [[1,3],[6,9],[10,15]]),
  'Test 5 Failed: Expected [[1,3],[6,9],[10,15]]'
);

// Edge case: newInterval covers all intervals
console.assert(
  arraysEqual(insert([[1,2],[3,5],[6,7],[8,10]], [0,15]), [[0,15]]),
  'Test 6 Failed: Expected [[0,15]]'
);

// Edge case: newInterval matches existing interval exactly
console.assert(
  arraysEqual(insert([[1,3],[6,9]], [6,9]), [[1,3],[6,9]]),
  'Test 7 Failed: Expected [[1,3],[6,9]]'
);

// Edge case: single interval array, no overlap
console.assert(
  arraysEqual(insert([[5,7]], [1,3]), [[1,3],[5,7]]),
  'Test 8 Failed: Expected [[1,3],[5,7]]'
);

// Edge case: single interval array, with overlap
console.assert(
  arraysEqual(insert([[1,5]], [2,3]), [[1,5]]),
  'Test 9 Failed: Expected [[1,5]]'
);

// Edge case: adjacent intervals (touching at a point) - they overlap
console.assert(
  arraysEqual(insert([[1,3],[6,9]], [3,6]), [[1,9]]),
  'Test 10 Failed: Expected [[1,9]] - touching intervals should merge'
);

// Edge case: newInterval with same start as existing
console.assert(
  arraysEqual(insert([[1,5],[10,15]], [1,3]), [[1,5],[10,15]]),
  'Test 11 Failed: Expected [[1,5],[10,15]]'
);

console.log("ALL TESTS PASSED");
