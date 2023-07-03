// **Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true



class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int n = s.size();
        char arr[128] = {};
        for (int i = 0; i < n; i++) {
            char c = s[i];
            if (!arr[c]) {
                for (char s: arr)
                if (s == t[i])
                return false;
                arr[c] = t[i];
            }
            else if (arr[c] != t[i]) 
            return false;
        }
        return true;
    }
};