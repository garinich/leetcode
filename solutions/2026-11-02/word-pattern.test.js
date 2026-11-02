import { wordPattern } from './word-pattern.js';

// Example 1: 'abba' and 'dog cat cat dog' => true
console.assert(
  wordPattern('abba', 'dog cat cat dog') === true,
  'Test 1 failed'
);

// Example 2: 'abba' and 'dog cat cat fish' => false
console.assert(
  wordPattern('abba', 'dog cat cat fish') === false,
  'Test 2 failed'
);

// Example 3: 'aaaa' and 'dog cat cat dog' => false
console.assert(
  wordPattern('aaaa', 'dog cat cat dog') === false,
  'Test 3 failed'
);

// Edge case: single character pattern and single word
console.assert(
  wordPattern('a', 'dog') === true,
  'Test 4 failed'
);

// Edge case: pattern length != words count
console.assert(
  wordPattern('ab', 'dog') === false,
  'Test 5 failed'
);

// Edge case: two different chars mapping to the same word (bijection violation)
console.assert(
  wordPattern('ab', 'dog dog') === false,
  'Test 6 failed'
);

// Edge case: same char mapped to two different words
console.assert(
  wordPattern('aa', 'dog cat') === false,
  'Test 7 failed'
);

// Edge case: all same pattern and all same word
console.assert(
  wordPattern('aaa', 'cat cat cat') === true,
  'Test 8 failed'
);

// Edge case: pattern 'abab' with 'dog cat dog cat'
console.assert(
  wordPattern('abab', 'dog cat dog cat') === true,
  'Test 9 failed'
);

// Edge case: pattern 'abab' with 'dog cat cat dog'
console.assert(
  wordPattern('abab', 'dog cat cat dog') === false,
  'Test 10 failed'
);

console.log('ALL TESTS PASSED');
