import { invertTree, buildTree, treeToArray } from './invert-binary-tree.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: [4,2,7,1,3,6,9] -> [4,7,2,9,6,3,1]
const root1 = buildTree([4, 2, 7, 1, 3, 6, 9]);
const result1 = treeToArray(invertTree(root1));
console.assert(
  arraysEqual(result1, [4, 7, 2, 9, 6, 3, 1]),
  `Test 1 failed: expected [4,7,2,9,6,3,1], got ${JSON.stringify(result1)}`
);

// Example 2: [2,1,3] -> [2,3,1]
const root2 = buildTree([2, 1, 3]);
const result2 = treeToArray(invertTree(root2));
console.assert(
  arraysEqual(result2, [2, 3, 1]),
  `Test 2 failed: expected [2,3,1], got ${JSON.stringify(result2)}`
);

// Example 3: [] -> []
const root3 = buildTree([]);
const result3 = treeToArray(invertTree(root3));
console.assert(
  arraysEqual(result3, []),
  `Test 3 failed: expected [], got ${JSON.stringify(result3)}`
);

// Edge case: single node
const root4 = buildTree([1]);
const result4 = treeToArray(invertTree(root4));
console.assert(
  arraysEqual(result4, [1]),
  `Test 4 failed: expected [1], got ${JSON.stringify(result4)}`
);

// Edge case: only left children (skewed tree)
const root5 = buildTree([1, 2, null, 3, null, null, null]);
const result5 = treeToArray(invertTree(root5));
console.assert(
  arraysEqual(result5, [1, null, 2, null, 3]),
  `Test 5 failed: expected [1,null,2,null,3], got ${JSON.stringify(result5)}`
);

// Edge case: only right children (skewed tree)
const root6 = buildTree([1, null, 2, null, null, null, 3]);
const result6 = treeToArray(invertTree(root6));
console.assert(
  arraysEqual(result6, [1, 2, null, 3]),
  `Test 6 failed: expected [1,2,null,3], got ${JSON.stringify(result6)}`
);

// Edge case: two nodes
const root7 = buildTree([1, 2]);
const result7 = treeToArray(invertTree(root7));
console.assert(
  arraysEqual(result7, [1, null, 2]),
  `Test 7 failed: expected [1,null,2], got ${JSON.stringify(result7)}`
);

// Edge case: negative values
const root8 = buildTree([-1, -2, -3]);
const result8 = treeToArray(invertTree(root8));
console.assert(
  arraysEqual(result8, [-1, -3, -2]),
  `Test 8 failed: expected [-1,-3,-2], got ${JSON.stringify(result8)}`
);

console.log('ALL TESTS PASSED');
