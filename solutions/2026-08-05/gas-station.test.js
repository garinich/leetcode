import { canCompleteCircuit } from './gas-station.js';

// Example 1: Expected output 3
console.assert(
  canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3,
  'Test 1 failed: Expected 3'
);

// Example 2: Expected output -1
console.assert(
  canCompleteCircuit([2, 3, 4], [3, 4, 3]) === -1,
  'Test 2 failed: Expected -1'
);

// Edge case: single station, gas equals cost
console.assert(
  canCompleteCircuit([5], [5]) === 0,
  'Test 3 failed: Single station with gas == cost, expected 0'
);

// Edge case: single station, gas less than cost
console.assert(
  canCompleteCircuit([3], [5]) === -1,
  'Test 4 failed: Single station with gas < cost, expected -1'
);

// Edge case: single station, gas greater than cost
console.assert(
  canCompleteCircuit([5], [3]) === 0,
  'Test 5 failed: Single station with gas > cost, expected 0'
);

// All stations have same gas and cost
console.assert(
  canCompleteCircuit([3, 3, 3], [3, 3, 3]) === 0,
  'Test 6 failed: All equal gas and cost, expected 0'
);

// Start must be at the last station
console.assert(
  canCompleteCircuit([5, 1, 1, 1], [1, 2, 2, 2]) === 0,
  'Test 7 failed: Start at index 0, expected 0'
);

// Start at the last index
console.assert(
  canCompleteCircuit([1, 1, 1, 1, 5], [2, 2, 2, 2, 1]) === 4,
  'Test 8 failed: Start at last station, expected 4'
);

// Two stations
console.assert(
  canCompleteCircuit([1, 2], [2, 1]) === 1,
  'Test 9 failed: Two stations, expected 1'
);

// No gas at any station
console.assert(
  canCompleteCircuit([0, 0, 0], [1, 1, 1]) === -1,
  'Test 10 failed: No gas, expected -1'
);

// Large values
console.assert(
  canCompleteCircuit([10000, 10000], [10000, 10000]) === 0,
  'Test 11 failed: Large equal values, expected 0'
);

console.log('ALL TESTS PASSED');
