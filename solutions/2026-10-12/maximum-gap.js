// Maximum Gap — Medium
// https://leetcode.com/problems/maximum-gap/

/**
 * Maximum Gap - Bucket Sort (Pigeonhole Principle) Approach
 *
 * Approach:
 * 1. Handle edge cases: if array has < 2 elements, return 0.
 * 2. Find min and max of the array.
 * 3. If min === max, return 0 (all elements are the same).
 * 4. Use bucket sort / pigeonhole principle:
 *    - With n elements, there are n-1 gaps in the sorted array.
 *    - The maximum gap is at least ceil((max - min) / (n - 1)).
 *    - Create n-1 buckets, each of size ceil((max - min) / (n - 1)).
 *    - Each bucket stores the min and max of elements that fall into it.
 *    - The maximum gap will NOT be within a bucket (since bucket size <= max possible gap).
 *    - The maximum gap must be between the max of one bucket and the min of the next non-empty bucket.
 * 5. Iterate through buckets and compute the max gap between consecutive non-empty buckets.
 *
 * Time Complexity: O(n) - linear scan to fill buckets and compute result
 * Space Complexity: O(n) - we use n-1 buckets
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
export function maximumGap(nums) {
  const n = nums.length;
  if (n < 2) return 0;

  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);

  if (minVal === maxVal) return 0;

  // Bucket size: at least 1 to avoid division by zero
  const bucketSize = Math.max(1, Math.ceil((maxVal - minVal) / (n - 1)));
  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

  // Initialize buckets with null (empty)
  const buckets = Array.from({ length: bucketCount }, () => ({ min: Infinity, max: -Infinity, empty: true }));

  // Place each number into the appropriate bucket
  for (const num of nums) {
    const idx = Math.floor((num - minVal) / bucketSize);
    const bucket = buckets[idx];
    bucket.empty = false;
    bucket.min = Math.min(bucket.min, num);
    bucket.max = Math.max(bucket.max, num);
  }

  // Compute maximum gap between consecutive non-empty buckets
  let maxGap = 0;
  let prevMax = minVal;

  for (const bucket of buckets) {
    if (bucket.empty) continue;
    maxGap = Math.max(maxGap, bucket.min - prevMax);
    prevMax = bucket.max;
  }

  return maxGap;
}
