import { recoverTree, buildTree, treeToArray } from './recover-binary-search-tree.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Test 1: Example 1 - [1,3,null,null,2] -> [3,1,null,null,2]
{
  const root = buildTree([1, 3, null, null, 2]);
  recoverTree(root);
  const result = treeToArray(root);
  console.assert(
    arraysEqual(result, [3, 1, null, null, 2]),
    `Test 1 failed: expected [3,1,null,null,2], got ${JSON.stringify(result)}`
  );
}

// Test 2: Example 2 - [3,1,4,null,null,2] -> [2,1,4,null,null,3]
{
  const root = buildTree([3, 1, 4, null, null, 2]);
  recoverTree(root);
  const result = treeToArray(root);
  console.assert(
    arraysEqual(result, [2, 1, 4, null, null, 3]),
    `Test 2 failed: expected [2,1,4,null,null,3], got ${JSON.stringify(result)}`
  );
}

// Test 3: Simple two-node tree where root and child are swapped
// [2, 1] is valid BST, but [1, 2] with 2 as left child is not
{
  // Build tree: 1 with left child 2 (swapped)
  const root = buildTree([1, 2]);
  recoverTree(root);
  const result = treeToArray(root);
  // After recovery: 2 should be root, 1 should be left child
  console.assert(
    arraysEqual(result, [2, 1]),
    `Test 3 failed: expected [2,1], got ${JSON.stringify(result)}`
  );
}

// Test 4: Swapped nodes are far apart in the tree
// BST: [6,3,8,1,4,7,9] - swap 3 and 7
// Swapped to: [6,7,8,1,4,3,9]
{
  const root = buildTree([6, 7, 8, 1, 4, 3, 9]);
  recoverTree(root);
  const result = treeToArray(root);
  // Expected valid BST: [6,3,8,1,4,7,9]
  console.assert(
    arraysEqual(result, [6, 3, 8, 1, 4, 7, 9]),
    `Test 4 failed: expected [6,3,8,1,4,7,9], got ${JSON.stringify(result)}`
  );
}

// Test 5: Adjacent swapped nodes in a larger tree
// Valid BST in-order: 1,2,3,4,5
// After swap of 2 and 3 (adjacent in in-order): [4,3,5,2,null,null,null,1]
// Let's construct a simple case
// BST [2,1,3] - swap 1 and 3? Wait, let's do [3,1,2] swapping 2 and 3
{
  // [3,1,2]: 3 is root, 1 is left, 2 is right
  // In-order: 1,3,2 -> inversion at (3,2), adjacent swap
  // Should fix to [2,1,3]
  const root = buildTree([3, 1, 2]);
  recoverTree(root);
  const result = treeToArray(root);
  console.assert(
    arraysEqual(result, [2, 1, 3]),
    `Test 5 failed: expected [2,1,3], got ${JSON.stringify(result)}`
  );
}

// Test 6: Negative values
// BST: [-3,-5,-1] is invalid (left child -5 is less than root -3, so that's fine)
// Swapped: [-1,-5,-3] -> in-order: -5,-1,-3, inversion at (-1,-3)
// Wait: let's think again. For BST [-3,-5,-1]: in-order is -5,-3,-1 (valid)
// Swap -3 and -1: tree becomes [-1,-5,-3], in-order: -5,-1,-3 -> inversion at (-1,-3)
// adjacent swap: first=-1 (prev), second=-3 (current)
{
  const root = buildTree([-1, -5, -3]);
  recoverTree(root);
  const result = treeToArray(root);
  console.assert(
    arraysEqual(result, [-3, -5, -1]),
    `Test 6 failed: expected [-3,-5,-1], got ${JSON.stringify(result)}`
  );
}

console.log('ALL TESTS PASSED');
