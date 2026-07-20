// Jump Game — Medium
// https://leetcode.com/problems/jump-game/

/**
 * Jump Game - Greedy Approach
 *
 * Approach:
 * Track the maximum index we can reach at any point.
 * Iterate through each index; if current index exceeds max reachable, return false.
 * Otherwise, update max reachable as max(maxReach, i + nums[i]).
 * If we complete the loop, we can reach the last index.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only a variable to track max reach
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function canJump(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
}
