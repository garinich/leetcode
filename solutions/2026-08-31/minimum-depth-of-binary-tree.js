// Minimum Depth of Binary Tree — Easy
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Minimum Depth of Binary Tree
 *
 * Approach:
 * Use BFS (level-order traversal) to find the first leaf node encountered.
 * The level at which we find the first leaf is the minimum depth.
 * BFS is preferred over DFS here because it naturally finds the shortest path first.
 *
 * Key insight: A leaf node is one with no left AND no right child.
 * We must be careful not to count a node with only one child as a leaf.
 *
 * Time Complexity: O(n) in worst case (skewed tree), O(log n) best case (balanced tree)
 * Space Complexity: O(n) for the queue in worst case
 */

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export function minDepth(root) {
  if (!root) return 0;

  // BFS approach
  const queue = [[root, 1]];

  while (queue.length > 0) {
    const [node, depth] = queue.shift();

    // Check if this is a leaf node
    if (!node.left && !node.right) {
      return depth;
    }

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }

  return 0;
}

/**
 * Alternative DFS recursive approach
 * @param {TreeNode} root
 * @return {number}
 */
export function minDepthDFS(root) {
  if (!root) return 0;

  // If only right child exists, don't count left subtree
  if (!root.left) return 1 + minDepthDFS(root.right);

  // If only left child exists, don't count right subtree
  if (!root.right) return 1 + minDepthDFS(root.left);

  // Both children exist, take minimum
  return 1 + Math.min(minDepthDFS(root.left), minDepthDFS(root.right));
}
