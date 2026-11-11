import { copyRandomList, buildList, listToArray } from './copy-list-with-random-pointer.js';

// Test helper: deep compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] !== b[i][0]) return false;
    if (a[i][1] !== b[i][1]) return false;
  }
  return true;
}

// Test helper: verify deep copy (no shared nodes)
function isDeepCopy(original, copy) {
  const originalNodes = new Set();
  let curr = original;
  while (curr) {
    originalNodes.add(curr);
    curr = curr.next;
  }

  curr = copy;
  while (curr) {
    if (originalNodes.has(curr)) return false; // copy points to original node
    if (curr.random && originalNodes.has(curr.random)) return false;
    curr = curr.next;
  }
  return true;
}

// Example 1: [[7,null],[13,0],[11,4],[10,2],[1,0]]
const input1 = [[7,null],[13,0],[11,4],[10,2],[1,0]];
const head1 = buildList(input1);
const result1 = copyRandomList(head1);
const arr1 = listToArray(result1);
console.assert(arraysEqual(arr1, input1), `Test 1 failed: ${JSON.stringify(arr1)}`);
console.assert(isDeepCopy(head1, result1), 'Test 1: not a deep copy');

// Example 2: [[1,1],[2,1]]
const input2 = [[1,1],[2,1]];
const head2 = buildList(input2);
const result2 = copyRandomList(head2);
const arr2 = listToArray(result2);
console.assert(arraysEqual(arr2, input2), `Test 2 failed: ${JSON.stringify(arr2)}`);
console.assert(isDeepCopy(head2, result2), 'Test 2: not a deep copy');

// Example 3: [[3,null],[3,0],[3,null]]
const input3 = [[3,null],[3,0],[3,null]];
const head3 = buildList(input3);
const result3 = copyRandomList(head3);
const arr3 = listToArray(result3);
console.assert(arraysEqual(arr3, input3), `Test 3 failed: ${JSON.stringify(arr3)}`);
console.assert(isDeepCopy(head3, result3), 'Test 3: not a deep copy');

// Edge case: empty list
const result4 = copyRandomList(null);
console.assert(result4 === null, 'Test 4 (empty list) failed');

// Edge case: single node with random pointing to itself
const input5 = [[5,0]];
const head5 = buildList(input5);
const result5 = copyRandomList(head5);
const arr5 = listToArray(result5);
console.assert(arraysEqual(arr5, input5), `Test 5 failed: ${JSON.stringify(arr5)}`);
console.assert(isDeepCopy(head5, result5), 'Test 5: not a deep copy');
// Verify random points to itself in copy
console.assert(result5.random === result5, 'Test 5: random should point to itself');

// Edge case: single node with no random
const input6 = [[42,null]];
const head6 = buildList(input6);
const result6 = copyRandomList(head6);
const arr6 = listToArray(result6);
console.assert(arraysEqual(arr6, input6), `Test 6 failed: ${JSON.stringify(arr6)}`);
console.assert(result6.random === null, 'Test 6: random should be null');
console.assert(result6 !== head6, 'Test 6: should be a new node');

// Edge case: all randoms pointing to null
const input7 = [[1,null],[2,null],[3,null]];
const head7 = buildList(input7);
const result7 = copyRandomList(head7);
const arr7 = listToArray(result7);
console.assert(arraysEqual(arr7, input7), `Test 7 failed: ${JSON.stringify(arr7)}`);
console.assert(isDeepCopy(head7, result7), 'Test 7: not a deep copy');

console.log('ALL TESTS PASSED');
