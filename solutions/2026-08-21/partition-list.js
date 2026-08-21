// Partition List — Medium
// https://leetcode.com/problems/partition-list/

/**
 * Partition List
 *
 * Approach:
 * Use two dummy heads to create two separate lists:
 * - "less" list: contains nodes with values less than x
 * - "greater" list: contains nodes with values greater than or equal to x
 *
 * Iterate through the original list, appending each node to the appropriate
 * partition list. After processing all nodes, connect the tail of the "less"
 * list to the head of the "greater" list, and set the tail of the "greater"
 * list to null to terminate the list.
 *
 * Time Complexity: O(n) - single pass through the list
 * Space Complexity: O(1) - only using a constant number of pointers
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
 * Partitions a linked list around value x such that all nodes less than x
 * come before nodes greater than or equal to x.
 *
 * @param {ListNode|null} head - Head of the linked list
 * @param {number} x - Partition value
 * @returns {ListNode|null} - Head of the partitioned linked list
 */
export function partition(head, x) {
  // Dummy heads for the two partitions
  const lessDummy = new ListNode(0);
  const greaterDummy = new ListNode(0);

  let less = lessDummy;
  let greater = greaterDummy;
  let current = head;

  while (current !== null) {
    if (current.val < x) {
      less.next = current;
      less = less.next;
    } else {
      greater.next = current;
      greater = greater.next;
    }
    current = current.next;
  }

  // Terminate the greater list
  greater.next = null;

  // Connect the less list to the greater list
  less.next = greaterDummy.next;

  return lessDummy.next;
}

/**
 * Helper function to create a linked list from an array.
 * @param {number[]} arr
 * @returns {ListNode|null}
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
 * Helper function to convert a linked list to an array.
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
