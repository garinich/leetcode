// Palindrome Number — Easy
// https://leetcode.com/problems/palindrome-number/

/**
 * Palindrome Number
 *
 * Approach:
 * - Negative numbers are never palindromes.
 * - Numbers ending in 0 (except 0 itself) are never palindromes.
 * - Reverse only half the digits to avoid overflow issues.
 * - Compare the first half with the reversed second half.
 *
 * Time Complexity: O(log10(n)) - we process half the digits
 * Space Complexity: O(1) - constant extra space
 */

/**
 * @param {number} x
 * @return {boolean}
 */
export function isPalindrome(x) {
  // Negative numbers and numbers ending in 0 (except 0) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;

  // Reverse the second half of the number
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even-length numbers: x === reversedHalf
  // For odd-length numbers: x === Math.floor(reversedHalf / 10) (middle digit doesn't matter)
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
