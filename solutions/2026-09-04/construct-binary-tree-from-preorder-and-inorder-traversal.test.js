import { buildTree, treeToArray } from './construct-binary-tree-from-preorder-and-inorder-traversal.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Expected output: [3,9,20,null,null,15,7]
{
  const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
  const result = treeToArray(root);
  const expected = [3, 9, 20, null, null, 15, 7];
  console.assert(
    arraysEqual(result, expected),
    `Test 1 failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Example 2: preorder = [-1], inorder = [-1]
// Expected output: [-1]
{
  const root = buildTree([-1], [-1]);
  const result = treeToArray(root);
  const expected = [-1];
  console.assert(
    arraysEqual(result, expected),
    `Test 2 failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Edge case: single node tree
{
  const root = buildTree([1], [1]);
  const result = treeToArray(root);
  const expected = [1];
  console.assert(
    arraysEqual(result, expected),
    `Test 3 (single node) failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Edge case: left-skewed tree
// preorder = [1,2,3], inorder = [3,2,1]
// Tree: 1 -> left: 2 -> left: 3
{
  const root = buildTree([1, 2, 3], [3, 2, 1]);
  const result = treeToArray(root);
  const expected = [1, 2, null, 3];
  console.assert(
    arraysEqual(result, expected),
    `Test 4 (left-skewed) failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Edge case: right-skewed tree
// preorder = [1,2,3], inorder = [1,2,3]
// Tree: 1 -> right: 2 -> right: 3
{
  const root = buildTree([1, 2, 3], [1, 2, 3]);
  const result = treeToArray(root);
  const expected = [1, null, 2, null, 3];
  console.assert(
    arraysEqual(result, expected),
    `Test 5 (right-skewed) failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Edge case: balanced tree
// preorder = [1,2,4,5,3,6,7], inorder = [4,2,5,1,6,3,7]
{
  const root = buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]);
  const result = treeToArray(root);
  const expected = [1, 2, 3, 4, 5, 6, 7];
  console.assert(
    arraysEqual(result, expected),
    `Test 6 (balanced) failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

// Edge case: negative values
// preorder = [-3, -9, -20], inorder = [-9, -3, -20]
{
  const root = buildTree([-3, -9, -20], [-9, -3, -20]);
  const result = treeToArray(root);
  const expected = [-3, -9, -20];
  console.assert(
    arraysEqual(result, expected),
    `Test 7 (negative values) failed: ${JSON.stringify(result)} !== ${JSON.stringify(expected)}`
  );
}

console.log('ALL TESTS PASSED');
