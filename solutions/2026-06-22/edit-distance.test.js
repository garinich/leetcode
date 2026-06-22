import { minDistance } from './edit-distance.js';

// Example 1: horse -> ros
console.assert(
  minDistance('horse', 'ros') === 3,
  'Test 1 Failed: horse -> ros should be 3'
);

// Example 2: intention -> execution
console.assert(
  minDistance('intention', 'execution') === 5,
  'Test 2 Failed: intention -> execution should be 5'
);

// Edge case: both strings are empty
console.assert(
  minDistance('', '') === 0,
  'Test 3 Failed: empty to empty should be 0'
);

// Edge case: word1 is empty
console.assert(
  minDistance('', 'abc') === 3,
  'Test 4 Failed: empty to abc should be 3'
);

// Edge case: word2 is empty
console.assert(
  minDistance('abc', '') === 3,
  'Test 5 Failed: abc to empty should be 3'
);

// Edge case: identical strings
console.assert(
  minDistance('same', 'same') === 0,
  'Test 6 Failed: same to same should be 0'
);

// Edge case: single character same
console.assert(
  minDistance('a', 'a') === 0,
  'Test 7 Failed: a to a should be 0'
);

// Edge case: single character different
console.assert(
  minDistance('a', 'b') === 1,
  'Test 8 Failed: a to b should be 1'
);

// Edge case: insert one character
console.assert(
  minDistance('ab', 'abc') === 1,
  'Test 9 Failed: ab to abc should be 1'
);

// Edge case: delete one character
console.assert(
  minDistance('abc', 'ab') === 1,
  'Test 10 Failed: abc to ab should be 1'
);

// Edge case: completely different strings
console.assert(
  minDistance('abc', 'xyz') === 3,
  'Test 11 Failed: abc to xyz should be 3'
);

// Edge case: one character to empty
console.assert(
  minDistance('a', '') === 1,
  'Test 12 Failed: a to empty should be 1'
);

// Edge case: empty to one character
console.assert(
  minDistance('', 'a') === 1,
  'Test 13 Failed: empty to a should be 1'
);

// Edge case: longer strings
console.assert(
  minDistance('kitten', 'sitting') === 3,
  'Test 14 Failed: kitten to sitting should be 3'
);

// Edge case: substring
console.assert(
  minDistance('abcde', 'ace') === 2,
  'Test 15 Failed: abcde to ace should be 2'
);

console.log('ALL TESTS PASSED');
