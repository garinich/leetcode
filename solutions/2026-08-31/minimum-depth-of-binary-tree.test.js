import { minDepth, minDepthDFS, TreeNode } from './minimum-depth-of-binary-tree.js';

// Helper function to build a tree from array (LeetCode format)
function buildTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// Example 1: [3,9,20,null,null,15,7] => 2
const tree1 = buildTree([3, 9, 20, null, null, 15, 7]);
console.assert(minDepth(tree1) === 2, `Expected 2, got ${minDepth(tree1)}`);
console.assert(minDepthDFS(tree1) === 2, `DFS Expected 2, got ${minDepthDFS(tree1)}`);

// Example 2: [2,null,3,null,4,null,5,null,6] => 5
const tree2 = buildTree([2, null, 3, null, 4, null, 5, null, 6]);
console.assert(minDepth(tree2) === 5, `Expected 5, got ${minDepth(tree2)}`);
console.assert(minDepthDFS(tree2) === 5, `DFS Expected 5, got ${minDepthDFS(tree2)}`);

// Edge case: empty tree => 0
console.assert(minDepth(null) === 0, 'Empty tree should return 0');
console.assert(minDepthDFS(null) === 0, 'DFS Empty tree should return 0');

// Edge case: single node => 1
const singleNode = new TreeNode(1);
console.assert(minDepth(singleNode) === 1, `Single node should return 1, got ${minDepth(singleNode)}`);
console.assert(minDepthDFS(singleNode) === 1, `DFS Single node should return 1`);

// Edge case: tree with only left children
const leftSkewed = buildTree([1, 2, null, 3, null]);
console.assert(minDepth(leftSkewed) === 3, `Left skewed should return 3, got ${minDepth(leftSkewed)}`);
console.assert(minDepthDFS(leftSkewed) === 3, `DFS Left skewed should return 3`);

// Edge case: complete binary tree of depth 3
const completTree = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.assert(minDepth(completTree) === 3, `Complete tree depth 3, got ${minDepth(completTree)}`);
console.assert(minDepthDFS(completTree) === 3, `DFS Complete tree depth 3`);

// Edge case: tree where left subtree is deeper but right is leaf
// [1, 2, 3, 4] - min depth should be 2 (1->3)
const asymmetric = buildTree([1, 2, 3, 4]);
console.assert(minDepth(asymmetric) === 2, `Asymmetric tree should return 2, got ${minDepth(asymmetric)}`);
console.assert(minDepthDFS(asymmetric) === 2, `DFS Asymmetric tree should return 2`);

// Two-level tree where both leaves are at level 2
const twoLevel = buildTree([1, 2, 3]);
console.assert(minDepth(twoLevel) === 2, `Two level tree should return 2, got ${minDepth(twoLevel)}`);
console.assert(minDepthDFS(twoLevel) === 2, `DFS Two level tree should return 2`);

console.log('ALL TESTS PASSED');
