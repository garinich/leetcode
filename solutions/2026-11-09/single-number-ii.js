// Single Number II — Medium
// https://leetcode.com/problems/single-number-ii/

/**
 * Single Number II
 *
 * Approach: Bit manipulation using two variables `ones` and `twos`.
 * - `ones` holds bits that have appeared exactly once (mod 3)
 * - `twos` holds bits that have appeared exactly twice (mod 3)
 * - When a bit appears three times, it's removed from both `ones` and `twos`
 *
 * For each number:
 * 1. Add to `ones` if not already in `twos`: ones ^= num; ones &= ~twos
 * 2. Add to `twos` if not already in `ones`: twos ^= num; twos &= ~ones
 *
 * After processing all numbers, `ones` contains the single element.
 *
 * Time Complexity: O(n) - linear scan through the array
 * Space Complexity: O(1) - only two integer variables used
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function singleNumber(nums) {
  let ones = 0;
  let twos = 0;

  for (const num of nums) {
    // Update ones: add num if not in twos, remove if already in ones (XOR)
    ones ^= num;
    ones &= ~twos;

    // Update twos: add num if not in ones, remove if already in twos (XOR)
    twos ^= num;
    twos &= ~ones;
  }

  return ones;
}
