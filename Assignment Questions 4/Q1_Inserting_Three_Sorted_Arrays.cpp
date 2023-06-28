// **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.





#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int main(){
    int arr1[] = {1,2,3,4,5};
    int arr2[] = {1,2,5,7,9};
    int arr3[] = {1,3,4,5,8};

    vector<int> ans;
    int sum = 0;
    vector<int> res;
    
    for(int i=0; i<5; i++){
        int a = arr1[i];
        ans.push_back(a);
    }
    for(int i=0; i<5; i++){
        int a = arr2[i];
        ans.push_back(a);
    }
    for(int i=0; i<5; i++){
        int a = arr3[i];
        ans.push_back(a);
    }
    sort(ans.begin(),ans.end());
    int i;
    int p;
    for(i=2; i<ans.size(); i++){
        if(ans[i]+ans[i-1]+ans[i-2]==3*ans[i]){
        p = ans[i];
        res.push_back(p);
        }
    }
    cout<<endl;
    cout<<"Output: ";
    for(int i=0; i<res.size(); i++){
        cout<<res[i]<<" ";
    }

    return 0;
    
}