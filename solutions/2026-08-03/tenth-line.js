// Tenth Line — Easy
// https://leetcode.com/problems/tenth-line/

/**
 * Tenth Line
 *
 * Approach:
 * Split the input text by newline characters and return the 10th line (index 9).
 * If the file has fewer than 10 lines, return an empty string or nothing.
 *
 * Time Complexity: O(n) where n is the number of characters in the file
 * Space Complexity: O(L) where L is the number of lines
 */

/**
 * Returns the 10th line of the given text content.
 * @param {string} fileContent - The content of the file as a string
 * @returns {string} - The 10th line, or empty string if fewer than 10 lines
 */
export function getTenthLine(fileContent) {
  const lines = fileContent.split('\n');
  if (lines.length < 10) {
    return '';
  }
  return lines[9];
}

/**
 * Alternative approach using a counter (simulates reading line by line)
 * @param {string} fileContent - The content of the file as a string
 * @returns {string} - The 10th line, or empty string if fewer than 10 lines
 */
export function getTenthLineCounter(fileContent) {
  let count = 0;
  let start = 0;
  const target = 10;

  for (let i = 0; i <= fileContent.length; i++) {
    if (i === fileContent.length || fileContent[i] === '\n') {
      count++;
      if (count === target) {
        return fileContent.slice(start, i);
      }
      start = i + 1;
    }
  }
  return '';
}

/**
 * Alternative approach using sed-like behavior with array slice
 * @param {string} fileContent - The content of the file as a string
 * @returns {string} - The 10th line, or empty string if fewer than 10 lines
 */
export function getTenthLineSed(fileContent) {
  const lines = fileContent.split('\n');
  // sed -n '10p' equivalent
  return lines.length >= 10 ? lines.slice(9, 10)[0] : '';
}
