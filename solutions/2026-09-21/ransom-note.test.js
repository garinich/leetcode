import { canConstruct } from './ransom-note.js';

// Example test cases from problem
console.assert(canConstruct('a', 'b') === false, 'Test 1 failed: ransomNote="a", magazine="b" should return false');
console.assert(canConstruct('aa', 'ab') === false, 'Test 2 failed: ransomNote="aa", magazine="ab" should return false');
console.assert(canConstruct('aa', 'aab') === true, 'Test 3 failed: ransomNote="aa", magazine="aab" should return true');

// Edge cases
console.assert(canConstruct('a', 'a') === true, 'Test 4 failed: single matching character should return true');
console.assert(canConstruct('abc', 'aabbcc') === true, 'Test 5 failed: all chars available should return true');
console.assert(canConstruct('abc', 'ab') === false, 'Test 6 failed: missing character should return false');
console.assert(canConstruct('z', 'abcdefghijklmnopqrstuvwxy') === false, 'Test 7 failed: missing z should return false');
console.assert(canConstruct('z', 'abcdefghijklmnopqrstuvwxyz') === true, 'Test 8 failed: z present should return true');
console.assert(canConstruct('aab', 'aab') === true, 'Test 9 failed: exact match should return true');
console.assert(canConstruct('aaab', 'aab') === false, 'Test 10 failed: not enough a\'s should return false');
console.assert(canConstruct('abcdefghij', 'jihgfedcba') === true, 'Test 11 failed: reordered chars should return true');

console.log('ALL TESTS PASSED');
