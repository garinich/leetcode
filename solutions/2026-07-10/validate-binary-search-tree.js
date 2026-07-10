// Validate Binary Search Tree — Medium
// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Validate Binary Search Tree
 *
 * Approach:
 * Use recursive DFS with min/max bounds. For each node, we track the valid
 * range (min, max) that the node's value must fall within.
 * - Root can be any value: (-Infinity, +Infinity)
 * - Left child must be in range (min, node.val)
 * - Right child must be in range (node.val, max)
 *
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(h) - recursion stack where h is tree height (O(log n) balanced, O(n) worst case)
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
 * @return {boolean}
 */
export function isValidBST(root) {
  function validate(node, min, max) {
    if (node === null) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
  }

  return validate(root, -Infinity, Infinity);
}

/**
 * Helper function to build a tree from array representation (LeetCode format)
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

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}
