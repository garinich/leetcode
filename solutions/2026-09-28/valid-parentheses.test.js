import { isValid } from './valid-parentheses.js';

// Example test cases from the problem
console.assert(isValid('()') === true, 'Test 1 failed: "()" should be true');
console.assert(isValid('()[]{}') === true, 'Test 2 failed: "()[]{}" should be true');
console.assert(isValid('(]') === false, 'Test 3 failed: "(]" should be false');
console.assert(isValid('([])') === true, 'Test 4 failed: "([])" should be true');
console.assert(isValid('([)]') === false, 'Test 5 failed: "([)]" should be false');

// Edge cases
console.assert(isValid('') === true, 'Test 6 failed: empty string should be true');
console.assert(isValid('{') === false, 'Test 7 failed: single open bracket should be false');
console.assert(isValid('}') === false, 'Test 8 failed: single close bracket should be false');
console.assert(isValid('{{}}') === true, 'Test 9 failed: "{{}}" should be true');
console.assert(isValid('{[()]}') === true, 'Test 10 failed: "{[()]}" should be true');
console.assert(isValid('{[}]') === false, 'Test 11 failed: "{[}]" should be false');
console.assert(isValid('((') === false, 'Test 12 failed: "((" should be false');
console.assert(isValid('))') === false, 'Test 13 failed: "))" should be false');
console.assert(isValid('(){}[]') === true, 'Test 14 failed: "(){}[]" should be true');
console.assert(isValid('([{}])') === true, 'Test 15 failed: "([{}])" should be true');
console.assert(isValid('[({})](]') === false, 'Test 16 failed: "[({})](]" should be false');

console.log('ALL TESTS PASSED');
