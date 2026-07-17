// Unique Paths — Medium
// https://leetcode.com/problems/unique-paths/

/**
 * Unique Paths - Dynamic Programming approach
 *
 * Approach:
 * Use a 2D DP table where dp[i][j] represents the number of unique paths
 * to reach cell (i, j) from (0, 0).
 *
 * Base cases:
 * - First row: dp[0][j] = 1 for all j (only one way: move right)
 * - First col: dp[i][0] = 1 for all i (only one way: move down)
 *
 * Recurrence:
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * (paths from above + paths from left)
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n) - can be optimized to O(n) using 1D array
 */

/**
 * @param {number} m - number of rows
 * @param {number} n - number of columns
 * @return {number} - number of unique paths
 */
export function uniquePaths(m, n) {
  // Create a 2D DP table initialized to 1
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));

  // Fill in the DP table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

/**
 * Space-optimized version using 1D array
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(n)
 */
export function uniquePathsOptimized(m, n) {
  // Use a single row, initialized to 1
  const dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}
