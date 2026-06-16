// Unique Paths II — Medium
// https://leetcode.com/problems/unique-paths-ii/

/**
 * Unique Paths II - Dynamic Programming Approach
 *
 * Approach:
 * Use dynamic programming where dp[i][j] represents the number of unique paths
 * to reach cell (i, j). If a cell has an obstacle, dp[i][j] = 0.
 * For the first row and column, paths are 1 until an obstacle is encountered,
 * after which all subsequent cells are 0 (no way around obstacle).
 * For other cells: dp[i][j] = dp[i-1][j] + dp[i][j-1] (if no obstacle)
 *
 * Time Complexity: O(m * n) - we visit each cell exactly once
 * Space Complexity: O(m * n) - for the dp table (can be optimized to O(n))
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // If start or end is blocked, return 0
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
    return 0;
  }

  // Initialize dp table
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // Starting point
  dp[0][0] = 1;

  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i - 1][0];
  }

  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j - 1];
  }

  // Fill rest of the table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}
