// Reverse Words in a String — Medium
// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * Reverse Words in a String
 *
 * Approach:
 * 1. Trim the string to remove leading/trailing spaces
 * 2. Split by one or more spaces using regex /\s+/
 * 3. Reverse the resulting array of words
 * 4. Join with a single space
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for storing the words array
 */

/**
 * @param {string} s
 * @return {string}
 */
export function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}
