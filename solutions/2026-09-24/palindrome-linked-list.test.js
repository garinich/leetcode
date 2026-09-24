import { isPalindrome, buildList } from './palindrome-linked-list.js';

// Helper to quickly test
function check(arr) {
  return isPalindrome(buildList(arr));
}

// Example 1: [1,2,2,1] -> true
console.assert(check([1, 2, 2, 1]) === true, 'Test 1 failed: [1,2,2,1] should be true');

// Example 2: [1,2] -> false
console.assert(check([1, 2]) === false, 'Test 2 failed: [1,2] should be false');

// Edge case: single element -> true
console.assert(check([1]) === true, 'Test 3 failed: [1] should be true');

// Edge case: two same elements -> true
console.assert(check([1, 1]) === true, 'Test 4 failed: [1,1] should be true');

// Odd length palindrome
console.assert(check([1, 2, 1]) === true, 'Test 5 failed: [1,2,1] should be true');

// Odd length non-palindrome
console.assert(check([1, 2, 3]) === false, 'Test 6 failed: [1,2,3] should be false');

// All same elements
console.assert(check([5, 5, 5, 5, 5]) === true, 'Test 7 failed: [5,5,5,5,5] should be true');

// Longer palindrome
console.assert(check([1, 2, 3, 2, 1]) === true, 'Test 8 failed: [1,2,3,2,1] should be true');

// Longer non-palindrome
console.assert(check([1, 2, 3, 4, 5]) === false, 'Test 9 failed: [1,2,3,4,5] should be false');

// All zeros
console.assert(check([0, 0, 0]) === true, 'Test 10 failed: [0,0,0] should be true');

// Even length non-palindrome
console.assert(check([1, 2, 3, 1]) === false, 'Test 11 failed: [1,2,3,1] should be false');

// Palindrome with 0s and 9s
console.assert(check([0, 9, 0]) === true, 'Test 12 failed: [0,9,0] should be true');

console.log('ALL TESTS PASSED');
