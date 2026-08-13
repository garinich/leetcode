// Restore IP Addresses — Medium
// https://leetcode.com/problems/restore-ip-addresses/

/**
 * Restore IP Addresses
 *
 * Approach: Backtracking
 * We try to place 3 dots in the string to create 4 segments.
 * For each segment, we try lengths 1, 2, or 3.
 * A segment is valid if:
 *   - It has no leading zeros (unless it's "0" itself)
 *   - Its numeric value is between 0 and 255
 *
 * Time Complexity: O(1) - since IP addresses have a fixed structure (at most 3^4 = 81 combinations to check)
 * Space Complexity: O(1) - the result array is bounded by the number of valid IPs (at most 2^32 but practically very small)
 */

/**
 * @param {string} s
 * @return {string[]}
 */
export function restoreIpAddresses(s) {
  const result = [];

  function isValid(segment) {
    // No leading zeros (unless single digit "0")
    if (segment.length > 1 && segment[0] === '0') return false;
    // Must be between 0 and 255
    const num = parseInt(segment, 10);
    return num >= 0 && num <= 255;
  }

  function backtrack(start, parts) {
    // If we have 4 parts and used all characters, it's valid
    if (parts.length === 4) {
      if (start === s.length) {
        result.push(parts.join('.'));
      }
      return;
    }

    // Remaining segments needed
    const remaining = 4 - parts.length;
    // Remaining characters
    const charsLeft = s.length - start;

    // Pruning: each segment is 1-3 chars, so check bounds
    if (charsLeft < remaining || charsLeft > remaining * 3) return;

    // Try segments of length 1, 2, 3
    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break;
      const segment = s.substring(start, start + len);
      if (isValid(segment)) {
        parts.push(segment);
        backtrack(start + len, parts);
        parts.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}
