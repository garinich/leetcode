// Palindrome Linked List — Easy
// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Palindrome Linked List
 *
 * Approach:
 * 1. Find the middle of the linked list using slow/fast pointers
 * 2. Reverse the second half of the list
 * 3. Compare the first half with the reversed second half
 * 4. Restore the list (optional) and return result
 *
 * Time Complexity: O(n) - we traverse the list a constant number of times
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
 * Helper to build a linked list from an array
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
 * @param {ListNode} head
 * @return {boolean}
 */
export function isPalindrome(head) {
  if (!head || !head.next) return true;

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let prev = null;
  let current = slow;
  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Step 3: Compare first half and reversed second half
  let left = head;
  let right = prev; // head of reversed second half

  let isPalin = true;
  while (right !== null) {
    if (left.val !== right.val) {
      isPalin = false;
      break;
    }
    left = left.next;
    right = right.next;
  }

  return isPalin;
}
