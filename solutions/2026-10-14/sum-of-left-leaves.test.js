import { sumOfLeftLeaves, buildTree } from './sum-of-left-leaves.js';

// Example 1: [3,9,20,null,null,15,7] => 24
// Tree structure:
//     3
//    / \
//   9  20
//      / \
//     15   7
// Left leaves: 9 and 15 => sum = 24
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.assert(sumOfLeftLeaves(tree1) === 24, 'Test 1 failed: expected 24');

// Example 2: [1] => 0
// Single node, no left leaves
const tree2 = buildTree([1]);
console.assert(sumOfLeftLeaves(tree2) === 0, 'Test 2 failed: expected 0');

// Edge case: null root
console.assert(sumOfLeftLeaves(null) === 0, 'Test 3 failed: expected 0 for null root');

// Edge case: only right children, no left leaves
// Tree:  1
//         \
//          2
//           \
//            3
const tree4 = buildTree([1, null, 2, null, 3]);
console.assert(sumOfLeftLeaves(tree4) === 0, 'Test 4 failed: expected 0 for all right children');

// Edge case: all left children
// Tree:  1
//       /
//      2
//     /
//    3
const tree5 = buildTree([1, 2, null, 3]);
console.assert(sumOfLeftLeaves(tree5) === 3, 'Test 5 failed: expected 3');

// Edge case: negative values
// Tree:    0
//         / \
//       -3   1
const tree6 = buildTree([0, -3, 1]);
console.assert(sumOfLeftLeaves(tree6) === -3, 'Test 6 failed: expected -3');

// Edge case: multiple levels with multiple left leaves
// Tree:       1
//           /   \
//          2     3
//         / \   / \
//        4   5 6   7
const tree7 = buildTree([1, 2, 3, 4, 5, 6, 7]);
// Left leaves: 4 and 6 => sum = 10
console.assert(sumOfLeftLeaves(tree7) === 10, 'Test 7 failed: expected 10');

// Edge case: single left child (leaf)
// Tree:  5
//       /
//      3
const tree8 = buildTree([5, 3]);
console.assert(sumOfLeftLeaves(tree8) === 3, 'Test 8 failed: expected 3');

// Edge case: single right child (leaf, not a left leaf)
// Tree:  5
//         \
//          3
const tree9 = buildTree([5, null, 3]);
console.assert(sumOfLeftLeaves(tree9) === 0, 'Test 9 failed: expected 0');

console.log('ALL TESTS PASSED');
