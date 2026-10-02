import { fourSum } from './4sum.js';

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

function sortResult(result) {
  return result
    .map(quad => [...quad].sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < 4; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

// Example 1
const result1 = sortResult(fourSum([1, 0, -1, 0, -2, 2], 0));
const expected1 = sortResult([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
console.assert(arraysEqual(result1, expected1), `Test 1 failed: ${JSON.stringify(result1)}`);

// Example 2
const result2 = sortResult(fourSum([2, 2, 2, 2, 2], 8));
const expected2 = sortResult([[2, 2, 2, 2]]);
console.assert(arraysEqual(result2, expected2), `Test 2 failed: ${JSON.stringify(result2)}`);

// Edge case: array too small
const result3 = fourSum([1, 2, 3], 6);
console.assert(result3.length === 0, `Test 3 failed: ${JSON.stringify(result3)}`);

// Edge case: no valid quadruplets
const result4 = fourSum([1, 2, 3, 4], 100);
console.assert(result4.length === 0, `Test 4 failed: ${JSON.stringify(result4)}`);

// Edge case: negative numbers
const result5 = sortResult(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
const expected5 = sortResult([[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
console.assert(arraysEqual(result5, expected5), `Test 5 failed: ${JSON.stringify(result5)}`);

// Edge case: all same numbers that don't sum to target
const result6 = fourSum([1, 1, 1, 1], 10);
console.assert(result6.length === 0, `Test 6 failed: ${JSON.stringify(result6)}`);

// Edge case: large numbers
const result7 = sortResult(fourSum([1000000000, 1000000000, 1000000000, 1000000000], 4000000000));
const expected7 = sortResult([[1000000000, 1000000000, 1000000000, 1000000000]]);
console.assert(arraysEqual(result7, expected7), `Test 7 failed: ${JSON.stringify(result7)}`);

console.log('ALL TESTS PASSED');
