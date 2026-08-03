import { mySqrt } from './sqrtx.js';

// Example test cases from problem
console.assert(mySqrt(4) === 2, 'Test 1 Failed: sqrt(4) should be 2');
console.assert(mySqrt(8) === 2, 'Test 2 Failed: sqrt(8) should be 2');

// Edge cases
console.assert(mySqrt(0) === 0, 'Test 3 Failed: sqrt(0) should be 0');
console.assert(mySqrt(1) === 1, 'Test 4 Failed: sqrt(1) should be 1');
console.assert(mySqrt(2) === 1, 'Test 5 Failed: sqrt(2) should be 1');
console.assert(mySqrt(3) === 1, 'Test 6 Failed: sqrt(3) should be 1');
console.assert(mySqrt(9) === 3, 'Test 7 Failed: sqrt(9) should be 3');
console.assert(mySqrt(16) === 4, 'Test 8 Failed: sqrt(16) should be 4');
console.assert(mySqrt(25) === 5, 'Test 9 Failed: sqrt(25) should be 5');
console.assert(mySqrt(26) === 5, 'Test 10 Failed: sqrt(26) should be 5');
console.assert(mySqrt(100) === 10, 'Test 11 Failed: sqrt(100) should be 10');
console.assert(mySqrt(99) === 9, 'Test 12 Failed: sqrt(99) should be 9');

// Large numbers
console.assert(mySqrt(2147395600) === 46340, 'Test 13 Failed: sqrt(2147395600) should be 46340');
console.assert(mySqrt(2147483647) === 46340, 'Test 14 Failed: sqrt(2^31 - 1) should be 46340');
console.assert(mySqrt(1000000) === 1000, 'Test 15 Failed: sqrt(1000000) should be 1000');

console.log('ALL TESTS PASSED');
