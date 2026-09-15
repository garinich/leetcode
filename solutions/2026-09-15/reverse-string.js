// Reverse String — Easy
// https://leetcode.com/problems/reverse-string/

/**
 * Reverses a string in-place using two-pointer approach.
 *
 * Approach:
 * - Use two pointers, one at the start and one at the end of the array.
 * - Swap the characters at the two pointers, then move them toward the center.
 * - Continue until the pointers meet or cross.
 *
 * Time Complexity: O(n) - we iterate through half the array
 * Space Complexity: O(1) - only a temp variable used for swapping
 *
 * @param {character[]} s - Array of characters to reverse in-place
 * @return {void} - Modifies the array in-place
 */
export function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at left and right pointers
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}
