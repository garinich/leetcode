// Reverse Linked List II — Medium
// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Reverse Linked List II
 *
 * Approach:
 * Use a dummy node to handle edge cases where left = 1.
 * Traverse to the node just before position `left` (the "pre" node).
 * Then reverse the sublist from position `left` to `right` in one pass
 * using the standard iterative reversal technique.
 *
 * Steps:
 * 1. Create a dummy node pointing to head.
 * 2. Move `pre` pointer to the node just before position `left`.
 * 3. Use `curr` starting at position `left`, and iteratively insert
 *    the next node of `curr` right after `pre` (front insertion).
 * 4. Repeat (right - left) times.
 *
 * Time Complexity: O(n) - single pass through the list
 * Space Complexity: O(1) - only pointer variables used
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
export function reverseBetween(head, left, right) {
  if (!head || left === right) return head;

  const dummy = new ListNode(0);
  dummy.next = head;

  // Move pre to the node just before position `left`
  let pre = dummy;
  for (let i = 1; i < left; i++) {
    pre = pre.next;
  }

  // curr is the node at position `left`
  let curr = pre.next;

  // Perform (right - left) front insertions
  for (let i = 0; i < right - left; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }

  return dummy.next;
}

// Helper to build a linked list from an array
export function buildList(arr) {
  if (!arr || arr.length === 0) return null;
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper to convert linked list to array
export function listToArray(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}
