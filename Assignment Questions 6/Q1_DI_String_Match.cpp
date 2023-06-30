// **Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]



class Solution {
public:
    vector<int> diStringMatch(string s){
        vector<int> v1;
        int i=0,j=s.length();
        
        for(int k=0;k<s.length();k++){
            if(s[k]=='I'){v1.push_back(i);i++;}
            else{v1.push_back(j);j--;}
        }

        v1.push_back(j--);
        return v1;
    }
};