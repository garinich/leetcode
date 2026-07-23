// Search in Rotated Sorted Array II — Medium
// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * Search in Rotated Sorted Array II
 *
 * Approach:
 * Use a modified binary search. The key challenge with duplicates is that when
 * nums[left] === nums[mid], we can't determine which side is sorted.
 * In that case, we simply increment left (shrink the search space by 1).
 *
 * Otherwise:
 * - If left half is sorted (nums[left] <= nums[mid]):
 *   - If target is in [nums[left], nums[mid]), search left half
 *   - Otherwise search right half
 * - If right half is sorted (nums[mid] < nums[right]):
 *   - If target is in (nums[mid], nums[right]], search right half
 *   - Otherwise search left half
 *
 * Time Complexity: O(n) worst case (all duplicates), O(log n) average case
 * Space Complexity: O(1)
 *
 * @param {number[]} nums - Rotated sorted array (may contain duplicates)
 * @param {number} target - Target value to search for
 * @returns {boolean} - True if target exists in nums, false otherwise
 */
export function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }

    // Can't determine which side is sorted due to duplicates
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}
