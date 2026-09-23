import { deleteDuplicates, buildList, listToArray } from './remove-duplicates-from-sorted-list.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [1,1,2] => [1,2]
const list1 = buildList([1, 1, 2]);
const result1 = listToArray(deleteDuplicates(list1));
console.assert(arraysEqual(result1, [1, 2]), `Expected [1,2], got ${result1}`);

// Example 2: [1,1,2,3,3] => [1,2,3]
const list2 = buildList([1, 1, 2, 3, 3]);
const result2 = listToArray(deleteDuplicates(list2));
console.assert(arraysEqual(result2, [1, 2, 3]), `Expected [1,2,3], got ${result2}`);

// Edge case: empty list
const list3 = buildList([]);
const result3 = listToArray(deleteDuplicates(list3));
console.assert(arraysEqual(result3, []), `Expected [], got ${result3}`);

// Edge case: single element
const list4 = buildList([5]);
const result4 = listToArray(deleteDuplicates(list4));
console.assert(arraysEqual(result4, [5]), `Expected [5], got ${result4}`);

// Edge case: all duplicates
const list5 = buildList([3, 3, 3, 3]);
const result5 = listToArray(deleteDuplicates(list5));
console.assert(arraysEqual(result5, [3]), `Expected [3], got ${result5}`);

// Edge case: no duplicates
const list6 = buildList([1, 2, 3, 4, 5]);
const result6 = listToArray(deleteDuplicates(list6));
console.assert(arraysEqual(result6, [1, 2, 3, 4, 5]), `Expected [1,2,3,4,5], got ${result6}`);

// Edge case: negative numbers with duplicates
const list7 = buildList([-3, -3, -1, 0, 0, 2]);
const result7 = listToArray(deleteDuplicates(list7));
console.assert(arraysEqual(result7, [-3, -1, 0, 2]), `Expected [-3,-1,0,2], got ${result7}`);

// Edge case: two elements, both same
const list8 = buildList([7, 7]);
const result8 = listToArray(deleteDuplicates(list8));
console.assert(arraysEqual(result8, [7]), `Expected [7], got ${result8}`);

// Edge case: two elements, different
const list9 = buildList([1, 2]);
const result9 = listToArray(deleteDuplicates(list9));
console.assert(arraysEqual(result9, [1, 2]), `Expected [1,2], got ${result9}`);

console.log("ALL TESTS PASSED");
