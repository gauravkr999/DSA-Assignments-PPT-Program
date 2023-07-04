// **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".


class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        int l_s = s.size();
        int l_p = p.size();
        

        if(l_s < l_p) return {};
        
        vector<int> p_fr(26,0);
        vector<int> window(26,0);
        for(int i=0;i<l_p;i++){
            p_fr[p[i]-'a']++;
            window[s[i]-'a']++;
        }
        
        vector<int> ans;
        if(p_fr == window) 
        ans.push_back(0);
        
        for(int i=l_p;i<l_s;i++){
            window[s[i-l_p] - 'a']--;
            window[s[i] - 'a']++;
            
            if(p_fr == window)
            ans.push_back(i-l_p+1);
        }
        return ans;
    }
};