// First Bad Version — Easy
// https://leetcode.com/problems/first-bad-version/

/**
 * First Bad Version - Binary Search Approach
 *
 * Approach:
 * Use binary search to minimize the number of API calls.
 * - Set left = 1, right = n
 * - Check the middle version:
 *   - If it's bad, the first bad version could be mid or earlier → move right to mid
 *   - If it's good, the first bad version must be after mid → move left to mid + 1
 * - When left === right, we've found the first bad version
 *
 * Time Complexity: O(log n) - binary search halves the search space each iteration
 * Space Complexity: O(1) - only using a constant amount of extra space
 */

/**
 * @param {function} isBadVersion
 * @return {function}
 */
export function solution(isBadVersion) {
  /**
   * @param {number} n
   * @return {number}
   */
  return function(n) {
    let left = 1;
    let right = n;

    while (left < right) {
      // Use Math.floor((left + right) / 2) but avoid integer overflow
      const mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        // mid could be the first bad version, so keep it in range
        right = mid;
      } else {
        // mid is good, first bad must be after mid
        left = mid + 1;
      }
    }

    return left;
  };
}
