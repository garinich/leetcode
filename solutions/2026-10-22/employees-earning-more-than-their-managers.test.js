import { findEmployeesEarningMoreThanManagers } from './employees-earning-more-than-their-managers.js';

// Helper to check if two arrays of objects have the same contents (order-independent)
function arraysMatch(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].map(o => JSON.stringify(o)).sort();
  const sortedB = [...b].map(o => JSON.stringify(o)).sort();
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

// Example 1: Joe earns more than his manager Sam
const example1 = [
  { id: 1, name: 'Joe', salary: 70000, managerId: 3 },
  { id: 2, name: 'Henry', salary: 80000, managerId: 4 },
  { id: 3, name: 'Sam', salary: 60000, managerId: null },
  { id: 4, name: 'Max', salary: 90000, managerId: null },
];
const result1 = findEmployeesEarningMoreThanManagers(example1);
console.assert(
  arraysMatch(result1, [{ Employee: 'Joe' }]),
  `Test 1 failed: ${JSON.stringify(result1)}`
);

// Edge case: No employees earn more than their managers
const example2 = [
  { id: 1, name: 'Alice', salary: 50000, managerId: 2 },
  { id: 2, name: 'Bob', salary: 80000, managerId: null },
];
const result2 = findEmployeesEarningMoreThanManagers(example2);
console.assert(
  arraysMatch(result2, []),
  `Test 2 failed: ${JSON.stringify(result2)}`
);

// Edge case: Multiple employees earn more than their managers
const example3 = [
  { id: 1, name: 'Alice', salary: 90000, managerId: 3 },
  { id: 2, name: 'Bob', salary: 85000, managerId: 3 },
  { id: 3, name: 'Charlie', salary: 70000, managerId: null },
];
const result3 = findEmployeesEarningMoreThanManagers(example3);
console.assert(
  arraysMatch(result3, [{ Employee: 'Alice' }, { Employee: 'Bob' }]),
  `Test 3 failed: ${JSON.stringify(result3)}`
);

// Edge case: Empty table
const example4 = [];
const result4 = findEmployeesEarningMoreThanManagers(example4);
console.assert(
  arraysMatch(result4, []),
  `Test 4 failed: ${JSON.stringify(result4)}`
);

// Edge case: All employees are top-level (no managers)
const example5 = [
  { id: 1, name: 'Alice', salary: 90000, managerId: null },
  { id: 2, name: 'Bob', salary: 85000, managerId: null },
];
const result5 = findEmployeesEarningMoreThanManagers(example5);
console.assert(
  arraysMatch(result5, []),
  `Test 5 failed: ${JSON.stringify(result5)}`
);

// Edge case: Employee salary equals manager salary (should NOT be included)
const example6 = [
  { id: 1, name: 'Alice', salary: 70000, managerId: 2 },
  { id: 2, name: 'Bob', salary: 70000, managerId: null },
];
const result6 = findEmployeesEarningMoreThanManagers(example6);
console.assert(
  arraysMatch(result6, []),
  `Test 6 failed: ${JSON.stringify(result6)}`
);

// Edge case: Chain of managers - only direct manager comparison matters
const example7 = [
  { id: 1, name: 'Alice', salary: 50000, managerId: 2 },
  { id: 2, name: 'Bob', salary: 40000, managerId: 3 },
  { id: 3, name: 'Charlie', salary: 100000, managerId: null },
];
const result7 = findEmployeesEarningMoreThanManagers(example7);
console.assert(
  arraysMatch(result7, [{ Employee: 'Alice' }, { Employee: 'Bob' }]),
  `Test 7 failed: ${JSON.stringify(result7)}`
);

console.log('ALL TESTS PASSED');
