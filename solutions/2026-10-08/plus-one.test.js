import { plusOne } from './plus-one.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [1,2,3] -> [1,2,4]
console.assert(
  arraysEqual(plusOne([1, 2, 3]), [1, 2, 4]),
  'Test 1 Failed: [1,2,3] should become [1,2,4]'
);

// Example 2: [4,3,2,1] -> [4,3,2,2]
console.assert(
  arraysEqual(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]),
  'Test 2 Failed: [4,3,2,1] should become [4,3,2,2]'
);

// Example 3: [9] -> [1,0]
console.assert(
  arraysEqual(plusOne([9]), [1, 0]),
  'Test 3 Failed: [9] should become [1,0]'
);

// Edge case: all nines [9,9,9] -> [1,0,0,0]
console.assert(
  arraysEqual(plusOne([9, 9, 9]), [1, 0, 0, 0]),
  'Test 4 Failed: [9,9,9] should become [1,0,0,0]'
);

// Edge case: single digit [0] -> [1]
console.assert(
  arraysEqual(plusOne([0]), [1]),
  'Test 5 Failed: [0] should become [1]'
);

// Edge case: carry in middle [1,9,9] -> [2,0,0]
console.assert(
  arraysEqual(plusOne([1, 9, 9]), [2, 0, 0]),
  'Test 6 Failed: [1,9,9] should become [2,0,0]'
);

// Edge case: large number [9,9,9,9,9,9,9,9,9,9] -> [1,0,0,0,0,0,0,0,0,0,0]
console.assert(
  arraysEqual(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
  'Test 7 Failed: ten 9s should become [1, followed by ten 0s]'
);

// Edge case: [1] -> [2]
console.assert(
  arraysEqual(plusOne([1]), [2]),
  'Test 8 Failed: [1] should become [2]'
);

console.log('ALL TESTS PASSED');
