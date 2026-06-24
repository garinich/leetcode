// Intersection of Two Arrays — Easy
// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * Intersection of Two Arrays
 *
 * Approach:
 * 1. Convert nums1 into a Set to store unique elements.
 * 2. Filter nums2 to keep only elements present in the nums1 Set.
 * 3. Convert the filtered result into a Set to ensure uniqueness, then spread into an array.
 *
 * Time Complexity: O(n + m) where n = nums1.length, m = nums2.length
 * Space Complexity: O(n) for the Set built from nums1
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const resultSet = new Set(nums2.filter(num => set1.has(num)));
  return [...resultSet];
}
