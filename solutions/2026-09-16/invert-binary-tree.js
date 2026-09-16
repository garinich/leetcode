// Invert Binary Tree — Easy
// https://leetcode.com/problems/invert-binary-tree/

/**
 * Invert Binary Tree
 *
 * Approach:
 * Use recursive depth-first search (DFS) to invert the binary tree.
 * For each node, swap its left and right children, then recursively
 * invert the left and right subtrees.
 *
 * Time Complexity: O(n) - we visit each node exactly once
 * Space Complexity: O(h) - where h is the height of the tree (call stack),
 *                   O(log n) for balanced trees, O(n) worst case for skewed trees
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
 * @return {TreeNode}
 */
export function invertTree(root) {
  if (root === null) return null;

  // Swap left and right children
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/**
 * Helper: Build a tree from an array (level-order / BFS representation)
 * @param {number[]} arr
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

/**
 * Helper: Serialize a tree to level-order array
 * @param {TreeNode|null} root
 * @returns {(number|null)[]}
 */
export function treeToArray(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Trim trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
