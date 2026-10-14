// Merge Sorted Array — Easy
// https://leetcode.com/problems/merge-sorted-array/

/**
 * Merge Sorted Array
 *
 * Approach: Three-pointer technique starting from the end.
 * We use three pointers:
 *   - p1: points to the last valid element in nums1 (index m-1)
 *   - p2: points to the last element in nums2 (index n-1)
 *   - p: points to the last position in nums1 (index m+n-1)
 *
 * We compare elements from the back and place the larger one at position p,
 * moving backwards. This avoids overwriting elements in nums1 that haven't
 * been processed yet.
 *
 * Time Complexity: O(m + n) - we visit each element exactly once
 * Space Complexity: O(1) - we modify nums1 in-place with no extra space
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1, m, nums2, n) {
  let p1 = m - 1;       // pointer for nums1 valid elements
  let p2 = n - 1;       // pointer for nums2
  let p = m + n - 1;    // pointer for the current write position in nums1

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them
  // (remaining elements in nums1 are already in place)
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}
