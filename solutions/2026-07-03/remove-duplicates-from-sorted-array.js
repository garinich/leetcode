// Remove Duplicates from Sorted Array — Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * Remove Duplicates from Sorted Array
 *
 * Approach:
 * Use a two-pointer technique. One pointer (k) tracks the position of the
 * next unique element to be placed, starting at index 1. The other pointer (i)
 * iterates through the array. When a new unique element is found (different
 * from the previous), it's placed at position k and k is incremented.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - in-place modification, no extra space used
 *
 * @param {number[]} nums - sorted array in non-decreasing order
 * @return {number} k - count of unique elements
 */
export function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // Start with 1 since first element is always unique

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
