// Merge Intervals — Medium
// https://leetcode.com/problems/merge-intervals/

/**
 * Merge Intervals
 *
 * Approach:
 * 1. Sort intervals by their start time.
 * 2. Iterate through sorted intervals, maintaining a result array.
 * 3. For each interval, check if it overlaps with the last interval in the result:
 *    - If it does (current start <= last end), merge by updating the end to max of both ends.
 *    - If it doesn't, push the current interval to the result.
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the result array
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];

    if (current[0] <= last[1]) {
      // Overlapping: merge by extending the end
      last[1] = Math.max(last[1], current[1]);
    } else {
      // Non-overlapping: add as new interval
      result.push(current);
    }
  }

  return result;
}
