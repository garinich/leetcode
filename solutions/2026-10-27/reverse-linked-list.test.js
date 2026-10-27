import { reverseList, reverseListRecursive, buildList, listToArray } from './reverse-linked-list.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// ===== ITERATIVE TESTS =====

// Example 1: [1,2,3,4,5] => [5,4,3,2,1]
console.assert(
  arraysEqual(listToArray(reverseList(buildList([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]),
  'Iterative: [1,2,3,4,5] should reverse to [5,4,3,2,1]'
);

// Example 2: [1,2] => [2,1]
console.assert(
  arraysEqual(listToArray(reverseList(buildList([1, 2]))), [2, 1]),
  'Iterative: [1,2] should reverse to [2,1]'
);

// Example 3: [] => []
console.assert(
  arraysEqual(listToArray(reverseList(buildList([]))), []),
  'Iterative: [] should reverse to []'
);

// Edge case: single element
console.assert(
  arraysEqual(listToArray(reverseList(buildList([42]))), [42]),
  'Iterative: [42] should reverse to [42]'
);

// Edge case: negative values
console.assert(
  arraysEqual(listToArray(reverseList(buildList([-1, -2, -3]))), [-3, -2, -1]),
  'Iterative: [-1,-2,-3] should reverse to [-3,-2,-1]'
);

// Edge case: all same values
console.assert(
  arraysEqual(listToArray(reverseList(buildList([1, 1, 1]))), [1, 1, 1]),
  'Iterative: [1,1,1] should reverse to [1,1,1]'
);

// ===== RECURSIVE TESTS =====

// Example 1: [1,2,3,4,5] => [5,4,3,2,1]
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]),
  'Recursive: [1,2,3,4,5] should reverse to [5,4,3,2,1]'
);

// Example 2: [1,2] => [2,1]
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([1, 2]))), [2, 1]),
  'Recursive: [1,2] should reverse to [2,1]'
);

// Example 3: [] => []
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([]))), []),
  'Recursive: [] should reverse to []'
);

// Edge case: single element
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([42]))), [42]),
  'Recursive: [42] should reverse to [42]'
);

// Edge case: negative values
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([-5, 0, 5]))), [5, 0, -5]),
  'Recursive: [-5,0,5] should reverse to [5,0,-5]'
);

// Edge case: two elements
console.assert(
  arraysEqual(listToArray(reverseListRecursive(buildList([100, 200]))), [200, 100]),
  'Recursive: [100,200] should reverse to [200,100]'
);

console.log('ALL TESTS PASSED');
