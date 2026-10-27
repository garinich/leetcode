// Reverse Linked List — Easy
// https://leetcode.com/problems/reverse-linked-list/

/**
 * Reverse a singly linked list.
 *
 * Iterative Approach:
 * - Use three pointers: prev (null), curr (head), next (null)
 * - Traverse the list, reversing each node's next pointer
 * - Time Complexity: O(n) - single pass through the list
 * - Space Complexity: O(1) - only constant extra space
 *
 * Recursive Approach:
 * - Base case: empty list or single node
 * - Recursively reverse the rest of the list
 * - Then set current node as the tail
 * - Time Complexity: O(n) - visits each node once
 * - Space Complexity: O(n) - call stack depth equals list length
 */

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Helper: Build linked list from array
 * @param {number[]} arr
 * @returns {ListNode|null}
 */
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

/**
 * Helper: Convert linked list to array
 * @param {ListNode|null} head
 * @returns {number[]}
 */
export function listToArray(head) {
  const result = [];
  let curr = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

/**
 * Iterative solution to reverse a linked list
 * @param {ListNode|null} head
 * @returns {ListNode|null}
 */
export function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next; // save next node
    curr.next = prev;       // reverse the pointer
    prev = curr;            // move prev forward
    curr = next;            // move curr forward
  }

  return prev; // prev is now the new head
}

/**
 * Recursive solution to reverse a linked list
 * @param {ListNode|null} head
 * @returns {ListNode|null}
 */
export function reverseListRecursive(head) {
  // Base case: empty list or single node
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively reverse the rest of the list
  const newHead = reverseListRecursive(head.next);

  // Make the next node point back to current node
  head.next.next = head;
  head.next = null; // current node becomes the tail

  return newHead;
}
