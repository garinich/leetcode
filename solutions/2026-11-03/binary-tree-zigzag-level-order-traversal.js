// Binary Tree Zigzag Level Order Traversal — Medium
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Binary Tree Zigzag Level Order Traversal
 *
 * Approach:
 * - Use BFS (level-order traversal) with a queue
 * - Track the current level with a flag to determine direction
 * - For odd levels (0-indexed), add values left to right
 * - For even levels, add values right to left (reverse)
 * - Use an array to collect values at each level, then reverse if needed
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(n) - queue can hold up to n/2 nodes at a time (last level)
 */

/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export function zigzagLevelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelValues = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelValues.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (!leftToRight) {
      levelValues.reverse();
    }

    result.push(levelValues);
    leftToRight = !leftToRight;
  }

  return result;
}

/**
 * Helper function to build a binary tree from an array (LeetCode format)
 * @param {(number|null)[]} arr
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
