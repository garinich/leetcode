// Maximum Depth of Binary Tree — Easy
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Maximum Depth of Binary Tree
 *
 * Approach: Recursive DFS (Depth-First Search)
 * For each node, the maximum depth is 1 + max(depth of left subtree, depth of right subtree).
 * Base case: if the node is null, return 0.
 *
 * Time Complexity: O(n) - we visit every node exactly once
 * Space Complexity: O(h) - where h is the height of the tree (call stack space).
 *                   Worst case O(n) for a skewed tree, O(log n) for a balanced tree.
 */

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode|null} root
 * @return {number}
 */
export function maxDepth(root) {
  if (root === null) return 0;
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return 1 + Math.max(leftDepth, rightDepth);
}

/**
 * Helper function to build a binary tree from an array (level-order).
 * @param {Array} arr
 * @returns {TreeNode|null}
 */
export function buildTree(arr) {
  if (!arr || arr.length === 0) return null;
  if (arr[0] === null) return null;

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
