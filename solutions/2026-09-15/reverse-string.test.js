import { reverseString } from './reverse-string.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: ["h","e","l","l","o"] -> ["o","l","l","e","h"]
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.assert(arraysEqual(s1, ["o","l","l","e","h"]), 'Test 1 failed');

// Example 2: ["H","a","n","n","a","h"] -> ["h","a","n","n","a","H"]
const s2 = ["H","a","n","n","a","h"];
reverseString(s2);
console.assert(arraysEqual(s2, ["h","a","n","n","a","H"]), 'Test 2 failed');

// Edge case: single character
const s3 = ["a"];
reverseString(s3);
console.assert(arraysEqual(s3, ["a"]), 'Test 3 failed: single character');

// Edge case: two characters
const s4 = ["a", "b"];
reverseString(s4);
console.assert(arraysEqual(s4, ["b", "a"]), 'Test 4 failed: two characters');

// Edge case: palindrome
const s5 = ["r","a","c","e","c","a","r"];
reverseString(s5);
console.assert(arraysEqual(s5, ["r","a","c","e","c","a","r"]), 'Test 5 failed: palindrome');

// Edge case: all same characters
const s6 = ["a","a","a","a"];
reverseString(s6);
console.assert(arraysEqual(s6, ["a","a","a","a"]), 'Test 6 failed: all same characters');

// Edge case: numbers as strings
const s7 = ["1","2","3","4","5"];
reverseString(s7);
console.assert(arraysEqual(s7, ["5","4","3","2","1"]), 'Test 7 failed: number strings');

// Edge case: special characters
const s8 = ["!","@","#","$"];
reverseString(s8);
console.assert(arraysEqual(s8, ["$","#","@","!"]), 'Test 8 failed: special characters');

console.log("ALL TESTS PASSED");
