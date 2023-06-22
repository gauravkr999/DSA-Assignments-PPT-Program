// **Q5.** You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// **Example 1:**
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// **Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.





#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    int m,n;
    cout<<"Enter the size of array A and B respectively: ";
    cin>>m>>n;
    vector<int> A;
    vector<int> B;
    cout<<"Enter the elements of A: ";
    for(int i=0; i<m; i++){
        int a;
        cin>>a;
        A.push_back(a);
    }
    for(int i=0; i<n; i++){
        A.push_back(0);
    }
    int b;
    cout<<"Enter the elements of B: ";
    for(int i=0; i<n; i++){
        cin>>b;
        B.push_back(b);
    }
    cout<<"Output for A: ";
    for(int i=0; i<m+n; i++){
        cout<<A[i]<<" ";
    }
    cout<<endl;
    cout<<"Output for B: ";
    for(int i=0; i<n; i++){
        cout<<B[i]<<" ";
    }
    cout<<endl;
    cout<<"Final Output: ";
    int x=0;
    for(int i=0; i<m+n; i++){
        if(i<m){
            cout<<A[i]<<" ";
        }
        else{
            A[i]=B[x];
            cout<<A[i]<<" ";
            x++;
        }
    }
    int temp;
    for(int i=0; i<m+n; i++){
        for(int j=m+n-1; j>=0; j--){
            if(A[i]>A[i+1]){
                temp=A[i];
                A[i]=A[i+1];
                A[i+1]=temp;
            }
            if(A[j]<A[j-1]){
                temp=A[j];
                A[j]=A[j-1];
                A[j-1]=temp;
            }
        }
    }
    cout<<endl;
    cout<<"Final sorted array is: ";
    for(int i=0; i<m+n; i++){
        cout<<A[i]<<" ";
    }



    return 0;
}