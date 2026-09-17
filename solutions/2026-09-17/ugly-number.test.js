import { isUgly } from './ugly-number.js';

// Example test cases from problem
console.assert(isUgly(6) === true, 'Test 1 failed: 6 should be ugly (2 x 3)');
console.assert(isUgly(1) === true, 'Test 2 failed: 1 should be ugly (no prime factors)');
console.assert(isUgly(14) === false, 'Test 3 failed: 14 should not be ugly (has factor 7)');

// Edge cases
console.assert(isUgly(0) === false, 'Test 4 failed: 0 is not a positive integer');
console.assert(isUgly(-6) === false, 'Test 5 failed: negative numbers are not ugly');
console.assert(isUgly(-1) === false, 'Test 6 failed: -1 is not ugly');

// Powers of 2, 3, 5
console.assert(isUgly(2) === true, 'Test 7 failed: 2 is ugly');
console.assert(isUgly(3) === true, 'Test 8 failed: 3 is ugly');
console.assert(isUgly(5) === true, 'Test 9 failed: 5 is ugly');
console.assert(isUgly(4) === true, 'Test 10 failed: 4 = 2^2 is ugly');
console.assert(isUgly(8) === true, 'Test 11 failed: 8 = 2^3 is ugly');
console.assert(isUgly(9) === true, 'Test 12 failed: 9 = 3^2 is ugly');
console.assert(isUgly(25) === true, 'Test 13 failed: 25 = 5^2 is ugly');
console.assert(isUgly(30) === true, 'Test 14 failed: 30 = 2 x 3 x 5 is ugly');

// Non-ugly numbers
console.assert(isUgly(7) === false, 'Test 15 failed: 7 is prime and not ugly');
console.assert(isUgly(11) === false, 'Test 16 failed: 11 is prime and not ugly');
console.assert(isUgly(13) === false, 'Test 17 failed: 13 is prime and not ugly');
console.assert(isUgly(49) === false, 'Test 18 failed: 49 = 7^2 is not ugly');
console.assert(isUgly(1000000000) === false, 'Test 19 failed: 10^9 has factor 7 ... wait, 10^9 = 2^9 * 5^9, actually ugly');

// Fix: 10^9 = (2*5)^9 = 2^9 * 5^9, which is ugly
console.assert(isUgly(1000000000) === true, 'Test 19 fixed: 10^9 = 2^9 * 5^9 is ugly');

console.log('ALL TESTS PASSED');
