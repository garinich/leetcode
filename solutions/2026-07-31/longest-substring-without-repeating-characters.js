// Longest Substring Without Repeating Characters — Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Longest Substring Without Repeating Characters
 *
 * Approach: Sliding Window with a Map
 * - Use two pointers (left, right) to maintain a window of unique characters.
 * - Use a Map to store the most recent index of each character.
 * - As we move 'right' forward, if the character already exists in the window,
 *   move 'left' to max(left, lastSeenIndex + 1) to skip past the duplicate.
 * - Track the maximum window size encountered.
 *
 * Time Complexity: O(n) — each character is visited at most twice (once by right, once potentially updating left)
 * Space Complexity: O(min(n, m)) — where m is the size of the character set (at most 128 for ASCII)
 */

/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If character was seen and is within the current window, shrink from left
    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    // Update last seen index for this character
    lastSeen.set(char, right);

    // Update max length
    const currentLength = right - left + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}
