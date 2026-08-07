// Valid Perfect Square — Easy
// https://leetcode.com/problems/valid-perfect-square/

/**
 * Valid Perfect Square
 *
 * Approach: Binary Search
 * We search for an integer x in range [1, num] such that x * x === num.
 * If found, num is a perfect square.
 *
 * Time Complexity: O(log n) - binary search over range [1, num]
 * Space Complexity: O(1) - no extra space used
 */

/**
 * @param {number} num
 * @return {boolean}
 */
export function isPerfectSquare(num) {
  if (num < 1) return false;
  if (num === 1) return true;

  let left = 1;
  let right = Math.floor(num / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
