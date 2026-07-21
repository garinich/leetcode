// Subsets II — Medium
// https://leetcode.com/problems/subsets-ii/

/**
 * Subsets II - Generate all possible subsets without duplicates
 *
 * Approach:
 * - Sort the array first to group duplicates together
 * - Use backtracking to generate all subsets
 * - Skip duplicate elements at the same recursion level to avoid duplicate subsets
 * - At each level, we decide whether to include the current element or not
 * - If we skip an element, we skip all subsequent duplicates of it at the same level
 *
 * Time Complexity: O(n * 2^n) - at most 2^n subsets, each taking O(n) to copy
 * Space Complexity: O(n * 2^n) - to store all subsets, plus O(n) recursion stack
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsetsWithDup(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  function backtrack(start, current) {
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      // Skip duplicates at the same recursion level
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}
