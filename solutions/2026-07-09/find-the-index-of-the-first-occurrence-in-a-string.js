// Find the Index of the First Occurrence in a String — Easy
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * Find the Index of the First Occurrence in a String
 *
 * Approach:
 * Use JavaScript's built-in indexOf method to find the first occurrence
 * of needle in haystack. This internally uses an efficient string search
 * algorithm. Alternatively, we can implement a manual sliding window approach
 * checking each substring of haystack with length equal to needle.
 *
 * Time Complexity: O(n * m) where n = haystack.length, m = needle.length
 * Space Complexity: O(1) extra space
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export function strStr(haystack, needle) {
  const n = haystack.length;
  const m = needle.length;

  if (m > n) return -1;

  for (let i = 0; i <= n - m; i++) {
    if (haystack.substring(i, i + m) === needle) {
      return i;
    }
  }

  return -1;
}
