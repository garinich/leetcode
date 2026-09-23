// Remove Duplicates from Sorted List — Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/**
 * Remove Duplicates from Sorted List
 *
 * Approach:
 * Since the list is already sorted, duplicates will always be adjacent.
 * We iterate through the list and whenever the current node's value equals
 * the next node's value, we skip the next node by pointing current.next
 * to current.next.next. Otherwise, we advance current to the next node.
 *
 * Time Complexity: O(n) - we traverse each node once
 * Space Complexity: O(1) - we only use a constant amount of extra space
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
 * Builds a linked list from an array.
 * @param {number[]} arr
 * @returns {ListNode|null}
 */
export function buildList(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/**
 * Converts a linked list to an array.
 * @param {ListNode|null} head
 * @returns {number[]}
 */
export function listToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

/**
 * Removes duplicates from a sorted linked list.
 * @param {ListNode|null} head
 * @returns {ListNode|null}
 */
export function deleteDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      // Skip the duplicate node
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  return head;
}
