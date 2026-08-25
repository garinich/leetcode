// Summary Ranges — Easy
// https://leetcode.com/problems/summary-ranges/

/**
 * Summary Ranges
 *
 * Approach:
 * - Iterate through the sorted array, tracking the start of each range.
 * - For each element, check if it is consecutive with the next element.
 * - If not (or if it's the last element), close the current range and add it to results.
 * - Format the range as "a->b" if a != b, or "a" if a == b.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - excluding the output array
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
export function summaryRanges(nums) {
  const result = [];
  let i = 0;

  while (i < nums.length) {
    const start = nums[i];

    // Extend the range as far as consecutive numbers go
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    const end = nums[i];

    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${end}`);
    }

    i++;
  }

  return result;
}
