import { isPalindrome } from './palindrome-number.js';

// Provided examples
console.assert(isPalindrome(121) === true, 'Test 1 failed: 121 should be a palindrome');
console.assert(isPalindrome(-121) === false, 'Test 2 failed: -121 should not be a palindrome');
console.assert(isPalindrome(10) === false, 'Test 3 failed: 10 should not be a palindrome');

// Edge cases
console.assert(isPalindrome(0) === true, 'Test 4 failed: 0 should be a palindrome');
console.assert(isPalindrome(1) === true, 'Test 5 failed: 1 should be a palindrome');
console.assert(isPalindrome(9) === true, 'Test 6 failed: 9 should be a palindrome');
console.assert(isPalindrome(11) === true, 'Test 7 failed: 11 should be a palindrome');
console.assert(isPalindrome(1221) === true, 'Test 8 failed: 1221 should be a palindrome');
console.assert(isPalindrome(12321) === true, 'Test 9 failed: 12321 should be a palindrome');
console.assert(isPalindrome(123) === false, 'Test 10 failed: 123 should not be a palindrome');
console.assert(isPalindrome(100) === false, 'Test 11 failed: 100 should not be a palindrome');
console.assert(isPalindrome(1000021) === false, 'Test 12 failed: 1000021 should not be a palindrome');
console.assert(isPalindrome(-1) === false, 'Test 13 failed: -1 should not be a palindrome');
console.assert(isPalindrome(2147447412) === true, 'Test 14 failed: 2147447412 should be a palindrome');
console.assert(isPalindrome(2147483647) === false, 'Test 15 failed: INT_MAX should not be a palindrome');
console.assert(isPalindrome(1001) === true, 'Test 16 failed: 1001 should be a palindrome');
console.assert(isPalindrome(10) === false, 'Test 17 failed: 10 should not be a palindrome');

console.log('ALL TESTS PASSED');
