import { binaryTreePaths, buildTree, TreeNode } from './binary-tree-paths.js';

// Helper to compare two arrays regardless of order
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

// Example 1: [1,2,3,null,5] => ["1->2->5","1->3"]
const tree1 = buildTree([1, 2, 3, null, 5]);
const result1 = binaryTreePaths(tree1);
console.assert(
  arraysEqual(result1, ['1->2->5', '1->3']),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2: [1] => ["1"]
const tree2 = buildTree([1]);
const result2 = binaryTreePaths(tree2);
console.assert(
  arraysEqual(result2, ['1']),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Edge case: Tree with only left children
const tree3 = buildTree([1, 2, null, 3]);
const result3 = binaryTreePaths(tree3);
console.assert(
  arraysEqual(result3, ['1->2->3']),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: Tree with only right children
const tree4 = buildTree([1, null, 2, null, null, null, 3]);
const result4 = binaryTreePaths(tree4);
// Build manually for clarity
const root4 = new TreeNode(1);
root4.right = new TreeNode(2);
root4.right.right = new TreeNode(3);
const result4b = binaryTreePaths(root4);
console.assert(
  arraysEqual(result4b, ['1->2->3']),
  `Test 4 failed: ${JSON.stringify(result4b)}`
);

// Edge case: Complete binary tree
const tree5 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const result5 = binaryTreePaths(tree5);
console.assert(
  arraysEqual(result5, ['1->2->4', '1->2->5', '1->3->6', '1->3->7']),
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: Negative values
const root6 = new TreeNode(-1);
root6.left = new TreeNode(-2);
root6.right = new TreeNode(-3);
const result6 = binaryTreePaths(root6);
console.assert(
  arraysEqual(result6, ['-1->-2', '-1->-3']),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: Two nodes only
const root7 = new TreeNode(1);
root7.left = new TreeNode(2);
const result7 = binaryTreePaths(root7);
console.assert(
  arraysEqual(result7, ['1->2']),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

console.log('ALL TESTS PASSED');
