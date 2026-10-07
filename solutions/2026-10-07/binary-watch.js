// Binary Watch — Easy
// https://leetcode.com/problems/binary-watch/

/**
 * Binary Watch
 *
 * Approach:
 * Iterate through all possible hours (0-11) and minutes (0-59).
 * For each combination, count the total number of 1-bits (popcount)
 * in both the hour and minute values. If the total equals turnedOn,
 * add the formatted time to the result.
 *
 * Time Complexity: O(1) - we always iterate through at most 12 * 60 = 720 combinations
 * Space Complexity: O(1) - the output size is bounded by 720 entries
 */

/**
 * Count the number of set bits (1s) in a number
 * @param {number} n
 * @returns {number}
 */
function countBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

/**
 * Returns all possible times the binary watch could represent
 * given the number of LEDs turned on.
 * @param {number} turnedOn
 * @returns {string[]}
 */
export function readBinaryWatch(turnedOn) {
  const result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countBits(h) + countBits(m) === turnedOn) {
        const minuteStr = m < 10 ? `0${m}` : `${m}`;
        result.push(`${h}:${minuteStr}`);
      }
    }
  }

  return result;
}
