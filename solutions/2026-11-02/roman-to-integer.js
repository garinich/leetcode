// Roman to Integer — Easy
// https://leetcode.com/problems/roman-to-integer/

/**
 * Roman to Integer
 *
 * Approach:
 * - Create a map of Roman numeral symbols to their integer values.
 * - Iterate through the string from left to right.
 * - If the current symbol's value is less than the next symbol's value,
 *   subtract the current value (subtractive notation).
 * - Otherwise, add the current value.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(1) since the map has a fixed size of 7 entries
 */

/**
 * @param {string} s
 * @return {number}
 */
export function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
