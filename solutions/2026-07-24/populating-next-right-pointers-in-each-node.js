// Populating Next Right Pointers in Each Node — Medium
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/**
 * Populating Next Right Pointers in Each Node
 *
 * Approach:
 * Since this is a perfect binary tree, we can use the already-established
 * next pointers to traverse the current level and set up next pointers
 * for the next level. We start at the leftmost node of each level and:
 * 1. Connect left child to right child of same parent
 * 2. Connect right child to left child of parent's next node (if exists)
 * Then move to the next level using the leftmost node.
 *
 * This allows O(1) extra space (not counting recursion stack).
 *
 * Time Complexity: O(n) - we visit each node once
 * Space Complexity: O(1) - only using pointer variables (iterative approach)
 */

/**
 * @param {Node} root
 * @return {Node}
 */
export function connect(root) {
  if (!root) return null;

  // Start from the root level
  let leftmost = root;

  // Traverse until we reach the last level (no children)
  while (leftmost.left !== null) {
    // Iterate through the current level using next pointers
    let current = leftmost;

    while (current !== null) {
      // Connect left child to right child (same parent)
      current.left.next = current.right;

      // Connect right child to left child of next node
      if (current.next !== null) {
        current.right.next = current.next.left;
      }

      // Move to the next node at the current level
      current = current.next;
    }

    // Move down to the next level (leftmost node)
    leftmost = leftmost.left;
  }

  return root;
}
