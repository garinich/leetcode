// Sort Colors — Medium
// https://leetcode.com/problems/sort-colors/

/**
 * Sort Colors - Dutch National Flag Algorithm
 *
 * Approach:
 * Use the Dutch National Flag algorithm with three pointers:
 * - low: boundary for 0s (everything before low is 0)
 * - mid: current element being examined
 * - high: boundary for 2s (everything after high is 2)
 *
 * We scan from left to right with mid pointer:
 * - If nums[mid] === 0: swap with nums[low], advance both low and mid
 * - If nums[mid] === 1: just advance mid
 * - If nums[mid] === 2: swap with nums[high], decrement high (don't advance mid)
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space
 *
 * @param {number[]} nums - Array containing 0s, 1s, and 2s
 * @return {void} - Modifies nums in-place
 */
export function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[mid] and nums[low]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is in the correct region, just move mid
      mid++;
    } else {
      // nums[mid] === 2
      // Swap nums[mid] and nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
      // Don't increment mid because we need to examine the swapped element
    }
  }
}
