import { guessNumber, setPick } from './guess-number-higher-or-lower.js';

// Helper function to test guessNumber with a specific pick
function testGuess(n, pick) {
  setPick(pick);
  return guessNumber(n);
}

// Example 1: n = 10, pick = 6
console.assert(
  testGuess(10, 6) === 6,
  `Test 1 Failed: expected 6, got ${testGuess(10, 6)}`
);

// Example 2: n = 1, pick = 1
console.assert(
  testGuess(1, 1) === 1,
  `Test 2 Failed: expected 1, got ${testGuess(1, 1)}`
);

// Example 3: n = 2, pick = 1
console.assert(
  testGuess(2, 1) === 1,
  `Test 3 Failed: expected 1, got ${testGuess(2, 1)}`
);

// Edge case: pick is n (last element)
console.assert(
  testGuess(10, 10) === 10,
  `Test 4 Failed: expected 10, got ${testGuess(10, 10)}`
);

// Edge case: pick is 1 (first element)
console.assert(
  testGuess(100, 1) === 1,
  `Test 5 Failed: expected 1, got ${testGuess(100, 1)}`
);

// Edge case: large n
console.assert(
  testGuess(2147483647, 1702766719) === 1702766719,
  `Test 6 Failed: expected 1702766719, got ${testGuess(2147483647, 1702766719)}`
);

// Edge case: n = 2, pick = 2
console.assert(
  testGuess(2, 2) === 2,
  `Test 7 Failed: expected 2, got ${testGuess(2, 2)}`
);

// Edge case: middle element
console.assert(
  testGuess(100, 50) === 50,
  `Test 8 Failed: expected 50, got ${testGuess(100, 50)}`
);

// Edge case: pick near the end
console.assert(
  testGuess(100, 99) === 99,
  `Test 9 Failed: expected 99, got ${testGuess(100, 99)}`
);

console.log("ALL TESTS PASSED");
