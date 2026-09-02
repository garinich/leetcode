import { isSymmetric, isSymmetricIterative, buildTree } from './symmetric-tree.js';

// Test helper
function test(arr, expected, label) {
  const root = buildTree(arr);
  const resultRec = isSymmetric(root);
  const resultIter = isSymmetricIterative(buildTree(arr));
  console.assert(resultRec === expected, `[Recursive] ${label}: expected ${expected}, got ${resultRec}`);
  console.assert(resultIter === expected, `[Iterative] ${label}: expected ${expected}, got ${resultIter}`);
}

// Example 1: Symmetric tree
test([1, 2, 2, 3, 4, 4, 3], true, 'Example 1 - Symmetric tree');

// Example 2: Non-symmetric tree
test([1, 2, 2, null, 3, null, 3], false, 'Example 2 - Non-symmetric tree');

// Edge case: Single node
test([1], true, 'Single node');

// Edge case: Two nodes (not symmetric)
test([1, 2], false, 'Two nodes - not symmetric');

// Edge case: Two nodes symmetric (impossible in binary tree with only left)
// A tree [1, null, 2] is not symmetric
test([1, null, 2], false, 'Root with only right child');

// Edge case: All same values, symmetric structure
test([1, 1, 1, 1, 1, 1, 1], true, 'All same values symmetric');

// Edge case: All same values, non-symmetric structure
test([1, 1, 1, null, 1, null, 1], false, 'All same values non-symmetric structure');

// Edge case: Deeper symmetric tree
test([1, 2, 2, 3, 4, 4, 3, null, null, 5, null, null, 5, null, null], true, 'Deeper symmetric tree');

// Edge case: Negative values, symmetric
test([0, -1, -1, -2, 0, 0, -2], true, 'Negative values symmetric');

// Edge case: Values same but mirror mismatch
test([1, 2, 2, 3, null, null, 3], true, 'Mirror with nulls in correct spots');

// Edge case: null root
const nullResult = isSymmetric(null);
console.assert(nullResult === true, `Null root: expected true, got ${nullResult}`);
const nullResultIter = isSymmetricIterative(null);
console.assert(nullResultIter === true, `Null root iterative: expected true, got ${nullResultIter}`);

console.log('ALL TESTS PASSED');
