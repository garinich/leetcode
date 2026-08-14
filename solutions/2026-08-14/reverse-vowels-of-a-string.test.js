import { reverseVowels } from './reverse-vowels-of-a-string.js';

// Example 1
console.assert(
  reverseVowels('IceCreAm') === 'AceCreIm',
  `Expected 'AceCreIm' but got '${reverseVowels('IceCreAm')}'`
);

// Example 2
console.assert(
  reverseVowels('leetcode') === 'leotcede',
  `Expected 'leotcede' but got '${reverseVowels('leetcode')}'`
);

// Edge case: single character (vowel)
console.assert(
  reverseVowels('a') === 'a',
  `Expected 'a' but got '${reverseVowels('a')}'`
);

// Edge case: single character (consonant)
console.assert(
  reverseVowels('b') === 'b',
  `Expected 'b' but got '${reverseVowels('b')}'`
);

// Edge case: no vowels
console.assert(
  reverseVowels('bcdfg') === 'bcdfg',
  `Expected 'bcdfg' but got '${reverseVowels('bcdfg')}'`
);

// Edge case: all vowels
console.assert(
  reverseVowels('aeiou') === 'uoiea',
  `Expected 'uoiea' but got '${reverseVowels('aeiou')}'`
);

// Edge case: uppercase vowels
console.assert(
  reverseVowels('AEIOU') === 'UOIEA',
  `Expected 'UOIEA' but got '${reverseVowels('AEIOU')}'`
);

// Edge case: mixed case vowels
console.assert(
  reverseVowels('hello') === 'holle',
  `Expected 'holle' but got '${reverseVowels('hello')}'`
);

// Edge case: empty-like single vowel string
console.assert(
  reverseVowels('aA') === 'Aa',
  `Expected 'Aa' but got '${reverseVowels('aA')}'`
);

// Edge case: two characters, both consonants
console.assert(
  reverseVowels('bc') === 'bc',
  `Expected 'bc' but got '${reverseVowels('bc')}'`
);

console.log('ALL TESTS PASSED');
