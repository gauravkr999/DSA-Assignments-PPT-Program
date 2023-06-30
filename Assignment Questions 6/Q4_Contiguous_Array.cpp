// **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.




class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int>mp;
        mp[0]=-1;
        int ans=0, sum=0;
        for(int i=0; i<nums.size(); i++){
            if(nums[i]==0){
                sum+=-1;
            }
            else{
                sum+=nums[i];
            }
            if(mp.find(sum)==mp.end()){
                mp[sum]=i;
            }
            else{
                ans=max(ans, i-mp[sum]);
            }
        }
        return ans;
    }
};