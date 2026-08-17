import { lengthOfLastWord } from './length-of-last-word.js';

// Example 1
console.assert(
  lengthOfLastWord('Hello World') === 5,
  'Test 1 failed: Expected 5'
);

// Example 2
console.assert(
  lengthOfLastWord('   fly me   to   the moon  ') === 4,
  'Test 2 failed: Expected 4'
);

// Example 3
console.assert(
  lengthOfLastWord('luffy is still joyboy') === 6,
  'Test 3 failed: Expected 6'
);

// Edge case: single word
console.assert(
  lengthOfLastWord('hello') === 5,
  'Test 4 failed: Expected 5'
);

// Edge case: single word with trailing spaces
console.assert(
  lengthOfLastWord('hello   ') === 5,
  'Test 5 failed: Expected 5'
);

// Edge case: single character word
console.assert(
  lengthOfLastWord('a') === 1,
  'Test 6 failed: Expected 1'
);

// Edge case: multiple spaces between words
console.assert(
  lengthOfLastWord('a   bc   def') === 3,
  'Test 7 failed: Expected 3'
);

// Edge case: two words
console.assert(
  lengthOfLastWord('foo bar') === 3,
  'Test 8 failed: Expected 3'
);

// Edge case: word with leading spaces
console.assert(
  lengthOfLastWord('   word') === 4,
  'Test 9 failed: Expected 4'
);

console.log('ALL TESTS PASSED');
