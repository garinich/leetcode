// Add Two Numbers — Medium
// https://leetcode.com/problems/add-two-numbers/

/**
 * Add Two Numbers - Linked List Addition
 *
 * Approach:
 * - Use a dummy head node to simplify result list construction
 * - Traverse both linked lists simultaneously, adding corresponding digits
 * - Track carry from each addition
 * - Continue until both lists are exhausted AND no carry remains
 *
 * Time Complexity: O(max(m, n)) where m and n are lengths of the two lists
 * Space Complexity: O(max(m, n)) for the result linked list
 */

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Creates a linked list from an array
 * @param {number[]} arr
 * @returns {ListNode}
 */
export function arrayToList(arr) {
  const dummy = new ListNode(0);
  let curr = dummy;
  for (const val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

/**
 * Converts a linked list to an array
 * @param {ListNode} node
 * @returns {number[]}
 */
export function listToArray(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

/**
 * Adds two numbers represented as reversed linked lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
export function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;

    curr.next = new ListNode(digit);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}
