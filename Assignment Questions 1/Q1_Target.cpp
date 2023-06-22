// **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]


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

void display(vector<int> &nums, int n){
    for(int i=0; i<n; i++){
        cout<<nums[i]<<" ";
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
    for(int i=0; i<n-1; i++){
        for(int j=i+1; j<n; j++){
            if(i!=j && nums[i]+nums[j]==x){
                cout<<"["<<i<<","<<j<<"]"<<" ";
            }
        }
    }
    return 0;
}