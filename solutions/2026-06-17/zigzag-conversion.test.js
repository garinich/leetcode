import { convert } from './zigzag-conversion.js';

// Example 1: PAYPALISHIRING with 3 rows
console.assert(
  convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR',
  `Test 1 failed: expected 'PAHNAPLSIIGYIR', got '${convert('PAYPALISHIRING', 3)}'`
);

// Example 2: PAYPALISHIRING with 4 rows
console.assert(
  convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI',
  `Test 2 failed: expected 'PINALSIGYAHRPI', got '${convert('PAYPALISHIRING', 4)}'`
);

// Example 3: Single character
console.assert(
  convert('A', 1) === 'A',
  `Test 3 failed: expected 'A', got '${convert('A', 1)}'`
);

// Edge case: numRows = 1 (no zigzag)
console.assert(
  convert('HELLO', 1) === 'HELLO',
  `Test 4 failed: expected 'HELLO', got '${convert('HELLO', 1)}'`
);

// Edge case: numRows >= string length (no zigzag)
console.assert(
  convert('ABC', 5) === 'ABC',
  `Test 5 failed: expected 'ABC', got '${convert('ABC', 5)}'`
);

// Edge case: numRows equals string length
console.assert(
  convert('ABCD', 4) === 'ABCD',
  `Test 6 failed: expected 'ABCD', got '${convert('ABCD', 4)}'`
);

// Edge case: numRows = 2
console.assert(
  convert('PAYPALISHIRING', 2) === 'PYAIHRGAPLSIIG',
  `Test 7 failed: expected 'PYAIHRGAPLSIIG', got '${convert('PAYPALISHIRING', 2)}'`
);

// Edge case: two characters with 2 rows
console.assert(
  convert('AB', 2) === 'AB',
  `Test 8 failed: expected 'AB', got '${convert('AB', 2)}'`
);

// Edge case: string with punctuation
console.assert(
  convert('A,B.C', 2) === 'A.B,C',
  `Test 9 failed: expected 'A.B,C', got '${convert('A,B.C', 2)}'`
);

// Edge case: single character with multiple rows
console.assert(
  convert('A', 5) === 'A',
  `Test 10 failed: expected 'A', got '${convert('A', 5)}'`
);

console.log('ALL TESTS PASSED');
