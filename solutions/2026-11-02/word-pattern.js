// Word Pattern — Easy
// https://leetcode.com/problems/word-pattern/

/**
 * Word Pattern
 *
 * Approach:
 * Split the string s into words and check if there's a bijection between
 * characters in pattern and words in s.
 * Use two maps:
 *   1. charToWord: maps each pattern character to its corresponding word
 *   2. wordToChar: maps each word to its corresponding pattern character
 *
 * For each pair (char, word):
 *   - If char is already mapped, verify it maps to the current word
 *   - If word is already mapped, verify it maps to the current char
 *   - Otherwise, create both mappings
 *
 * Time Complexity: O(n) where n is the number of words (or pattern length)
 * Space Complexity: O(n) for the two hash maps
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export function wordPattern(pattern, s) {
  const words = s.split(' ');

  // Lengths must match
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const word = words[i];

    if (charToWord.has(ch)) {
      // char already mapped — verify it maps to the same word
      if (charToWord.get(ch) !== word) return false;
    } else {
      // char not yet mapped — ensure word is not already taken by another char
      if (wordToChar.has(word)) return false;
      charToWord.set(ch, word);
      wordToChar.set(word, ch);
    }
  }

  return true;
}
