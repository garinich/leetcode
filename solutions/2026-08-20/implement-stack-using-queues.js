// Implement Stack using Queues — Easy
// https://leetcode.com/problems/implement-stack-using-queues/

/**
 * Implement Stack using Queues
 *
 * Approach: Use a single queue. On each push, enqueue the new element,
 * then rotate all previously enqueued elements to the back so the newest
 * element is always at the front of the queue.
 *
 * push: O(n) - rotate n-1 elements
 * pop:  O(1) - dequeue from front
 * top:  O(1) - peek at front
 * empty: O(1)
 *
 * Space Complexity: O(n) for storing n elements
 */

export class MyStack {
  constructor() {
    this.queue = [];
  }

  /**
   * Pushes element x to the top of the stack.
   * After pushing, rotate all previous elements to the back.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x);
    // Rotate all elements before x to the back
    let size = this.queue.length - 1;
    while (size > 0) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  /**
   * Removes the element on the top of the stack and returns it.
   * @return {number}
   */
  pop() {
    return this.queue.shift();
  }

  /**
   * Returns the element on the top of the stack without removing it.
   * @return {number}
   */
  top() {
    return this.queue[0];
  }

  /**
   * Returns true if the stack is empty, false otherwise.
   * @return {boolean}
   */
  empty() {
    return this.queue.length === 0;
  }
}
