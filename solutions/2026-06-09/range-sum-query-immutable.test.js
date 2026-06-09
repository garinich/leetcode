import { NumArray } from './range-sum-query-immutable.js';

// Test case 1: Example from problem
const numArray1 = new NumArray([-2, 0, 3, -5, 2, -1]);
console.assert(numArray1.sumRange(0, 2) === 1, 'Test 1.1 failed');
console.assert(numArray1.sumRange(2, 5) === -1, 'Test 1.2 failed');
console.assert(numArray1.sumRange(0, 5) === -3, 'Test 1.3 failed');

// Test case 2: Single element array
const numArray2 = new NumArray([5]);
console.assert(numArray2.sumRange(0, 0) === 5, 'Test 2 failed');

// Test case 3: All positive numbers
const numArray3 = new NumArray([1, 2, 3, 4, 5]);
console.assert(numArray3.sumRange(0, 4) === 15, 'Test 3.1 failed');
console.assert(numArray3.sumRange(1, 3) === 9, 'Test 3.2 failed');
console.assert(numArray3.sumRange(2, 2) === 3, 'Test 3.3 failed');

// Test case 4: All negative numbers
const numArray4 = new NumArray([-1, -2, -3, -4]);
console.assert(numArray4.sumRange(0, 3) === -10, 'Test 4.1 failed');
console.assert(numArray4.sumRange(1, 2) === -5, 'Test 4.2 failed');

// Test case 5: Mixed numbers with zeros
const numArray5 = new NumArray([0, 0, 0, 0]);
console.assert(numArray5.sumRange(0, 3) === 0, 'Test 5.1 failed');
console.assert(numArray5.sumRange(1, 1) === 0, 'Test 5.2 failed');

// Test case 6: Large values within constraints
const numArray6 = new NumArray([100000, -100000, 50000, -25000]);
console.assert(numArray6.sumRange(0, 1) === 0, 'Test 6.1 failed');
console.assert(numArray6.sumRange(0, 3) === 25000, 'Test 6.2 failed');
console.assert(numArray6.sumRange(2, 3) === 25000, 'Test 6.3 failed');

// Test case 7: Adjacent indices
const numArray7 = new NumArray([1, -1, 2, -2, 3]);
console.assert(numArray7.sumRange(0, 1) === 0, 'Test 7.1 failed');
console.assert(numArray7.sumRange(1, 2) === 1, 'Test 7.2 failed');
console.assert(numArray7.sumRange(3, 4) === 1, 'Test 7.3 failed');

console.log('ALL TESTS PASSED');