// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false


class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(),intervals.end());
        int count = 0;
        bool ans = false;
        int n = intervals.size();   
        int left = 0;  
        int right = 1; 
        while(right<n){
            if(intervals[left][1] <= intervals[right][0]){
            left = right;
            right+=1;
            }
            else if(intervals[left][1]<=intervals[right][1]){
            count+=1;       
            right+=1;
            }
            else if(intervals[left][1]>intervals[right][1]){
            count+=1;
            left = right;
            right+=1;
            }
        }
        if(count==0)
        ans = true;
        return ans;
    }
};