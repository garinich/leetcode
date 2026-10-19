import { longestCommonPrefix } from './longest-common-prefix.js';

// Example 1: common prefix is "fl"
console.assert(
  longestCommonPrefix(["flower", "flow", "flight"]) === "fl",
  'Test 1 failed: expected "fl"'
);

// Example 2: no common prefix
console.assert(
  longestCommonPrefix(["dog", "racecar", "car"]) === "",
  'Test 2 failed: expected ""'
);

// Single string — the whole string is the prefix
console.assert(
  longestCommonPrefix(["alone"]) === "alone",
  'Test 3 failed: expected "alone"'
);

// All strings identical
console.assert(
  longestCommonPrefix(["abc", "abc", "abc"]) === "abc",
  'Test 4 failed: expected "abc"'
);

// One empty string in the array
console.assert(
  longestCommonPrefix(["", "abc", "ab"]) === "",
  'Test 5 failed: expected ""'
);

// All empty strings
console.assert(
  longestCommonPrefix(["", "", ""]) === "",
  'Test 6 failed: expected ""'
);

// Prefix is the full first string
console.assert(
  longestCommonPrefix(["ab", "abc", "abcd"]) === "ab",
  'Test 7 failed: expected "ab"'
);

// Two strings with no common prefix
console.assert(
  longestCommonPrefix(["abc", "xyz"]) === "",
  'Test 8 failed: expected ""'
);

// Single character common prefix
console.assert(
  longestCommonPrefix(["a", "ab", "abc"]) === "a",
  'Test 9 failed: expected "a"'
);

// Large common prefix
console.assert(
  longestCommonPrefix(["interview", "interact", "internal"]) === "inter",
  'Test 10 failed: expected "inter"'
);

console.log("ALL TESTS PASSED");
