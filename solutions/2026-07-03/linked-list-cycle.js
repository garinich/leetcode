// Linked List Cycle — Easy
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Linked List Cycle Detection using Floyd's Tortoise and Hare Algorithm
 *
 * Approach:
 * - Use two pointers: slow (moves 1 step) and fast (moves 2 steps)
 * - If there's a cycle, fast will eventually catch up to slow
 * - If there's no cycle, fast will reach the end (null)
 *
 * Time Complexity: O(n) - in the worst case we traverse the list once
 * Space Complexity: O(1) - only two pointers used regardless of list size
 */

/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Detects if a linked list has a cycle.
 * @param {ListNode} head - Head of the linked list
 * @returns {boolean} - True if cycle exists, false otherwise
 */
export function hasCycle(head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

/**
 * Helper function to build a linked list from an array with an optional cycle position.
 * @param {number[]} values - Array of node values
 * @param {number} pos - Index where tail connects to (-1 for no cycle)
 * @returns {ListNode} - Head of the linked list
 */
export function buildLinkedList(values, pos) {
  if (!values || values.length === 0) return null;

  const nodes = values.map(val => new ListNode(val));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos !== -1 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}
