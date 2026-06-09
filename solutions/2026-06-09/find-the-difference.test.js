import { findTheDifference } from './find-the-difference.js';

// Test case 1: Example from problem
console.assert(findTheDifference("abcd", "abcde") === "e", "Test 1 failed");

// Test case 2: Empty string with single character
console.assert(findTheDifference("", "y") === "y", "Test 2 failed");

// Test case 3: Single character string
console.assert(findTheDifference("a", "ab") === "b", "Test 3 failed");

// Test case 4: Same characters but different order
console.assert(findTheDifference("abc", "acbz") === "z", "Test 4 failed");

// Test case 5: Extra character at beginning
console.assert(findTheDifference("xyz", "xyzw") === "w", "Test 5 failed");

// Test case 6: Duplicate characters
console.assert(findTheDifference("aab", "aabb") === "b", "Test 6 failed");

// Test case 7: All same characters
console.assert(findTheDifference("aaa", "aaab") === "b", "Test 7 failed");

// Test case 8: Longer string
console.assert(findTheDifference("abcdefg", "abcdefgh") === "h", "Test 8 failed");

// Test case 9: Random order with duplicate
console.assert(findTheDifference("hello", "llohez") === "z", "Test 9 failed");

console.log("ALL TESTS PASSED");