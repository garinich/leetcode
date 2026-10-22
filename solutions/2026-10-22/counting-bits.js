// Counting Bits — Easy
// https://leetcode.com/problems/counting-bits/

/**
 * Counting Bits
 *
 * Approach: Dynamic Programming
 * For each number i, we use the relation:
 *   - If i is even: countBits(i) = countBits(i / 2)  (right shift, same number of 1s)
 *   - If i is odd:  countBits(i) = countBits(i - 1) + 1 (one more 1 than the previous even number)
 *
 * This can be simplified to: ans[i] = ans[i >> 1] + (i & 1)
 * Because right-shifting removes the last bit, and (i & 1) adds 1 if the last bit was 1.
 *
 * Time Complexity: O(n) - single pass through 0 to n
 * Space Complexity: O(n) - for the output array
 *
 * @param {number} n
 * @return {number[]}
 */
export function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}
