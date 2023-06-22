// **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]




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
    vector<int> nums2;
    int p,b;
    cout<<"Output is: ";
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            if(i!=j && nums[i]==nums[j]){
                p=nums[i];
                nums[j]=j+1;
                b=nums[j];
            }
        }
    }
    nums2.push_back(p);
    nums2.push_back(b);
    cout<<nums2[0]<<" "<<nums2[1];

    return 0;
}