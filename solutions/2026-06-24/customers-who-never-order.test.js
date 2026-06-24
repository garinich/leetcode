import { findCustomers } from './customers-who-never-order.js';

// Helper to check if two result arrays contain the same names (order-independent)
function assertSameNames(actual, expected, message) {
  const actualNames = actual.map(r => r.Customers).sort();
  const expectedNames = [...expected].sort();
  const pass =
    actualNames.length === expectedNames.length &&
    actualNames.every((name, i) => name === expectedNames[i]);
  console.assert(pass, `FAILED: ${message}\nExpected: ${JSON.stringify(expectedNames)}\nActual: ${JSON.stringify(actualNames)}`);
}

// Example 1: Basic case
const customers1 = [
  { id: 1, name: 'Joe' },
  { id: 2, name: 'Henry' },
  { id: 3, name: 'Sam' },
  { id: 4, name: 'Max' },
];
const orders1 = [
  { id: 1, customerId: 3 },
  { id: 2, customerId: 1 },
];
assertSameNames(findCustomers(customers1, orders1), ['Henry', 'Max'], 'Example 1');

// Edge case: No orders at all — all customers should be returned
const customers2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const orders2 = [];
assertSameNames(findCustomers(customers2, orders2), ['Alice', 'Bob'], 'No orders — all customers returned');

// Edge case: All customers have orders — empty result
const customers3 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const orders3 = [
  { id: 1, customerId: 1 },
  { id: 2, customerId: 2 },
];
assertSameNames(findCustomers(customers3, orders3), [], 'All customers ordered — empty result');

// Edge case: Empty customers table
const customers4 = [];
const orders4 = [{ id: 1, customerId: 99 }];
assertSameNames(findCustomers(customers4, orders4), [], 'Empty customers table');

// Edge case: Single customer who never ordered
const customers5 = [{ id: 10, name: 'Zoe' }];
const orders5 = [];
assertSameNames(findCustomers(customers5, orders5), ['Zoe'], 'Single customer, no orders');

// Edge case: Single customer who did order
const customers6 = [{ id: 10, name: 'Zoe' }];
const orders6 = [{ id: 1, customerId: 10 }];
assertSameNames(findCustomers(customers6, orders6), [], 'Single customer who ordered');

// Edge case: Multiple orders from same customer
const customers7 = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jerry' },
];
const orders7 = [
  { id: 1, customerId: 1 },
  { id: 2, customerId: 1 },
  { id: 3, customerId: 1 },
];
assertSameNames(findCustomers(customers7, orders7), ['Jerry'], 'Multiple orders from same customer');

// Edge case: Large IDs
const customers8 = [
  { id: 1000000, name: 'BigId' },
  { id: 999999, name: 'AlmostBig' },
];
const orders8 = [{ id: 1, customerId: 999999 }];
assertSameNames(findCustomers(customers8, orders8), ['BigId'], 'Large customer IDs');

console.log('ALL TESTS PASSED');
