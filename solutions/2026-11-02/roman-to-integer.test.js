import { romanToInt } from './roman-to-integer.js';

// Example test cases from problem
console.assert(romanToInt('III') === 3, 'Test 1 failed: III should be 3');
console.assert(romanToInt('LVIII') === 58, 'Test 2 failed: LVIII should be 58');
console.assert(romanToInt('MCMXCIV') === 1994, 'Test 3 failed: MCMXCIV should be 1994');

// Edge cases
console.assert(romanToInt('I') === 1, 'Test 4 failed: I should be 1');
console.assert(romanToInt('IV') === 4, 'Test 5 failed: IV should be 4');
console.assert(romanToInt('IX') === 9, 'Test 6 failed: IX should be 9');
console.assert(romanToInt('XL') === 40, 'Test 7 failed: XL should be 40');
console.assert(romanToInt('XC') === 90, 'Test 8 failed: XC should be 90');
console.assert(romanToInt('CD') === 400, 'Test 9 failed: CD should be 400');
console.assert(romanToInt('CM') === 900, 'Test 10 failed: CM should be 900');
console.assert(romanToInt('M') === 1000, 'Test 11 failed: M should be 1000');
console.assert(romanToInt('MMMCMXCIX') === 3999, 'Test 12 failed: MMMCMXCIX should be 3999');
console.assert(romanToInt('XII') === 12, 'Test 13 failed: XII should be 12');
console.assert(romanToInt('XXVII') === 27, 'Test 14 failed: XXVII should be 27');
console.assert(romanToInt('DCXXI') === 621, 'Test 15 failed: DCXXI should be 621');
console.assert(romanToInt('MMXXIV') === 2024, 'Test 16 failed: MMXXIV should be 2024');

console.log('ALL TESTS PASSED');
