import { reverse } from './reverse-integer.js';

// Example test cases from the problem
console.assert(reverse(123) === 321, 'Test 1 failed: reverse(123) should be 321');
console.assert(reverse(-123) === -321, 'Test 2 failed: reverse(-123) should be -321');
console.assert(reverse(120) === 21, 'Test 3 failed: reverse(120) should be 21');

// Edge cases
console.assert(reverse(0) === 0, 'Test 4 failed: reverse(0) should be 0');

// Overflow cases - should return 0
console.assert(reverse(1534236469) === 0, 'Test 5 failed: reverse(1534236469) should be 0 (overflow)');
console.assert(reverse(-1534236469) === 0, 'Test 6 failed: reverse(-1534236469) should be 0 (overflow)');

// Maximum 32-bit integer
console.assert(reverse(2147483647) === 0, 'Test 7 failed: reverse(2147483647) should be 0 (overflow)');

// Minimum 32-bit integer
console.assert(reverse(-2147483648) === 0, 'Test 8 failed: reverse(-2147483648) should be 0 (overflow)');

// Single digit
console.assert(reverse(5) === 5, 'Test 9 failed: reverse(5) should be 5');
console.assert(reverse(-5) === -5, 'Test 10 failed: reverse(-5) should be -5');

// Trailing zeros
console.assert(reverse(1000) === 1, 'Test 11 failed: reverse(1000) should be 1');
console.assert(reverse(-1000) === -1, 'Test 12 failed: reverse(-1000) should be -1');

// Palindrome numbers
console.assert(reverse(121) === 121, 'Test 13 failed: reverse(121) should be 121');
console.assert(reverse(1221) === 1221, 'Test 14 failed: reverse(1221) should be 1221');

// Number that fits exactly at boundary
console.assert(reverse(1463847412) === 2147483641, 'Test 15 failed: reverse(1463847412) should be 2147483641');

console.log('ALL TESTS PASSED');
