// Container With Most Water — Medium
// https://leetcode.com/problems/container-with-most-water/

/**
 * Container With Most Water
 *
 * Approach: Two Pointer Technique
 * - Start with two pointers at the leftmost and rightmost positions.
 * - Calculate the area formed by the two lines at the pointers.
 * - Move the pointer pointing to the shorter line inward (since moving the taller
 *   line inward can only decrease or maintain the width without guaranteed height gain).
 * - Track the maximum area seen so far.
 * - Repeat until the two pointers meet.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only a constant amount of extra space used
 */

/**
 * @param {number[]} height
 * @return {number}
 */
export function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const currentArea = width * minHeight;

    if (currentArea > maxWater) {
      maxWater = currentArea;
    }

    // Move the pointer with the shorter line inward
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
