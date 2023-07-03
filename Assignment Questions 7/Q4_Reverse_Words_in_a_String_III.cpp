// **Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"



class Solution {
public:
    string reverseWords(string s) {
        string ans;
        string cl;
        s.push_back(' ');
        for(auto c: s) {
            if(c == ' ') {
                reverse(cl.begin(), cl.end());
                ans += cl;
                ans += ' ';
                cl.clear();
            }
            else cl.push_back(c);
        }
        ans.pop_back();
        return ans;
    }
};