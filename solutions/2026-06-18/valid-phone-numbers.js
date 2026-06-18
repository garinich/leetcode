// Valid Phone Numbers — Easy
// https://leetcode.com/problems/valid-phone-numbers/

/**
 * Valid Phone Numbers
 *
 * Approach:
 * The problem asks us to filter phone numbers matching two formats:
 * 1. (xxx) xxx-xxxx
 * 2. xxx-xxx-xxxx
 *
 * We use a regular expression to match exactly these two patterns.
 * The regex anchors (^ and $) ensure the entire string matches (no leading/trailing chars).
 *
 * Bash one-liner (as required by problem):
 * grep -E '^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$' file.txt
 *
 * For the JavaScript implementation, we simulate the same logic:
 * - Accept an array of strings (lines from the file)
 * - Filter each line against the regex
 * - Return the matching valid phone numbers
 *
 * Time Complexity: O(n * m) where n is number of lines and m is average line length
 * Space Complexity: O(k) where k is the number of valid phone numbers
 */

/**
 * Filters and returns valid phone numbers from the input array.
 * Valid formats: (xxx) xxx-xxxx or xxx-xxx-xxxx
 *
 * @param {string[]} lines - Array of strings representing phone number candidates
 * @returns {string[]} - Array of valid phone numbers
 */
export function validPhoneNumbers(lines) {
  // Regex explanation:
  // ^ - start of string
  // (\(\d{3}\) |\d{3}-) - either (xxx) with a space after, or xxx- 
  // \d{3} - three digits
  // - - literal hyphen
  // \d{4} - four digits
  // $ - end of string
  const phoneRegex = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/;

  return lines.filter(line => phoneRegex.test(line));
}
