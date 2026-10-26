// Remove Element — Easy
// https://leetcode.com/problems/remove-element/

/**
 * Remove Element
 *
 * Approach:
 * Use a two-pointer technique. Maintain a write pointer `k` that tracks
 * the position to place the next valid element (not equal to val).
 * Iterate through the array with a read pointer. When the current element
 * is not equal to val, write it at position k and increment k.
 * At the end, k represents the count of valid elements.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - in-place modification, no extra space
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
