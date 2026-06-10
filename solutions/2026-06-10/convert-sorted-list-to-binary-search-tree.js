/*
 * Convert Sorted List to Binary Search Tree
 * Difficulty: Medium
 * Date: 2026-06-10 | Attempts: 1
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 *
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * 
 * &nbsp;
 * Example 1:
 * 
 * Input: head = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
 * 
 * Example 2:
 * 
 * Input: head = []
 * Output: []
 * 
 * &nbsp;
 * Constraints:
 * 
 * 	The number of nodes in head is in the range [0, 2 * 104].
 * 	-105 <= Node.val <= 105
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Converts a sorted linked list to a height-balanced binary search tree.
 * 
 * Approach:
 * 1. Use the two-pointer technique to find the middle of the linked list
 * 2. The middle node becomes the root of the BST
 * 3. Recursively build left subtree from nodes before middle
 * 4. Recursively build right subtree from nodes after middle
 * 5. Break the list at the middle to separate left and right parts
 * 
 * Time Complexity: O(n log n) where n is the number of nodes
 * - Finding middle takes O(n), and we do this for each level of recursion (log n levels)
 * 
 * Space Complexity: O(log n) for the recursion stack in a balanced tree
 * 
 * @param {ListNode} head - Head of the sorted linked list
 * @return {TreeNode} - Root of the height-balanced BST
 */
export function sortedListToBST(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);
    
    // Find the middle node using slow/fast pointers
    let prev = null;
    let slow = head;
    let fast = head;
    
    // Move slow to middle, fast to end, prev to node before middle
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Break the list at the middle
    if (prev) prev.next = null;
    
    // Create root with middle value
    const root = new TreeNode(slow.val);
    
    // Recursively build left subtree (from head to prev)
    root.left = sortedListToBST(head === slow ? null : head);
    
    // Recursively build right subtree (from slow.next onwards)
    root.right = sortedListToBST(slow.next);
    
    return root;
}

// Helper classes for the problem
export class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}