import { mergeTwoLists, buildList, listToArray } from './merge-two-sorted-lists.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: list1 = [1,2,4], list2 = [1,3,4] => [1,1,2,3,4,4]
const list1a = buildList([1, 2, 4]);
const list2a = buildList([1, 3, 4]);
const result1 = listToArray(mergeTwoLists(list1a, list2a));
console.assert(
  arraysEqual(result1, [1, 1, 2, 3, 4, 4]),
  `Test 1 failed: expected [1,1,2,3,4,4] but got ${JSON.stringify(result1)}`
);

// Example 2: list1 = [], list2 = [] => []
const list1b = buildList([]);
const list2b = buildList([]);
const result2 = listToArray(mergeTwoLists(list1b, list2b));
console.assert(
  arraysEqual(result2, []),
  `Test 2 failed: expected [] but got ${JSON.stringify(result2)}`
);

// Example 3: list1 = [], list2 = [0] => [0]
const list1c = buildList([]);
const list2c = buildList([0]);
const result3 = listToArray(mergeTwoLists(list1c, list2c));
console.assert(
  arraysEqual(result3, [0]),
  `Test 3 failed: expected [0] but got ${JSON.stringify(result3)}`
);

// Edge case: list1 has all smaller elements
const list1d = buildList([1, 2, 3]);
const list2d = buildList([4, 5, 6]);
const result4 = listToArray(mergeTwoLists(list1d, list2d));
console.assert(
  arraysEqual(result4, [1, 2, 3, 4, 5, 6]),
  `Test 4 failed: expected [1,2,3,4,5,6] but got ${JSON.stringify(result4)}`
);

// Edge case: list2 has all smaller elements
const list1e = buildList([4, 5, 6]);
const list2e = buildList([1, 2, 3]);
const result5 = listToArray(mergeTwoLists(list1e, list2e));
console.assert(
  arraysEqual(result5, [1, 2, 3, 4, 5, 6]),
  `Test 5 failed: expected [1,2,3,4,5,6] but got ${JSON.stringify(result5)}`
);

// Edge case: lists with single elements
const list1f = buildList([1]);
const list2f = buildList([2]);
const result6 = listToArray(mergeTwoLists(list1f, list2f));
console.assert(
  arraysEqual(result6, [1, 2]),
  `Test 6 failed: expected [1,2] but got ${JSON.stringify(result6)}`
);

// Edge case: lists with negative values
const list1g = buildList([-3, -1, 2]);
const list2g = buildList([-2, 0, 3]);
const result7 = listToArray(mergeTwoLists(list1g, list2g));
console.assert(
  arraysEqual(result7, [-3, -2, -1, 0, 2, 3]),
  `Test 7 failed: expected [-3,-2,-1,0,2,3] but got ${JSON.stringify(result7)}`
);

// Edge case: lists with duplicate values
const list1h = buildList([1, 1, 1]);
const list2h = buildList([1, 1, 1]);
const result8 = listToArray(mergeTwoLists(list1h, list2h));
console.assert(
  arraysEqual(result8, [1, 1, 1, 1, 1, 1]),
  `Test 8 failed: expected [1,1,1,1,1,1] but got ${JSON.stringify(result8)}`
);

// Edge case: one list is null
const list1i = null;
const list2i = buildList([1, 2, 3]);
const result9 = listToArray(mergeTwoLists(list1i, list2i));
console.assert(
  arraysEqual(result9, [1, 2, 3]),
  `Test 9 failed: expected [1,2,3] but got ${JSON.stringify(result9)}`
);

console.log('ALL TESTS PASSED');
