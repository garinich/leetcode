// Search Insert Position — Easy
// https://leetcode.com/problems/search-insert-position/

/**
 * Search Insert Position
 *
 * Approach: Binary Search
 * - Use binary search to find the target or the insertion position.
 * - If target is found, return its index.
 * - If not found, the left pointer will naturally settle at the correct insertion position.
 *
 * Time Complexity: O(log n) - binary search halves the search space each iteration
 * Space Complexity: O(1) - only using a constant amount of extra space
 */

/**
 * @param {number[]} nums - Sorted array of distinct integers
 * @param {number} target - Target value to search for or insert
 * @return {number} - Index of target or index where it would be inserted
 */
export function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // When target is not found, left is the insertion position
  return left;
}
