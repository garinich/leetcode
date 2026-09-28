// Delete Duplicate Emails — Easy
// https://leetcode.com/problems/delete-duplicate-emails/

/**
 * Delete Duplicate Emails
 *
 * Approach:
 * Since this is a database problem, we simulate it in JS by:
 * 1. Grouping rows by email, keeping only the row with the smallest id for each email.
 * 2. Modifying the Person array in place to remove duplicate email rows.
 *
 * Time Complexity: O(n) where n is the number of rows in Person
 * Space Complexity: O(n) for the map storing minimum ids per email
 */

/**
 * Deletes duplicate emails from the Person table in place,
 * keeping only the row with the smallest id for each email.
 *
 * @param {Array<{id: number, email: string}>} Person - Array of person objects
 * @returns {Array<{id: number, email: string}>} The modified Person array
 */
export function deleteDuplicateEmails(Person) {
  // Build a map from email -> minimum id
  const minIdByEmail = new Map();

  for (const row of Person) {
    if (!minIdByEmail.has(row.email) || row.id < minIdByEmail.get(row.email)) {
      minIdByEmail.set(row.email, row.id);
    }
  }

  // Filter in place: keep only rows where id equals the minimum id for that email
  const toKeep = Person.filter(row => minIdByEmail.get(row.email) === row.id);

  // Modify in place
  Person.length = 0;
  for (const row of toKeep) {
    Person.push(row);
  }

  return Person;
}
