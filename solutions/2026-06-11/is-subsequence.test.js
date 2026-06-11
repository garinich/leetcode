import { isSubsequence } from './is-subsequence.js';

// Test Example 1
console.assert(isSubsequence("abc", "ahbgdc") === true, 'Test 1 failed');

// Test Example 2
console.assert(isSubsequence("axc", "ahbgdc") === false, 'Test 2 failed');

// Test empty s (should return true)
console.assert(isSubsequence("", "abc") === true, 'Test 3 failed');

// Test empty t with non-empty s (should return false)
console.assert(isSubsequence("a", "") === false, 'Test 4 failed');

// Test both empty strings (should return true)
console.assert(isSubsequence("", "") === true, 'Test 5 failed');

// Test single character match
console.assert(isSubsequence("a", "a") === true, 'Test 6 failed');

// Test single character no match
console.assert(isSubsequence("a", "b") === false, 'Test 7 failed');

// Test s longer than t
console.assert(isSubsequence("abc", "ab") === false, 'Test 8 failed');

// Test exact match
console.assert(isSubsequence("abc", "abc") === true, 'Test 9 failed');

// Test subsequence at the beginning
console.assert(isSubsequence("ab", "abcdef") === true, 'Test 10 failed');

// Test subsequence at the end
console.assert(isSubsequence("ef", "abcdef") === true, 'Test 11 failed');

// Test scattered subsequence
console.assert(isSubsequence("ace", "abcde") === true, 'Test 12 failed');

// Test non-subsequence (wrong order)
console.assert(isSubsequence("aec", "abcde") === false, 'Test 13 failed');

// Test repeated characters
console.assert(isSubsequence("aa", "aaa") === true, 'Test 14 failed');

// Test repeated characters - not enough in t
console.assert(isSubsequence("aaa", "aa") === false, 'Test 15 failed');

console.log("ALL TESTS PASSED");