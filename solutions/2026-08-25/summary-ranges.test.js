import { summaryRanges } from './summary-ranges.js';

// Helper to compare arrays of strings
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1
console.assert(
  arraysEqual(summaryRanges([0, 1, 2, 4, 5, 7]), ['0->2', '4->5', '7']),
  'Test 1 failed'
);

// Example 2
console.assert(
  arraysEqual(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ['0', '2->4', '6', '8->9']),
  'Test 2 failed'
);

// Edge case: empty array
console.assert(
  arraysEqual(summaryRanges([]), []),
  'Test 3 failed: empty array'
);

// Edge case: single element
console.assert(
  arraysEqual(summaryRanges([5]), ['5']),
  'Test 4 failed: single element'
);

// Edge case: all consecutive
console.assert(
  arraysEqual(summaryRanges([1, 2, 3, 4, 5]), ['1->5']),
  'Test 5 failed: all consecutive'
);

// Edge case: no consecutive
console.assert(
  arraysEqual(summaryRanges([1, 3, 5, 7]), ['1', '3', '5', '7']),
  'Test 6 failed: no consecutive'
);

// Edge case: negative numbers
console.assert(
  arraysEqual(summaryRanges([-3, -2, -1, 0, 1]), ['-3->1']),
  'Test 7 failed: negative numbers'
);

// Edge case: mix of negative and positive
console.assert(
  arraysEqual(summaryRanges([-5, -3, -2, 0, 1, 2, 4]), ['-5', '-3->-2', '0->2', '4']),
  'Test 8 failed: mix negative and positive'
);

// Edge case: large boundary values
console.assert(
  arraysEqual(summaryRanges([-2147483648, 2147483647]), ['-2147483648', '2147483647']),
  'Test 9 failed: large boundary values'
);

console.log('ALL TESTS PASSED');
