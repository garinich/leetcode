// Compare Version Numbers — Medium
// https://leetcode.com/problems/compare-version-numbers/

/**
 * Compare Version Numbers
 *
 * Approach:
 * - Split both version strings by '.'
 * - Iterate through the maximum length of both arrays
 * - For each index, parse the revision as an integer (parseInt handles leading zeros)
 * - If missing, treat as 0
 * - Compare revisions at each index and return -1 or 1 if different
 * - If all revisions are equal, return 0
 *
 * Time Complexity: O(max(n, m)) where n and m are the number of revisions
 * Space Complexity: O(n + m) for storing the split arrays
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
export function compareVersion(version1, version2) {
  const v1Parts = version1.split('.');
  const v2Parts = version2.split('.');
  const maxLen = Math.max(v1Parts.length, v2Parts.length);

  for (let i = 0; i < maxLen; i++) {
    const rev1 = i < v1Parts.length ? parseInt(v1Parts[i], 10) : 0;
    const rev2 = i < v2Parts.length ? parseInt(v2Parts[i], 10) : 0;

    if (rev1 < rev2) return -1;
    if (rev1 > rev2) return 1;
  }

  return 0;
}
