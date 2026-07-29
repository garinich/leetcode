import { isBalanced, buildTree } from './balanced-binary-tree.js';

// Example 1: [3,9,20,null,null,15,7] -> true
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.assert(isBalanced(tree1) === true, 'Test 1 failed: Expected true for [3,9,20,null,null,15,7]');

// Example 2: [1,2,2,3,3,null,null,4,4] -> false
const tree2 = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
console.assert(isBalanced(tree2) === false, 'Test 2 failed: Expected false for [1,2,2,3,3,null,null,4,4]');

// Example 3: [] -> true
const tree3 = buildTree([]);
console.assert(isBalanced(tree3) === true, 'Test 3 failed: Expected true for empty tree');

// Edge case: single node
const tree4 = buildTree([1]);
console.assert(isBalanced(tree4) === true, 'Test 4 failed: Expected true for single node');

// Edge case: two nodes (balanced)
const tree5 = buildTree([1, 2]);
console.assert(isBalanced(tree5) === true, 'Test 5 failed: Expected true for [1,2]');

// Edge case: skewed tree (like a linked list) - unbalanced
const tree6 = buildTree([1, 2, null, 3, null, 4]);
console.assert(isBalanced(tree6) === false, 'Test 6 failed: Expected false for deeply skewed tree');

// Edge case: perfectly balanced tree
const tree7 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.assert(isBalanced(tree7) === true, 'Test 7 failed: Expected true for perfect binary tree');

// Edge case: one side has depth 2, other has depth 0 (unbalanced)
const tree8 = buildTree([1, 2, null, 3, 4]);
console.assert(isBalanced(tree8) === false, 'Test 8 failed: Expected false for unbalanced [1,2,null,3,4]');

// Edge case: balanced tree with depth difference of exactly 1
const tree9 = buildTree([1, 2, 3, 4]);
console.assert(isBalanced(tree9) === true, 'Test 9 failed: Expected true for [1,2,3,4]');

console.log('ALL TESTS PASSED');
