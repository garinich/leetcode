import { isPowerOfThree } from './power-of-three.js';

// Provided examples
console.assert(isPowerOfThree(27) === true, 'Test 1 failed: 27 should be power of 3');
console.assert(isPowerOfThree(0) === false, 'Test 2 failed: 0 should not be power of 3');
console.assert(isPowerOfThree(-1) === false, 'Test 3 failed: -1 should not be power of 3');

// Edge cases
console.assert(isPowerOfThree(1) === true, 'Test 4 failed: 1 = 3^0 should be power of 3');
console.assert(isPowerOfThree(3) === true, 'Test 5 failed: 3 = 3^1 should be power of 3');
console.assert(isPowerOfThree(9) === true, 'Test 6 failed: 9 = 3^2 should be power of 3');
console.assert(isPowerOfThree(81) === true, 'Test 7 failed: 81 = 3^4 should be power of 3');
console.assert(isPowerOfThree(243) === true, 'Test 8 failed: 243 = 3^5 should be power of 3');
console.assert(isPowerOfThree(1162261467) === true, 'Test 9 failed: 3^19 should be power of 3');

// Non-powers of 3
console.assert(isPowerOfThree(2) === false, 'Test 10 failed: 2 should not be power of 3');
console.assert(isPowerOfThree(4) === false, 'Test 11 failed: 4 should not be power of 3');
console.assert(isPowerOfThree(6) === false, 'Test 12 failed: 6 should not be power of 3');
console.assert(isPowerOfThree(45) === false, 'Test 13 failed: 45 should not be power of 3');
console.assert(isPowerOfThree(-3) === false, 'Test 14 failed: -3 should not be power of 3');
console.assert(isPowerOfThree(-27) === false, 'Test 15 failed: -27 should not be power of 3');

// Large values
console.assert(isPowerOfThree(2147483647) === false, 'Test 16 failed: INT_MAX should not be power of 3');
console.assert(isPowerOfThree(-2147483648) === false, 'Test 17 failed: INT_MIN should not be power of 3');

console.log('ALL TESTS PASSED');
