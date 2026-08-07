import { isPerfectSquare } from './valid-perfect-square.js';

// Example test cases from problem
console.assert(isPerfectSquare(16) === true, 'Test 1 Failed: 16 should be a perfect square');
console.assert(isPerfectSquare(14) === false, 'Test 2 Failed: 14 should not be a perfect square');

// Edge cases
console.assert(isPerfectSquare(1) === true, 'Test 3 Failed: 1 should be a perfect square (1*1)');
console.assert(isPerfectSquare(4) === true, 'Test 4 Failed: 4 should be a perfect square (2*2)');
console.assert(isPerfectSquare(9) === true, 'Test 5 Failed: 9 should be a perfect square (3*3)');
console.assert(isPerfectSquare(25) === true, 'Test 6 Failed: 25 should be a perfect square (5*5)');
console.assert(isPerfectSquare(36) === true, 'Test 7 Failed: 36 should be a perfect square (6*6)');
console.assert(isPerfectSquare(100) === true, 'Test 8 Failed: 100 should be a perfect square (10*10)');
console.assert(isPerfectSquare(2) === false, 'Test 9 Failed: 2 should not be a perfect square');
console.assert(isPerfectSquare(3) === false, 'Test 10 Failed: 3 should not be a perfect square');
console.assert(isPerfectSquare(5) === false, 'Test 11 Failed: 5 should not be a perfect square');
console.assert(isPerfectSquare(99) === false, 'Test 12 Failed: 99 should not be a perfect square');
console.assert(isPerfectSquare(2147395600) === true, 'Test 13 Failed: 2147395600 should be a perfect square (46340*46340)');
console.assert(isPerfectSquare(2147483647) === false, 'Test 14 Failed: 2147483647 (MAX_INT) should not be a perfect square');

console.log("ALL TESTS PASSED");
