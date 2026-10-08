// Plus One — Easy
// https://leetcode.com/problems/plus-one/

/**
 * Plus One
 *
 * Approach:
 * Iterate from the last digit to the first.
 * If the current digit is less than 9, simply increment it and return.
 * If the current digit is 9, set it to 0 and carry over to the next digit.
 * If all digits were 9 (we exit the loop), prepend 1 to the array.
 *
 * Time Complexity: O(n) where n is the number of digits
 * Space Complexity: O(1) extra space (O(n) only in the all-9s edge case for the new array)
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
export function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  // All digits were 9, need to prepend 1
  return [1, ...digits];
}
