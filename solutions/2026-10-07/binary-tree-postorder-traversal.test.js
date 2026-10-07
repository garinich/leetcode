import { postorderTraversal, buildTree } from './binary-tree-postorder-traversal.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, idx) => val === b[idx]);
}

// Example 1: [1,null,2,3] -> [3,2,1]
const tree1 = buildTree([1, null, 2, 3]);
const result1 = postorderTraversal(tree1);
console.assert(
  arraysEqual(result1, [3, 2, 1]),
  `Test 1 failed: expected [3,2,1], got [${result1}]`
);

// Example 2: [1,2,3,4,5,null,8,null,null,6,7,9] -> [4,6,7,5,2,9,8,3,1]
const tree2 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
const result2 = postorderTraversal(tree2);
console.assert(
  arraysEqual(result2, [4, 6, 7, 5, 2, 9, 8, 3, 1]),
  `Test 2 failed: expected [4,6,7,5,2,9,8,3,1], got [${result2}]`
);

// Example 3: [] -> []
const tree3 = buildTree([]);
const result3 = postorderTraversal(tree3);
console.assert(
  arraysEqual(result3, []),
  `Test 3 failed: expected [], got [${result3}]`
);

// Example 4: [1] -> [1]
const tree4 = buildTree([1]);
const result4 = postorderTraversal(tree4);
console.assert(
  arraysEqual(result4, [1]),
  `Test 4 failed: expected [1], got [${result4}]`
);

// Edge case: null root
const result5 = postorderTraversal(null);
console.assert(
  arraysEqual(result5, []),
  `Test 5 (null root) failed: expected [], got [${result5}]`
);

// Edge case: left-skewed tree [1,2,null,3]
const tree6 = buildTree([1, 2, null, 3]);
const result6 = postorderTraversal(tree6);
console.assert(
  arraysEqual(result6, [3, 2, 1]),
  `Test 6 (left-skewed) failed: expected [3,2,1], got [${result6}]`
);

// Edge case: right-skewed tree [1,null,2,null,3] -> [3,2,1]
const tree7 = buildTree([1, null, 2, null, 3]);
const result7 = postorderTraversal(tree7);
console.assert(
  arraysEqual(result7, [3, 2, 1]),
  `Test 7 (right-skewed) failed: expected [3,2,1], got [${result7}]`
);

// Edge case: complete binary tree [1,2,3]
const tree8 = buildTree([1, 2, 3]);
const result8 = postorderTraversal(tree8);
console.assert(
  arraysEqual(result8, [2, 3, 1]),
  `Test 8 (complete tree) failed: expected [2,3,1], got [${result8}]`
);

// Edge case: negative values [-1,-2,-3]
const tree9 = buildTree([-1, -2, -3]);
const result9 = postorderTraversal(tree9);
console.assert(
  arraysEqual(result9, [-2, -3, -1]),
  `Test 9 (negative values) failed: expected [-2,-3,-1], got [${result9}]`
);

console.log('ALL TESTS PASSED');
