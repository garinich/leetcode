// Surrounded Regions — Medium
// https://leetcode.com/problems/surrounded-regions/

/**
 * Surrounded Regions
 *
 * Approach:
 * Instead of finding surrounded regions directly, we find regions that are NOT surrounded
 * (i.e., connected to the border). We mark all 'O' cells connected to the border with a
 * temporary marker 'S'. Then we convert all remaining 'O' cells to 'X' (they are surrounded),
 * and restore 'S' cells back to 'O'.
 *
 * Steps:
 * 1. DFS/BFS from every 'O' on the border, marking connected 'O' cells as 'S'
 * 2. Traverse the entire board:
 *    - 'O' -> 'X' (surrounded, capture it)
 *    - 'S' -> 'O' (restore, not surrounded)
 *    - 'X' -> 'X' (unchanged)
 *
 * Time Complexity: O(m * n) - we visit each cell at most twice
 * Space Complexity: O(m * n) - recursion stack in worst case
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export function solve(board) {
  if (!board || board.length === 0) return;

  const m = board.length;
  const n = board[0].length;

  // DFS to mark border-connected 'O' cells as 'S'
  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;
    board[r][c] = 'S';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // Mark all border-connected 'O' cells
  for (let r = 0; r < m; r++) {
    if (board[r][0] === 'O') dfs(r, 0);
    if (board[r][n - 1] === 'O') dfs(r, n - 1);
  }
  for (let c = 0; c < n; c++) {
    if (board[0][c] === 'O') dfs(0, c);
    if (board[m - 1][c] === 'O') dfs(m - 1, c);
  }

  // Capture surrounded regions and restore safe regions
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] === 'O') {
        board[r][c] = 'X'; // surrounded
      } else if (board[r][c] === 'S') {
        board[r][c] = 'O'; // restore
      }
    }
  }
}
