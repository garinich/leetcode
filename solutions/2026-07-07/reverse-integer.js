// Reverse Integer — Medium
// https://leetcode.com/problems/reverse-integer/

/**
 * Reverse Integer
 *
 * Approach:
 * 1. Handle the sign separately by checking if x is negative
 * 2. Convert the absolute value to string, reverse it, and convert back to number
 * 3. Apply the original sign
 * 4. Check if the result is within 32-bit signed integer range [-2^31, 2^31 - 1]
 * 5. Return 0 if out of range, otherwise return the reversed integer
 *
 * Note: Since JS numbers are 64-bit floats, we need to manually check the 32-bit bounds
 * rather than relying on overflow behavior.
 *
 * Time Complexity: O(log x) - number of digits in x
 * Space Complexity: O(log x) - for the string representation
 */

/**
 * @param {number} x
 * @return {number}
 */
export function reverse(x) {
  const INT_MAX = 2 ** 31 - 1;  // 2147483647
  const INT_MIN = -(2 ** 31);   // -2147483648

  const sign = x < 0 ? -1 : 1;
  const absStr = Math.abs(x).toString();
  const reversedStr = absStr.split('').reverse().join('');
  const reversedNum = sign * parseInt(reversedStr, 10);

  if (reversedNum > INT_MAX || reversedNum < INT_MIN) {
    return 0;
  }

  return reversedNum;
}
