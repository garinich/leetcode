// Fraction to Recurring Decimal — Medium
// https://leetcode.com/problems/fraction-to-recurring-decimal/

/**
 * Fraction to Recurring Decimal
 *
 * Approach:
 * 1. Handle sign separately by checking if exactly one of numerator/denominator is negative.
 * 2. Work with absolute values to avoid sign issues.
 * 3. Compute integer part using Math.floor(|numerator| / |denominator|).
 * 4. If there's no remainder, return the integer part (with sign).
 * 5. For the fractional part, simulate long division:
 *    - Keep a map of remainder -> index in fractional string.
 *    - At each step, multiply remainder by 10, append (remainder / denominator) to fractional part.
 *    - If remainder is seen before, we found the repeating cycle: insert '(' at stored index and append ')'.
 *    - If remainder becomes 0, division is exact.
 * 6. Use BigInt to handle edge cases with -2^31 (Math.abs of MIN_INT overflows 32-bit).
 *
 * Time Complexity: O(d) where d is the denominator (bounded by number of unique remainders).
 * Space Complexity: O(d) for the remainder map.
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
export function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) return '0';

  // Determine sign
  const negative = (numerator < 0) !== (denominator < 0);

  // Work with BigInt to avoid overflow (e.g., -2^31 absolute value)
  let num = BigInt(Math.abs(numerator));
  let den = BigInt(Math.abs(denominator));

  let result = negative ? '-' : '';

  // Integer part
  result += String(num / den);

  let remainder = num % den;
  if (remainder === 0n) return result;

  result += '.';

  // Map from remainder to index in fractional part string
  const remainderMap = new Map();
  let fractional = '';

  while (remainder !== 0n) {
    if (remainderMap.has(remainder)) {
      const idx = remainderMap.get(remainder);
      fractional = fractional.slice(0, idx) + '(' + fractional.slice(idx) + ')';
      return result + fractional;
    }
    remainderMap.set(remainder, fractional.length);
    remainder *= 10n;
    fractional += String(remainder / den);
    remainder = remainder % den;
  }

  return result + fractional;
}
