// Minimum Path Sum — Medium
// https://leetcode.com/problems/minimum-path-sum/

/**
 * Minimum Path Sum
 *
 * Approach: Dynamic Programming
 * We use the grid itself (or a dp array) to store the minimum path sum
 * to reach each cell. For each cell, the minimum path sum is the cell's
 * value plus the minimum of the path sum from the cell above or the cell
 * to the left.
 *
 * Base cases:
 * - Top-left cell: just its own value
 * - First row: can only come from the left
 * - First column: can only come from above
 *
 * Time Complexity: O(m * n) where m = rows, n = cols
 * Space Complexity: O(1) if we modify grid in place, O(m*n) if we use separate dp array
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
export function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Create a dp array to avoid mutating the input
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // Initialize top-left
  dp[0][0] = grid[0][0];

  // Initialize first column (can only come from above)
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Initialize first row (can only come from the left)
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Fill in the rest of the dp table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
}
