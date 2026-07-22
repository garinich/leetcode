import { longestPalindrome } from './longest-palindrome.js';

// Example 1: "abccccdd" -> 7
console.assert(
  longestPalindrome("abccccdd") === 7,
  `Expected 7, got ${longestPalindrome("abccccdd")}`
);

// Example 2: "a" -> 1
console.assert(
  longestPalindrome("a") === 1,
  `Expected 1, got ${longestPalindrome("a")}`
);

// Edge case: All same characters
console.assert(
  longestPalindrome("aaaa") === 4,
  `Expected 4, got ${longestPalindrome("aaaa")}`
);

// Edge case: Single character repeated odd times
console.assert(
  longestPalindrome("aaa") === 3,
  `Expected 3, got ${longestPalindrome("aaa")}`
);

// Edge case: Mixed case letters - case sensitive
console.assert(
  longestPalindrome("Aa") === 1,
  `Expected 1, got ${longestPalindrome("Aa")}`
);

// Edge case: All unique characters
console.assert(
  longestPalindrome("abcd") === 1,
  `Expected 1, got ${longestPalindrome("abcd")}`
);

// Edge case: Two same characters
console.assert(
  longestPalindrome("aa") === 2,
  `Expected 2, got ${longestPalindrome("aa")}`
);

// Edge case: uppercase and lowercase
console.assert(
  longestPalindrome("AaBb") === 2,
  `Expected 2, got ${longestPalindrome("AaBb")}`
);

// Edge case: multiple pairs with one odd
console.assert(
  longestPalindrome("aabbccc") === 7,
  `Expected 7, got ${longestPalindrome("aabbccc")}`
);

// Edge case: longer string
console.assert(
  longestPalindrome("aaabbbccc") === 7,
  `Expected 7, got ${longestPalindrome("aaabbbccc")}`
);

console.log("ALL TESTS PASSED");
