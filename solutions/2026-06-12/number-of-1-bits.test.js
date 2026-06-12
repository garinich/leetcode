import { hammingWeight } from './number-of-1-bits.js';

// Example test cases
console.assert(hammingWeight(11) === 3, 'Test case 1 failed: n=11 should return 3');
console.assert(hammingWeight(128) === 1, 'Test case 2 failed: n=128 should return 1');
console.assert(hammingWeight(2147483645) === 30, 'Test case 3 failed: n=2147483645 should return 30');

// Edge cases
console.assert(hammingWeight(1) === 1, 'Edge case failed: n=1 should return 1');
console.assert(hammingWeight(2) === 1, 'Edge case failed: n=2 should return 1');
console.assert(hammingWeight(3) === 2, 'Edge case failed: n=3 should return 2');
console.assert(hammingWeight(7) === 3, 'Edge case failed: n=7 should return 3');
console.assert(hammingWeight(15) === 4, 'Edge case failed: n=15 should return 4');
console.assert(hammingWeight(16) === 1, 'Edge case failed: n=16 should return 1');
console.assert(hammingWeight(255) === 8, 'Edge case failed: n=255 should return 8');
console.assert(hammingWeight(1024) === 1, 'Edge case failed: n=1024 should return 1');
console.assert(hammingWeight(2147483647) === 31, 'Edge case failed: n=2147483647 (max 32-bit signed) should return 31');

console.log('ALL TESTS PASSED');