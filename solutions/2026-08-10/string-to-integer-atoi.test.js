import { myAtoi } from './string-to-integer-atoi.js';

// Example test cases from problem
console.assert(myAtoi("42") === 42, `Expected 42, got ${myAtoi("42")}`);
console.assert(myAtoi("   -042") === -42, `Expected -42, got ${myAtoi("   -042")}`);
console.assert(myAtoi("1337c0d3") === 1337, `Expected 1337, got ${myAtoi("1337c0d3")}`);
console.assert(myAtoi("0-1") === 0, `Expected 0, got ${myAtoi("0-1")}`);
console.assert(myAtoi("words and 987") === 0, `Expected 0, got ${myAtoi("words and 987")}`);

// Edge cases
// Empty string
console.assert(myAtoi("") === 0, `Expected 0, got ${myAtoi("")}`);

// Only whitespace
console.assert(myAtoi("   ") === 0, `Expected 0, got ${myAtoi("   ")}`);

// Only sign
console.assert(myAtoi("+") === 0, `Expected 0, got ${myAtoi("+")}`);
console.assert(myAtoi("-") === 0, `Expected 0, got ${myAtoi("-")}`);

// INT_MAX overflow
console.assert(myAtoi("2147483648") === 2147483647, `Expected 2147483647, got ${myAtoi("2147483648")}`);
console.assert(myAtoi("99999999999") === 2147483647, `Expected 2147483647, got ${myAtoi("99999999999")}`);

// INT_MIN underflow
console.assert(myAtoi("-2147483649") === -2147483648, `Expected -2147483648, got ${myAtoi("-2147483649")}`);
console.assert(myAtoi("-99999999999") === -2147483648, `Expected -2147483648, got ${myAtoi("-99999999999")}`);

// Exact INT_MAX and INT_MIN
console.assert(myAtoi("2147483647") === 2147483647, `Expected 2147483647, got ${myAtoi("2147483647")}`);
console.assert(myAtoi("-2147483648") === -2147483648, `Expected -2147483648, got ${myAtoi("-2147483648")}`);

// Leading zeros
console.assert(myAtoi("000000123") === 123, `Expected 123, got ${myAtoi("000000123")}`);

// Positive sign
console.assert(myAtoi("+42") === 42, `Expected 42, got ${myAtoi("+42")}`);

// Whitespace then digits
console.assert(myAtoi("  4193 with words") === 4193, `Expected 4193, got ${myAtoi("  4193 with words")}`);

// Dot character
console.assert(myAtoi("3.14") === 3, `Expected 3, got ${myAtoi("3.14")}`);

// Zero
console.assert(myAtoi("0") === 0, `Expected 0, got ${myAtoi("0")}`);
console.assert(myAtoi("-0") === 0, `Expected 0, got ${myAtoi("-0")}`);

console.log("ALL TESTS PASSED");
