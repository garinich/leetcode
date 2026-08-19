// Same Tree — Easy
// https://leetcode.com/problems/same-tree/

/**
 * Approach: Recursive DFS comparison
 * Compare both trees recursively:
 * - If both nodes are null, they are the same (base case)
 * - If one is null and the other isn't, they differ
 * - If both exist but have different values, they differ
 * - Otherwise, recursively check left and right subtrees
 *
 * Time Complexity: O(n) where n is the number of nodes in the smaller tree
 * Space Complexity: O(h) where h is the height of the tree (recursion stack)
 *   - Worst case O(n) for a skewed tree
 *   - Best case O(log n) for a balanced tree
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
 * Checks if two binary trees are the same.
 * @param {TreeNode|null} p - Root of first tree
 * @param {TreeNode|null} q - Root of second tree
 * @returns {boolean} True if trees are identical, false otherwise
 */
export function isSameTree(p, q) {
  // Both null means we've reached the end of both branches simultaneously
  if (p === null && q === null) return true;

  // One is null and the other isn't - structural difference
  if (p === null || q === null) return false;

  // Values differ at this node
  if (p.val !== q.val) return false;

  // Recursively check left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * Helper to build a binary tree from an array (level-order / BFS representation).
 * @param {Array} arr - Array with node values (null for missing nodes)
 * @returns {TreeNode|null} Root of the constructed tree
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
