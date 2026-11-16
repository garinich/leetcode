import { merge } from './merge-intervals.js';

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

// Example 1: Basic overlapping intervals
const result1 = merge([[1,3],[2,6],[8,10],[15,18]]);
console.assert(arraysEqual(result1, [[1,6],[8,10],[15,18]]), `Test 1 failed: ${JSON.stringify(result1)}`);

// Example 2: Adjacent intervals (touching at boundary)
const result2 = merge([[1,4],[4,5]]);
console.assert(arraysEqual(result2, [[1,5]]), `Test 2 failed: ${JSON.stringify(result2)}`);

// Example 3: Unsorted input
const result3 = merge([[4,7],[1,4]]);
console.assert(arraysEqual(result3, [[1,7]]), `Test 3 failed: ${JSON.stringify(result3)}`);

// Edge case: Single interval
const result4 = merge([[1,5]]);
console.assert(arraysEqual(result4, [[1,5]]), `Test 4 failed: ${JSON.stringify(result4)}`);

// Edge case: All intervals merge into one
const result5 = merge([[1,10],[2,5],[3,8]]);
console.assert(arraysEqual(result5, [[1,10]]), `Test 5 failed: ${JSON.stringify(result5)}`);

// Edge case: No overlapping intervals
const result6 = merge([[1,2],[3,4],[5,6]]);
console.assert(arraysEqual(result6, [[1,2],[3,4],[5,6]]), `Test 6 failed: ${JSON.stringify(result6)}`);

// Edge case: One interval completely contains another
const result7 = merge([[1,10],[2,5]]);
console.assert(arraysEqual(result7, [[1,10]]), `Test 7 failed: ${JSON.stringify(result7)}`);

// Edge case: Same intervals
const result8 = merge([[1,4],[1,4]]);
console.assert(arraysEqual(result8, [[1,4]]), `Test 8 failed: ${JSON.stringify(result8)}`);

// Edge case: Multiple merges needed
const result9 = merge([[1,3],[2,4],[3,5],[4,6]]);
console.assert(arraysEqual(result9, [[1,6]]), `Test 9 failed: ${JSON.stringify(result9)}`);

// Edge case: Large unsorted input
const result10 = merge([[15,18],[1,3],[2,6],[8,10]]);
console.assert(arraysEqual(result10, [[1,6],[8,10],[15,18]]), `Test 10 failed: ${JSON.stringify(result10)}`);

console.log("ALL TESTS PASSED");
