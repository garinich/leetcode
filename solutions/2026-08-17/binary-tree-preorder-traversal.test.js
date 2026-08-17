import { preorderTraversal, buildTree } from './binary-tree-preorder-traversal.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: root = [1,null,2,3] => [1,2,3]
const tree1 = buildTree([1, null, 2, 3]);
console.assert(
  arraysEqual(preorderTraversal(tree1), [1, 2, 3]),
  'Test 1 failed: Expected [1,2,3]'
);

// Example 2: root = [1,2,3,4,5,null,8,null,null,6,7,9] => [1,2,4,5,6,7,3,8,9]
const tree2 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.assert(
  arraysEqual(preorderTraversal(tree2), [1, 2, 4, 5, 6, 7, 3, 8, 9]),
  'Test 2 failed: Expected [1,2,4,5,6,7,3,8,9]'
);

// Example 3: root = [] => []
const tree3 = buildTree([]);
console.assert(
  arraysEqual(preorderTraversal(tree3), []),
  'Test 3 failed: Expected []'
);

// Example 4: root = [1] => [1]
const tree4 = buildTree([1]);
console.assert(
  arraysEqual(preorderTraversal(tree4), [1]),
  'Test 4 failed: Expected [1]'
);

// Edge case: null root
console.assert(
  arraysEqual(preorderTraversal(null), []),
  'Test 5 failed: Expected [] for null root'
);

// Edge case: left-skewed tree [1,2,3] where all nodes go left
// buildTree([1,2,null,3]) => 1 -> left: 2 -> left: 3
const tree6 = buildTree([1, 2, null, 3]);
console.assert(
  arraysEqual(preorderTraversal(tree6), [1, 2, 3]),
  'Test 6 failed: Expected [1,2,3] for left-skewed tree'
);

// Edge case: right-skewed tree
// buildTree([1,null,2,null,3]) => 1 -> right: 2 -> right: 3
const tree7 = buildTree([1, null, 2, null, 3]);
console.assert(
  arraysEqual(preorderTraversal(tree7), [1, 2, 3]),
  'Test 7 failed: Expected [1,2,3] for right-skewed tree'
);

// Edge case: negative values
const tree8 = buildTree([-1, -2, -3]);
console.assert(
  arraysEqual(preorderTraversal(tree8), [-1, -2, -3]),
  'Test 8 failed: Expected [-1,-2,-3]'
);

// Edge case: single path [5,3,null,1,null]
const tree9 = buildTree([5, 3, null, 1]);
console.assert(
  arraysEqual(preorderTraversal(tree9), [5, 3, 1]),
  'Test 9 failed: Expected [5,3,1]'
);

console.log('ALL TESTS PASSED');
