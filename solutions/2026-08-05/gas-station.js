// Gas Station — Medium
// https://leetcode.com/problems/gas-station/

/**
 * Gas Station - Greedy Approach
 *
 * Approach:
 * 1. First check if a solution is possible: total gas must be >= total cost.
 *    If sum(gas) < sum(cost), return -1.
 *
 * 2. To find the starting station, use a greedy approach:
 *    - Iterate through all stations tracking current tank balance.
 *    - If at any point the tank goes negative, the current starting point
 *      (and all stations between start and current) cannot be valid starts.
 *    - Reset the tank to 0 and set the next station as the new candidate start.
 *
 * Why this works:
 *    - If we start at station A and run out of gas at station B,
 *      then no station between A and B can be a valid start either
 *      (because A was already the best candidate in that range).
 *    - The guarantee that a unique solution exists (when total gas >= total cost)
 *      means our greedy candidate will be correct.
 *
 * Time Complexity: O(n) - single pass through the arrays
 * Space Complexity: O(1) - only a few variables used
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export function canCompleteCircuit(gas, cost) {
  const n = gas.length;
  let totalGas = 0;
  let currentGas = 0;
  let startStation = 0;

  for (let i = 0; i < n; i++) {
    const diff = gas[i] - cost[i];
    totalGas += diff;
    currentGas += diff;

    // If current gas goes negative, we can't reach station i+1 from startStation
    // So we reset and try starting from i+1
    if (currentGas < 0) {
      startStation = i + 1;
      currentGas = 0;
    }
  }

  // If total gas is negative, no solution exists
  return totalGas >= 0 ? startStation : -1;
}
