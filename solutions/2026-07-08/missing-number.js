// Missing Number — Easy
// https://leetcode.com/problems/missing-number/

/**
 * Missing Number
 *
 * Approach: Gauss's formula
 * The sum of numbers from 0 to n is n*(n+1)/2.
 * Subtract the actual sum of the array from the expected sum.
 * The difference is the missing number.
 *
 * Time Complexity: O(n) - single pass to compute sum
 * Space Complexity: O(1) - only a few variables used
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}
