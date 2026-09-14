import { fractionToDecimal } from './fraction-to-recurring-decimal.js';

// Example 1: 1/2 = 0.5
console.assert(fractionToDecimal(1, 2) === '0.5', `Expected '0.5', got '${fractionToDecimal(1, 2)}'`);

// Example 2: 2/1 = 2
console.assert(fractionToDecimal(2, 1) === '2', `Expected '2', got '${fractionToDecimal(2, 1)}'`);

// Example 3: 4/333 = 0.(012)
console.assert(fractionToDecimal(4, 333) === '0.(012)', `Expected '0.(012)', got '${fractionToDecimal(4, 333)}'`);

// Zero numerator
console.assert(fractionToDecimal(0, 5) === '0', `Expected '0', got '${fractionToDecimal(0, 5)}'`);

// Negative numerator
console.assert(fractionToDecimal(-1, 2) === '-0.5', `Expected '-0.5', got '${fractionToDecimal(-1, 2)}'`);

// Negative denominator
console.assert(fractionToDecimal(1, -2) === '-0.5', `Expected '-0.5', got '${fractionToDecimal(1, -2)}'`);

// Both negative => positive
console.assert(fractionToDecimal(-1, -2) === '0.5', `Expected '0.5', got '${fractionToDecimal(-1, -2)}'`);

// 1/3 = 0.(3)
console.assert(fractionToDecimal(1, 3) === '0.(3)', `Expected '0.(3)', got '${fractionToDecimal(1, 3)}'`);

// 1/6 = 0.1(6)
console.assert(fractionToDecimal(1, 6) === '0.1(6)', `Expected '0.1(6)', got '${fractionToDecimal(1, 6)}'`);

// 1/7 = 0.(142857)
console.assert(fractionToDecimal(1, 7) === '0.(142857)', `Expected '0.(142857)', got '${fractionToDecimal(1, 7)}'`);

// Large numerator: -2^31 / 1
console.assert(fractionToDecimal(-2147483648, 1) === '-2147483648', `Expected '-2147483648', got '${fractionToDecimal(-2147483648, 1)}'`);

// -2^31 / -1 => 2147483648
console.assert(fractionToDecimal(-2147483648, -1) === '2147483648', `Expected '2147483648', got '${fractionToDecimal(-2147483648, -1)}'`);

// 22/7 = 3.(142857)
console.assert(fractionToDecimal(22, 7) === '3.(142857)', `Expected '3.(142857)', got '${fractionToDecimal(22, 7)}'`);

// 5/4 = 1.25
console.assert(fractionToDecimal(5, 4) === '1.25', `Expected '1.25', got '${fractionToDecimal(5, 4)}'`);

console.log('ALL TESTS PASSED');
