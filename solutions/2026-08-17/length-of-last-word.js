// Length of Last Word — Easy
// https://leetcode.com/problems/length-of-last-word/

/**
 * Approach: Trim trailing spaces, then find the last word by iterating
 * from the end of the string until a space is encountered.
 *
 * Time Complexity: O(n) - we may traverse the entire string
 * Space Complexity: O(1) - only using a counter variable
 *
 * @param {string} s
 * @return {number}
 */
export function lengthOfLastWord(s) {
  let length = 0;
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  // Count characters of the last word
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }

  return length;
}
