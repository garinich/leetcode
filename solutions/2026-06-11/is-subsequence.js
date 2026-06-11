// Is Subsequence — Easy
// https://leetcode.com/problems/is-subsequence/

/**
 * Determines if string s is a subsequence of string t.
 * 
 * Approach: Two-pointer technique
 * - Use one pointer for s and one for t
 * - Iterate through t, and when we find a matching character in s, advance the s pointer
 * - If we've matched all characters in s, return true
 * 
 * Time Complexity: O(n) where n is the length of string t
 * Space Complexity: O(1) - only using constant extra space
 * 
 * @param {string} s - The potential subsequence string
 * @param {string} t - The target string to search in
 * @return {boolean} - True if s is a subsequence of t, false otherwise
 */
export function isSubsequence(s, t) {
    if (s.length === 0) return true;
    if (t.length === 0) return false;
    
    let sIndex = 0;
    
    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
            // If we've matched all characters in s
            if (sIndex === s.length) {
                return true;
            }
        }
    }
    
    return false;
}