// **Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.


class Solution {
public:
    bool checkFreq(string &s){
        int arr[26] = {0};
        
        for(char &ch : s){
            arr[ch-'a']++;
            
            if(arr[ch-'a'] > 1)
            return true;
            
        }
        
        return false;
    }
    
    bool buddyStrings(string s, string goal){
        if(s.length() != goal.length())
            return false;
        
        if(s == goal)
        return checkFreq(s);
        vector<int> indices;
        
        for(int i = 0; i < s.length(); i++){
            if(s[i] != goal[i]) {
            indices.push_back(i);
            }
        }
        
        if(indices.size() != 2)
        return false;
        
        int first  = indices[0];
        int second = indices[1];
        
        swap(s[first], s[second]);
        return s==goal;
    }
};