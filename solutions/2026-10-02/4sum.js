// 4Sum — Medium
// https://leetcode.com/problems/4sum/

/**
 * 4Sum Solution
 * 
 * Approach:
 * Sort the array, then use two nested loops for the first two elements,
 * and a two-pointer technique for the remaining two elements.
 * Skip duplicates at each level to ensure unique quadruplets.
 * 
 * Time Complexity: O(n^3) - two nested loops O(n^2) with two-pointer O(n)
 * Space Complexity: O(1) - excluding the output array
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
export function fourSum(nums, target) {
  const result = [];
  const n = nums.length;
  
  if (n < 4) return result;
  
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < n - 3; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    for (let j = i + 1; j < n - 2; j++) {
      // Skip duplicates for second element
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      
      let left = j + 1;
      let right = n - 1;
      
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          
          // Skip duplicates for third element
          while (left < right && nums[left] === nums[left + 1]) left++;
          // Skip duplicates for fourth element
          while (left < right && nums[right] === nums[right - 1]) right--;
          
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  
  return result;
}
