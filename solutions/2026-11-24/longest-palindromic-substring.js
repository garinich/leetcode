// Longest Palindromic Substring — Medium
// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * Longest Palindromic Substring
 *
 * Approach: Expand Around Center
 * For each character (and between each pair of characters), treat it as the
 * center of a palindrome and expand outward as long as characters match.
 * Track the longest palindrome found.
 *
 * Time Complexity: O(n^2) - for each of the n centers, we expand up to O(n)
 * Space Complexity: O(1) - only storing indices, not creating new strings until end
 */

/**
 * @param {string} s
 * @return {string}
 */
export function longestPalindrome(s) {
  if (!s || s.length === 0) return '';
  if (s.length === 1) return s;

  let start = 0;
  let maxLen = 1;

  /**
   * Expands around a center and returns the length of the palindrome found
   * @param {number} left - left index to start expanding from
   * @param {number} right - right index to start expanding from
   */
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    // After the loop, the palindrome is s[left+1..right-1]
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    // Odd length palindromes (single character center)
    const oddLen = expandAroundCenter(i, i);
    if (oddLen > maxLen) {
      maxLen = oddLen;
      start = i - Math.floor(oddLen / 2);
    }

    // Even length palindromes (two character center)
    const evenLen = expandAroundCenter(i, i + 1);
    if (evenLen > maxLen) {
      maxLen = evenLen;
      start = i - Math.floor(evenLen / 2) + 1;
    }
  }

  return s.substring(start, start + maxLen);
}
