// Symmetric Tree — Easy
// https://leetcode.com/problems/symmetric-tree/

/**
 * Symmetric Tree
 *
 * Approach:
 * A tree is symmetric if the left subtree is a mirror of the right subtree.
 * We can check this recursively by comparing:
 *   - Both nodes are null -> symmetric
 *   - One is null, other isn't -> not symmetric
 *   - Values differ -> not symmetric
 *   - Recursively check: left.left with right.right AND left.right with right.left
 *
 * We also provide an iterative solution using a queue, where we enqueue
 * pairs of nodes that should be mirrors of each other.
 *
 * Time Complexity: O(n) - we visit each node once
 * Space Complexity: O(h) recursive (h = height of tree), O(n) iterative (queue)
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
 * Recursive solution
 * @param {TreeNode} root
 * @return {boolean}
 */
export function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

/**
 * Helper function to check if two trees are mirrors of each other
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
function isMirror(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

/**
 * Iterative solution using a queue
 * @param {TreeNode} root
 * @return {boolean}
 */
export function isSymmetricIterative(root) {
  if (!root) return true;

  const queue = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    // Enqueue mirror pairs
    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
}

/**
 * Helper to build a tree from array (LeetCode format)
 * @param {Array} arr
 * @return {TreeNode}
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
