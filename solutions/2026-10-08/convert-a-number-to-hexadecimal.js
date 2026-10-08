// Convert a Number to Hexadecimal — Easy
// https://leetcode.com/problems/convert-a-number-to-hexadecimal/

/**
 * Convert a Number to Hexadecimal
 *
 * Approach:
 * - Handle the special case where num is 0.
 * - For negative numbers, JavaScript's bitwise operations work on 32-bit signed integers,
 *   so we use (num >>> 0) to convert to an unsigned 32-bit integer (two's complement).
 * - Repeatedly extract the last 4 bits using (n & 0xf), map to hex character,
 *   then right shift by 4 bits (unsigned right shift >>> 4).
 * - Build the result string in reverse and return it.
 *
 * Time Complexity: O(1) - at most 8 hex digits for a 32-bit integer
 * Space Complexity: O(1) - constant space for the result string
 */

/**
 * @param {number} num
 * @return {string}
 */
export function toHex(num) {
  if (num === 0) return '0';

  const hexChars = '0123456789abcdef';
  let result = '';

  // Convert to unsigned 32-bit integer to handle negatives (two's complement)
  let n = num >>> 0;

  while (n !== 0) {
    result = hexChars[n & 0xf] + result;
    n = n >>> 4;
  }

  return result;
}
