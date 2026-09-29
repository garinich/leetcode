// Subsets — Medium
// https://leetcode.com/problems/subsets/

/**
 * Subsets (Power Set)
 *
 * Approach: Backtracking / DFS
 * For each element, we have two choices: include it or exclude it.
 * We use a recursive backtracking approach where at each step we decide
 * whether to include the current element in the current subset.
 * We start with an empty subset and build up subsets by iterating
 * through elements starting from a given index.
 *
 * Time Complexity: O(n * 2^n) - there are 2^n subsets, each taking O(n) to copy
 * Space Complexity: O(n * 2^n) - to store all subsets; O(n) recursion stack depth
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsets(nums) {
  const result = [];

  function backtrack(startIndex, current) {
    // Add a copy of the current subset to result
    result.push([...current]);

    // Explore further elements to add to the subset
    for (let i = startIndex; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}
