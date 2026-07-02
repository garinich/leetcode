import { isHappy } from './happy-number.js';

// Example 1: 19 is a happy number
console.assert(isHappy(19) === true, 'Test 1 failed: 19 should be happy');

// Example 2: 2 is not a happy number
console.assert(isHappy(2) === false, 'Test 2 failed: 2 should not be happy');

// Edge case: 1 is a happy number (base case)
console.assert(isHappy(1) === true, 'Test 3 failed: 1 should be happy');

// Edge case: 7 is a happy number
console.assert(isHappy(7) === true, 'Test 4 failed: 7 should be happy');

// Edge case: 4 is not a happy number (known unhappy)
console.assert(isHappy(4) === false, 'Test 5 failed: 4 should not be happy');

// Edge case: 100 is a happy number (1^2 + 0^2 + 0^2 = 1)
console.assert(isHappy(100) === true, 'Test 6 failed: 100 should be happy');

// Edge case: 13 is a happy number
console.assert(isHappy(13) === true, 'Test 7 failed: 13 should be happy');

// Edge case: 3 is not a happy number
console.assert(isHappy(3) === false, 'Test 8 failed: 3 should not be happy');

// Larger happy number: 1111111
console.assert(isHappy(1111111) === true, 'Test 9 failed: 1111111 should be happy');

// Large unhappy number
console.assert(isHappy(2147483647) === false, 'Test 10 failed: 2147483647 should not be happy');

console.log('ALL TESTS PASSED');
