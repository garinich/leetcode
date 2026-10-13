// Find Minimum in Rotated Sorted Array — Medium
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * Find Minimum in Rotated Sorted Array
 *
 * Approach: Binary Search
 * - The rotated sorted array has two sorted halves.
 * - We use binary search to find the pivot (minimum element).
 * - At each step, compare nums[mid] with nums[right]:
 *   - If nums[mid] > nums[right], the minimum is in the right half (left = mid + 1)
 *   - Otherwise, the minimum is in the left half including mid (right = mid)
 * - Continue until left === right, which points to the minimum.
 *
 * Time Complexity: O(log n) - binary search halves the search space each iteration
 * Space Complexity: O(1) - only using constant extra space
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // Minimum is in the right half
      left = mid + 1;
    } else {
      // Minimum is in the left half including mid
      right = mid;
    }
  }

  return nums[left];
}
