// Sqrt(x) — Easy
// https://leetcode.com/problems/sqrtx/

/**
 * Sqrt(x) - Binary Search Approach
 *
 * Approach:
 * Use binary search to find the integer square root.
 * Search in range [0, x] for the largest integer mid where mid * mid <= x.
 * To avoid overflow with large numbers, use Math.floor(x / mid) >= mid instead of mid * mid <= x.
 *
 * Time Complexity: O(log x) - binary search over range [0, x]
 * Space Complexity: O(1) - constant extra space
 */

/**
 * @param {number} x
 * @return {number}
 */
export function mySqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Use division to avoid potential overflow: mid <= x / mid is equivalent to mid * mid <= x
    if (mid <= Math.floor(x / mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
