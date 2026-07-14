// Valid Anagram — Easy
// https://leetcode.com/problems/valid-anagram/

/**
 * Valid Anagram
 *
 * Approach:
 * Use a frequency counter (hash map) to count character occurrences in s,
 * then decrement counts for each character in t. If all counts are zero
 * at the end, the strings are anagrams.
 *
 * Time Complexity: O(n) where n is the length of the strings
 * Space Complexity: O(1) for lowercase English letters (at most 26 keys),
 *                   or O(k) for Unicode where k is the number of unique characters
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}
