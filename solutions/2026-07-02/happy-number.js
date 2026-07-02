// Happy Number — Easy
// https://leetcode.com/problems/happy-number/

/**
 * Determines if a number is a "happy number".
 *
 * Approach:
 * Use Floyd's cycle detection algorithm (fast and slow pointers) to detect
 * if the sequence of digit-square sums enters a cycle.
 * - slow pointer advances one step at a time
 * - fast pointer advances two steps at a time
 * If they meet at 1, the number is happy. If they meet at any other value,
 * there is a cycle and the number is not happy.
 *
 * Alternatively, we can use a Set to track seen values and stop if we see
 * a repeated value (cycle detected) or reach 1.
 *
 * Time Complexity: O(log n) per step, and the cycle length is bounded,
 *   so overall O(log n) amortized.
 * Space Complexity: O(1) with Floyd's algorithm (no extra storage needed).
 */

/**
 * Computes the sum of squares of digits of n.
 * @param {number} n
 * @returns {number}
 */
function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

/**
 * Returns true if n is a happy number, false otherwise.
 * @param {number} n
 * @returns {boolean}
 */
export function isHappy(n) {
  let slow = n;
  let fast = sumOfSquares(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
  }

  return fast === 1;
}
