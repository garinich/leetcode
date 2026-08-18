import { addTwoNumbers, arrayToList, listToArray } from './add-two-numbers.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function testAddTwoNumbers(arr1, arr2, expected) {
  const l1 = arrayToList(arr1);
  const l2 = arrayToList(arr2);
  const result = addTwoNumbers(l1, l2);
  const resultArr = listToArray(result);
  return arraysEqual(resultArr, expected);
}

// Example 1: 342 + 465 = 807
console.assert(
  testAddTwoNumbers([2, 4, 3], [5, 6, 4], [7, 0, 8]),
  'Test 1 Failed: [2,4,3] + [5,6,4] should be [7,0,8]'
);

// Example 2: 0 + 0 = 0
console.assert(
  testAddTwoNumbers([0], [0], [0]),
  'Test 2 Failed: [0] + [0] should be [0]'
);

// Example 3: 9999999 + 9999 = 10009998
console.assert(
  testAddTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]),
  'Test 3 Failed: [9,9,9,9,9,9,9] + [9,9,9,9] should be [8,9,9,9,0,0,0,1]'
);

// Edge case: single digit addition without carry
console.assert(
  testAddTwoNumbers([1], [2], [3]),
  'Test 4 Failed: [1] + [2] should be [3]'
);

// Edge case: single digit addition with carry
console.assert(
  testAddTwoNumbers([5], [5], [0, 1]),
  'Test 5 Failed: [5] + [5] should be [0,1]'
);

// Edge case: different length lists
console.assert(
  testAddTwoNumbers([1, 8], [0], [1, 8]),
  'Test 6 Failed: [1,8] + [0] should be [1,8]'
);

// Edge case: carry propagation through entire number
console.assert(
  testAddTwoNumbers([9, 9], [1], [0, 0, 1]),
  'Test 7 Failed: [9,9] + [1] should be [0,0,1]'
);

// Edge case: large numbers with carry at end
console.assert(
  testAddTwoNumbers([9], [9, 9], [8, 0, 1]),
  'Test 8 Failed: [9] + [9,9] should be [8,0,1]'
);

// Edge case: l1 longer than l2
console.assert(
  testAddTwoNumbers([1, 2, 3, 4], [5, 6], [6, 8, 3, 4]),
  'Test 9 Failed: [1,2,3,4] + [5,6] should be [6,8,3,4]'
);

console.log('ALL TESTS PASSED');
