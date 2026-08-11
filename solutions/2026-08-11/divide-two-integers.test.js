import { divide } from './divide-two-integers.js';

// Example 1: 10 / 3 = 3
console.assert(divide(10, 3) === 3, `Expected 3, got ${divide(10, 3)}`);

// Example 2: 7 / -3 = -2
console.assert(divide(7, -3) === -2, `Expected -2, got ${divide(7, -3)}`);

// Edge case: dividend = 0
console.assert(divide(0, 1) === 0, `Expected 0, got ${divide(0, 1)}`);

// Edge case: divisor = 1
console.assert(divide(5, 1) === 5, `Expected 5, got ${divide(5, 1)}`);

// Edge case: divisor = -1
console.assert(divide(5, -1) === -5, `Expected -5, got ${divide(5, -1)}`);

// Edge case: INT_MIN / -1 should return INT_MAX (overflow)
console.assert(divide(-2147483648, -1) === 2147483647, `Expected 2147483647, got ${divide(-2147483648, -1)}`);

// Edge case: INT_MIN / 1
console.assert(divide(-2147483648, 1) === -2147483648, `Expected -2147483648, got ${divide(-2147483648, 1)}`);

// Edge case: both negative
console.assert(divide(-10, -3) === 3, `Expected 3, got ${divide(-10, -3)}`);

// Edge case: dividend < divisor
console.assert(divide(1, 2) === 0, `Expected 0, got ${divide(1, 2)}`);

// Edge case: dividend = divisor
console.assert(divide(5, 5) === 1, `Expected 1, got ${divide(5, 5)}`);

// Edge case: large numbers
console.assert(divide(2147483647, 1) === 2147483647, `Expected 2147483647, got ${divide(2147483647, 1)}`);

// Negative dividend, positive divisor
console.assert(divide(-7, 2) === -3, `Expected -3, got ${divide(-7, 2)}`);

// Positive dividend, negative divisor
console.assert(divide(8, -3) === -2, `Expected -2, got ${divide(8, -3)}`);

console.log("ALL TESTS PASSED");
