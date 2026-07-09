import { strStr } from './find-the-index-of-the-first-occurrence-in-a-string.js';

// Example 1: needle found at index 0
console.assert(strStr('sadbutsad', 'sad') === 0, 'Test 1 failed: expected 0');

// Example 2: needle not found
console.assert(strStr('leetcode', 'leeto') === -1, 'Test 2 failed: expected -1');

// Edge case: needle equals haystack
console.assert(strStr('hello', 'hello') === 0, 'Test 3 failed: expected 0');

// Edge case: needle is a single character found at start
console.assert(strStr('abc', 'a') === 0, 'Test 4 failed: expected 0');

// Edge case: needle is a single character found at end
console.assert(strStr('abc', 'c') === 2, 'Test 5 failed: expected 2');

// Edge case: needle is a single character not found
console.assert(strStr('abc', 'z') === -1, 'Test 6 failed: expected -1');

// Edge case: needle longer than haystack
console.assert(strStr('ab', 'abc') === -1, 'Test 7 failed: expected -1');

// Edge case: needle found in the middle
console.assert(strStr('mississippi', 'issi') === 1, 'Test 8 failed: expected 1');

// Edge case: repeated characters
console.assert(strStr('aaaaaa', 'bba') === -1, 'Test 9 failed: expected -1');

// Edge case: needle at the last position
console.assert(strStr('hello world', 'world') === 6, 'Test 10 failed: expected 6');

// Edge case: single character haystack and needle both same
console.assert(strStr('a', 'a') === 0, 'Test 11 failed: expected 0');

// Edge case: single character haystack and needle different
console.assert(strStr('a', 'b') === -1, 'Test 12 failed: expected -1');

console.log('ALL TESTS PASSED');
