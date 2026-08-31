// Climbing Stairs — Easy
// https://leetcode.com/problems/climbing-stairs/

/**
 * Climbing Stairs - Dynamic Programming (Fibonacci)
 *
 * Approach:
 * The number of ways to reach step n is the sum of ways to reach step n-1
 * (then take 1 step) and ways to reach step n-2 (then take 2 steps).
 * This is exactly the Fibonacci sequence: f(n) = f(n-1) + f(n-2)
 * with base cases f(1) = 1, f(2) = 2.
 *
 * We use iterative DP with O(1) space by only keeping track of the
 * previous two values.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} n
 * @return {number}
 */
export function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // ways to reach step 1
  let prev1 = 2; // ways to reach step 2

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
