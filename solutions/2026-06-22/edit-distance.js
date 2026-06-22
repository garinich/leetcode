// Edit Distance — Medium
// https://leetcode.com/problems/edit-distance/

/**
 * Edit Distance (Levenshtein Distance)
 *
 * Approach: Dynamic Programming
 * - Create a 2D DP table where dp[i][j] represents the minimum edit distance
 *   between the first i characters of word1 and the first j characters of word2.
 * - Base cases:
 *   - dp[0][j] = j (insert j characters to match word2 prefix of length j)
 *   - dp[i][0] = i (delete i characters from word1 prefix of length i)
 * - Transition:
 *   - If word1[i-1] === word2[j-1]: dp[i][j] = dp[i-1][j-1] (no operation needed)
 *   - Otherwise: dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
 *     where dp[i-1][j-1] = replace, dp[i-1][j] = delete, dp[i][j-1] = insert
 *
 * Time Complexity: O(m * n) where m = word1.length, n = word2.length
 * Space Complexity: O(m * n) for the DP table (can be optimized to O(n))
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create DP table with dimensions (m+1) x (n+1)
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Base cases: converting to/from empty string
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // Delete all characters from word1
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // Insert all characters to match word2
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // Characters match, no operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Take minimum of replace, delete, insert
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j - 1], // Replace
          dp[i - 1][j],     // Delete from word1
          dp[i][j - 1]      // Insert into word1
        );
      }
    }
  }

  return dp[m][n];
}
