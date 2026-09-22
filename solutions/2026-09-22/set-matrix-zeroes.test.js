import { setZeroes } from './set-matrix-zeroes.js';

function deepCopy(matrix) {
  return matrix.map(row => [...row]);
}

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

// Example 1
let matrix1 = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix1);
console.assert(
  matricesEqual(matrix1, [[1,0,1],[0,0,0],[1,0,1]]),
  'Test 1 failed: ' + JSON.stringify(matrix1)
);

// Example 2
let matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
setZeroes(matrix2);
console.assert(
  matricesEqual(matrix2, [[0,0,0,0],[0,4,5,0],[0,3,1,0]]),
  'Test 2 failed: ' + JSON.stringify(matrix2)
);

// Edge case: Single element zero
let matrix3 = [[0]];
setZeroes(matrix3);
console.assert(
  matricesEqual(matrix3, [[0]]),
  'Test 3 failed: ' + JSON.stringify(matrix3)
);

// Edge case: Single element non-zero
let matrix4 = [[1]];
setZeroes(matrix4);
console.assert(
  matricesEqual(matrix4, [[1]]),
  'Test 4 failed: ' + JSON.stringify(matrix4)
);

// Edge case: No zeros
let matrix5 = [[1,2,3],[4,5,6],[7,8,9]];
setZeroes(matrix5);
console.assert(
  matricesEqual(matrix5, [[1,2,3],[4,5,6],[7,8,9]]),
  'Test 5 failed: ' + JSON.stringify(matrix5)
);

// Edge case: All zeros
let matrix6 = [[0,0],[0,0]];
setZeroes(matrix6);
console.assert(
  matricesEqual(matrix6, [[0,0],[0,0]]),
  'Test 6 failed: ' + JSON.stringify(matrix6)
);

// Edge case: Zero in first row
let matrix7 = [[0,1,2],[3,4,5],[6,7,8]];
setZeroes(matrix7);
console.assert(
  matricesEqual(matrix7, [[0,0,0],[0,4,5],[0,7,8]]),
  'Test 7 failed: ' + JSON.stringify(matrix7)
);

// Edge case: Zero in first column
let matrix8 = [[1,2,3],[0,4,5],[6,7,8]];
setZeroes(matrix8);
console.assert(
  matricesEqual(matrix8, [[0,2,3],[0,0,0],[0,7,8]]),
  'Test 8 failed: ' + JSON.stringify(matrix8)
);

// Edge case: Zero in last row and last column
let matrix9 = [[1,2,3],[4,5,6],[7,8,0]];
setZeroes(matrix9);
console.assert(
  matricesEqual(matrix9, [[1,2,0],[4,5,0],[0,0,0]]),
  'Test 9 failed: ' + JSON.stringify(matrix9)
);

// Edge case: 1xN matrix
let matrix10 = [[1,0,3,4]];
setZeroes(matrix10);
console.assert(
  matricesEqual(matrix10, [[0,0,0,0]]),
  'Test 10 failed: ' + JSON.stringify(matrix10)
);

// Edge case: Mx1 matrix
let matrix11 = [[1],[0],[3]];
setZeroes(matrix11);
console.assert(
  matricesEqual(matrix11, [[0],[0],[0]]),
  'Test 11 failed: ' + JSON.stringify(matrix11)
);

console.log('ALL TESTS PASSED');
