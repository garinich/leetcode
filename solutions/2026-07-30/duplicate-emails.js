// Duplicate Emails — Easy
// https://leetcode.com/problems/duplicate-emails/

/**
 * Duplicate Emails
 *
 * Approach:
 * Group emails and count occurrences. Return emails that appear more than once.
 * We simulate the SQL GROUP BY + HAVING COUNT(*) > 1 logic in JavaScript.
 *
 * Time Complexity: O(n) - single pass to count, single pass to filter
 * Space Complexity: O(n) - storing email counts in a Map
 */

/**
 * Finds duplicate emails from the Person table rows.
 * @param {Array<{id: number, email: string}>} persons - Array of person records
 * @returns {Array<{Email: string}>} - Array of duplicate email objects
 */
export function findDuplicateEmails(persons) {
  const emailCount = new Map();

  // Count occurrences of each email
  for (const person of persons) {
    const email = person.email;
    emailCount.set(email, (emailCount.get(email) || 0) + 1);
  }

  // Filter emails that appear more than once
  const result = [];
  for (const [email, count] of emailCount) {
    if (count > 1) {
      result.push({ Email: email });
    }
  }

  return result;
}

/**
 * SQL solution (for reference):
 *
 * SELECT email AS Email
 * FROM Person
 * GROUP BY email
 * HAVING COUNT(*) > 1;
 */
