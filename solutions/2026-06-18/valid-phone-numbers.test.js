import { validPhoneNumbers } from './valid-phone-numbers.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example from problem
const example1 = ['987-123-4567', '123 456 7890', '(123) 456-7890'];
const result1 = validPhoneNumbers(example1);
console.assert(
  arraysEqual(result1, ['987-123-4567', '(123) 456-7890']),
  `Expected ['987-123-4567', '(123) 456-7890'], got ${JSON.stringify(result1)}`
);

// Empty input
const result2 = validPhoneNumbers([]);
console.assert(
  arraysEqual(result2, []),
  `Expected [], got ${JSON.stringify(result2)}`
);

// All valid - format 1
const result3 = validPhoneNumbers(['123-456-7890']);
console.assert(
  arraysEqual(result3, ['123-456-7890']),
  `Expected ['123-456-7890'], got ${JSON.stringify(result3)}`
);

// All valid - format 2
const result4 = validPhoneNumbers(['(456) 789-0123']);
console.assert(
  arraysEqual(result4, ['(456) 789-0123']),
  `Expected ['(456) 789-0123'], got ${JSON.stringify(result4)}`
);

// None valid
const result5 = validPhoneNumbers(['123 456 7890', '1234567890', 'abc-def-ghij', '(123)456-7890']);
console.assert(
  arraysEqual(result5, []),
  `Expected [], got ${JSON.stringify(result5)}`
);

// Missing hyphen between groups
const result6 = validPhoneNumbers(['123-4567890', '1234567890']);
console.assert(
  arraysEqual(result6, []),
  `Expected [], got ${JSON.stringify(result6)}`
);

// Leading/trailing spaces (should not match)
const result7 = validPhoneNumbers([' 123-456-7890', '123-456-7890 ', ' (123) 456-7890 ']);
console.assert(
  arraysEqual(result7, []),
  `Expected [], got ${JSON.stringify(result7)}`
);

// Too few digits
const result8 = validPhoneNumbers(['12-456-7890', '(12) 456-7890', '123-45-7890', '123-456-789']);
console.assert(
  arraysEqual(result8, []),
  `Expected [], got ${JSON.stringify(result8)}`
);

// Too many digits
const result9 = validPhoneNumbers(['1234-456-7890', '(1234) 456-7890', '123-4567-7890', '123-456-78901']);
console.assert(
  arraysEqual(result9, []),
  `Expected [], got ${JSON.stringify(result9)}`
);

// Mixed valid and invalid
const result10 = validPhoneNumbers([
  '555-123-4567',
  'not a phone',
  '(800) 555-1234',
  '800.555.1234',
  '(999) 999-9999',
  '000-000-0000'
]);
console.assert(
  arraysEqual(result10, ['555-123-4567', '(800) 555-1234', '(999) 999-9999', '000-000-0000']),
  `Expected ['555-123-4567', '(800) 555-1234', '(999) 999-9999', '000-000-0000'], got ${JSON.stringify(result10)}`
);

// Format with missing space after closing paren
const result11 = validPhoneNumbers(['(123)456-7890']);
console.assert(
  arraysEqual(result11, []),
  `Expected [], got ${JSON.stringify(result11)}`
);

console.log('ALL TESTS PASSED');
