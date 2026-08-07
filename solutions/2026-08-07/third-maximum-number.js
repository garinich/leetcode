// Third Maximum Number — Easy
// https://leetcode.com/problems/third-maximum-number/

/**
 * Third Maximum Number
 *
 * Approach:
 * Use a Set to track distinct values, then maintain three variables
 * (first, second, third) representing the top 3 maximums.
 * Iterate through the array once, updating these variables as needed.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only storing three variables (ignoring the Set
 *   which holds at most 3 elements conceptually, though we use it for dedup)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function thirdMax(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) continue;
    seen.add(num);

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  // If third maximum doesn't exist (fewer than 3 distinct values), return max
  if (third === -Infinity) {
    return first;
  }

  return third;
}
