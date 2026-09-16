// Move Zeroes — Easy
// https://leetcode.com/problems/move-zeroes/

/**
 * Move Zeroes
 *
 * Approach: Two-pointer technique
 * - Use a 'insertPos' pointer to track where the next non-zero element should go
 * - Iterate through the array, and whenever we find a non-zero element,
 *   place it at insertPos and increment insertPos
 * - After processing all elements, fill the remaining positions with 0s
 *
 * This minimizes operations by only writing when necessary.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - in-place, no extra space used
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums) {
  let insertPos = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill remaining positions with zeros
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
}
