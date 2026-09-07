// Rotate List — Medium
// https://leetcode.com/problems/rotate-list/

/**
 * Rotate a linked list to the right by k places.
 *
 * Approach:
 * 1. Handle edge cases: empty list, single node, or k=0.
 * 2. Find the length of the list and make it circular by connecting tail to head.
 * 3. Calculate effective rotation: k = k % length.
 * 4. Find the new tail at position (length - k - 1) from the start.
 * 5. The new head is the node after the new tail.
 * 6. Break the circle at the new tail.
 *
 * Time Complexity: O(n) where n is the number of nodes.
 * Space Complexity: O(1) — only pointer manipulation.
 */

/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
export function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Find the length and tail of the list
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Make the list circular
  tail.next = head;

  // Effective rotation
  const steps = k % length;
  // New tail is at position (length - steps - 1) from original head
  const newTailPos = length - steps - 1;

  let newTail = head;
  for (let i = 0; i < newTailPos; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  newTail.next = null;

  return newHead;
}

/**
 * Helper: Build a linked list from an array.
 */
export function buildList(arr) {
  if (!arr || arr.length === 0) return null;
  const dummy = new ListNode(0);
  let cur = dummy;
  for (const val of arr) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return dummy.next;
}

/**
 * Helper: Convert a linked list to an array.
 */
export function listToArray(head) {
  const result = [];
  let cur = head;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
}
