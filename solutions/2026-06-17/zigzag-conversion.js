// Zigzag Conversion — Medium
// https://leetcode.com/problems/zigzag-conversion/

/**
 * Zigzag Conversion
 *
 * Approach:
 * Simulate the zigzag pattern by maintaining an array of strings, one per row.
 * Use a pointer to track the current row and a direction flag to move up or down.
 * Iterate through each character in the string, appending it to the current row's string,
 * then move the row pointer. When we reach the top or bottom row, reverse direction.
 * Finally, concatenate all rows to get the result.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for storing the rows
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export function convert(s, numRows) {
  // Edge case: if numRows is 1 or greater than string length, no zigzag needed
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  // Create an array of strings for each row
  const rows = new Array(numRows).fill('');

  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;

    // Reverse direction at top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
}
