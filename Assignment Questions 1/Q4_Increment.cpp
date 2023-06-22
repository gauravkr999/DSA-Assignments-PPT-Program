// **Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].





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
    cout<<"Output is: ";

    nums[n-1]++;
    for(int i=n-1; i>=0; i--){
        if(nums[i]==10 && i!=0){
            nums[i]=0;
            nums[i-1]++;
        }
        if(nums[0]==10){
            n++;
            nums[0]=1;
            nums.push_back(0);

        }
    }
   
    display(nums,n);
    
    return 0;
}