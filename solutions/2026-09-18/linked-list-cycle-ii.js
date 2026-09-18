// Linked List Cycle II — Medium
// https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Linked List Cycle II
 *
 * Approach: Floyd's Cycle Detection Algorithm (Tortoise and Hare)
 *
 * Phase 1: Detect if a cycle exists
 * - Use slow and fast pointers. Slow moves 1 step, fast moves 2 steps.
 * - If they meet, a cycle exists.
 *
 * Phase 2: Find the start of the cycle
 * - Reset one pointer to head, keep the other at meeting point.
 * - Both move 1 step at a time. Where they meet is the cycle start.
 *
 * Mathematical proof:
 * Let F = distance from head to cycle start
 * Let C = cycle length
 * Let a = distance from cycle start to meeting point
 * When slow and fast meet:
 * slow traveled: F + a
 * fast traveled: F + a + n*C (n full cycles)
 * fast = 2 * slow => F + a + n*C = 2(F + a)
 * => F = n*C - a
 * So moving F steps from head, and n*C - a steps from meeting point
 * both arrive at cycle start simultaneously.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function detectCycle(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  // Phase 1: Detect cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // Phase 2: Find cycle start
      let pointer1 = head;
      let pointer2 = slow;

      while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
      }

      return pointer1;
    }
  }

  return null;
}

export { ListNode };
