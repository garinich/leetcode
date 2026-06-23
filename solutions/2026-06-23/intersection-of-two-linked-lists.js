// Intersection of Two Linked Lists — Easy
// https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Intersection of Two Linked Lists
 *
 * Approach: Two-pointer technique
 * - Use two pointers, pA and pB, starting at headA and headB respectively.
 * - Advance each pointer one step at a time.
 * - When pA reaches the end of list A, redirect it to headB.
 * - When pB reaches the end of list B, redirect it to headA.
 * - If the lists intersect, the pointers will meet at the intersection node
 *   after at most m + n steps (where m and n are the lengths of the lists).
 * - If they don't intersect, both pointers will reach null at the same time.
 *
 * Why it works:
 * - If lists have lengths m and n with a shared tail of length c:
 *   - pA travels: (m - c) + c + (n - c) = m + n - c steps to reach intersection
 *   - pB travels: (n - c) + c + (m - c) = m + n - c steps to reach intersection
 *   - Both pointers travel the same distance, so they meet at the intersection.
 * - If no intersection, both pointers become null after m + n steps.
 *
 * Time Complexity: O(m + n) - each pointer traverses at most m + n nodes
 * Space Complexity: O(1) - only two pointer variables used
 */

export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
export function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  // Traverse both lists; when one reaches the end, redirect to the other's head
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  // Either both are null (no intersection) or both point to the intersection node
  return pA;
}
