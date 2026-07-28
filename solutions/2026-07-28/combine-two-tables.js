// Combine Two Tables — Easy
// https://leetcode.com/problems/combine-two-tables/

/**
 * Combine Two Tables
 * 
 * Approach:
 * Perform a LEFT JOIN from Person to Address on personId.
 * This ensures all persons are included even if they have no address.
 * For persons without an address, city and state will be null.
 * 
 * Time Complexity: O(n * m) in worst case where n = Person rows, m = Address rows
 *                  O(n + m) with hash map optimization
 * Space Complexity: O(m) for the address lookup map
 */

/**
 * Combines Person and Address tables using a left join on personId
 * @param {Array<{personId: number, lastName: string, firstName: string}>} person
 * @param {Array<{addressId: number, personId: number, city: string, state: string}>} address
 * @returns {Array<{firstName: string, lastName: string, city: string|null, state: string|null}>}
 */
export function combine두Tables(person, address) {
  // Build a map of personId -> address for O(1) lookup
  const addressMap = new Map();
  for (const addr of address) {
    addressMap.set(addr.personId, addr);
  }

  // Left join: include all persons, with null for missing address fields
  return person.map(p => {
    const addr = addressMap.get(p.personId);
    return {
      firstName: p.firstName,
      lastName: p.lastName,
      city: addr ? addr.city : null,
      state: addr ? addr.state : null
    };
  });
}

/**
 * Alternative name matching LeetCode convention
 */
export function combineTwoTables(person, address) {
  // Build a map of personId -> address for O(1) lookup
  const addressMap = new Map();
  for (const addr of address) {
    addressMap.set(addr.personId, addr);
  }

  // Left join: include all persons, with null for missing address fields
  return person.map(p => {
    const addr = addressMap.get(p.personId);
    return {
      firstName: p.firstName,
      lastName: p.lastName,
      city: addr ? addr.city : null,
      state: addr ? addr.state : null
    };
  });
}
