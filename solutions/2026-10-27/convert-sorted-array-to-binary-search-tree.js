// Convert Sorted Array to Binary Search Tree — Easy
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Convert Sorted Array to Binary Search Tree
 *
 * Approach:
 * Use divide and conquer / recursive approach.
 * Pick the middle element of the current subarray as the root.
 * Recursively build the left subtree from the left half and
 * the right subtree from the right half.
 * This ensures the tree is height-balanced because each recursive
 * call splits the array roughly in half.
 *
 * Time Complexity: O(n) - each element is visited exactly once
 * Space Complexity: O(log n) - recursion stack depth for balanced tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
export function sortedArrayToBST(nums) {
  function helper(left, right) {
    if (left > right) return null;

    // Choose the middle element as the root
    const mid = Math.floor((left + right) / 2);

    const node = new TreeNode(nums[mid]);
    node.left = helper(left, mid - 1);
    node.right = helper(mid + 1, right);

    return node;
  }

  return helper(0, nums.length - 1);
}
