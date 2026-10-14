// Sum of Left Leaves — Easy
// https://leetcode.com/problems/sum-of-left-leaves/

/**
 * Sum of Left Leaves
 *
 * Approach:
 * Perform a DFS traversal of the binary tree, tracking whether the current node
 * is a left child. When we encounter a leaf node that is a left child, add its
 * value to the sum.
 *
 * Time Complexity: O(n) - we visit every node once
 * Space Complexity: O(h) - where h is the height of the tree (recursion stack)
 *                  O(log n) for balanced tree, O(n) worst case for skewed tree
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
export function sumOfLeftLeaves(root) {
  function dfs(node, isLeft) {
    if (!node) return 0;

    // Check if this is a leaf node
    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }

    // Recurse: left child is a left child (isLeft=true), right child is not (isLeft=false)
    return dfs(node.left, true) + dfs(node.right, false);
  }

  return dfs(root, false);
}

/**
 * Helper function to build a binary tree from an array (level-order)
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
