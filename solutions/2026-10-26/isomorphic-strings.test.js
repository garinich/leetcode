import { isIsomorphic } from './isomorphic-strings.js';

// Example 1: egg -> add (true)
console.assert(isIsomorphic('egg', 'add') === true, 'Test 1 failed');

// Example 2: foo -> bar (false)
console.assert(isIsomorphic('foo', 'bar') === false, 'Test 2 failed');

// Example 3: paper -> title (true)
console.assert(isIsomorphic('paper', 'title') === true, 'Test 3 failed');

// Example from problem: f11 -> b23 (false)
console.assert(isIsomorphic('f11', 'b23') === false, 'Test 4 failed');

// Single characters (true)
console.assert(isIsomorphic('a', 'a') === true, 'Test 5 failed');
console.assert(isIsomorphic('a', 'b') === true, 'Test 6 failed');

// Identical strings (true)
console.assert(isIsomorphic('abc', 'abc') === true, 'Test 7 failed');

// Reverse mapping conflict: ab -> aa should be false
console.assert(isIsomorphic('ab', 'aa') === false, 'Test 8 failed');

// ba -> aa should be false
console.assert(isIsomorphic('ba', 'aa') === false, 'Test 9 failed');

// All same chars: aaa -> bbb (true)
console.assert(isIsomorphic('aaa', 'bbb') === true, 'Test 10 failed');

// aab -> aac (true)
console.assert(isIsomorphic('aab', 'aac') === true, 'Test 11 failed');

// aab -> acd (false: a maps to a and c)
console.assert(isIsomorphic('aab', 'acd') === false, 'Test 12 failed');

// Longer strings
console.assert(isIsomorphic('abcabc', 'xyzxyz') === true, 'Test 13 failed');
console.assert(isIsomorphic('abcabc', 'xyzxyw') === false, 'Test 14 failed');

console.log('ALL TESTS PASSED');
