// Longest Common Prefix — Easy
// https://leetcode.com/problems/longest-common-prefix/

/**
 * Longest Common Prefix
 *
 * Approach:
 * - Take the first string as the initial prefix candidate.
 * - Iterate through the remaining strings and shorten the prefix
 *   until it matches the beginning of each string.
 * - If the prefix becomes empty at any point, return "".
 *
 * Time Complexity: O(S) where S is the total number of characters across all strings.
 *   In the worst case we compare every character of every string.
 * Space Complexity: O(1) extra space (we store the prefix in-place).
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
export function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Shorten prefix until it matches the start of strs[i]
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}
