import { addDigits } from './add-digits.js';

// Example test cases from problem
console.assert(addDigits(38) === 2, 'Test 1 failed: addDigits(38) should be 2');
console.assert(addDigits(0) === 0, 'Test 2 failed: addDigits(0) should be 0');

// Edge cases
console.assert(addDigits(1) === 1, 'Test 3 failed: addDigits(1) should be 1');
console.assert(addDigits(9) === 9, 'Test 4 failed: addDigits(9) should be 9');
console.assert(addDigits(10) === 1, 'Test 5 failed: addDigits(10) should be 1');
console.assert(addDigits(18) === 9, 'Test 6 failed: addDigits(18) should be 9');
console.assert(addDigits(99) === 9, 'Test 7 failed: addDigits(99) should be 9');
console.assert(addDigits(100) === 1, 'Test 8 failed: addDigits(100) should be 1');
console.assert(addDigits(999) === 9, 'Test 9 failed: addDigits(999) should be 9');
console.assert(addDigits(2147483647) === 1, 'Test 10 failed: addDigits(2147483647) should be 1');
console.assert(addDigits(5) === 5, 'Test 11 failed: addDigits(5) should be 5');
console.assert(addDigits(11) === 2, 'Test 12 failed: addDigits(11) should be 2');
console.assert(addDigits(27) === 9, 'Test 13 failed: addDigits(27) should be 9');

console.log("ALL TESTS PASSED");
