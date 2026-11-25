// Recover Binary Search Tree — Medium
// https://leetcode.com/problems/recover-binary-search-tree/

/**
 * Recover Binary Search Tree
 *
 * Approach: In-order traversal of a BST produces a sorted sequence.
 * When two nodes are swapped, the in-order traversal will have at most
 * two "inversions" (places where current node < previous node).
 *
 * - If adjacent nodes were swapped: one inversion, first = prev, second = current
 * - If non-adjacent nodes were swapped: two inversions,
 *   first = prev at first inversion, second = current at second inversion
 *
 * We perform in-order traversal, tracking:
 * - prev: the previously visited node
 * - first: the first misplaced node (larger of the first inversion pair)
 * - second: the second misplaced node (smaller of the last inversion pair)
 *
 * Finally, swap the values of first and second.
 *
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(h) where h is tree height (recursion stack)
 *   O(log n) for balanced, O(n) worst case for skewed tree
 *   For O(1) space, Morris traversal can be used (implemented below as well)
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
 * Recover the BST by finding and swapping the two misplaced nodes.
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
export function recoverTree(root) {
  let first = null;
  let second = null;
  let prev = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    // Check for inversion
    if (prev !== null && prev.val > node.val) {
      if (first === null) {
        // First inversion: mark prev as first candidate
        first = prev;
      }
      // Always update second to current node
      second = node;
    }
    prev = node;

    inorder(node.right);
  }

  inorder(root);

  // Swap values of the two misplaced nodes
  if (first !== null && second !== null) {
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
  }
}

/**
 * Helper: Build a BST from array representation (LeetCode format)
 * @param {Array} arr
 * @return {TreeNode}
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
 * Helper: Convert BST to array representation (level-order)
 * @param {TreeNode} root
 * @return {Array}
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

  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
