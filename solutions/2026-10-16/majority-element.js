// Majority Element — Easy
// https://leetcode.com/problems/majority-element/

/**
 * Majority Element - Boyer-Moore Voting Algorithm
 *
 * Approach:
 * Use the Boyer-Moore Voting Algorithm which works by maintaining a candidate
 * and a count. We iterate through the array:
 * - If count is 0, set the current element as the candidate
 * - If current element equals candidate, increment count
 * - Otherwise, decrement count
 *
 * The intuition is that the majority element (appearing > n/2 times) will
 * always "survive" this voting process because it outnumbers all other elements combined.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only two variables used
 *
 * @param {number[]} nums - Array of integers with a guaranteed majority element
 * @return {number} - The majority element
 */
export function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
