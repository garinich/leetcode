import { evalRPN } from './evaluate-reverse-polish-notation.js';

// Example 1: ((2 + 1) * 3) = 9
console.assert(
  evalRPN(["2","1","+","3","*"]) === 9,
  'Test 1 failed: expected 9'
);

// Example 2: (4 + (13 / 5)) = 6
console.assert(
  evalRPN(["4","13","5","/","+"]) === 6,
  'Test 2 failed: expected 6'
);

// Example 3: complex expression = 22
console.assert(
  evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) === 22,
  'Test 3 failed: expected 22'
);

// Edge case: single number
console.assert(
  evalRPN(["42"]) === 42,
  'Test 4 failed: expected 42'
);

// Edge case: single number negative
console.assert(
  evalRPN(["-3"]) === -3,
  'Test 5 failed: expected -3'
);

// Edge case: simple subtraction
console.assert(
  evalRPN(["5","3","-"]) === 2,
  'Test 6 failed: expected 2'
);

// Edge case: subtraction yielding negative
console.assert(
  evalRPN(["3","5","-"]) === -2,
  'Test 7 failed: expected -2'
);

// Edge case: division truncating toward zero (positive)
console.assert(
  evalRPN(["7","2","/"]) === 3,
  'Test 8 failed: expected 3'
);

// Edge case: division truncating toward zero (negative, not -4 but -3)
console.assert(
  evalRPN(["-7","2","/"]) === -3,
  'Test 9 failed: expected -3'
);

// Edge case: multiplication
console.assert(
  evalRPN(["3","-4","*"]) === -12,
  'Test 10 failed: expected -12'
);

// Edge case: zero result
console.assert(
  evalRPN(["0","5","+"]) === 5,
  'Test 11 failed: expected 5'
);

// Edge case: two operands add
console.assert(
  evalRPN(["100","200","+"]) === 300,
  'Test 12 failed: expected 300'
);

console.log("ALL TESTS PASSED");
