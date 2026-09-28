# Valid Parentheses

🟢 **Easy** &nbsp;·&nbsp; Date: 2026-09-28 &nbsp;·&nbsp; Attempts: 1 &nbsp;·&nbsp; [View on LeetCode](https://leetcode.com/problems/valid-parentheses/)

---

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

	Open brackets must be closed by the same type of brackets.
	Open brackets must be closed in the correct order.
	Every close bracket has a corresponding open bracket of the same type.

&nbsp;
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

&nbsp;
Constraints:

	1 <= s.length <= 104
	s consists of parentheses only '()[]{}'.