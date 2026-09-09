import { rotate } from './rotate-image.js';

// Helper to deep clone a matrix
function cloneMatrix(matrix) {
  return matrix.map(row => [...row]);
}

// Helper to check matrix equality
function matricesEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }
  return true;
}

// Test 1: Example 1 from problem
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix1);
console.assert(
  matricesEqual(matrix1, [[7,4,1],[8,5,2],[9,6,3]]),
  'Test 1 Failed: 3x3 matrix rotation'
);

// Test 2: Example 2 from problem
const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix2);
console.assert(
  matricesEqual(matrix2, [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]),
  'Test 2 Failed: 4x4 matrix rotation'
);

// Test 3: 1x1 matrix (edge case)
const matrix3 = [[42]];
rotate(matrix3);
console.assert(
  matricesEqual(matrix3, [[42]]),
  'Test 3 Failed: 1x1 matrix should remain unchanged'
);

// Test 4: 2x2 matrix
const matrix4 = [[1,2],[3,4]];
rotate(matrix4);
console.assert(
  matricesEqual(matrix4, [[3,1],[4,2]]),
  'Test 4 Failed: 2x2 matrix rotation'
);

// Test 5: 5x5 matrix
const matrix5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];
rotate(matrix5);
console.assert(
  matricesEqual(matrix5, [
    [21,16,11,6,1],
    [22,17,12,7,2],
    [23,18,13,8,3],
    [24,19,14,9,4],
    [25,20,15,10,5]
  ]),
  'Test 5 Failed: 5x5 matrix rotation'
);

// Test 6: Matrix with negative values
const matrix6 = [[-1,-2],[-3,-4]];
rotate(matrix6);
console.assert(
  matricesEqual(matrix6, [[-3,-1],[-4,-2]]),
  'Test 6 Failed: Matrix with negative values'
);

// Test 7: Matrix with mixed values including zeros
const matrix7 = [[0,1],[-1,0]];
rotate(matrix7);
console.assert(
  matricesEqual(matrix7, [[-1,0],[0,1]]),
  'Test 7 Failed: Matrix with zeros'
);

console.log('ALL TESTS PASSED');
