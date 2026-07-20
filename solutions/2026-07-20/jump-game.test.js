import { canJump } from './jump-game.js';

// Example 1: Expected true
console.assert(canJump([2, 3, 1, 1, 4]) === true, 'Test 1 failed');

// Example 2: Expected false
console.assert(canJump([3, 2, 1, 0, 4]) === false, 'Test 2 failed');

// Edge case: Single element array - already at last index
console.assert(canJump([0]) === true, 'Test 3 failed');

// Edge case: All zeros (except first which is 0) - can't move
console.assert(canJump([0, 1]) === false, 'Test 4 failed');

// Edge case: Large jump at first index
console.assert(canJump([5, 0, 0, 0, 0]) === true, 'Test 5 failed');

// Edge case: Just barely reachable
console.assert(canJump([1, 1, 1, 1, 0]) === true, 'Test 6 failed');

// Edge case: Two elements, zero jump
console.assert(canJump([0, 0]) === false, 'Test 7 failed');

// Edge case: Two elements, can jump
console.assert(canJump([1, 0]) === true, 'Test 8 failed');

// Edge case: All ones
console.assert(canJump([1, 1, 1, 1, 1]) === true, 'Test 9 failed');

// Edge case: Blocked in the middle
console.assert(canJump([1, 0, 1, 0]) === false, 'Test 10 failed');

console.log('ALL TESTS PASSED');
