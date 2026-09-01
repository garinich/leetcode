// Evaluate Reverse Polish Notation — Medium
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * Evaluate Reverse Polish Notation
 *
 * Approach:
 * Use a stack-based approach. Iterate through each token:
 * - If the token is a number, push it onto the stack.
 * - If the token is an operator, pop the top two numbers from the stack,
 *   apply the operator, and push the result back onto the stack.
 * At the end, the stack contains exactly one element: the result.
 *
 * Key detail: Division truncates toward zero. In JavaScript, Math.trunc()
 * handles this correctly for both positive and negative results.
 *
 * Time Complexity: O(n) - single pass through the tokens array
 * Space Complexity: O(n) - stack can hold up to n/2 elements in worst case
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
export function evalRPN(tokens) {
  const stack = [];
  const operators = new Set(['+', '-', '*', '/']);

  for (const token of tokens) {
    if (operators.has(token)) {
      // Pop top two operands (b is top, a is second from top)
      const b = stack.pop();
      const a = stack.pop();

      let result;
      switch (token) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          // Truncate toward zero
          result = Math.trunc(a / b);
          break;
      }

      stack.push(result);
    } else {
      // Token is a number
      stack.push(parseInt(token, 10));
    }
  }

  return stack[0];
}
