import { findDuplicateEmails } from './duplicate-emails.js';

// Helper to check if two arrays of email objects contain the same emails (order-independent)
function assertSameEmails(actual, expected, testName) {
  const actualEmails = actual.map(r => r.Email).sort();
  const expectedEmails = expected.map(r => r.Email).sort();
  const pass =
    actualEmails.length === expectedEmails.length &&
    actualEmails.every((e, i) => e === expectedEmails[i]);
  console.assert(pass, `FAILED: ${testName}\n  Expected: ${JSON.stringify(expectedEmails)}\n  Got: ${JSON.stringify(actualEmails)}`);
}

// Example 1: Basic duplicate
const persons1 = [
  { id: 1, email: 'a@b.com' },
  { id: 2, email: 'c@d.com' },
  { id: 3, email: 'a@b.com' },
];
assertSameEmails(findDuplicateEmails(persons1), [{ Email: 'a@b.com' }], 'Example 1');

// Edge case: No duplicates
const persons2 = [
  { id: 1, email: 'x@y.com' },
  { id: 2, email: 'a@b.com' },
  { id: 3, email: 'c@d.com' },
];
assertSameEmails(findDuplicateEmails(persons2), [], 'No duplicates');

// Edge case: All same email
const persons3 = [
  { id: 1, email: 'same@same.com' },
  { id: 2, email: 'same@same.com' },
  { id: 3, email: 'same@same.com' },
];
assertSameEmails(findDuplicateEmails(persons3), [{ Email: 'same@same.com' }], 'All same email');

// Edge case: Multiple duplicate emails
const persons4 = [
  { id: 1, email: 'a@a.com' },
  { id: 2, email: 'b@b.com' },
  { id: 3, email: 'a@a.com' },
  { id: 4, email: 'b@b.com' },
  { id: 5, email: 'c@c.com' },
];
assertSameEmails(
  findDuplicateEmails(persons4),
  [{ Email: 'a@a.com' }, { Email: 'b@b.com' }],
  'Multiple duplicates'
);

// Edge case: Single record
const persons5 = [{ id: 1, email: 'only@one.com' }];
assertSameEmails(findDuplicateEmails(persons5), [], 'Single record');

// Edge case: Empty table
const persons6 = [];
assertSameEmails(findDuplicateEmails(persons6), [], 'Empty table');

// Edge case: Email appears exactly twice
const persons7 = [
  { id: 1, email: 'test@test.com' },
  { id: 2, email: 'test@test.com' },
];
assertSameEmails(findDuplicateEmails(persons7), [{ Email: 'test@test.com' }], 'Appears exactly twice');

console.log('ALL TESTS PASSED');
