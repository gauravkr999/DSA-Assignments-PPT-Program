// **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

// **Example :**
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_*,_*]

// **Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)




#include<iostream>
#include<vector>
#include<algorithm>
#include<climits>

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
    int val;
    cout<<"Enter the element you want to remove: ";
    cin>>val;
    int sum=0;
    for(int i=0; i<n; i++){
        if(nums[i]==val){
            nums[i]=INT_MAX;
            sum++;
        }
    }
    sort(nums.begin(), nums.end());
    cout<<"Output is: ";
    for(int i=0; i<n-sum; i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}