// Longest Palindrome — Easy
// https://leetcode.com/problems/longest-palindrome/

/**
 * Longest Palindrome
 *
 * Approach:
 * - Count the frequency of each character using a Map.
 * - For a palindrome, we can use all pairs of characters (even counts).
 * - If any character has an odd count, we can place one of them in the middle.
 * - Sum up all even counts, and for odd counts add (count - 1) to use the pairs.
 * - If there's any character with an odd frequency, add 1 for the center character.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(1) since the character set is fixed (52 letters max)
 */

/**
 * @param {string} s
 * @return {number}
 */
export function longestPalindrome(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let length = 0;
  let hasOdd = false;

  for (const count of freq.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) {
    length += 1;
  }

  return length;
}
