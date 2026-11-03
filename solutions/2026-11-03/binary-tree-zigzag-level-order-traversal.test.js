import { zigzagLevelOrder, buildTree } from './binary-tree-zigzag-level-order-traversal.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) && Array.isArray(b[i])) {
      if (!arraysEqual(a[i], b[i])) return false;
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

// Example 1: [3,9,20,null,null,15,7] -> [[3],[20,9],[15,7]]
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
const result1 = zigzagLevelOrder(tree1);
console.assert(
  arraysEqual(result1, [[3], [20, 9], [15, 7]]),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Example 2: [1] -> [[1]]
const tree2 = buildTree([1]);
const result2 = zigzagLevelOrder(tree2);
console.assert(
  arraysEqual(result2, [[1]]),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Example 3: [] -> []
const tree3 = buildTree([]);
const result3 = zigzagLevelOrder(tree3);
console.assert(
  arraysEqual(result3, []),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: null root
const result4 = zigzagLevelOrder(null);
console.assert(
  arraysEqual(result4, []),
  `Test 4 (null root) failed: ${JSON.stringify(result4)}`
);

// Edge case: single path tree (all left children)
const tree5 = buildTree([1, 2, null, 3, null, 4]);
const result5 = zigzagLevelOrder(tree5);
console.assert(
  arraysEqual(result5, [[1], [2], [3], [4]]),
  `Test 5 (single path) failed: ${JSON.stringify(result5)}`
);

// Edge case: complete binary tree with 4 levels
const tree6 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const result6 = zigzagLevelOrder(tree6);
console.assert(
  arraysEqual(result6, [[1], [3, 2], [4, 5, 6, 7]]),
  `Test 6 (complete tree) failed: ${JSON.stringify(result6)}`
);

// Edge case: tree with negative values
const tree7 = buildTree([-1, -2, -3]);
const result7 = zigzagLevelOrder(tree7);
console.assert(
  arraysEqual(result7, [[-1], [-3, -2]]),
  `Test 7 (negative values) failed: ${JSON.stringify(result7)}`
);

// Edge case: two-level tree
const tree8 = buildTree([5, 3, 8]);
const result8 = zigzagLevelOrder(tree8);
console.assert(
  arraysEqual(result8, [[5], [8, 3]]),
  `Test 8 (two-level) failed: ${JSON.stringify(result8)}`
);

console.log('ALL TESTS PASSED');
