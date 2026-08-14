import { titleToNumber } from './excel-sheet-column-number.js';

// Example test cases from problem
console.assert(titleToNumber("A") === 1, 'Test 1 failed: A should be 1');
console.assert(titleToNumber("AB") === 28, 'Test 2 failed: AB should be 28');
console.assert(titleToNumber("ZY") === 701, 'Test 3 failed: ZY should be 701');

// Additional edge cases
console.assert(titleToNumber("Z") === 26, 'Test 4 failed: Z should be 26');
console.assert(titleToNumber("AA") === 27, 'Test 5 failed: AA should be 27');
console.assert(titleToNumber("AZ") === 52, 'Test 6 failed: AZ should be 52');
console.assert(titleToNumber("BA") === 53, 'Test 7 failed: BA should be 53');
console.assert(titleToNumber("ZZ") === 702, 'Test 8 failed: ZZ should be 702');
console.assert(titleToNumber("AAA") === 703, 'Test 9 failed: AAA should be 703');
console.assert(titleToNumber("FXSHRXW") === 2147483647, 'Test 10 failed: FXSHRXW should be 2147483647');

console.log("ALL TESTS PASSED");
