import { combineTwoTables } from './combine-two-tables.js';

// Helper to sort results for comparison
function sortResults(results) {
  return results.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));
}

// Helper to deep equal check
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// Example 1: Basic test from problem
const person1 = [
  { personId: 1, lastName: 'Wang', firstName: 'Allen' },
  { personId: 2, lastName: 'Alice', firstName: 'Bob' }
];
const address1 = [
  { addressId: 1, personId: 2, city: 'New York City', state: 'New York' },
  { addressId: 2, personId: 3, city: 'Leetcode', state: 'California' }
];
const result1 = combineTwoTables(person1, address1);
const sorted1 = sortResults(result1);
console.assert(sorted1.length === 2, 'Example 1: Should return 2 rows');
console.assert(sorted1[0].firstName === 'Allen', 'Example 1: First person should be Allen');
console.assert(sorted1[0].city === null, 'Example 1: Allen should have null city');
console.assert(sorted1[0].state === null, 'Example 1: Allen should have null state');
console.assert(sorted1[1].firstName === 'Bob', 'Example 1: Second person should be Bob');
console.assert(sorted1[1].city === 'New York City', 'Example 1: Bob should have New York City');
console.assert(sorted1[1].state === 'New York', 'Example 1: Bob should have New York state');

// Edge Case: Empty person table
const result2 = combineTwoTables([], address1);
console.assert(result2.length === 0, 'Edge case: Empty person table returns empty array');

// Edge Case: Empty address table
const person3 = [
  { personId: 1, lastName: 'Smith', firstName: 'John' }
];
const result3 = combineTwoTables(person3, []);
console.assert(result3.length === 1, 'Edge case: Should still return 1 person');
console.assert(result3[0].city === null, 'Edge case: City should be null when no addresses');
console.assert(result3[0].state === null, 'Edge case: State should be null when no addresses');

// Edge Case: All persons have addresses
const person4 = [
  { personId: 1, lastName: 'Smith', firstName: 'John' },
  { personId: 2, lastName: 'Doe', firstName: 'Jane' }
];
const address4 = [
  { addressId: 1, personId: 1, city: 'Chicago', state: 'Illinois' },
  { addressId: 2, personId: 2, city: 'Houston', state: 'Texas' }
];
const result4 = combineTwoTables(person4, address4);
console.assert(result4.length === 2, 'All addresses: Should return 2 rows');
const sorted4 = sortResults(result4);
console.assert(sorted4[0].city === 'Houston', 'All addresses: Jane should have Houston');
console.assert(sorted4[1].city === 'Chicago', 'All addresses: John should have Chicago');

// Edge Case: Single person with address
const person5 = [{ personId: 5, lastName: 'Brown', firstName: 'Charlie' }];
const address5 = [{ addressId: 10, personId: 5, city: 'Phoenix', state: 'Arizona' }];
const result5 = combineTwoTables(person5, address5);
console.assert(result5.length === 1, 'Single person: Should return 1 row');
console.assert(result5[0].firstName === 'Charlie', 'Single person: Should be Charlie');
console.assert(result5[0].city === 'Phoenix', 'Single person: Should have Phoenix');
console.assert(result5[0].state === 'Arizona', 'Single person: Should have Arizona');

// Edge Case: Multiple addresses for ignored extra persons, only matching returned
const person6 = [{ personId: 1, lastName: 'A', firstName: 'First' }];
const address6 = [
  { addressId: 1, personId: 99, city: 'Unknown City', state: 'Unknown State' },
  { addressId: 2, personId: 100, city: 'Another City', state: 'Another State' }
];
const result6 = combineTwoTables(person6, address6);
console.assert(result6.length === 1, 'No match: Should return 1 row for person');
console.assert(result6[0].city === null, 'No match: City should be null');
console.assert(result6[0].state === null, 'No match: State should be null');

console.log('ALL TESTS PASSED');
