// Min Stack — Medium
// https://leetcode.com/problems/min-stack/

/**
 * Min Stack Solution
 *
 * Approach:
 * Use two stacks - one main stack to store all values, and one auxiliary
 * 'min stack' that keeps track of the minimum value at each level of the stack.
 * When pushing a value, also push the current minimum to the min stack.
 * When popping, pop from both stacks simultaneously.
 * This ensures getMin() is always O(1) by just looking at the top of the min stack.
 *
 * Time Complexity: O(1) for all operations (push, pop, top, getMin)
 * Space Complexity: O(n) where n is the number of elements pushed
 */

export class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * Push value onto the stack
   * @param {number} val
   */
  push(val) {
    this.stack.push(val);
    // Push current min to minStack
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    }
  }

  /**
   * Remove the top element
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * Get the top element
   * @returns {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * Get the minimum element in the stack
   * @returns {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
