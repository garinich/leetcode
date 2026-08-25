// Power of Four — Easy
// https://leetcode.com/problems/power-of-four/

/**
 * Power of Four
 *
 * Approach:
 * A number is a power of four if:
 * 1. It is greater than 0
 * 2. It is a power of two (only one bit set): n & (n - 1) === 0
 * 3. The single set bit is at an even position (0, 2, 4, ...)
 *    We can check this using the mask 0x55555555 (binary: 01010101...)
 *    which has 1s at all even bit positions.
 *
 * This approach works without loops or recursion.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfFour(n) {
  if (n <= 0) return false;
  // Check power of two AND bit is at even position
  return (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
}
