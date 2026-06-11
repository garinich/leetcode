// Add Binary — Easy
// https://leetcode.com/problems/add-binary/

/**
 * Add Binary - Binary string addition
 * 
 * Approach:
 * - Use two pointers starting from the end of both strings
 * - Add corresponding digits along with any carry from previous addition
 * - Handle cases where strings have different lengths
 * - Continue until both strings are processed and no carry remains
 * 
 * Time Complexity: O(max(n, m)) where n and m are lengths of input strings
 * Space Complexity: O(max(n, m)) for the result string
 */

export function addBinary(a, b) {
    let result = [];
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    // Process digits from right to left
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        
        // Add digit from string a if available
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        
        // Add digit from string b if available
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        
        // Add the remainder to result and update carry
        result.unshift(sum % 2);
        carry = Math.floor(sum / 2);
    }
    
    return result.join('');
}