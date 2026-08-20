import { maxDepth, buildTree } from './maximum-depth-of-binary-tree.js';

// Example 1: [3,9,20,null,null,15,7] => 3
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.assert(maxDepth(tree1) === 3, 'Test 1 failed: expected 3');

// Example 2: [1,null,2] => 2
const tree2 = buildTree([1, null, 2]);
console.assert(maxDepth(tree2) === 2, 'Test 2 failed: expected 2');

// Edge case: empty tree => 0
console.assert(maxDepth(null) === 0, 'Test 3 failed: expected 0 for null root');

// Edge case: single node => 1
const tree4 = buildTree([1]);
console.assert(maxDepth(tree4) === 1, 'Test 4 failed: expected 1 for single node');

// Edge case: left-skewed tree [1,2,null,3,null,4] => 4
const tree5 = buildTree([1, 2, null, 3, null, 4]);
console.assert(maxDepth(tree5) === 4, 'Test 5 failed: expected 4 for left-skewed tree');

// Edge case: right-skewed tree => 4
const tree6 = buildTree([1, null, 2, null, 3, null, 4]);
console.assert(maxDepth(tree6) === 4, 'Test 6 failed: expected 4 for right-skewed tree');

// Balanced complete tree of depth 3
const tree7 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.assert(maxDepth(tree7) === 3, 'Test 7 failed: expected 3 for complete balanced tree');

// Single level with two children => 2
const tree8 = buildTree([1, 2, 3]);
console.assert(maxDepth(tree8) === 2, 'Test 8 failed: expected 2');

console.log('ALL TESTS PASSED');
