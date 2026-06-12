// Number of 1 Bits — Easy
// https://leetcode.com/problems/number-of-1-bits/

/**
 * Counts the number of set bits (1s) in the binary representation of a positive integer.
 * 
 * Approach: Use bit manipulation with n & (n-1) technique. This operation clears the
 * rightmost set bit in each iteration, allowing us to count set bits efficiently.
 * 
 * Time Complexity: O(k) where k is the number of set bits in n
 * Space Complexity: O(1) - only using constant extra space
 * 
 * @param {number} n - A positive integer
 * @return {number} - The number of set bits in binary representation
 */
export function hammingWeight(n) {
    let count = 0;
    
    // Use Brian Kernighan's algorithm: n & (n-1) clears the rightmost set bit
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    
    return count;
}