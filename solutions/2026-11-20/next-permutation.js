// Next Permutation — Medium
// https://leetcode.com/problems/next-permutation/

/**
 * Next Permutation
 *
 * Approach:
 * 1. Find the largest index i such that nums[i] < nums[i + 1].
 *    If no such index exists, the permutation is the last permutation (descending).
 * 2. Find the largest index j greater than i such that nums[i] < nums[j].
 * 3. Swap the value of nums[i] with that of nums[j].
 * 4. Reverse the sequence from nums[i + 1] up to and including the final element.
 *
 * Time Complexity: O(n) - at most two passes through the array
 * Space Complexity: O(1) - in-place modification
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums) {
  const n = nums.length;

  // Step 1: Find the rightmost index i where nums[i] < nums[i+1]
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the rightmost index j > i where nums[j] > nums[i]
    let j = n - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    // Step 3: Swap nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the suffix starting at i+1
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
