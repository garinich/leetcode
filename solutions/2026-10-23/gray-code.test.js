import { grayCode } from './gray-code.js';

// Helper function to verify a valid gray code sequence
function isValidGrayCode(sequence, n) {
  const total = 1 << n;
  
  // Check length
  if (sequence.length !== total) return false;
  
  // Check all values are unique and in range [0, 2^n - 1]
  const seen = new Set();
  for (const val of sequence) {
    if (val < 0 || val >= total) return false;
    if (seen.has(val)) return false;
    seen.add(val);
  }
  
  // Check first element is 0
  if (sequence[0] !== 0) return false;
  
  // Check adjacent pairs differ by exactly one bit
  function diffByOneBit(a, b) {
    const xor = a ^ b;
    return xor !== 0 && (xor & (xor - 1)) === 0;
  }
  
  for (let i = 1; i < sequence.length; i++) {
    if (!diffByOneBit(sequence[i - 1], sequence[i])) return false;
  }
  
  // Check first and last differ by exactly one bit
  if (!diffByOneBit(sequence[0], sequence[sequence.length - 1])) return false;
  
  return true;
}

// Test n = 2
const result2 = grayCode(2);
console.assert(isValidGrayCode(result2, 2), 'n=2 should produce a valid gray code sequence');
console.assert(result2.length === 4, 'n=2 should produce 4 elements');
console.assert(result2[0] === 0, 'n=2 first element should be 0');

// Test n = 1
const result1 = grayCode(1);
console.assert(isValidGrayCode(result1, 1), 'n=1 should produce a valid gray code sequence');
console.assert(result1.length === 2, 'n=1 should produce 2 elements');
console.assert(result1[0] === 0, 'n=1 first element should be 0');

// Test n = 3
const result3 = grayCode(3);
console.assert(isValidGrayCode(result3, 3), 'n=3 should produce a valid gray code sequence');
console.assert(result3.length === 8, 'n=3 should produce 8 elements');

// Test n = 4
const result4 = grayCode(4);
console.assert(isValidGrayCode(result4, 4), 'n=4 should produce a valid gray code sequence');
console.assert(result4.length === 16, 'n=4 should produce 16 elements');

// Test n = 16 (max constraint)
const result16 = grayCode(16);
console.assert(isValidGrayCode(result16, 16), 'n=16 should produce a valid gray code sequence');
console.assert(result16.length === 65536, 'n=16 should produce 65536 elements');

// Verify specific known sequence for n=2
// Expected: [0, 1, 3, 2]
console.assert(JSON.stringify(result2) === JSON.stringify([0, 1, 3, 2]), 'n=2 should match [0,1,3,2]');

// Verify specific known sequence for n=1
// Expected: [0, 1]
console.assert(JSON.stringify(result1) === JSON.stringify([0, 1]), 'n=1 should match [0,1]');

console.log('ALL TESTS PASSED');
