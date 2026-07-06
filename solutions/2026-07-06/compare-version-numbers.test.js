import { compareVersion } from './compare-version-numbers.js';

// Example 1: version1 = "1.2", version2 = "1.10" => -1
console.assert(
  compareVersion('1.2', '1.10') === -1,
  'Test 1 failed: 1.2 < 1.10 should return -1'
);

// Example 2: version1 = "1.01", version2 = "1.001" => 0
console.assert(
  compareVersion('1.01', '1.001') === 0,
  'Test 2 failed: 1.01 == 1.001 should return 0'
);

// Example 3: version1 = "1.0", version2 = "1.0.0.0" => 0
console.assert(
  compareVersion('1.0', '1.0.0.0') === 0,
  'Test 3 failed: 1.0 == 1.0.0.0 should return 0'
);

// Edge case: equal single revisions
console.assert(
  compareVersion('1', '1') === 0,
  'Test 4 failed: 1 == 1 should return 0'
);

// Edge case: first version greater
console.assert(
  compareVersion('2.0', '1.9') === 1,
  'Test 5 failed: 2.0 > 1.9 should return 1'
);

// Edge case: first version less
console.assert(
  compareVersion('0.1', '1.0') === -1,
  'Test 6 failed: 0.1 < 1.0 should return -1'
);

// Edge case: longer version with trailing zeros
console.assert(
  compareVersion('1.0.0', '1') === 0,
  'Test 7 failed: 1.0.0 == 1 should return 0'
);

// Edge case: leading zeros in major version
console.assert(
  compareVersion('01.0', '1.0') === 0,
  'Test 8 failed: 01.0 == 1.0 should return 0'
);

// Edge case: larger revision numbers
console.assert(
  compareVersion('1.0.1', '1.0.0') === 1,
  'Test 9 failed: 1.0.1 > 1.0.0 should return 1'
);

// Edge case: version with many parts
console.assert(
  compareVersion('1.2.3.4.5', '1.2.3.4.5') === 0,
  'Test 10 failed: identical multi-part versions should return 0'
);

// Edge case: single digit versions
console.assert(
  compareVersion('0', '1') === -1,
  'Test 11 failed: 0 < 1 should return -1'
);

console.assert(
  compareVersion('1', '0') === 1,
  'Test 12 failed: 1 > 0 should return 1'
);

console.log('ALL TESTS PASSED');
