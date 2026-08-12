// Populating Next Right Pointers in Each Node II — Medium
// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * Populating Next Right Pointers in Each Node II
 *
 * Approach:
 * Use a level-order traversal (BFS) approach with constant extra space by
 * leveraging the next pointers already established in the previous level.
 *
 * For each level, we use the next pointers of the current level to traverse
 * all nodes, and while doing so, we connect the children (next level) together.
 *
 * We use a dummy node as the head of the next level's linked list to simplify
 * the connection logic.
 *
 * Time Complexity: O(n) - we visit each node exactly once
 * Space Complexity: O(1) - only using a constant number of pointers
 *                          (not counting the implicit call stack for recursion)
 */

/**
 * Definition for a Node.
 */
export class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
export function connect(root) {
  if (!root) return null;

  // curr is the current level's node we're processing
  let curr = root;

  while (curr) {
    // dummy is a placeholder head for the next level's linked list
    const dummy = new Node(0);
    // tail tracks the last node we've connected in the next level
    let tail = dummy;

    // Traverse the current level using next pointers
    while (curr) {
      // If current node has a left child, add it to the next level list
      if (curr.left) {
        tail.next = curr.left;
        tail = tail.next;
      }
      // If current node has a right child, add it to the next level list
      if (curr.right) {
        tail.next = curr.right;
        tail = tail.next;
      }
      // Move to the next node in the current level
      curr = curr.next;
    }

    // Move to the next level (first node of the next level)
    curr = dummy.next;
  }

  return root;
}

/**
 * Helper function to build a binary tree from array representation
 * @param {Array} arr
 * @return {Node}
 */
export function buildTree(arr) {
  if (!arr || arr.length === 0) return null;

  const root = new Node(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new Node(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new Node(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

/**
 * Helper to serialize the tree using next pointers (level order with #)
 * @param {Node} root
 * @return {string}
 */
export function serialize(root) {
  if (!root) return '';

  const result = [];
  let levelStart = root;

  while (levelStart) {
    let curr = levelStart;
    levelStart = null;
    let foundNext = false;

    while (curr) {
      result.push(curr.val);
      // Find the first non-null child for the next level
      if (!foundNext) {
        if (curr.left) {
          levelStart = curr.left;
          foundNext = true;
        } else if (curr.right) {
          levelStart = curr.right;
          foundNext = true;
        }
      }
      curr = curr.next;
    }
    result.push('#');
  }

  return result.join(',');
}
