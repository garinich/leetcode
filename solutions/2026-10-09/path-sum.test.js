import { hasPathSum, buildTree } from './path-sum.js';

// Example 1: [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22 => true
const tree1 = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
console.assert(hasPathSum(tree1, 22) === true, 'Example 1 failed');

// Example 2: [1,2,3], targetSum = 5 => false
const tree2 = buildTree([1, 2, 3]);
console.assert(hasPathSum(tree2, 5) === false, 'Example 2 failed');

// Example 3: [], targetSum = 0 => false
const tree3 = buildTree([]);
console.assert(hasPathSum(tree3, 0) === false, 'Example 3 failed');

// Edge case: single node that equals targetSum
const tree4 = buildTree([5]);
console.assert(hasPathSum(tree4, 5) === true, 'Single node matching targetSum failed');

// Edge case: single node that does NOT equal targetSum
const tree5 = buildTree([5]);
console.assert(hasPathSum(tree5, 10) === false, 'Single node not matching targetSum failed');

// Edge case: negative values
const tree6 = buildTree([-2, null, -3]);
console.assert(hasPathSum(tree6, -5) === true, 'Negative values test failed');

// Edge case: path exists but not to a leaf (should return false)
const tree7 = buildTree([1, 2]);
console.assert(hasPathSum(tree7, 1) === false, 'Non-leaf path should not count');

// Edge case: targetSum = 0 with a node having value 0 as leaf
const tree8 = buildTree([0]);
console.assert(hasPathSum(tree8, 0) === true, 'Zero value leaf with targetSum=0 failed');

// Edge case: large tree path that sums correctly
const tree9 = buildTree([1, 2, 3, 4, 5]);
// Paths: 1->2->4 = 7, 1->2->5 = 8, 1->3 = 4
console.assert(hasPathSum(tree9, 7) === true, 'Path 1->2->4 = 7 failed');
console.assert(hasPathSum(tree9, 8) === true, 'Path 1->2->5 = 8 failed');
console.assert(hasPathSum(tree9, 4) === true, 'Path 1->3 = 4 failed');
console.assert(hasPathSum(tree9, 10) === false, 'Non-existing path 10 should return false');

console.log('ALL TESTS PASSED');
