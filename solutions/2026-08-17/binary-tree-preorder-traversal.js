// Binary Tree Preorder Traversal — Easy
// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Binary Tree Preorder Traversal
 *
 * Approach (Iterative):
 * Use a stack to simulate the recursive call stack.
 * Push root onto stack, then repeatedly pop a node, add its value to result,
 * then push right child first, then left child (so left is processed first).
 *
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(n) - stack can hold up to n nodes in worst case (skewed tree)
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
 * @return {number[]}
 */
export function preorderTraversal(root) {
  const result = [];
  if (!root) return result;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    // Push right first so left is processed first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

/**
 * Helper function to build a binary tree from an array (LeetCode format)
 * @param {(number|null)[]} arr
 * @return {TreeNode|null}
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
