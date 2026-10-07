// Binary Tree Postorder Traversal — Easy
// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Binary Tree Postorder Traversal
 *
 * Approach (Iterative):
 * We use a modified preorder traversal (root -> right -> left) and then reverse
 * the result to get postorder (left -> right -> root).
 *
 * Steps:
 * 1. Use a stack, push root
 * 2. While stack is not empty:
 *    - Pop node, add its value to result
 *    - Push left child first, then right child
 *    (This gives us root -> right -> left order)
 * 3. Reverse result to get left -> right -> root (postorder)
 *
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(n) - stack and result array
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
 * Iterative postorder traversal of a binary tree.
 * @param {TreeNode|null} root
 * @return {number[]}
 */
export function postorderTraversal(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    // Push left first so right is processed first (we'll reverse at end)
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result.reverse();
}

/**
 * Helper function to build a binary tree from array representation.
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
