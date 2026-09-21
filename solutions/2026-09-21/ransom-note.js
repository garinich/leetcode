// Ransom Note — Easy
// https://leetcode.com/problems/ransom-note/

/**
 * Ransom Note Solution
 *
 * Approach:
 * 1. Count the frequency of each character in the magazine string.
 * 2. For each character in the ransomNote, check if it exists in the magazine
 *    with sufficient frequency.
 * 3. If any character in ransomNote is not available in magazine, return false.
 * 4. Otherwise, return true.
 *
 * Time Complexity: O(m + n) where m = magazine.length and n = ransomNote.length
 * Space Complexity: O(1) since we only store counts for 26 lowercase letters
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export function canConstruct(ransomNote, magazine) {
  const charCount = {};

  // Count frequency of each character in magazine
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if ransomNote can be constructed
  for (const char of ransomNote) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}
