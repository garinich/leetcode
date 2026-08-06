// Two Sum — Easy
// https://leetcode.com/problems/two-sum/

/**
 * Two Sum
 *
 * Approach:
 * Use a hash map to store each number and its index as we iterate.
 * For each number, compute the complement (target - nums[i]) and check
 * if it already exists in the map. If it does, we found our pair.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - hash map stores up to n elements
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}
