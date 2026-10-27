import { sortedArrayToBST, TreeNode } from './convert-sorted-array-to-binary-search-tree.js';

/**
 * Helper: Convert BST to level-order array representation (BFS)
 * null for missing nodes
 */
function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  // Trim trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

/**
 * Helper: Check if a BST is height-balanced
 */
function isBalanced(root) {
  function checkHeight(node) {
    if (!node) return 0;
    const leftH = checkHeight(node.left);
    if (leftH === -1) return -1;
    const rightH = checkHeight(node.right);
    if (rightH === -1) return -1;
    if (Math.abs(leftH - rightH) > 1) return -1;
    return Math.max(leftH, rightH) + 1;
  }
  return checkHeight(root) !== -1;
}

/**
 * Helper: Check if tree is a valid BST
 */
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

/**
 * Helper: Get all values via in-order traversal (should match sorted input)
 */
function inOrder(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// Test 1: Example 1 - [-10,-3,0,5,9]
// Expected output: [0,-3,9,-10,null,5] or [0,-10,5,null,-3,null,9]
const result1 = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.assert(isBalanced(result1), 'Test 1: Tree should be height-balanced');
console.assert(isValidBST(result1), 'Test 1: Tree should be a valid BST');
console.assert(
  JSON.stringify(inOrder(result1)) === JSON.stringify([-10, -3, 0, 5, 9]),
  'Test 1: In-order traversal should match sorted input'
);

// Test 2: Example 2 - [1,3]
// Expected: [3,1] or [1,null,3]
const result2 = sortedArrayToBST([1, 3]);
console.assert(isBalanced(result2), 'Test 2: Tree should be height-balanced');
console.assert(isValidBST(result2), 'Test 2: Tree should be a valid BST');
console.assert(
  JSON.stringify(inOrder(result2)) === JSON.stringify([1, 3]),
  'Test 2: In-order traversal should match sorted input'
);

// Test 3: Single element
const result3 = sortedArrayToBST([0]);
console.assert(result3.val === 0, 'Test 3: Single element root should be 0');
console.assert(result3.left === null, 'Test 3: Single element left should be null');
console.assert(result3.right === null, 'Test 3: Single element right should be null');

// Test 4: Two elements
const result4 = sortedArrayToBST([1, 2]);
console.assert(isBalanced(result4), 'Test 4: Tree should be height-balanced');
console.assert(isValidBST(result4), 'Test 4: Tree should be a valid BST');
console.assert(
  JSON.stringify(inOrder(result4)) === JSON.stringify([1, 2]),
  'Test 4: In-order traversal should match sorted input'
);

// Test 5: Larger sorted array
const nums5 = [-10, -5, 0, 1, 3, 5, 7, 10];
const result5 = sortedArrayToBST(nums5);
console.assert(isBalanced(result5), 'Test 5: Tree should be height-balanced');
console.assert(isValidBST(result5), 'Test 5: Tree should be a valid BST');
console.assert(
  JSON.stringify(inOrder(result5)) === JSON.stringify(nums5),
  'Test 5: In-order traversal should match sorted input'
);

// Test 6: Negative numbers only
const nums6 = [-9, -7, -5, -3, -1];
const result6 = sortedArrayToBST(nums6);
console.assert(isBalanced(result6), 'Test 6: Tree should be height-balanced');
console.assert(isValidBST(result6), 'Test 6: Tree should be a valid BST');
console.assert(
  JSON.stringify(inOrder(result6)) === JSON.stringify(nums6),
  'Test 6: In-order traversal should match sorted input'
);

// Test 7: Three elements
const result7 = sortedArrayToBST([1, 2, 3]);
console.assert(result7.val === 2, 'Test 7: Middle element should be root');
console.assert(result7.left.val === 1, 'Test 7: Left child should be 1');
console.assert(result7.right.val === 3, 'Test 7: Right child should be 3');
console.assert(isBalanced(result7), 'Test 7: Tree should be height-balanced');

console.log('ALL TESTS PASSED');
