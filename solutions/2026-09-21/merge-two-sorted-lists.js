// Merge Two Sorted Lists — Easy
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Merge Two Sorted Lists
 *
 * Approach:
 * Use a dummy head node to simplify edge cases. Iterate through both lists,
 * comparing the current nodes and appending the smaller one to the merged list.
 * Once one list is exhausted, append the remainder of the other list.
 *
 * Time Complexity: O(n + m) where n and m are the lengths of list1 and list2
 * Space Complexity: O(1) - only using a constant amount of extra space (pointers)
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
 * Helper to build a linked list from an array.
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
 * Helper to convert a linked list to an array.
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
 * Merges two sorted linked lists into one sorted linked list.
 * @param {ListNode|null} list1
 * @param {ListNode|null} list2
 * @returns {ListNode|null}
 */
export function mergeTwoLists(list1, list2) {
  // Create a dummy node to serve as the start of the merged list
  const dummy = new ListNode(0);
  let current = dummy;

  // Traverse both lists while both have nodes remaining
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append the remaining nodes from whichever list is not exhausted
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}
