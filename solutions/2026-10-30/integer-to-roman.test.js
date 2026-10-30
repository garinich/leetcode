import { intToRoman } from './integer-to-roman.js';

// Provided examples
console.assert(intToRoman(3749) === 'MMMDCCXLIX', `Expected MMMDCCXLIX but got ${intToRoman(3749)}`);
console.assert(intToRoman(58) === 'LVIII', `Expected LVIII but got ${intToRoman(58)}`);
console.assert(intToRoman(1994) === 'MCMXCIV', `Expected MCMXCIV but got ${intToRoman(1994)}`);

// Edge cases
console.assert(intToRoman(1) === 'I', `Expected I but got ${intToRoman(1)}`);
console.assert(intToRoman(4) === 'IV', `Expected IV but got ${intToRoman(4)}`);
console.assert(intToRoman(9) === 'IX', `Expected IX but got ${intToRoman(9)}`);
console.assert(intToRoman(14) === 'XIV', `Expected XIV but got ${intToRoman(14)}`);
console.assert(intToRoman(40) === 'XL', `Expected XL but got ${intToRoman(40)}`);
console.assert(intToRoman(90) === 'XC', `Expected XC but got ${intToRoman(90)}`);
console.assert(intToRoman(399) === 'CCCXCIX', `Expected CCCXCIX but got ${intToRoman(399)}`);
console.assert(intToRoman(400) === 'CD', `Expected CD but got ${intToRoman(400)}`);
console.assert(intToRoman(500) === 'D', `Expected D but got ${intToRoman(500)}`);
console.assert(intToRoman(900) === 'CM', `Expected CM but got ${intToRoman(900)}`);
console.assert(intToRoman(1000) === 'M', `Expected M but got ${intToRoman(1000)}`);
console.assert(intToRoman(3000) === 'MMM', `Expected MMM but got ${intToRoman(3000)}`);
console.assert(intToRoman(3999) === 'MMMCMXCIX', `Expected MMMCMXCIX but got ${intToRoman(3999)}`);
console.assert(intToRoman(2024) === 'MMXXIV', `Expected MMXXIV but got ${intToRoman(2024)}`);
console.assert(intToRoman(49) === 'XLIX', `Expected XLIX but got ${intToRoman(49)}`);

console.log('ALL TESTS PASSED');
