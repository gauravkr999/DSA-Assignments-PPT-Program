// **Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]



class Solution {
public:
    bool validMountainArray(vector<int>& arr) {
        if(arr.size()<3)
        return false;
        int i;
        for(i=0; i<arr.size()-1; i++){
            if(arr[i]<arr[i+1])
            continue;
            else
            break;
        }
        if(i==0 || i==arr.size()-1)
        return false;
            for(int j=arr.size()-1; j>i; j--){
                if(arr[j]<arr[j-1])
                continue;
                else
                return false;
            }
        return true;
    }
};