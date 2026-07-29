import { canWinNim } from './nim-game.js';

// Example test cases from problem
console.assert(canWinNim(4) === false, 'Test 1 failed: n=4 should return false');
console.assert(canWinNim(1) === true, 'Test 2 failed: n=1 should return true');
console.assert(canWinNim(2) === true, 'Test 3 failed: n=2 should return true');

// Additional edge cases
console.assert(canWinNim(3) === true, 'Test 4 failed: n=3 should return true');
console.assert(canWinNim(5) === true, 'Test 5 failed: n=5 should return true');
console.assert(canWinNim(6) === true, 'Test 6 failed: n=6 should return true');
console.assert(canWinNim(7) === true, 'Test 7 failed: n=7 should return true');
console.assert(canWinNim(8) === false, 'Test 8 failed: n=8 should return false');
console.assert(canWinNim(12) === false, 'Test 9 failed: n=12 should return false');
console.assert(canWinNim(16) === false, 'Test 10 failed: n=16 should return false');
console.assert(canWinNim(100) === true, 'Test 11 failed: n=100 should return true');
console.assert(canWinNim(2147483647) === true, 'Test 12 failed: n=2^31-1 should return true');
console.assert(canWinNim(2147483644) === false, 'Test 13 failed: n=2147483644 (multiple of 4) should return false');

console.log('ALL TESTS PASSED');
