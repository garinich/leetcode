// Nim Game — Easy
// https://leetcode.com/problems/nim-game/

/**
 * Nim Game Solution
 *
 * Approach:
 * The key insight is that if n is a multiple of 4, you will always lose
 * (assuming optimal play). This is because:
 * - If n = 1, 2, or 3, you can take all stones and win.
 * - If n = 4, no matter how many you take (1, 2, or 3), your opponent
 *   can always take the remaining stones and win.
 * - If n = 5, 6, or 7, you can reduce to n = 4 for your opponent, so you win.
 * - If n = 8, any move leaves your opponent with 5, 6, or 7, which means
 *   they can reduce to 4 for you — you lose.
 * - This pattern repeats: multiples of 4 are losing positions.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} n - Number of stones in the heap
 * @return {boolean} - True if you can win, false otherwise
 */
export function canWinNim(n) {
  return n % 4 !== 0;
}
