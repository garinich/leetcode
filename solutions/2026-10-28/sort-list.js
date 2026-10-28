// Sort List — Medium
// https://leetcode.com/problems/sort-list/

/**
 * Sort List - Merge Sort on Linked List
 *
 * Approach:
 * Use merge sort (bottom-up or top-down) to sort the linked list.
 * 1. Find the middle of the list using slow/fast pointers
 * 2. Recursively sort the left and right halves
 * 3. Merge the two sorted halves
 *
 * Time Complexity: O(n log n) - merge sort
 * Space Complexity: O(log n) - recursive call stack
 *   (For O(1) space, bottom-up merge sort can be used)
 */

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Helper: Get the middle node of the linked list
 * Uses slow/fast pointer technique
 */
function getMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/**
 * Helper: Merge two sorted linked lists
 */
function merge(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

/**
 * Main sort function using top-down merge sort
 * @param {ListNode} head
 * @return {ListNode}
 */
export function sortList(head) {
  // Base case: empty list or single node
  if (head === null || head.next === null) {
    return head;
  }

  // Find middle and split
  const mid = getMiddle(head);
  const rightHead = mid.next;
  mid.next = null; // Split the list into two halves

  // Recursively sort both halves
  const left = sortList(head);
  const right = sortList(rightHead);

  // Merge sorted halves
  return merge(left, right);
}

/**
 * Helper: Convert array to linked list
 */
export function arrayToList(arr) {
  if (!arr || arr.length === 0) return null;
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

/**
 * Helper: Convert linked list to array
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
