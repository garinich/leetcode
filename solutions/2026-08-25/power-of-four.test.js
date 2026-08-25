import { isPowerOfFour } from './power-of-four.js';

// Example test cases
console.assert(isPowerOfFour(16) === true, 'Test 1 failed: 16 should be power of 4');
console.assert(isPowerOfFour(5) === false, 'Test 2 failed: 5 should not be power of 4');
console.assert(isPowerOfFour(1) === true, 'Test 3 failed: 1 should be power of 4 (4^0)');

// Edge cases
console.assert(isPowerOfFour(0) === false, 'Test 4 failed: 0 should not be power of 4');
console.assert(isPowerOfFour(-1) === false, 'Test 5 failed: negative number should not be power of 4');
console.assert(isPowerOfFour(-4) === false, 'Test 6 failed: -4 should not be power of 4');
console.assert(isPowerOfFour(4) === true, 'Test 7 failed: 4 should be power of 4');
console.assert(isPowerOfFour(64) === true, 'Test 8 failed: 64 should be power of 4');
console.assert(isPowerOfFour(256) === true, 'Test 9 failed: 256 should be power of 4');
console.assert(isPowerOfFour(2) === false, 'Test 10 failed: 2 should not be power of 4');
console.assert(isPowerOfFour(8) === false, 'Test 11 failed: 8 should not be power of 4');
console.assert(isPowerOfFour(32) === false, 'Test 12 failed: 32 should not be power of 4');
console.assert(isPowerOfFour(1024) === true, 'Test 13 failed: 1024 should be power of 4');
console.assert(isPowerOfFour(2147483647) === false, 'Test 14 failed: max int should not be power of 4');

console.log("ALL TESTS PASSED");
