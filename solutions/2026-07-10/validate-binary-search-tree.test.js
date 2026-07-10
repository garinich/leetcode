import { isValidBST, buildTree, TreeNode } from './validate-binary-search-tree.js';

// Example 1: [2,1,3] -> true
const tree1 = buildTree([2, 1, 3]);
console.assert(isValidBST(tree1) === true, 'Example 1 failed: [2,1,3] should be true');

// Example 2: [5,1,4,null,null,3,6] -> false
const tree2 = buildTree([5, 1, 4, null, null, 3, 6]);
console.assert(isValidBST(tree2) === false, 'Example 2 failed: [5,1,4,null,null,3,6] should be false');

// Edge case: single node
const tree3 = buildTree([1]);
console.assert(isValidBST(tree3) === true, 'Single node should be valid BST');

// Edge case: null root
console.assert(isValidBST(null) === true, 'Null root should return true');

// Edge case: duplicate values (not valid BST - must be strictly less/greater)
const tree4 = buildTree([2, 2, 2]);
console.assert(isValidBST(tree4) === false, 'Duplicate values should not be valid BST');

// Edge case: right-skewed valid BST
const tree5 = buildTree([1, null, 2, null, 3]);
console.assert(isValidBST(tree5) === true, 'Right-skewed BST [1,null,2,null,3] should be true');

// Edge case: left-skewed valid BST
const tree6 = new TreeNode(3, new TreeNode(2, new TreeNode(1)), null);
console.assert(isValidBST(tree6) === true, 'Left-skewed BST should be true');

// Edge case: tricky case where subtree value violates ancestor constraint
// [10, 5, 15, null, null, 6, 20] -> false (6 is in right subtree of 10 but less than 10)
const tree7 = buildTree([10, 5, 15, null, null, 6, 20]);
console.assert(isValidBST(tree7) === false, 'Tricky ancestor violation should be false');

// Edge case: large values - INT_MIN and INT_MAX
const tree8 = new TreeNode(-(2 ** 31));
console.assert(isValidBST(tree8) === true, 'Node with INT_MIN value should be valid BST');

const tree9 = new TreeNode(2 ** 31 - 1);
console.assert(isValidBST(tree9) === true, 'Node with INT_MAX value should be valid BST');

// Valid BST with negative values
const tree10 = buildTree([-2, -3, -1]);
console.assert(isValidBST(tree10) === true, 'BST with negative values should be valid');

// Invalid BST where left child is greater than root
const tree11 = buildTree([5, 6, 7]);
console.assert(isValidBST(tree11) === false, 'Left child greater than root should be invalid');

console.log('ALL TESTS PASSED');
