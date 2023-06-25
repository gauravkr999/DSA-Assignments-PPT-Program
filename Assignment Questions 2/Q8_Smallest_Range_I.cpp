// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.




class Solution {
public:
    int smallestRangeI(vector<int>& nums, int k) {
        int x = nums[0];
        int y = nums[0];
        for(int i=0; i<nums.size(); i++){
            x=min(x,nums[i]);
            y=max(y,nums[i]);
        }
        if(x+k>=y-k)
        return 0;
        else
        return (y-k)-(x+k);
    }
};