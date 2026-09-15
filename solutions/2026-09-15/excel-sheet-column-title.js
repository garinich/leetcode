// Excel Sheet Column Title — Easy
// https://leetcode.com/problems/excel-sheet-column-title/

/**
 * Excel Sheet Column Title
 *
 * Approach:
 * This is essentially a base-26 conversion problem, but with a twist:
 * instead of digits 0-25, we use 1-26 (A-Z). There is no zero digit.
 *
 * Algorithm:
 * 1. While columnNumber > 0:
 *    - Subtract 1 from columnNumber to shift from 1-indexed to 0-indexed
 *    - Take columnNumber % 26 to get the current character index (0-25)
 *    - Map that index to a character ('A' + index)
 *    - Prepend the character to the result
 *    - Divide columnNumber by 26 (integer division) for next iteration
 *
 * Example: columnNumber = 28
 *   - 28 - 1 = 27, 27 % 26 = 1 -> 'B', 27 / 26 = 1
 *   - 1 - 1 = 0, 0 % 26 = 0 -> 'A', 0 / 26 = 0
 *   - Result: "AB"
 *
 * Time Complexity: O(log26(n)) — number of digits in base-26 representation
 * Space Complexity: O(log26(n)) — to store the result string
 */

/**
 * @param {number} columnNumber
 * @return {string}
 */
export function convertToTitle(columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    // Adjust for 1-indexed (A=1 not A=0)
    columnNumber -= 1;

    // Get current character
    const charIndex = columnNumber % 26;
    result = String.fromCharCode(65 + charIndex) + result;

    // Move to the next "digit"
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}
