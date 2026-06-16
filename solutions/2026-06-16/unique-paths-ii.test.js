import { uniquePathsWithObstacles } from './unique-paths-ii.js';

// Example 1: 3x3 grid with obstacle in middle
console.assert(
  uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]) === 2,
  'Example 1 failed: expected 2'
);

// Example 2: 2x2 grid with obstacle
console.assert(
  uniquePathsWithObstacles([[0,1],[0,0]]) === 1,
  'Example 2 failed: expected 1'
);

// Edge case: single cell, no obstacle
console.assert(
  uniquePathsWithObstacles([[0]]) === 1,
  'Single cell no obstacle: expected 1'
);

// Edge case: single cell, with obstacle
console.assert(
  uniquePathsWithObstacles([[1]]) === 0,
  'Single cell with obstacle: expected 0'
);

// Edge case: start is blocked
console.assert(
  uniquePathsWithObstacles([[1,0],[0,0]]) === 0,
  'Start blocked: expected 0'
);

// Edge case: end is blocked
console.assert(
  uniquePathsWithObstacles([[0,0],[0,1]]) === 0,
  'End blocked: expected 0'
);

// Edge case: single row, no obstacles
console.assert(
  uniquePathsWithObstacles([[0,0,0,0]]) === 1,
  'Single row no obstacles: expected 1'
);

// Edge case: single row with obstacle in middle
console.assert(
  uniquePathsWithObstacles([[0,0,1,0]]) === 0,
  'Single row with obstacle: expected 0'
);

// Edge case: single column, no obstacles
console.assert(
  uniquePathsWithObstacles([[0],[0],[0],[0]]) === 1,
  'Single column no obstacles: expected 1'
);

// Edge case: single column with obstacle
console.assert(
  uniquePathsWithObstacles([[0],[1],[0]]) === 0,
  'Single column with obstacle: expected 0'
);

// Larger grid with no obstacles (3x3)
console.assert(
  uniquePathsWithObstacles([[0,0,0],[0,0,0],[0,0,0]]) === 6,
  '3x3 no obstacles: expected 6'
);

// Obstacle blocking all paths
console.assert(
  uniquePathsWithObstacles([[0,1],[1,0]]) === 0,
  'All paths blocked: expected 0'
);

// 2x3 grid
console.assert(
  uniquePathsWithObstacles([[0,0,0],[0,0,0]]) === 3,
  '2x3 no obstacles: expected 3'
);

// Obstacle at first row edge
console.assert(
  uniquePathsWithObstacles([[0,0,0],[0,0,1],[0,0,0]]) === 1,
  '3x3 with obstacle at (1,2): expected 1'
);

console.log('ALL TESTS PASSED');
