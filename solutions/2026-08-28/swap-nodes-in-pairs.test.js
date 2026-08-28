import { swapPairs, arrayToList, listToArray } from './swap-nodes-in-pairs.js';

// Helper to compare result list with expected array
function assertListEquals(head, expected, testName) {
  const result = listToArray(head);
  const pass =
    result.length === expected.length &&
    result.every((val, idx) => val === expected[idx]);
  console.assert(pass, `FAILED: ${testName} | Expected [${expected}] but got [${result}]`);
}

// Example 1: [1,2,3,4] -> [2,1,4,3]
assertListEquals(
  swapPairs(arrayToList([1, 2, 3, 4])),
  [2, 1, 4, 3],
  'Example 1: [1,2,3,4]'
);

// Example 2: [] -> []
assertListEquals(
  swapPairs(arrayToList([])),
  [],
  'Example 2: []'
);

// Example 3: [1] -> [1]
assertListEquals(
  swapPairs(arrayToList([1])),
  [1],
  'Example 3: [1]'
);

// Example 4: [1,2,3] -> [2,1,3]
assertListEquals(
  swapPairs(arrayToList([1, 2, 3])),
  [2, 1, 3],
  'Example 4: [1,2,3]'
);

// Edge case: null input
assertListEquals(
  swapPairs(null),
  [],
  'Edge case: null input'
);

// Edge case: two nodes [1,2] -> [2,1]
assertListEquals(
  swapPairs(arrayToList([1, 2])),
  [2, 1],
  'Edge case: [1,2]'
);

// Edge case: five nodes [1,2,3,4,5] -> [2,1,4,3,5]
assertListEquals(
  swapPairs(arrayToList([1, 2, 3, 4, 5])),
  [2, 1, 4, 3, 5],
  'Edge case: [1,2,3,4,5]'
);

// Edge case: six nodes [1,2,3,4,5,6] -> [2,1,4,3,6,5]
assertListEquals(
  swapPairs(arrayToList([1, 2, 3, 4, 5, 6])),
  [2, 1, 4, 3, 6, 5],
  'Edge case: [1,2,3,4,5,6]'
);

// Edge case: same values [0,0,0,0] -> [0,0,0,0]
assertListEquals(
  swapPairs(arrayToList([0, 0, 0, 0])),
  [0, 0, 0, 0],
  'Edge case: [0,0,0,0]'
);

console.log('ALL TESTS PASSED');
