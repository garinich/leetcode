// Valid Parentheses — Easy
// https://leetcode.com/problems/valid-parentheses/

/**
 * Valid Parentheses
 *
 * Approach:
 * Use a stack to keep track of opening brackets.
 * For each character in the string:
 *   - If it's an opening bracket, push it onto the stack.
 *   - If it's a closing bracket, check if the top of the stack is the matching
 *     opening bracket. If it is, pop the stack. If not (or stack is empty), return false.
 * At the end, the string is valid if and only if the stack is empty.
 *
 * Time Complexity: O(n) — we iterate through each character once
 * Space Complexity: O(n) — in the worst case, all characters are opening brackets
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export function isValid(s) {
  const stack = [];
  const matchingOpen = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  const openBrackets = new Set(['(', '{', '[']);

  for (const char of s) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else {
      // It's a closing bracket
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpen[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
