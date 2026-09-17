// Reverse Bits — Easy
// https://leetcode.com/problems/reverse-bits/

/**
 * Reverse Bits of a 32-bit integer.
 *
 * Approach:
 * - Iterate 32 times (for each bit in a 32-bit integer).
 * - For each iteration, shift the result left by 1 and OR it with the least
 *   significant bit of n.
 * - Then shift n right by 1 to process the next bit.
 * - Use unsigned right shift (>>>) to ensure we treat the number as unsigned.
 * - Use >>> 0 at the end to convert to an unsigned 32-bit integer.
 *
 * Time Complexity: O(1) — always exactly 32 iterations.
 * Space Complexity: O(1) — constant extra space.
 */

/**
 * @param {number} n - a 32-bit unsigned integer
 * @return {number} - the reversed bits as a 32-bit unsigned integer
 */
export function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Shift result left to make room for the next bit
    result = (result * 2 + (n & 1)) >>> 0;
    // Shift n right to get the next bit
    n = n >>> 1;
  }
  return result >>> 0;
}
