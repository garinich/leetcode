// 3Sum Closest — Medium
// https://leetcode.com/problems/3sum-closest/

/**
 * 3Sum Closest
 *
 * Approach:
 * 1. Sort the array
 * 2. Use a fixed pointer i and two pointers (left, right) to find the closest sum
 * 3. For each i, move left and right pointers based on comparison with target
 * 4. Track the closest sum seen so far
 *
 * Time Complexity: O(n^2) - outer loop O(n), inner two-pointer O(n)
 * Space Complexity: O(1) - only constant extra space (excluding sort)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest;
}
