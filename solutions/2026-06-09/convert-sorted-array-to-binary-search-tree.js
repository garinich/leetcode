/*
 * Convert Sorted Array to Binary Search Tree
 * Difficulty: Easy
 * Date: 2026-06-09 | Attempts: 1
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 *
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * 
 * &nbsp;
 * Example 1:
 * 
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 * 
 * Example 2:
 * 
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 * 
 * &nbsp;
 * Constraints:
 * 
 * 	1 <= nums.length <= 104
 * 	-104 <= nums[i] <= 104
 * 	nums is sorted in a strictly increasing order.
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Convert sorted array to height-balanced binary search tree
 * 
 * Approach:
 * - Use divide and conquer approach with recursion
 * - Pick middle element as root to ensure height balance
 * - Recursively build left subtree from left half
 * - Recursively build right subtree from right half
 * - Base case: empty array returns null
 * 
 * Time Complexity: O(n) - visit each element once to create a node
 * Space Complexity: O(log n) - recursion stack depth for balanced tree
 * 
 * @param {number[]} nums - sorted array in ascending order
 * @return {TreeNode} - root of height-balanced BST
 */
export function sortedArrayToBST(nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    
    function buildBST(left, right) {
        // Base case: no elements in current range
        if (left > right) {
            return null;
        }
        
        // Choose middle element as root to maintain balance
        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root.left = buildBST(left, mid - 1);
        root.right = buildBST(mid + 1, right);
        
        return root;
    }
    
    return buildBST(0, nums.length - 1);
}

// Export TreeNode for testing
export { TreeNode };