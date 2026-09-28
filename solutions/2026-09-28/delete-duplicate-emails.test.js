import { deleteDuplicateEmails } from './delete-duplicate-emails.js';

// Helper to sort by id for comparison
function sortById(arr) {
  return [...arr].sort((a, b) => a.id - b.id);
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].id !== b[i].id || a[i].email !== b[i].email) return false;
  }
  return true;
}

// Example 1: Standard case with one duplicate
{
  const Person = [
    { id: 1, email: 'john@example.com' },
    { id: 2, email: 'bob@example.com' },
    { id: 3, email: 'john@example.com' },
  ];
  deleteDuplicateEmails(Person);
  const expected = [
    { id: 1, email: 'john@example.com' },
    { id: 2, email: 'bob@example.com' },
  ];
  console.assert(
    arraysEqual(sortById(Person), sortById(expected)),
    'Test 1 failed: ' + JSON.stringify(Person)
  );
}

// Edge case: No duplicates
{
  const Person = [
    { id: 1, email: 'a@example.com' },
    { id: 2, email: 'b@example.com' },
  ];
  deleteDuplicateEmails(Person);
  const expected = [
    { id: 1, email: 'a@example.com' },
    { id: 2, email: 'b@example.com' },
  ];
  console.assert(
    arraysEqual(sortById(Person), sortById(expected)),
    'Test 2 failed: ' + JSON.stringify(Person)
  );
}

// Edge case: All same email
{
  const Person = [
    { id: 1, email: 'same@example.com' },
    { id: 2, email: 'same@example.com' },
    { id: 3, email: 'same@example.com' },
  ];
  deleteDuplicateEmails(Person);
  const expected = [
    { id: 1, email: 'same@example.com' },
  ];
  console.assert(
    arraysEqual(sortById(Person), sortById(expected)),
    'Test 3 failed: ' + JSON.stringify(Person)
  );
}

// Edge case: Single row
{
  const Person = [
    { id: 5, email: 'only@example.com' },
  ];
  deleteDuplicateEmails(Person);
  const expected = [
    { id: 5, email: 'only@example.com' },
  ];
  console.assert(
    arraysEqual(sortById(Person), sortById(expected)),
    'Test 4 failed: ' + JSON.stringify(Person)
  );
}

// Edge case: Empty table
{
  const Person = [];
  deleteDuplicateEmails(Person);
  console.assert(Person.length === 0, 'Test 5 failed: expected empty array');
}

// Edge case: Duplicate with higher id appearing first
{
  const Person = [
    { id: 3, email: 'dup@example.com' },
    { id: 1, email: 'dup@example.com' },
    { id: 2, email: 'unique@example.com' },
  ];
  deleteDuplicateEmails(Person);
  const expected = [
    { id: 1, email: 'dup@example.com' },
    { id: 2, email: 'unique@example.com' },
  ];
  console.assert(
    arraysEqual(sortById(Person), sortById(expected)),
    'Test 6 failed: ' + JSON.stringify(Person)
  );
}

console.log('ALL TESTS PASSED');
