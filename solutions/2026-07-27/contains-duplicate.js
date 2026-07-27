// Contains Duplicate — Easy
// https://leetcode.com/problems/contains-duplicate/

/**
 * Contains Duplicate
 *
 * Approach:
 * Use a Set to track seen numbers as we iterate through the array.
 * If we encounter a number that already exists in the Set, return true.
 * If we finish iterating without finding a duplicate, return false.
 *
 * Time Complexity: O(n) - we iterate through the array once
 * Space Complexity: O(n) - in the worst case, we store all n elements in the Set
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
