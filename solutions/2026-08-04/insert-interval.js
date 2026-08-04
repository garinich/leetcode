// Insert Interval — Medium
// https://leetcode.com/problems/insert-interval/

/**
 * Insert Interval
 *
 * Approach:
 * 1. Iterate through the intervals array.
 * 2. Add all intervals that end before the new interval starts (no overlap, comes before).
 * 3. Merge all intervals that overlap with the new interval by updating the new interval's
 *    start to min(newInterval.start, current.start) and end to max(newInterval.end, current.end).
 * 4. Add the merged new interval.
 * 5. Add all remaining intervals that start after the new interval ends (no overlap, comes after).
 *
 * Time Complexity: O(n) - single pass through the intervals array
 * Space Complexity: O(n) - result array stores all intervals
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export function insert(intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // Step 1: Add all intervals that come before newInterval (no overlap)
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: Merge overlapping intervals with newInterval
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the merged newInterval
  result.push(newInterval);

  // Step 3: Add all intervals that come after newInterval (no overlap)
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
