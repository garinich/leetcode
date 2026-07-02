// Contains Duplicate II — Easy
// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * Contains Duplicate II
 *
 * Approach:
 * Use a HashMap to store the most recent index of each number.
 * For each element, check if it exists in the map and if the
 * difference between current index and stored index is <= k.
 * If so, return true. Otherwise, update the map with current index.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(min(n, k)) - map stores at most k+1 elements
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export function containsNearbyDuplicate(nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
    map.set(num, i);
  }

  return false;
}
