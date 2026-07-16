// Search in Rotated Sorted Array — Medium
// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * Search in Rotated Sorted Array
 *
 * Approach:
 * Use modified binary search. At each step, determine which half of the array
 * is sorted. If the left half is sorted, check if target lies within it;
 * if so, search left, otherwise search right. Same logic applies if the right
 * half is sorted.
 *
 * Time Complexity: O(log n) - binary search
 * Space Complexity: O(1) - no extra space used
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target is in the sorted left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      // Target is in the sorted right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
