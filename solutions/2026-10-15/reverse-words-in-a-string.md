# Reverse Words in a String

🟡 **Medium** &nbsp;·&nbsp; Date: 2026-10-15 &nbsp;·&nbsp; Attempts: 1 &nbsp;·&nbsp; [View on LeetCode](https://leetcode.com/problems/reverse-words-in-a-string/)

---

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

&nbsp;
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"

Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

&nbsp;
Constraints:

	1 <= s.length <= 104
	s contains English letters (upper-case and lower-case), digits, and spaces ' '.
	There is at least one word in s.

&nbsp;
Follow-up:&nbsp;If the string data type is mutable in your language, can&nbsp;you solve it&nbsp;in-place&nbsp;with&nbsp;O(1)&nbsp;extra space?