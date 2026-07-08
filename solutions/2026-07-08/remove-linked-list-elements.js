// Remove Linked List Elements — Easy
// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Remove Linked List Elements
 *
 * Approach:
 * Use a sentinel/dummy node at the head to simplify edge cases where the
 * head itself needs to be removed. Iterate through the list, and whenever
 * the next node has the target value, skip it by updating the pointer.
 * Otherwise, advance the current pointer.
 *
 * Time Complexity: O(n) - we traverse the entire linked list once
 * Space Complexity: O(1) - only use a constant amount of extra space
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
 * Build a linked list from an array (helper for testing)
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
 * Convert linked list to array (helper for testing)
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
 * Remove all nodes with the given value from the linked list.
 * @param {ListNode|null} head
 * @param {number} val
 * @returns {ListNode|null}
 */
export function removeElements(head, val) {
  // Create a sentinel node to handle edge cases where head needs removal
  const sentinel = new ListNode(0);
  sentinel.next = head;

  let curr = sentinel;

  while (curr.next !== null) {
    if (curr.next.val === val) {
      // Skip the node with the target value
      curr.next = curr.next.next;
    } else {
      // Move to next node only if we didn't remove
      curr = curr.next;
    }
  }

  return sentinel.next;
}
