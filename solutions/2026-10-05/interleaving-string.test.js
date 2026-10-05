import { isInterleave } from './interleaving-string.js';

// Example 1: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" => true
console.assert(
  isInterleave("aabcc", "dbbca", "aadbbcbcac") === true,
  'Test 1 failed: expected true'
);

// Example 2: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc" => false
console.assert(
  isInterleave("aabcc", "dbbca", "aadbbbaccc") === false,
  'Test 2 failed: expected false'
);

// Example 3: s1 = "", s2 = "", s3 = "" => true
console.assert(
  isInterleave("", "", "") === true,
  'Test 3 failed: expected true'
);

// Edge case: s3 length != s1.length + s2.length => false
console.assert(
  isInterleave("a", "b", "abc") === false,
  'Test 4 failed: expected false (length mismatch)'
);

// Edge case: s1 is empty, s3 == s2
console.assert(
  isInterleave("", "abc", "abc") === true,
  'Test 5 failed: expected true'
);

// Edge case: s2 is empty, s3 == s1
console.assert(
  isInterleave("abc", "", "abc") === true,
  'Test 6 failed: expected true'
);

// Edge case: s1 is empty, s3 != s2
console.assert(
  isInterleave("", "abc", "abd") === false,
  'Test 7 failed: expected false'
);

// Simple interleave
console.assert(
  isInterleave("a", "b", "ab") === true,
  'Test 8 failed: expected true'
);

console.assert(
  isInterleave("a", "b", "ba") === true,
  'Test 9 failed: expected true'
);

// Cannot interleave
console.assert(
  isInterleave("a", "b", "aa") === false,
  'Test 10 failed: expected false'
);

// Repeated characters
console.assert(
  isInterleave("aa", "aa", "aaaa") === true,
  'Test 11 failed: expected true'
);

console.assert(
  isInterleave("aa", "aa", "aabb") === false,
  'Test 12 failed: expected false'
);

// Longer strings
console.assert(
  isInterleave("abc", "def", "adbcef") === true,
  'Test 13 failed: expected true'
);

console.assert(
  isInterleave("abc", "def", "abdecf") === true,
  'Test 14 failed: expected true'
);

console.assert(
  isInterleave("abc", "def", "abcfed") === false,
  'Test 15 failed: expected false'
);

console.log("ALL TESTS PASSED");
