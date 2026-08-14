// Reverse Vowels of a String — Easy
// https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * Reverse Vowels of a String
 *
 * Approach:
 * Use two pointers, one starting from the left and one from the right.
 * Move left pointer forward until a vowel is found.
 * Move right pointer backward until a vowel is found.
 * Swap the two vowels and continue until pointers meet.
 *
 * Time Complexity: O(n) where n is the length of the string
 * Space Complexity: O(n) for converting string to array (strings are immutable in JS)
 */

/**
 * @param {string} s
 * @return {string}
 */
export function reverseVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move left pointer until a vowel is found
    while (left < right && !vowels.has(arr[left])) {
      left++;
    }
    // Move right pointer until a vowel is found
    while (left < right && !vowels.has(arr[right])) {
      right--;
    }
    // Swap vowels
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
