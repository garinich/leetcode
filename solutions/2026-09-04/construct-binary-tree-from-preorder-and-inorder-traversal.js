// Construct Binary Tree from Preorder and Inorder Traversal — Medium
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 *
 * Approach:
 * - The first element of preorder is always the root of the tree (or subtree).
 * - Find that root value in the inorder array. Elements to the left of it
 *   form the left subtree, elements to the right form the right subtree.
 * - Use a HashMap for O(1) lookups of indices in the inorder array.
 * - Recursively build left and right subtrees using sliced indices.
 *
 * Time Complexity: O(n) - each node is visited once
 * Space Complexity: O(n) - for the HashMap and recursion stack
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export function buildTree(preorder, inorder) {
  // Build a map from value to index in inorder for O(1) lookup
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preorderIndex = 0;

  function helper(left, right) {
    if (left > right) return null;

    // The current root is the next element in preorder
    const rootVal = preorder[preorderIndex++];
    const root = new TreeNode(rootVal);

    // Find the index of root in inorder
    const inorderIndex = inorderMap.get(rootVal);

    // Elements to the left of inorderIndex belong to the left subtree
    root.left = helper(left, inorderIndex - 1);
    // Elements to the right of inorderIndex belong to the right subtree
    root.right = helper(inorderIndex + 1, right);

    return root;
  }

  return helper(0, inorder.length - 1);
}

/**
 * Helper to serialize a tree to level-order array (for testing)
 * @param {TreeNode} root
 * @return {(number|null)[]}
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
