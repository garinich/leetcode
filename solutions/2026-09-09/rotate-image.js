// Rotate Image — Medium
// https://leetcode.com/problems/rotate-image/

/**
 * Rotates an n x n matrix 90 degrees clockwise in-place.
 *
 * Approach:
 * 1. Transpose the matrix (swap matrix[i][j] with matrix[j][i])
 * 2. Reverse each row
 *
 * This combination achieves a 90-degree clockwise rotation.
 *
 * Example:
 * Original:     Transposed:   Reversed rows:
 * 1 2 3         1 4 7         7 4 1
 * 4 5 6   -->   2 5 8   -->   8 5 2
 * 7 8 9         3 6 9         9 6 3
 *
 * Time Complexity: O(n^2) - we visit each element a constant number of times
 * Space Complexity: O(1) - rotation is done in-place with only temp variable
 *
 * @param {number[][]} matrix - n x n 2D matrix to rotate in-place
 * @return {void} - modifies matrix in-place
 */
export function rotate(matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  // Only iterate over upper triangle to avoid double-swapping
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
