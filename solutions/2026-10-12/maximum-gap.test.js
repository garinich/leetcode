import { maximumGap } from './maximum-gap.js';

// Example 1: sorted [1,3,6,9], max gap = 3
console.assert(maximumGap([3, 6, 9, 1]) === 3, 'Test 1 Failed: Expected 3');

// Example 2: single element
console.assert(maximumGap([10]) === 0, 'Test 2 Failed: Expected 0');

// Edge: empty array
console.assert(maximumGap([]) === 0, 'Test 3 Failed: Expected 0 for empty array');

// Edge: two elements
console.assert(maximumGap([1, 1000000000]) === 999999999, 'Test 4 Failed: Expected 999999999');

// Edge: all same elements
console.assert(maximumGap([5, 5, 5, 5]) === 0, 'Test 5 Failed: Expected 0 for all same elements');

// Edge: two same elements
console.assert(maximumGap([7, 7]) === 0, 'Test 6 Failed: Expected 0 for two same elements');

// Already sorted
console.assert(maximumGap([1, 3, 6, 9]) === 3, 'Test 7 Failed: Expected 3');

// Reverse sorted
console.assert(maximumGap([9, 6, 3, 1]) === 3, 'Test 8 Failed: Expected 3');

// Large gap in the middle
console.assert(maximumGap([1, 2, 100, 101]) === 98, 'Test 9 Failed: Expected 98');

// Two elements consecutive
console.assert(maximumGap([1, 2]) === 1, 'Test 10 Failed: Expected 1');

// Larger array with known max gap
console.assert(maximumGap([1, 10, 100, 1000, 10000]) === 9000, 'Test 11 Failed: Expected 9000');

// All zeros except one
console.assert(maximumGap([0, 0, 0, 100]) === 100, 'Test 12 Failed: Expected 100');

console.log('ALL TESTS PASSED');
