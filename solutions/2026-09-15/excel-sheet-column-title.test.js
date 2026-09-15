import { convertToTitle } from './excel-sheet-column-title.js';

// Example test cases from the problem
console.assert(
  convertToTitle(1) === 'A',
  `Expected 'A' but got '${convertToTitle(1)}'`
);

console.assert(
  convertToTitle(28) === 'AB',
  `Expected 'AB' but got '${convertToTitle(28)}'`
);

console.assert(
  convertToTitle(701) === 'ZY',
  `Expected 'ZY' but got '${convertToTitle(701)}'`
);

// Edge cases
console.assert(
  convertToTitle(26) === 'Z',
  `Expected 'Z' but got '${convertToTitle(26)}'`
);

console.assert(
  convertToTitle(27) === 'AA',
  `Expected 'AA' but got '${convertToTitle(27)}'`
);

console.assert(
  convertToTitle(52) === 'AZ',
  `Expected 'AZ' but got '${convertToTitle(52)}'`
);

console.assert(
  convertToTitle(53) === 'BA',
  `Expected 'BA' but got '${convertToTitle(53)}'`
);

console.assert(
  convertToTitle(702) === 'ZZ',
  `Expected 'ZZ' but got '${convertToTitle(702)}'`
);

console.assert(
  convertToTitle(703) === 'AAA',
  `Expected 'AAA' but got '${convertToTitle(703)}'`
);

// Large number test
console.assert(
  convertToTitle(2147483647) === 'FXSHRXW',
  `Expected 'FXSHRXW' but got '${convertToTitle(2147483647)}'`
);

console.log('ALL TESTS PASSED');
