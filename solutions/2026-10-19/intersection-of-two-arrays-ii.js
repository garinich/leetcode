// Intersection of Two Arrays II — Easy
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * Intersection of Two Arrays II
 *
 * Approach:
 * Use a hash map to count the frequency of each element in nums1.
 * Then iterate through nums2, and for each element that exists in the map
 * with a count > 0, add it to the result and decrement the count.
 *
 * Time Complexity: O(m + n) where m and n are the lengths of nums1 and nums2
 * Space Complexity: O(min(m, n)) for the frequency map
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export function intersect(nums1, nums2) {
  const countMap = new Map();

  // Count frequencies in nums1
  for (const num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const result = [];

  // Check each element in nums2
  for (const num of nums2) {
    if (countMap.has(num) && countMap.get(num) > 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }

  return result;
}
