import { firstUniqChar } from './first-unique-character-in-a-string.js';

// Example 1: 'l' at index 0 is the first unique character
console.assert(
  firstUniqChar('leetcode') === 0,
  'Test 1 Failed: expected 0'
);

// Example 2: 'v' at index 2 is the first unique character
console.assert(
  firstUniqChar('loveleetcode') === 2,
  'Test 2 Failed: expected 2'
);

// Example 3: no unique character exists
console.assert(
  firstUniqChar('aabb') === -1,
  'Test 3 Failed: expected -1'
);

// Edge case: single character string
console.assert(
  firstUniqChar('z') === 0,
  'Test 4 Failed: expected 0'
);

// Edge case: all same characters
console.assert(
  firstUniqChar('aaaa') === -1,
  'Test 5 Failed: expected -1'
);

// Edge case: unique character at the end
console.assert(
  firstUniqChar('aabbccd') === 6,
  'Test 6 Failed: expected 6'
);

// Edge case: two characters, both unique
console.assert(
  firstUniqChar('ab') === 0,
  'Test 7 Failed: expected 0'
);

// Edge case: unique character in the middle
console.assert(
  firstUniqChar('aabbc') === 4,
  'Test 8 Failed: expected 4'
);

// Edge case: longer string with unique at start
console.assert(
  firstUniqChar('xaabbcc') === 0,
  'Test 9 Failed: expected 0'
);

console.log('ALL TESTS PASSED');
