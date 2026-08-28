// Swap Nodes in Pairs — Medium
// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Swap Nodes in Pairs
 *
 * Approach:
 * Use a dummy node to simplify edge cases. Iterate through the list
 * taking pairs of nodes and swapping them by relinking pointers.
 * For each pair (first, second), we set:
 *   - prev.next = second
 *   - first.next = second.next
 *   - second.next = first
 * Then advance prev to first (which is now the second in the pair)
 *
 * Time Complexity: O(n) - single pass through the list
 * Space Complexity: O(1) - only pointer variables used
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
 * Converts an array to a linked list.
 * @param {number[]} arr
 * @returns {ListNode|null}
 */
export function arrayToList(arr) {
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
 * Converts a linked list to an array.
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
 * Swaps every two adjacent nodes in a linked list.
 * @param {ListNode|null} head
 * @returns {ListNode|null}
 */
export function swapPairs(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (prev.next !== null && prev.next.next !== null) {
    const first = prev.next;
    const second = prev.next.next;

    // Perform the swap
    prev.next = second;
    first.next = second.next;
    second.next = first;

    // Move prev to the node after the swapped pair
    prev = first;
  }

  return dummy.next;
}
