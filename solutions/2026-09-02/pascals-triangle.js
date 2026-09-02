// Pascal's Triangle — Easy
// https://leetcode.com/problems/pascals-triangle/

/**
 * Pascal's Triangle
 *
 * Approach:
 * Build each row iteratively. The first and last elements of each row are always 1.
 * Each interior element is the sum of the two elements directly above it
 * (i.e., from the previous row at indices j-1 and j).
 *
 * Time Complexity: O(numRows^2) - we compute each element once
 * Space Complexity: O(numRows^2) - storing all elements in the triangle
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
export function generate(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);

    // Fill interior elements (not first or last)
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
}
