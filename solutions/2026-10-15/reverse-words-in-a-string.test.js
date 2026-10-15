import { reverseWords } from './reverse-words-in-a-string.js';

// Example test cases
console.assert(
  reverseWords('the sky is blue') === 'blue is sky the',
  'Test 1 failed: "the sky is blue"'
);

console.assert(
  reverseWords('  hello world  ') === 'world hello',
  'Test 2 failed: "  hello world  "'
);

console.assert(
  reverseWords('a good   example') === 'example good a',
  'Test 3 failed: "a good   example"'
);

// Edge cases
console.assert(
  reverseWords('a') === 'a',
  'Test 4 failed: single character'
);

console.assert(
  reverseWords('  single  ') === 'single',
  'Test 5 failed: single word with spaces'
);

console.assert(
  reverseWords('hello world') === 'world hello',
  'Test 6 failed: two words'
);

console.assert(
  reverseWords('   spaces   between   words   ') === 'words between spaces',
  'Test 7 failed: multiple spaces between words with leading/trailing'
);

console.assert(
  reverseWords('Hello World') === 'World Hello',
  'Test 8 failed: uppercase letters'
);

console.assert(
  reverseWords('123 456 789') === '789 456 123',
  'Test 9 failed: numbers as words'
);

console.log('ALL TESTS PASSED');
