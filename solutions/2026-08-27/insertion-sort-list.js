// Insertion Sort List — Medium
// https://leetcode.com/problems/insertion-sort-list/

/**
 * Insertion Sort List
 *
 * Approach:
 * Use a dummy head node to simplify insertion logic.
 * For each node in the original list, find the correct position
 * in the sorted portion (starting from the dummy head) and insert it there.
 *
 * Algorithm:
 * 1. Create a dummy node as the head of the sorted list.
 * 2. Iterate through the original list with 'curr'.
 * 3. For each 'curr', traverse the sorted list from 'dummy' to find
 *    the insertion point (where prev.next.val >= curr.val).
 * 4. Insert 'curr' between 'prev' and 'prev.next'.
 * 5. Move to the next node in the original list.
 *
 * Time Complexity: O(n^2) - for each element we may traverse the sorted portion
 * Space Complexity: O(1) - we reuse the existing nodes, only create one dummy node
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
 * @return {ListNode}
 */
export function insertionSortList(head) {
  const dummy = new ListNode(0);
  let curr = head;

  while (curr !== null) {
    const nextNode = curr.next; // Save next node before we modify curr.next

    // Find the insertion point in the sorted list
    let prev = dummy;
    while (prev.next !== null && prev.next.val < curr.val) {
      prev = prev.next;
    }

    // Insert curr between prev and prev.next
    curr.next = prev.next;
    prev.next = curr;

    // Move to next node in original list
    curr = nextNode;
  }

  return dummy.next;
}

/**
 * Helper: Build a linked list from an array
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
 * Helper: Convert a linked list to an array
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
