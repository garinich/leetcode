// Valid Palindrome — Easy
// https://leetcode.com/problems/valid-palindrome/

/**
 * Valid Palindrome
 *
 * Approach:
 * 1. Use two pointers (left and right) starting from both ends of the string.
 * 2. Skip non-alphanumeric characters by moving pointers inward.
 * 3. Compare characters (case-insensitive) at both pointers.
 * 4. If any mismatch is found, return false. If pointers meet, return true.
 *
 * Time Complexity: O(n) - single pass through the string
 * Space Complexity: O(1) - no extra space used (besides pointers)
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (char) => {
    return /[a-zA-Z0-9]/.test(char);
  };

  while (left < right) {
    // Move left pointer past non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    // Move right pointer past non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters case-insensitively
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
