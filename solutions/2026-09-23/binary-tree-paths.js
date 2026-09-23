// Binary Tree Paths — Easy
// https://leetcode.com/problems/binary-tree-paths/

/**
 * Binary Tree Paths
 *
 * Approach:
 * Use DFS (depth-first search) to traverse the tree from root to each leaf.
 * Maintain a current path string, and when we reach a leaf node, add the
 * complete path to the result array.
 *
 * Time Complexity: O(N) where N is the number of nodes in the tree
 * Space Complexity: O(N) for the recursion stack and result storage
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
export function binaryTreePaths(root) {
  const result = [];

  function dfs(node, path) {
    if (!node) return;

    const currentPath = path === '' ? `${node.val}` : `${path}->${node.val}`;

    // If it's a leaf node, add path to result
    if (!node.left && !node.right) {
      result.push(currentPath);
      return;
    }

    dfs(node.left, currentPath);
    dfs(node.right, currentPath);
  }

  dfs(root, '');
  return result;
}

/**
 * Helper function to build a tree from an array (LeetCode format)
 * @param {Array} arr
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

export { TreeNode };
