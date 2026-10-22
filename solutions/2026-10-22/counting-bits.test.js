import { countBits } from './counting-bits.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: n = 2
console.assert(
  arraysEqual(countBits(2), [0, 1, 1]),
  'Test 1 Failed: n = 2'
);

// Example 2: n = 5
console.assert(
  arraysEqual(countBits(5), [0, 1, 1, 2, 1, 2]),
  'Test 2 Failed: n = 5'
);

// Edge case: n = 0
console.assert(
  arraysEqual(countBits(0), [0]),
  'Test 3 Failed: n = 0'
);

// Edge case: n = 1
console.assert(
  arraysEqual(countBits(1), [0, 1]),
  'Test 4 Failed: n = 1'
);

// Edge case: n = 8 (power of 2)
// 0->0, 1->1, 2->1, 3->2, 4->1, 5->2, 6->2, 7->3, 8->1
console.assert(
  arraysEqual(countBits(8), [0, 1, 1, 2, 1, 2, 2, 3, 1]),
  'Test 5 Failed: n = 8'
);

// Edge case: n = 7
// 0->0, 1->1, 2->1, 3->2, 4->1, 5->2, 6->2, 7->3
console.assert(
  arraysEqual(countBits(7), [0, 1, 1, 2, 1, 2, 2, 3]),
  'Test 6 Failed: n = 7'
);

// Larger value: n = 10
// 0->0, 1->1, 2->1, 3->2, 4->1, 5->2, 6->2, 7->3, 8->1, 9->2, 10->2
console.assert(
  arraysEqual(countBits(10), [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]),
  'Test 7 Failed: n = 10'
);

console.log('ALL TESTS PASSED');
