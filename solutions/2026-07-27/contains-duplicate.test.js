import { containsDuplicate } from './contains-duplicate.js';

// Example 1: [1,2,3,1] -> true
console.assert(
  containsDuplicate([1, 2, 3, 1]) === true,
  'Example 1 failed: expected true'
);

// Example 2: [1,2,3,4] -> false
console.assert(
  containsDuplicate([1, 2, 3, 4]) === false,
  'Example 2 failed: expected false'
);

// Example 3: [1,1,1,3,3,4,3,2,4,2] -> true
console.assert(
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true,
  'Example 3 failed: expected true'
);

// Edge case: single element array -> false
console.assert(
  containsDuplicate([1]) === false,
  'Edge case single element failed: expected false'
);

// Edge case: two identical elements -> true
console.assert(
  containsDuplicate([5, 5]) === true,
  'Edge case two identical elements failed: expected true'
);

// Edge case: two distinct elements -> false
console.assert(
  containsDuplicate([5, 6]) === false,
  'Edge case two distinct elements failed: expected false'
);

// Edge case: negative numbers with duplicates -> true
console.assert(
  containsDuplicate([-1, -2, -3, -1]) === true,
  'Edge case negative numbers with duplicates failed: expected true'
);

// Edge case: negative numbers all distinct -> false
console.assert(
  containsDuplicate([-1, -2, -3, -4]) === false,
  'Edge case negative numbers all distinct failed: expected false'
);

// Edge case: large array with duplicate at end
const largeArray = Array.from({ length: 99999 }, (_, i) => i);
largeArray.push(0); // duplicate
console.assert(
  containsDuplicate(largeArray) === true,
  'Edge case large array with duplicate failed: expected true'
);

// Edge case: large array with no duplicates
const largeUniqueArray = Array.from({ length: 100000 }, (_, i) => i);
console.assert(
  containsDuplicate(largeUniqueArray) === false,
  'Edge case large unique array failed: expected false'
);

console.log('ALL TESTS PASSED');
