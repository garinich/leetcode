import { removeElements, buildList, listToArray } from './remove-linked-list-elements.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [1,2,6,3,4,5,6], val = 6 => [1,2,3,4,5]
const test1 = removeElements(buildList([1, 2, 6, 3, 4, 5, 6]), 6);
console.assert(
  arraysEqual(listToArray(test1), [1, 2, 3, 4, 5]),
  'Test 1 failed: ' + JSON.stringify(listToArray(test1))
);

// Example 2: [], val = 1 => []
const test2 = removeElements(buildList([]), 1);
console.assert(
  arraysEqual(listToArray(test2), []),
  'Test 2 failed: ' + JSON.stringify(listToArray(test2))
);

// Example 3: [7,7,7,7], val = 7 => []
const test3 = removeElements(buildList([7, 7, 7, 7]), 7);
console.assert(
  arraysEqual(listToArray(test3), []),
  'Test 3 failed: ' + JSON.stringify(listToArray(test3))
);

// Edge case: val not in list
const test4 = removeElements(buildList([1, 2, 3]), 5);
console.assert(
  arraysEqual(listToArray(test4), [1, 2, 3]),
  'Test 4 failed: ' + JSON.stringify(listToArray(test4))
);

// Edge case: single node matching
const test5 = removeElements(buildList([5]), 5);
console.assert(
  arraysEqual(listToArray(test5), []),
  'Test 5 failed: ' + JSON.stringify(listToArray(test5))
);

// Edge case: single node not matching
const test6 = removeElements(buildList([3]), 5);
console.assert(
  arraysEqual(listToArray(test6), [3]),
  'Test 6 failed: ' + JSON.stringify(listToArray(test6))
);

// Edge case: alternating matches
const test7 = removeElements(buildList([1, 2, 1, 2, 1]), 1);
console.assert(
  arraysEqual(listToArray(test7), [2, 2]),
  'Test 7 failed: ' + JSON.stringify(listToArray(test7))
);

// Edge case: head and tail are matching
const test8 = removeElements(buildList([6, 1, 2, 6]), 6);
console.assert(
  arraysEqual(listToArray(test8), [1, 2]),
  'Test 8 failed: ' + JSON.stringify(listToArray(test8))
);

// Edge case: all same but non-matching val
const test9 = removeElements(buildList([3, 3, 3]), 4);
console.assert(
  arraysEqual(listToArray(test9), [3, 3, 3]),
  'Test 9 failed: ' + JSON.stringify(listToArray(test9))
);

// Edge case: null head
const test10 = removeElements(null, 3);
console.assert(
  arraysEqual(listToArray(test10), []),
  'Test 10 failed: ' + JSON.stringify(listToArray(test10))
);

console.log('ALL TESTS PASSED');
