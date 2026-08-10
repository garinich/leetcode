// String to Integer (atoi) — Medium
// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * String to Integer (atoi)
 *
 * Approach:
 * 1. Trim leading whitespace
 * 2. Check for optional sign character ('+' or '-')
 * 3. Read consecutive digit characters, stop at first non-digit
 * 4. Clamp result to 32-bit signed integer range
 *
 * Time Complexity: O(n) where n is length of string
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
export function myAtoi(s) {
  const INT_MAX = 2 ** 31 - 1;  // 2147483647
  const INT_MIN = -(2 ** 31);    // -2147483648

  let i = 0;
  const n = s.length;

  // Step 1: Skip leading whitespace
  while (i < n && s[i] === ' ') {
    i++;
  }

  // Step 2: Determine sign
  let sign = 1;
  if (i < n && (s[i] === '+' || s[i] === '-')) {
    if (s[i] === '-') sign = -1;
    i++;
  }

  // Step 3: Read digits
  let result = 0;
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

    // Check for overflow before updating result
    // result * 10 + digit > INT_MAX
    if (result > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return sign * result;
}
