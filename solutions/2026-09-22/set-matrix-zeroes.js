// Set Matrix Zeroes — Medium
// https://leetcode.com/problems/set-matrix-zeroes/

/**
 * Set Matrix Zeroes
 *
 * Approach: Constant space O(1) solution using the first row and first column
 * as markers to indicate which rows and columns need to be zeroed.
 *
 * Steps:
 * 1. Check if the first row and first column contain any zeros (store as flags)
 * 2. Use the first row and first column as markers for the rest of the matrix
 * 3. Zero out cells based on markers in first row/column
 * 4. Zero out first row/column if needed based on flags from step 1
 *
 * Time Complexity: O(m * n) - we traverse the matrix a constant number of times
 * Space Complexity: O(1) - we use only a constant amount of extra space
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // Step 1: Check if first row or first column has any zeros
  let firstRowHasZero = false;
  let firstColHasZero = false;

  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Step 2: Use first row and first column as markers
  // For cells matrix[i][j] where i > 0 and j > 0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // mark row
        matrix[0][j] = 0; // mark column
      }
    }
  }

  // Step 3: Zero out cells based on markers (excluding first row and column)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 4: Zero out first row if needed
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // Step 5: Zero out first column if needed
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}
