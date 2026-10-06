// Permutations II — Medium
// https://leetcode.com/problems/permutations-ii/

/**
 * Permutations II - Return all unique permutations of an array that may contain duplicates.
 *
 * Approach:
 * - Sort the array first so duplicates are adjacent.
 * - Use backtracking with a 'used' boolean array to track which elements are included.
 * - To avoid duplicate permutations: skip an element if it's the same as the previous
 *   element AND the previous element has NOT been used in the current path.
 *   This ensures we always pick duplicates in order (left to right).
 *
 * Time Complexity: O(n! * n) — generating all permutations, each of length n.
 * Space Complexity: O(n) for the recursion stack and current path.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);

  function backtrack(current) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // Skip already used elements
      if (used[i]) continue;

      // Skip duplicate: if same value as previous and previous was NOT used
      // (meaning we already explored that branch at this level)
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      current.push(nums[i]);
      backtrack(current);
      current.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}
