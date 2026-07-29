// Balanced Binary Tree — Easy
// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Balanced Binary Tree
 *
 * Approach:
 * Use a recursive helper function that returns the height of a subtree,
 * or -1 if the subtree is unbalanced. For each node, we check if both
 * left and right subtrees are balanced and if the height difference is
 * at most 1. If unbalanced at any point, propagate -1 upward.
 *
 * Time Complexity: O(n) - each node is visited once
 * Space Complexity: O(h) - recursive call stack where h is the height of the tree
 *                   O(log n) for balanced tree, O(n) worst case for skewed tree
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Helper function that returns the height of the tree rooted at node,
 * or -1 if the tree is unbalanced.
 * @param {TreeNode} node
 * @returns {number}
 */
function checkHeight(node) {
  if (node === null) return 0;

  const leftHeight = checkHeight(node.left);
  if (leftHeight === -1) return -1;

  const rightHeight = checkHeight(node.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export function isBalanced(root) {
  return checkHeight(root) !== -1;
}

/**
 * Helper to build a tree from an array (level-order / BFS format).
 * @param {Array} arr
 * @returns {TreeNode|null}
 */
export function buildTree(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
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
