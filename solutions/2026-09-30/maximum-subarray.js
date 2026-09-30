// Maximum Subarray — Medium
// https://leetcode.com/problems/maximum-subarray/

/**
 * Maximum Subarray - Kadane's Algorithm
 *
 * Approach:
 * Use Kadane's algorithm to find the maximum subarray sum in O(n) time.
 * Iterate through the array, maintaining:
 * - currentSum: the maximum sum ending at the current position
 * - maxSum: the overall maximum sum seen so far
 *
 * At each element, we decide whether to:
 * 1. Extend the existing subarray (currentSum + nums[i])
 * 2. Start a new subarray from the current element (nums[i])
 *
 * We take whichever is larger.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space
 *
 * @param {number[]} nums - Input array of integers
 * @return {number} - The largest sum of any subarray
 */
export function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend the current subarray or start fresh from current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the global maximum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/**
 * Maximum Subarray - Divide and Conquer Approach
 *
 * Approach:
 * Split the array into two halves recursively.
 * The maximum subarray is either:
 * 1. Entirely in the left half
 * 2. Entirely in the right half
 * 3. Crosses the midpoint
 *
 * For case 3, find the max suffix sum of left half and max prefix sum of right half.
 *
 * Time Complexity: O(n log n) - T(n) = 2T(n/2) + O(n)
 * Space Complexity: O(log n) - recursion stack depth
 *
 * @param {number[]} nums - Input array of integers
 * @return {number} - The largest sum of any subarray
 */
export function maxSubArrayDivideAndConquer(nums) {
  return divideAndConquer(nums, 0, nums.length - 1);
}

function divideAndConquer(nums, left, right) {
  // Base case: single element
  if (left === right) return nums[left];

  const mid = Math.floor((left + right) / 2);

  // Recursively find max subarray in left and right halves
  const leftMax = divideAndConquer(nums, left, mid);
  const rightMax = divideAndConquer(nums, mid + 1, right);
  const crossMax = maxCrossing(nums, left, mid, right);

  return Math.max(leftMax, rightMax, crossMax);
}

function maxCrossing(nums, left, mid, right) {
  // Find max sum extending from mid to the left
  let leftSum = -Infinity;
  let currentSum = 0;
  for (let i = mid; i >= left; i--) {
    currentSum += nums[i];
    leftSum = Math.max(leftSum, currentSum);
  }

  // Find max sum extending from mid+1 to the right
  let rightSum = -Infinity;
  currentSum = 0;
  for (let i = mid + 1; i <= right; i++) {
    currentSum += nums[i];
    rightSum = Math.max(rightSum, currentSum);
  }

  return leftSum + rightSum;
}
