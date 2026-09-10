// Combination Sum — Medium
// https://leetcode.com/problems/combination-sum/

/**
 * Combination Sum
 *
 * Approach: Backtracking
 * - Sort candidates to enable pruning
 * - Use recursive backtracking to explore all combinations
 * - At each step, either include current candidate (can reuse) or move to next
 * - Prune branches where remaining target < 0
 * - Start index prevents duplicate combinations (e.g., [2,3] and [3,2])
 *
 * Time Complexity: O(N^(T/M)) where N is candidates length, T is target, M is min candidate value
 * Space Complexity: O(T/M) for recursion depth, plus output space
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  function backtrack(startIndex, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const candidate = candidates[i];
      // Prune: if candidate exceeds remaining, no need to continue (sorted)
      if (candidate > remaining) break;

      current.push(candidate);
      // Pass i (not i+1) to allow reuse of same candidate
      backtrack(i, current, remaining - candidate);
      current.pop();
    }
  }

  backtrack(0, [], target);
  return result;
}
