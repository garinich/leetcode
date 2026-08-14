// Excel Sheet Column Number — Easy
// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * Excel Sheet Column Number
 *
 * Approach:
 * Treat the column title as a base-26 number system where A=1, B=2, ..., Z=26.
 * Iterate through each character from left to right, multiplying the running
 * result by 26 and adding the numeric value of the current character.
 *
 * For example, "AB":
 *   - Start with result = 0
 *   - 'A': result = 0 * 26 + 1 = 1
 *   - 'B': result = 1 * 26 + 2 = 28
 *
 * Time Complexity: O(n) where n is the length of the column title
 * Space Complexity: O(1) - constant extra space
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
export function titleToNumber(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    result = result * 26 + charValue;
  }
  return result;
}
