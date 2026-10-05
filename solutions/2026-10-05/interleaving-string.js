// Interleaving String — Medium
// https://leetcode.com/problems/interleaving-string/

/**
 * Interleaving String
 *
 * Approach: Dynamic Programming
 * 
 * We use a 2D DP table where dp[i][j] represents whether s3[0..i+j-1] can be
 * formed by interleaving s1[0..i-1] and s2[0..j-1].
 *
 * Base case: dp[0][0] = true (empty strings interleave to form empty string)
 *
 * Transitions:
 * - dp[i][j] = true if:
 *   1. dp[i-1][j] is true AND s1[i-1] === s3[i+j-1] (take char from s1), OR
 *   2. dp[i][j-1] is true AND s2[j-1] === s3[i+j-1] (take char from s2)
 *
 * For O(s2.length) space optimization, we use a 1D array and update in place.
 *
 * Time Complexity: O(m * n) where m = s1.length, n = s2.length
 * Space Complexity: O(n) with the optimized 1D DP approach
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
export function isInterleave(s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;

  // Early exit: lengths must match
  if (m + n !== s3.length) return false;

  // 1D DP array of size (n+1)
  // dp[j] = true means s3[0..i+j-1] can be formed by interleaving s1[0..i-1] and s2[0..j-1]
  const dp = new Array(n + 1).fill(false);

  // Initialize: both s1 and s2 are empty prefix
  dp[0] = true;

  // Fill first row: only using s2 (i=0)
  for (let j = 1; j <= n; j++) {
    dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
  }

  // Fill remaining rows
  for (let i = 1; i <= m; i++) {
    // Update dp[0] for this row (only using s1)
    dp[0] = dp[0] && s1[i - 1] === s3[i - 1];

    for (let j = 1; j <= n; j++) {
      // Take from s1: dp[j] (which is dp[i-1][j] from previous row)
      const fromS1 = dp[j] && s1[i - 1] === s3[i + j - 1];
      // Take from s2: dp[j-1] (which is dp[i][j-1] already updated)
      const fromS2 = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
      dp[j] = fromS1 || fromS2;
    }
  }

  return dp[n];
}
