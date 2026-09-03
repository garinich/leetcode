// Longest Consecutive Sequence — Medium
// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * Longest Consecutive Sequence
 *
 * Approach:
 * 1. Insert all numbers into a Set for O(1) lookups.
 * 2. Iterate through each number. For each number, check if it is the
 *    START of a sequence (i.e., num - 1 is NOT in the set).
 * 3. If it is the start, extend the sequence by incrementing and checking
 *    the set until no consecutive element is found.
 * 4. Track the maximum sequence length seen.
 *
 * This works in O(n) because each number is only visited once as a
 * sequence start, and inner while loop increments are bounded by total
 * elements across all sequences.
 *
 * Time Complexity: O(n) - each element is processed at most twice
 * Space Complexity: O(n) - for the Set storing all elements
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
    // Only start counting if this is the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
