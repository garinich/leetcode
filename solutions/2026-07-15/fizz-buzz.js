// Fizz Buzz — Easy
// https://leetcode.com/problems/fizz-buzz/

/**
 * Fizz Buzz
 *
 * Approach:
 * Iterate from 1 to n, checking divisibility conditions in order:
 * 1. Check divisible by both 3 and 5 first (FizzBuzz)
 * 2. Check divisible by 3 (Fizz)
 * 3. Check divisible by 5 (Buzz)
 * 4. Otherwise, use the number as a string
 *
 * Time Complexity: O(n) - single pass from 1 to n
 * Space Complexity: O(n) - storing n results in the answer array
 */

/**
 * @param {number} n
 * @return {string[]}
 */
export function fizzBuzz(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push('FizzBuzz');
    } else if (i % 3 === 0) {
      answer.push('Fizz');
    } else if (i % 5 === 0) {
      answer.push('Buzz');
    } else {
      answer.push(String(i));
    }
  }
  return answer;
}
