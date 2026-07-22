import { maxProfit } from './best-time-to-buy-and-sell-stock.js';

// Example 1: Buy on day 2, sell on day 5
console.assert(
  maxProfit([7, 1, 5, 3, 6, 4]) === 5,
  'Test 1 failed: Expected 5'
);

// Example 2: Prices only decrease, no profit possible
console.assert(
  maxProfit([7, 6, 4, 3, 1]) === 0,
  'Test 2 failed: Expected 0'
);

// Edge case: Single element, no transaction possible
console.assert(
  maxProfit([5]) === 0,
  'Test 3 failed: Expected 0 for single element'
);

// Edge case: Two elements, profit possible
console.assert(
  maxProfit([1, 5]) === 4,
  'Test 4 failed: Expected 4'
);

// Edge case: Two elements, no profit possible
console.assert(
  maxProfit([5, 1]) === 0,
  'Test 5 failed: Expected 0'
);

// Edge case: All same prices
console.assert(
  maxProfit([3, 3, 3, 3]) === 0,
  'Test 6 failed: Expected 0 for all same prices'
);

// Edge case: Best buy is not at the start
console.assert(
  maxProfit([3, 2, 6, 5, 0, 3]) === 4,
  'Test 7 failed: Expected 4'
);

// Edge case: Large profit at end
console.assert(
  maxProfit([1, 2, 3, 4, 5]) === 4,
  'Test 8 failed: Expected 4'
);

// Edge case: Min price at end
console.assert(
  maxProfit([5, 4, 3, 2, 1, 10]) === 9,
  'Test 9 failed: Expected 9'
);

// Edge case: All zeros
console.assert(
  maxProfit([0, 0, 0, 0]) === 0,
  'Test 10 failed: Expected 0 for all zeros'
);

console.log('ALL TESTS PASSED');
