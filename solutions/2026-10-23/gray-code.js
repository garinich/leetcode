// Gray Code — Medium
// https://leetcode.com/problems/gray-code/

/**
 * Gray Code Solution
 *
 * Approach:
 * Use the standard Gray code formula: gray(i) = i ^ (i >> 1)
 * For each integer i from 0 to 2^n - 1, compute its Gray code by XORing
 * the number with its right-shifted version. This produces a valid Gray code
 * sequence where adjacent values differ by exactly one bit, and the sequence
 * wraps around (first and last also differ by one bit).
 *
 * Time Complexity: O(2^n) - we generate 2^n numbers
 * Space Complexity: O(2^n) - we store 2^n numbers in the result array
 */

/**
 * @param {number} n
 * @return {number[]}
 */
export function grayCode(n) {
  const result = [];
  const total = 1 << n; // 2^n
  
  for (let i = 0; i < total; i++) {
    result.push(i ^ (i >> 1));
  }
  
  return result;
}
