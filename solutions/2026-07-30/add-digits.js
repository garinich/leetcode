// Add Digits — Easy
// https://leetcode.com/problems/add-digits/

/**
 * Add Digits - Digital Root Problem
 *
 * Approach:
 * The O(1) solution uses the concept of digital root.
 * For any number n:
 * - If n == 0, return 0
 * - If n % 9 == 0, return 9
 * - Otherwise, return n % 9
 *
 * This is based on the mathematical property that the digital root
 * of a number is its value modulo 9 (with special case for multiples of 9).
 *
 * Why this works:
 * Any number can be written as: n = a0 + a1*10 + a2*100 + ...
 * Since 10 ≡ 1 (mod 9), we have 10^k ≡ 1 (mod 9)
 * Therefore n ≡ a0 + a1 + a2 + ... (mod 9)
 * The sum of digits has the same remainder when divided by 9 as the original number.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
export function addDigits(num) {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
}
