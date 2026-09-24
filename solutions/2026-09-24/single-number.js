// Single Number — Easy
// https://leetcode.com/problems/single-number/

/**
 * Single Number
 *
 * Approach: XOR Bit Manipulation
 * - XOR of a number with itself is 0 (a ^ a = 0)
 * - XOR of a number with 0 is the number itself (a ^ 0 = a)
 * - XOR is commutative and associative
 * - By XORing all numbers together, pairs cancel out (result = 0)
 *   and the single number remains
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only one variable used
 *
 * @param {number[]} nums - Array of integers where every element appears twice except one
 * @returns {number} The single element that appears only once
 */
export function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
