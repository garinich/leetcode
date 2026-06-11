import { addBinary } from './add-binary.js';

// Test Example 1
console.assert(addBinary("11", "1") === "100", 'Example 1 failed');

// Test Example 2
console.assert(addBinary("1010", "1011") === "10101", 'Example 2 failed');

// Test edge cases
console.assert(addBinary("0", "0") === "0", 'Both zeros failed');
console.assert(addBinary("1", "0") === "1", 'One zero failed');
console.assert(addBinary("0", "1") === "1", 'One zero (reversed) failed');
console.assert(addBinary("1", "1") === "10", 'Both ones failed');

// Test different lengths
console.assert(addBinary("1", "111") === "1000", 'Different lengths failed');
console.assert(addBinary("1111", "1") === "10000", 'Different lengths (reversed) failed');

// Test single characters
console.assert(addBinary("1", "1") === "10", 'Single chars failed');

// Test longer strings with carries
console.assert(addBinary("1111", "1111") === "11110", 'Multiple carries failed');
console.assert(addBinary("10101", "11011") === "110000", 'Complex addition failed');

// Test maximum single digit
console.assert(addBinary("1", "11") === "100", 'Single to double digit failed');

console.log('ALL TESTS PASSED');