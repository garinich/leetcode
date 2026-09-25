// Find First and Last Position of Element in Sorted Array — Medium
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * Find First and Last Position of Element in Sorted Array
 *
 * Approach:
 * Use binary search twice:
 * 1. Find the leftmost (first) occurrence of target
 * 2. Find the rightmost (last) occurrence of target
 *
 * For leftmost: when nums[mid] === target, record position and search left half
 * For rightmost: when nums[mid] === target, record position and search right half
 *
 * Time Complexity: O(log n) - two binary searches
 * Space Complexity: O(1) - constant extra space
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function searchRange(nums, target) {
  const first = findFirst(nums, target);
  if (first === -1) return [-1, -1];
  const last = findLast(nums, target);
  return [first, last];
}

/**
 * Find the first (leftmost) occurrence of target using binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findFirst(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      right = mid - 1; // Search left half for earlier occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

/**
 * Find the last (rightmost) occurrence of target using binary search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findLast(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      left = mid + 1; // Search right half for later occurrence
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
