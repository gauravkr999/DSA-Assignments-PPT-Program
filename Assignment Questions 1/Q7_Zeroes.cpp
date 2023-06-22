// **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]




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
    int temp;
    cout<<"Output is: ";
    for(int i=0; i<n-1; i++){
        for(int j=i+1; j<n; j++){
            if(nums[i]==0){
                temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
    display(nums,n);
    return 0;
}