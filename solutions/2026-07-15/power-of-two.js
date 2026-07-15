// Power of Two — Easy
// https://leetcode.com/problems/power-of-two/

/**
 * Determines if a given integer is a power of two.
 *
 * Approach:
 * A power of two in binary has exactly one bit set (e.g., 1=0001, 2=0010, 4=0100, 8=1000).
 * If n is a power of two, then n & (n - 1) == 0.
 * This works because subtracting 1 from a power of two flips all bits from the
 * lowest set bit downward (e.g., 4 = 100, 3 = 011, so 4 & 3 = 000).
 * We also need to ensure n > 0 since 0 is not a power of two.
 *
 * Time Complexity: O(1) - single bitwise operation
 * Space Complexity: O(1) - no extra space used
 *
 * @param {number} n
 * @return {boolean}
 */
export function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
