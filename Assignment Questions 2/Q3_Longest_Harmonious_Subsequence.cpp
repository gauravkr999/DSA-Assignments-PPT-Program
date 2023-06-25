// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].




class Solution 
{
public:
    int findLHS(vector<int>& nums){
        sort(nums.begin(), nums.end());
        int ans = 0;
        for(int i=0; i<nums.size(); i++){
            int j=i+1;
            while(j<nums.size() && (nums[j]-nums[i])<=1){
                j++;
            }
            if(nums[j-1]-nums[i]==1){
                ans=max(j-i, ans);
            }
        }
        return ans;
    }
};