import { uniquePaths, uniquePathsOptimized } from './unique-paths.js';

// Example test cases from problem
console.assert(uniquePaths(3, 7) === 28, 'Test 1 failed: m=3, n=7 should be 28');
console.assert(uniquePaths(3, 2) === 3, 'Test 2 failed: m=3, n=2 should be 3');

// Edge cases
console.assert(uniquePaths(1, 1) === 1, 'Test 3 failed: m=1, n=1 should be 1');
console.assert(uniquePaths(1, 5) === 1, 'Test 4 failed: m=1, n=5 should be 1');
console.assert(uniquePaths(5, 1) === 1, 'Test 5 failed: m=5, n=1 should be 1');
console.assert(uniquePaths(2, 2) === 2, 'Test 6 failed: m=2, n=2 should be 2');
console.assert(uniquePaths(3, 3) === 6, 'Test 7 failed: m=3, n=3 should be 6');
console.assert(uniquePaths(10, 10) === 48620, 'Test 8 failed: m=10, n=10 should be 48620');
console.assert(uniquePaths(100, 1) === 1, 'Test 9 failed: m=100, n=1 should be 1');
console.assert(uniquePaths(1, 100) === 1, 'Test 10 failed: m=1, n=100 should be 1');

// Optimized version tests
console.assert(uniquePathsOptimized(3, 7) === 28, 'Optimized Test 1 failed: m=3, n=7 should be 28');
console.assert(uniquePathsOptimized(3, 2) === 3, 'Optimized Test 2 failed: m=3, n=2 should be 3');
console.assert(uniquePathsOptimized(1, 1) === 1, 'Optimized Test 3 failed: m=1, n=1 should be 1');
console.assert(uniquePathsOptimized(2, 2) === 2, 'Optimized Test 4 failed: m=2, n=2 should be 2');
console.assert(uniquePathsOptimized(3, 3) === 6, 'Optimized Test 5 failed: m=3, n=3 should be 6');
console.assert(uniquePathsOptimized(10, 10) === 48620, 'Optimized Test 6 failed: m=10, n=10 should be 48620');

console.log('ALL TESTS PASSED');
