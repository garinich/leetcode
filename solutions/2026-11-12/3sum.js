// 3Sum — Medium
// https://leetcode.com/problems/3sum/

/**
 * 3Sum - Find all unique triplets that sum to zero
 *
 * Approach: Sort + Two Pointers
 * 1. Sort the array
 * 2. Iterate through each element as the first element of the triplet
 * 3. Use two pointers (left and right) to find pairs that sum to -nums[i]
 * 4. Skip duplicate values to avoid duplicate triplets
 *
 * Time Complexity: O(n^2) - outer loop O(n) * two pointer scan O(n)
 * Space Complexity: O(1) - excluding output array (sorting is in-place)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    // Skip duplicate values for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Early termination: smallest possible sum is positive
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
