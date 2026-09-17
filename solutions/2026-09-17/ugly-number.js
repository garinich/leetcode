// Ugly Number — Easy
// https://leetcode.com/problems/ugly-number/

/**
 * Ugly Number
 *
 * Approach:
 * Repeatedly divide n by 2, 3, and 5 as long as it's divisible.
 * If n becomes 1 after all divisions, it's an ugly number.
 * If n is <= 0, it's not an ugly number (per definition, ugly numbers are positive).
 *
 * Time Complexity: O(log n) - we divide n repeatedly
 * Space Complexity: O(1) - constant extra space
 */

/**
 * @param {number} n
 * @return {boolean}
 */
export function isUgly(n) {
  if (n <= 0) return false;

  const factors = [2, 3, 5];
  for (const factor of factors) {
    while (n % factor === 0) {
      n = Math.floor(n / factor);
    }
  }

  return n === 1;
}
