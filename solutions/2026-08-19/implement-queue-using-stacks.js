// Implement Queue using Stacks — Easy
// https://leetcode.com/problems/implement-queue-using-stacks/

/**
 * Implement Queue using Stacks
 *
 * Approach:
 * Use two stacks: `inbox` (for push) and `outbox` (for pop/peek).
 * - push: always push to inbox.
 * - pop/peek: if outbox is empty, transfer all elements from inbox to outbox
 *   (this reverses the order, making the oldest element on top of outbox).
 *   Then pop/peek from outbox.
 *
 * This gives amortized O(1) per operation because each element is moved
 * from inbox to outbox at most once.
 *
 * Time Complexity:
 *   - push: O(1)
 *   - pop: amortized O(1), worst case O(n)
 *   - peek: amortized O(1), worst case O(n)
 *   - empty: O(1)
 *
 * Space Complexity: O(n) total for both stacks
 */

export class MyQueue {
  constructor() {
    this.inbox = [];   // stack for push
    this.outbox = [];  // stack for pop/peek
  }

  /**
   * Pushes element x to the back of the queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.inbox.push(x);
  }

  /**
   * Transfer all elements from inbox to outbox if outbox is empty.
   * @private
   */
  _transfer() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  /**
   * Removes the element from the front of the queue and returns it.
   * @return {number}
   */
  pop() {
    this._transfer();
    return this.outbox.pop();
  }

  /**
   * Returns the element at the front of the queue.
   * @return {number}
   */
  peek() {
    this._transfer();
    return this.outbox[this.outbox.length - 1];
  }

  /**
   * Returns true if the queue is empty, false otherwise.
   * @return {boolean}
   */
  empty() {
    return this.inbox.length === 0 && this.outbox.length === 0;
  }
}
