/*
 * Range Sum Query - Immutable
 * Difficulty: Easy
 * Date: 2026-06-09 | Attempts: 1
 * https://leetcode.com/problems/range-sum-query-immutable/
 *
 * Given an integer array nums, handle multiple queries of the following type:
 * 
 * 	Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 * 
 * Implement the NumArray class:
 * 
 * 	NumArray(int[] nums) Initializes the object with the integer array nums.
 * 	int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 * 
 * &nbsp;
 * Example 1:
 * 
 * Input
 * ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * Output
 * [null, 1, -1, -3]
 * 
 * Explanation
 * NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
 * numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
 * numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
 * numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 * 
 * &nbsp;
 * Constraints:
 * 
 * 	1 <= nums.length <= 104
 * 	-105 <= nums[i] <= 105
 * 	0 <= left <= right < nums.length
 * 	At most 104 calls will be made to sumRange.
 */

/**
 * Range Sum Query - Immutable
 * 
 * Approach: Use prefix sum array to precompute cumulative sums.
 * For each query, calculate range sum in O(1) time using the formula:
 * sumRange(left, right) = prefixSum[right + 1] - prefixSum[left]
 * 
 * Time Complexity: 
 * - Constructor: O(n) to build prefix sum array
 * - sumRange: O(1) for each query
 * 
 * Space Complexity: O(n) for the prefix sum array
 */

export class NumArray {
    constructor(nums) {
        // Build prefix sum array
        // prefixSum[i] = sum of elements from index 0 to i-1
        this.prefixSum = new Array(nums.length + 1);
        this.prefixSum[0] = 0;
        
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }
    
    sumRange(left, right) {
        // Sum from left to right = prefixSum[right + 1] - prefixSum[left]
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}