// Binary Tree Inorder Traversal — Easy
// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Performs inorder traversal of a binary tree (left -> root -> right)
 * 
 * Approach: Use iterative solution with explicit stack to simulate recursion.
 * We traverse left as deep as possible, then process current node, then go right.
 * 
 * Time Complexity: O(n) - visit each node exactly once
 * Space Complexity: O(h) - stack space where h is height of tree, worst case O(n) for skewed tree
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
export function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Go to the leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point
        current = stack.pop();
        result.push(current.val);
        
        // Visit the right subtree
        current = current.right;
    }
    
    return result;
}

/**
 * Recursive solution for inorder traversal
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(h) - recursion stack
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
export function inorderTraversalRecursive(root) {
    const result = [];
    
    function inorder(node) {
        if (node === null) return;
        
        inorder(node.left);   // Left
        result.push(node.val); // Root
        inorder(node.right);  // Right
    }
    
    inorder(root);
    return result;
}