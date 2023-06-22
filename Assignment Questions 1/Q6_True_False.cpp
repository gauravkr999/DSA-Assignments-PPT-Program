// **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true




#include<iostream>
#include<vector>

using namespace std;

void input(vector<int> &nums, int n){
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        nums.push_back(a);
    }
    return;
}
int main(){
    vector<int> nums;
    int n;
    cout<<"Enter the size of array: ";
    cin>>n;
    cout<<"Enter the elements of array: ";
    input(nums,n);
    cout<<"Output is: ";
    int count=0;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(i!=j && nums[i]==nums[j]){
                count++;
            }
        }
    }
    if(count==0){
        cout<<"False";
    }
    else
    cout<<"True";
    return 0;
}