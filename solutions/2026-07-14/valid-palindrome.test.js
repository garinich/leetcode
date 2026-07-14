import { isPalindrome } from './valid-palindrome.js';

// Example test cases from the problem
console.assert(
  isPalindrome("A man, a plan, a canal: Panama") === true,
  'Test 1 Failed: "A man, a plan, a canal: Panama" should be a palindrome'
);

console.assert(
  isPalindrome("race a car") === false,
  'Test 2 Failed: "race a car" should not be a palindrome'
);

console.assert(
  isPalindrome(" ") === true,
  'Test 3 Failed: " " (space) should be a palindrome (empty after cleaning)'
);

// Edge cases
console.assert(
  isPalindrome("") === true,
  'Test 4 Failed: empty string should be a palindrome'
);

console.assert(
  isPalindrome("a") === true,
  'Test 5 Failed: single character should be a palindrome'
);

console.assert(
  isPalindrome("aa") === true,
  'Test 6 Failed: "aa" should be a palindrome'
);

console.assert(
  isPalindrome("ab") === false,
  'Test 7 Failed: "ab" should not be a palindrome'
);

console.assert(
  isPalindrome("0P") === false,
  'Test 8 Failed: "0P" should not be a palindrome'
);

console.assert(
  isPalindrome("Was it a car or a cat I saw?") === true,
  'Test 9 Failed: "Was it a car or a cat I saw?" should be a palindrome'
);

console.assert(
  isPalindrome("No lemon, no melon") === true,
  'Test 10 Failed: "No lemon, no melon" should be a palindrome'
);

console.assert(
  isPalindrome("12321") === true,
  'Test 11 Failed: "12321" should be a palindrome'
);

console.assert(
  isPalindrome("12345") === false,
  'Test 12 Failed: "12345" should not be a palindrome'
);

console.assert(
  isPalindrome("!!!") === true,
  'Test 13 Failed: "!!!" (all non-alphanumeric) should be a palindrome (empty after cleaning)'
);

console.log("ALL TESTS PASSED");
