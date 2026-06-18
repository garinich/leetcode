// Power of Three — Easy
// https://leetcode.com/problems/power-of-three/

/**
 * Power of Three
 *
 * Approach: Without loops/recursion, we can use the mathematical property that
 * the largest power of 3 that fits in a 32-bit integer is 3^19 = 1162261467.
 * If n is a power of 3, then 1162261467 % n === 0 (since all powers of 3 are
 * factors of the largest power of 3).
 *
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1) - no extra space used
 */

/**
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfThree(n) {
  // n must be positive and must divide the largest power of 3 in 32-bit range
  // 3^19 = 1162261467 is the largest power of 3 within 32-bit integer range
  return n > 0 && 1162261467 % n === 0;
}
