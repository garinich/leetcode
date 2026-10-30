// Integer to Roman — Medium
// https://leetcode.com/problems/integer-to-roman/

/**
 * Integer to Roman
 *
 * Approach:
 * Use a lookup table of values and their Roman numeral representations,
 * ordered from largest to smallest (including subtractive forms like 900, 400, 90, 40, 9, 4).
 * Greedily subtract the largest possible value from num, appending the corresponding
 * Roman numeral symbol(s) to the result, until num reaches 0.
 *
 * Time Complexity: O(1) - the number of iterations is bounded by a constant
 *   (since num <= 3999 and the table has fixed entries)
 * Space Complexity: O(1) - the lookup table and result string are bounded in size
 */

/**
 * Converts an integer to a Roman numeral string.
 * @param {number} num - Integer between 1 and 3999
 * @returns {string} Roman numeral representation
 */
export function intToRoman(num) {
  const valueSymbols = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';

  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
