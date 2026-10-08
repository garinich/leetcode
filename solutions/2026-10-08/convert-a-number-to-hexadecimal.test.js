import { toHex } from './convert-a-number-to-hexadecimal.js';

// Example test cases
console.assert(toHex(26) === '1a', `Expected '1a' but got '${toHex(26)}'`);
console.assert(toHex(-1) === 'ffffffff', `Expected 'ffffffff' but got '${toHex(-1)}'`);

// Edge cases
console.assert(toHex(0) === '0', `Expected '0' but got '${toHex(0)}'`);
console.assert(toHex(1) === '1', `Expected '1' but got '${toHex(1)}'`);
console.assert(toHex(15) === 'f', `Expected 'f' but got '${toHex(15)}'`);
console.assert(toHex(16) === '10', `Expected '10' but got '${toHex(16)}'`);
console.assert(toHex(255) === 'ff', `Expected 'ff' but got '${toHex(255)}'`);
console.assert(toHex(256) === '100', `Expected '100' but got '${toHex(256)}'`);
console.assert(toHex(-2) === 'fffffffe', `Expected 'fffffffe' but got '${toHex(-2)}'`);
console.assert(toHex(2147483647) === '7fffffff', `Expected '7fffffff' but got '${toHex(2147483647)}'`);
console.assert(toHex(-2147483648) === '80000000', `Expected '80000000' but got '${toHex(-2147483648)}'`);

console.log('ALL TESTS PASSED');
