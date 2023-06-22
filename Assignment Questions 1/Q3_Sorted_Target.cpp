// **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2



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
    int x;
    cout<<"Enter the target: ";
    cin>>x;
    cout<<"Output is: ";
    for(int i=0; i<n; i++){
        if(nums[i]==x){
            cout<<i<<" ";
        }
        if(nums[i]<x && nums[i+1]>x){
            cout<<i+1<<" ";
        }
    }
    return 0;
}