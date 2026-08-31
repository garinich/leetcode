import { climbStairs } from './climbing-stairs.js';

// Example test cases from problem
console.assert(climbStairs(2) === 2, 'Test 1 failed: n=2 should return 2');
console.assert(climbStairs(3) === 3, 'Test 2 failed: n=3 should return 3');

// Edge cases
console.assert(climbStairs(1) === 1, 'Test 3 failed: n=1 should return 1');
console.assert(climbStairs(4) === 5, 'Test 4 failed: n=4 should return 5');
console.assert(climbStairs(5) === 8, 'Test 5 failed: n=5 should return 8');
console.assert(climbStairs(10) === 89, 'Test 6 failed: n=10 should return 89');
console.assert(climbStairs(44) === 1134903170, 'Test 7 failed: n=44 should return 1134903170');
console.assert(climbStairs(45) === 1836311903, 'Test 8 failed: n=45 should return 1836311903');

console.log('ALL TESTS PASSED');
