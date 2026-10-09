// Path Sum — Easy
// https://leetcode.com/problems/path-sum/

/**
 * Determines if a binary tree has a root-to-leaf path that sums to targetSum.
 *
 * Approach: Recursive DFS - at each node, subtract the node's value from targetSum.
 * When we reach a leaf node, check if the remaining sum equals zero.
 *
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(h) - h is the height of the tree (recursion stack),
 *                   O(log n) for balanced, O(n) worst case for skewed tree
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export function hasPathSum(root, targetSum) {
  if (root === null) return false;

  // If it's a leaf node, check if remaining sum equals node's value
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  // Recurse on children with reduced targetSum
  const remaining = targetSum - root.val;
  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

/**
 * Helper to build a binary tree from an array (LeetCode format)
 * @param {Array} arr
 * @returns {TreeNode|null}
 */
export function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

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
