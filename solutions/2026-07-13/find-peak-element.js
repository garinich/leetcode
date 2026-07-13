// Find Peak Element — Medium
// https://leetcode.com/problems/find-peak-element/

/**
 * Find Peak Element using Binary Search
 *
 * Approach:
 * Use binary search. At each midpoint, compare nums[mid] with nums[mid+1].
 * - If nums[mid] < nums[mid+1], the peak must be to the right (ascending slope),
 *   so move left boundary to mid+1.
 * - Otherwise, the peak must be at mid or to the left (descending slope),
 *   so move right boundary to mid.
 * When left === right, we've found a peak.
 *
 * This works because:
 * - If we're on an ascending slope, there must be a peak to the right
 *   (either the slope ends or the array ends, both are peaks).
 * - If we're on a descending slope, there must be a peak to the left or at mid.
 *
 * Time Complexity: O(log n) - binary search
 * Space Complexity: O(1) - constant extra space
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      // Ascending slope: peak is to the right
      left = mid + 1;
    } else {
      // Descending slope or peak: peak is at mid or to the left
      right = mid;
    }
  }

  return left;
}
