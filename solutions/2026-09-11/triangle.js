// Triangle — Medium
// https://leetcode.com/problems/triangle/

/**
 * Minimum Path Sum in Triangle
 *
 * Approach: Bottom-up Dynamic Programming
 * Start from the second-to-last row and work upwards.
 * For each cell, add the minimum of the two adjacent cells in the row below.
 * This modifies (or uses a copy of) the bottom row and propagates upward.
 * The answer is at dp[0] after processing all rows.
 *
 * Time Complexity: O(n^2) where n is the number of rows
 * Space Complexity: O(n) using only the bottom row as extra space
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
export function minimumTotal(triangle) {
  const n = triangle.length;
  
  // Start with a copy of the bottom row
  const dp = [...triangle[n - 1]];
  
  // Work upward from second-to-last row
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // Choose the minimum path from the two adjacent cells below
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }
  
  return dp[0];
}
