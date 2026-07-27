// Pascal's Triangle II — Easy
// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * Returns the rowIndex-th row of Pascal's Triangle (0-indexed).
 *
 * Approach:
 * We build the row iteratively. Starting with [1], we update the array
 * in-place from right to left for each new row. This avoids needing
 * a separate array for the previous row.
 *
 * For each row i (1 to rowIndex):
 *   - We iterate from index i down to 1
 *   - row[j] = row[j] + row[j-1]
 *   - Then we ensure row has one more element (append 1 at the end initially)
 *
 * Time Complexity: O(rowIndex^2) - we iterate through each row up to rowIndex
 * Space Complexity: O(rowIndex) - we only maintain one row array
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
export function getRow(rowIndex) {
  const row = [1];

  for (let i = 1; i <= rowIndex; i++) {
    // Expand the row by one element
    row.push(1);
    // Update from right to left to avoid overwriting values we still need
    for (let j = i - 1; j >= 1; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }

  return row;
}
