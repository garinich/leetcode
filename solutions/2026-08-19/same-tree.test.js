import { isSameTree, buildTree } from './same-tree.js';

// Example 1: p = [1,2,3], q = [1,2,3] -> true
const p1 = buildTree([1, 2, 3]);
const q1 = buildTree([1, 2, 3]);
console.assert(isSameTree(p1, q1) === true, 'Example 1 failed: identical trees should return true');

// Example 2: p = [1,2], q = [1,null,2] -> false
const p2 = buildTree([1, 2]);
const q2 = buildTree([1, null, 2]);
console.assert(isSameTree(p2, q2) === false, 'Example 2 failed: structurally different trees should return false');

// Example 3: p = [1,2,1], q = [1,1,2] -> false
const p3 = buildTree([1, 2, 1]);
const q3 = buildTree([1, 1, 2]);
console.assert(isSameTree(p3, q3) === false, 'Example 3 failed: trees with different node values should return false');

// Edge case: both trees are null
console.assert(isSameTree(null, null) === true, 'Edge case failed: two null trees should be the same');

// Edge case: one tree is null, the other is not
const singleNode = buildTree([1]);
console.assert(isSameTree(null, singleNode) === false, 'Edge case failed: null vs non-null tree should return false');
console.assert(isSameTree(singleNode, null) === false, 'Edge case failed: non-null vs null tree should return false');

// Edge case: single node trees with same value
const single1 = buildTree([5]);
const single2 = buildTree([5]);
console.assert(isSameTree(single1, single2) === true, 'Edge case failed: same single node trees should return true');

// Edge case: single node trees with different values
const single3 = buildTree([5]);
const single4 = buildTree([10]);
console.assert(isSameTree(single3, single4) === false, 'Edge case failed: different single node trees should return false');

// Edge case: trees with negative values
const neg1 = buildTree([-1, -2, -3]);
const neg2 = buildTree([-1, -2, -3]);
console.assert(isSameTree(neg1, neg2) === true, 'Edge case failed: identical trees with negative values should return true');

// Edge case: larger identical trees
const large1 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const large2 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.assert(isSameTree(large1, large2) === true, 'Edge case failed: large identical trees should return true');

// Edge case: larger trees with difference deep in tree
const large3 = buildTree([1, 2, 3, 4, 5, 6, 7]);
const large4 = buildTree([1, 2, 3, 4, 5, 6, 8]);
console.assert(isSameTree(large3, large4) === false, 'Edge case failed: large trees differing at leaf should return false');

console.log('ALL TESTS PASSED');
