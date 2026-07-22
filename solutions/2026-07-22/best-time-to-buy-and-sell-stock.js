// Best Time to Buy and Sell Stock — Easy
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * Best Time to Buy and Sell Stock
 *
 * Approach:
 * Use a single pass greedy algorithm. Track the minimum price seen so far
 * and the maximum profit achievable. For each price, calculate the profit
 * if we sold at the current price (current price - min price so far), and
 * update the max profit if this is greater. Also update the min price if
 * the current price is lower.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only tracking two variables
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
export function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
