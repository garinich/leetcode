// Remove Duplicates from Sorted Array II — Medium
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * Remove Duplicates from Sorted Array II
 *
 * Approach:
 * Use a two-pointer technique. Maintain a write pointer `k` that tracks
 * where the next valid element should be placed. For each element in the
 * array, we allow it to be placed at position k if:
 * - k < 2 (first two elements are always valid), OR
 * - nums[i] !== nums[k-2] (the current element is different from the
 *   element two positions behind the write pointer, meaning we haven't
 *   already placed two copies of this value)
 *
 * This works because the array is sorted, so duplicates are adjacent.
 * By checking against nums[k-2], we ensure at most 2 of each value.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - in-place modification, no extra space
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function removeDuplicates(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    // Allow placement if we have fewer than 2 elements written,
    // or if current element differs from the element 2 positions back
    if (k < 2 || nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
