import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters.js';

// Example test cases from the problem
console.assert(
  lengthOfLongestSubstring('abcabcbb') === 3,
  'Test 1 Failed: expected 3 for "abcabcbb"'
);

console.assert(
  lengthOfLongestSubstring('bbbbb') === 1,
  'Test 2 Failed: expected 1 for "bbbbb"'
);

console.assert(
  lengthOfLongestSubstring('pwwkew') === 3,
  'Test 3 Failed: expected 3 for "pwwkew"'
);

// Edge cases
console.assert(
  lengthOfLongestSubstring('') === 0,
  'Test 4 Failed: expected 0 for empty string'
);

console.assert(
  lengthOfLongestSubstring('a') === 1,
  'Test 5 Failed: expected 1 for single character "a"'
);

console.assert(
  lengthOfLongestSubstring('au') === 2,
  'Test 6 Failed: expected 2 for "au"'
);

console.assert(
  lengthOfLongestSubstring('dvdf') === 3,
  'Test 7 Failed: expected 3 for "dvdf"'
);

console.assert(
  lengthOfLongestSubstring('abcdefghijklmnopqrstuvwxyz') === 26,
  'Test 8 Failed: expected 26 for all unique lowercase letters'
);

console.assert(
  lengthOfLongestSubstring(' ') === 1,
  'Test 9 Failed: expected 1 for single space'
);

console.assert(
  lengthOfLongestSubstring('aab') === 2,
  'Test 10 Failed: expected 2 for "aab"'
);

console.assert(
  lengthOfLongestSubstring('abba') === 2,
  'Test 11 Failed: expected 2 for "abba"'
);

console.assert(
  lengthOfLongestSubstring('tmmzuxt') === 5,
  'Test 12 Failed: expected 5 for "tmmzuxt"'
);

console.assert(
  lengthOfLongestSubstring('!@#$%^&*()') === 10,
  'Test 13 Failed: expected 10 for all unique symbols'
);

console.log('ALL TESTS PASSED');
