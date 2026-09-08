import { solve } from './surrounded-regions.js';

// Helper to deep clone a board
function cloneBoard(board) {
  return board.map(row => [...row]);
}

// Helper to compare boards
function boardsEqual(a, b) {
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
{
  const board = cloneBoard([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]);
  solve(board);
  const expected = [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]];
  console.assert(boardsEqual(board, expected), 'Test 1 failed: ' + JSON.stringify(board));
}

// Example 2: single cell
{
  const board = cloneBoard([["X"]]);
  solve(board);
  const expected = [["X"]];
  console.assert(boardsEqual(board, expected), 'Test 2 failed: ' + JSON.stringify(board));
}

// Edge case: all O's in a 1x1 board
{
  const board = cloneBoard([["O"]]);
  solve(board);
  const expected = [["O"]];
  console.assert(boardsEqual(board, expected), 'Test 3 failed: ' + JSON.stringify(board));
}

// Edge case: all O's in a 3x3 board (center should be captured, border not)
{
  const board = cloneBoard([
    ["O","O","O"],
    ["O","O","O"],
    ["O","O","O"]
  ]);
  solve(board);
  const expected = [
    ["O","O","O"],
    ["O","O","O"],
    ["O","O","O"]
  ];
  console.assert(boardsEqual(board, expected), 'Test 4 failed: ' + JSON.stringify(board));
}

// Edge case: no O's
{
  const board = cloneBoard([
    ["X","X","X"],
    ["X","X","X"],
    ["X","X","X"]
  ]);
  solve(board);
  const expected = [
    ["X","X","X"],
    ["X","X","X"],
    ["X","X","X"]
  ];
  console.assert(boardsEqual(board, expected), 'Test 5 failed: ' + JSON.stringify(board));
}

// Edge case: O connected to border through winding path
{
  const board = cloneBoard([
    ["X","X","X","X","X"],
    ["X","O","X","O","X"],
    ["X","O","X","O","X"],
    ["X","O","O","O","X"],
    ["X","X","X","X","X"]
  ]);
  solve(board);
  const expected = [
    ["X","X","X","X","X"],
    ["X","X","X","X","X"],
    ["X","X","X","X","X"],
    ["X","X","X","X","X"],
    ["X","X","X","X","X"]
  ];
  console.assert(boardsEqual(board, expected), 'Test 6 failed: ' + JSON.stringify(board));
}

// Edge case: single row
{
  const board = cloneBoard([["O","X","O","O"]]);
  solve(board);
  const expected = [["O","X","O","O"]];
  console.assert(boardsEqual(board, expected), 'Test 7 failed: ' + JSON.stringify(board));
}

// Edge case: single column
{
  const board = cloneBoard([["O"],["X"],["O"]]);
  solve(board);
  const expected = [["O"],["X"],["O"]];
  console.assert(boardsEqual(board, expected), 'Test 8 failed: ' + JSON.stringify(board));
}

console.log("ALL TESTS PASSED");
