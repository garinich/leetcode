import { isPowerOfTwo } from './power-of-two.js';

// Example test cases from problem
console.assert(isPowerOfTwo(1) === true, 'Test 1 failed: n=1 should be true (2^0)');
console.assert(isPowerOfTwo(16) === true, 'Test 2 failed: n=16 should be true (2^4)');
console.assert(isPowerOfTwo(3) === false, 'Test 3 failed: n=3 should be false');

// Edge cases
console.assert(isPowerOfTwo(0) === false, 'Test 4 failed: n=0 should be false');
console.assert(isPowerOfTwo(-1) === false, 'Test 5 failed: n=-1 should be false');
console.assert(isPowerOfTwo(-16) === false, 'Test 6 failed: n=-16 should be false');
console.assert(isPowerOfTwo(2) === true, 'Test 7 failed: n=2 should be true (2^1)');
console.assert(isPowerOfTwo(4) === true, 'Test 8 failed: n=4 should be true (2^2)');
console.assert(isPowerOfTwo(8) === true, 'Test 9 failed: n=8 should be true (2^3)');
console.assert(isPowerOfTwo(1024) === true, 'Test 10 failed: n=1024 should be true (2^10)');
console.assert(isPowerOfTwo(1073741824) === true, 'Test 11 failed: n=1073741824 should be true (2^30)');
console.assert(isPowerOfTwo(5) === false, 'Test 12 failed: n=5 should be false');
console.assert(isPowerOfTwo(6) === false, 'Test 13 failed: n=6 should be false');
console.assert(isPowerOfTwo(100) === false, 'Test 14 failed: n=100 should be false');
console.assert(isPowerOfTwo(2147483647) === false, 'Test 15 failed: n=2^31-1 should be false');

console.log('ALL TESTS PASSED');
