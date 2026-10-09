// Guess Number Higher or Lower — Easy
// https://leetcode.com/problems/guess-number-higher-or-lower/

/**
 * Guess Number Higher or Lower
 *
 * Approach: Binary Search
 * - Use binary search between 1 and n
 * - At each midpoint, call the guess() API
 * - If result is 0, we found the answer
 * - If result is -1, the pick is lower, so search left half
 * - If result is 1, the pick is higher, so search right half
 *
 * Time Complexity: O(log n) - binary search halves the search space each iteration
 * Space Complexity: O(1) - only using a constant amount of extra space
 */

/**
 * Mock guess API for testing purposes
 * In LeetCode environment, this is pre-defined
 */
let _pick;

function guess(num) {
  if (num > _pick) return -1;
  if (num < _pick) return 1;
  return 0;
}

/**
 * @param {number} n
 * @return {number}
 */
export function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    // Use Math.floor((low + high) / 2) but avoid potential overflow
    const mid = low + Math.floor((high - low) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result === -1) {
      // Our guess is too high, search lower half
      high = mid - 1;
    } else {
      // Our guess is too low, search upper half
      low = mid + 1;
    }
  }

  return -1; // Should never reach here given valid input
}

/**
 * Helper to set the pick for testing
 * @param {number} pick
 */
export function setPick(pick) {
  _pick = pick;
}
