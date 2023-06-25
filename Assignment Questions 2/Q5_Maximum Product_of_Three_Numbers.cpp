// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6


class Solution {
public:
    int maximumProduct(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size()-1;
        int ans1 = nums[n]*nums[n-1]*nums[n-2];
        int ans2 = nums[0]*nums[1]*nums[n];
        return max(ans1, ans2);
    }
};