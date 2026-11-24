import { longestPalindrome } from './longest-palindromic-substring.js';

// Helper: check if result is a valid palindrome of expected length
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Example 1: "babad" -> "bab" or "aba"
const result1 = longestPalindrome('babad');
console.assert(
  isPalindrome(result1) && result1.length === 3,
  `Test 1 failed: got "${result1}"`
);

// Example 2: "cbbd" -> "bb"
const result2 = longestPalindrome('cbbd');
console.assert(
  result2 === 'bb',
  `Test 2 failed: got "${result2}"`
);

// Edge case: single character
const result3 = longestPalindrome('a');
console.assert(
  result3 === 'a',
  `Test 3 failed: got "${result3}"`
);

// Edge case: all same characters
const result4 = longestPalindrome('aaaa');
console.assert(
  result4 === 'aaaa',
  `Test 4 failed: got "${result4}"`
);

// Edge case: entire string is a palindrome
const result5 = longestPalindrome('racecar');
console.assert(
  result5 === 'racecar',
  `Test 5 failed: got "${result5}"`
);

// Edge case: two different characters
const result6 = longestPalindrome('ac');
console.assert(
  result6 === 'a' || result6 === 'c',
  `Test 6 failed: got "${result6}"`
);

// Edge case: two same characters
const result7 = longestPalindrome('aa');
console.assert(
  result7 === 'aa',
  `Test 7 failed: got "${result7}"`
);

// Longer string with known answer
const result8 = longestPalindrome('abacaba');
console.assert(
  result8 === 'abacaba',
  `Test 8 failed: got "${result8}"`
);

// Palindrome in the middle
const result9 = longestPalindrome('xyzabacabaxyz');
console.assert(
  result9 === 'xyzabacabaxyz',
  `Test 9 failed: got "${result9}"`
);

// No repeated characters
const result10 = longestPalindrome('abcde');
console.assert(
  result10.length === 1 && isPalindrome(result10),
  `Test 10 failed: got "${result10}"`
);

// Even length palindrome
const result11 = longestPalindrome('aabbaa');
console.assert(
  result11 === 'aabbaa',
  `Test 11 failed: got "${result11}"`
);

console.log('ALL TESTS PASSED');
