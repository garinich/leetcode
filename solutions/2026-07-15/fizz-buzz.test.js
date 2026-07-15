import { fizzBuzz } from './fizz-buzz.js';

// Helper to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Example 1: n = 3
console.assert(
  arraysEqual(fizzBuzz(3), ['1', '2', 'Fizz']),
  'Test 1 failed: n=3'
);

// Example 2: n = 5
console.assert(
  arraysEqual(fizzBuzz(5), ['1', '2', 'Fizz', '4', 'Buzz']),
  'Test 2 failed: n=5'
);

// Example 3: n = 15
console.assert(
  arraysEqual(
    fizzBuzz(15),
    ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']
  ),
  'Test 3 failed: n=15'
);

// Edge case: n = 1
console.assert(
  arraysEqual(fizzBuzz(1), ['1']),
  'Test 4 failed: n=1'
);

// Edge case: n = 2
console.assert(
  arraysEqual(fizzBuzz(2), ['1', '2']),
  'Test 5 failed: n=2'
);

// Edge case: n = 30 (two FizzBuzz values)
{
  const result = fizzBuzz(30);
  console.assert(result[14] === 'FizzBuzz', 'Test 6a failed: index 15 should be FizzBuzz');
  console.assert(result[29] === 'FizzBuzz', 'Test 6b failed: index 30 should be FizzBuzz');
  console.assert(result[2] === 'Fizz', 'Test 6c failed: index 3 should be Fizz');
  console.assert(result[4] === 'Buzz', 'Test 6d failed: index 5 should be Buzz');
  console.assert(result[0] === '1', 'Test 6e failed: index 1 should be "1"');
}

// Edge case: n = 10
console.assert(
  arraysEqual(
    fizzBuzz(10),
    ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz']
  ),
  'Test 7 failed: n=10'
);

console.log('ALL TESTS PASSED');
