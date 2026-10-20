# Valid Sudoku

🟡 **Medium** &nbsp;·&nbsp; Date: 2026-10-20 &nbsp;·&nbsp; Attempts: 1 &nbsp;·&nbsp; [View on LeetCode](https://leetcode.com/problems/valid-sudoku/)

---

Determine if a&nbsp;9 x 9 Sudoku board&nbsp;is valid.&nbsp;Only the filled cells need to be validated&nbsp;according to the following rules:

	Each row&nbsp;must contain the&nbsp;digits&nbsp;1-9 without repetition.
	Each column must contain the digits&nbsp;1-9&nbsp;without repetition.
	Each of the nine&nbsp;3 x 3 sub-boxes of the grid must contain the digits&nbsp;1-9&nbsp;without repetition.

Note:

	A Sudoku board (partially filled) could be valid but is not necessarily solvable.
	Only the filled cells need to be validated according to the mentioned&nbsp;rules.

&nbsp;
Example 1:

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

&nbsp;
Constraints:

	board.length == 9
	board[i].length == 9
	board[i][j] is a digit 1-9 or '.'.