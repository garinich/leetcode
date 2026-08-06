// First Unique Character in a String — Easy
// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * First Unique Character in a String
 *
 * Approach:
 * 1. Use a frequency map (object) to count occurrences of each character.
 * 2. Iterate through the string a second time and return the index of the
 *    first character whose count is exactly 1.
 * 3. If no such character exists, return -1.
 *
 * Time Complexity: O(n) - two passes through the string
 * Space Complexity: O(1) - at most 26 keys in the map (lowercase English letters)
 */

/**
 * @param {string} s
 * @return {number}
 */
export function firstUniqChar(s) {
  const freq = {};

  // Count frequency of each character
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
