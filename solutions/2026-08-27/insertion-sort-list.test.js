import { insertionSortList, buildList, listToArray } from './insertion-sort-list.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [4,2,1,3] -> [1,2,3,4]
{
  const head = buildList([4, 2, 1, 3]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [1, 2, 3, 4]),
    `Example 1 failed: got ${JSON.stringify(result)}`
  );
}

// Example 2: [-1,5,3,4,0] -> [-1,0,3,4,5]
{
  const head = buildList([-1, 5, 3, 4, 0]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [-1, 0, 3, 4, 5]),
    `Example 2 failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Single element
{
  const head = buildList([42]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [42]),
    `Single element failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Already sorted
{
  const head = buildList([1, 2, 3, 4, 5]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [1, 2, 3, 4, 5]),
    `Already sorted failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Reverse sorted
{
  const head = buildList([5, 4, 3, 2, 1]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [1, 2, 3, 4, 5]),
    `Reverse sorted failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Duplicates
{
  const head = buildList([3, 1, 2, 3, 1]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [1, 1, 2, 3, 3]),
    `Duplicates failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: All same values
{
  const head = buildList([2, 2, 2, 2]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [2, 2, 2, 2]),
    `All same values failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Negative numbers
{
  const head = buildList([-3, -1, -4, -1, -5]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [-5, -4, -3, -1, -1]),
    `Negative numbers failed: got ${JSON.stringify(result)}`
  );
}

// Edge case: Mix of min/max boundary values
{
  const head = buildList([5000, -5000, 0, 2500, -2500]);
  const sorted = insertionSortList(head);
  const result = listToArray(sorted);
  console.assert(
    arraysEqual(result, [-5000, -2500, 0, 2500, 5000]),
    `Boundary values failed: got ${JSON.stringify(result)}`
  );
}

console.log('ALL TESTS PASSED');
