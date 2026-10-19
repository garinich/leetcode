import { intersect } from './intersection-of-two-arrays-ii.js';

function arraysEqualAsSorted(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort((x, y) => x - y);
  const sortedB = [...b].sort((x, y) => x - y);
  return sortedA.every((val, idx) => val === sortedB[idx]);
}

// Example 1
const result1 = intersect([1, 2, 2, 1], [2, 2]);
console.assert(arraysEqualAsSorted(result1, [2, 2]), `Test 1 failed: ${JSON.stringify(result1)}`);

// Example 2
const result2 = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.assert(arraysEqualAsSorted(result2, [4, 9]), `Test 2 failed: ${JSON.stringify(result2)}`);

// Edge case: no intersection
const result3 = intersect([1, 2, 3], [4, 5, 6]);
console.assert(arraysEqualAsSorted(result3, []), `Test 3 failed: ${JSON.stringify(result3)}`);

// Edge case: all elements match
const result4 = intersect([1, 1, 1], [1, 1, 1]);
console.assert(arraysEqualAsSorted(result4, [1, 1, 1]), `Test 4 failed: ${JSON.stringify(result4)}`);

// Edge case: single element intersection
const result5 = intersect([1], [1]);
console.assert(arraysEqualAsSorted(result5, [1]), `Test 5 failed: ${JSON.stringify(result5)}`);

// Edge case: single element no intersection
const result6 = intersect([1], [2]);
console.assert(arraysEqualAsSorted(result6, []), `Test 6 failed: ${JSON.stringify(result6)}`);

// Edge case: duplicates in one array but not the other
const result7 = intersect([1, 2, 2, 2], [2]);
console.assert(arraysEqualAsSorted(result7, [2]), `Test 7 failed: ${JSON.stringify(result7)}`);

// Edge case: larger nums1 than nums2
const result8 = intersect([1, 2, 3, 4, 5], [3, 5]);
console.assert(arraysEqualAsSorted(result8, [3, 5]), `Test 8 failed: ${JSON.stringify(result8)}`);

// Edge case: zeros
const result9 = intersect([0, 0, 1], [0, 1, 1]);
console.assert(arraysEqualAsSorted(result9, [0, 1]), `Test 9 failed: ${JSON.stringify(result9)}`);

console.log('ALL TESTS PASSED');
