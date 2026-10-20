// Valid Sudoku — Medium
// https://leetcode.com/problems/valid-sudoku/

/**
 * Valid Sudoku
 *
 * Approach:
 * Use three sets of HashSets to track seen numbers:
 * - rows[i]: numbers seen in row i
 * - cols[j]: numbers seen in column j
 * - boxes[k]: numbers seen in 3x3 box k (indexed 0-8)
 *
 * For each cell (i, j), if it contains a digit:
 * - Check if the digit already exists in the current row, column, or box
 * - If yes, return false (invalid)
 * - Otherwise, add the digit to the respective sets
 *
 * Box index is calculated as: Math.floor(i/3) * 3 + Math.floor(j/3)
 *
 * Time Complexity: O(1) - board is always 9x9, so at most 81 cells
 * Space Complexity: O(1) - at most 9 entries per set, 27 sets total
 */

export function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];

      if (val === '.') continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
}
