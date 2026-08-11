// Divide Two Integers — Medium
// https://leetcode.com/problems/divide-two-integers/

/**
 * Divide two integers without using multiplication, division, or mod operator.
 *
 * Approach:
 * - Use bit shifting to perform fast division.
 * - Work with absolute values and track the sign separately.
 * - For each iteration, find the largest multiple of divisor (using left shifts)
 *   that fits into the remaining dividend, subtract it, and accumulate the quotient.
 * - Handle overflow edge cases (INT_MIN / -1 = INT_MAX + 1 -> clamp to INT_MAX).
 *
 * Time Complexity: O(log^2 N) - outer loop runs O(log N) times, inner shift O(log N)
 * Space Complexity: O(1)
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
export function divide(dividend, divisor) {
  const INT_MAX = 2147483647;  // 2^31 - 1
  const INT_MIN = -2147483648; // -2^31

  // Handle overflow case
  if (dividend === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  // Determine sign of result
  const negative = (dividend < 0) !== (divisor < 0);

  // Work with absolute values
  // Use Math.abs carefully since INT_MIN has no positive counterpart in 32-bit
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);

  let result = 0;

  while (a >= b) {
    let temp = b;
    let multiple = 1;

    // Double temp until it exceeds a
    // Use (temp << 1) but be careful with JS bitwise (works on 32-bit signed ints)
    // Use comparison: temp + temp <= a to avoid overflow issues
    while (a >= (temp << 1) && (temp << 1) > 0) {
      temp <<= 1;
      multiple <<= 1;
    }

    a -= temp;
    result += multiple;
  }

  if (negative) {
    result = -result;
  }

  // Clamp to 32-bit signed integer range
  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
}
