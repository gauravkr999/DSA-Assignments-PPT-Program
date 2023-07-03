// **Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".



class Solution {
public:
    bool backspaceCompare(string s, string t){
        string ans_s="",ans_t="";
        int sum=0;
        for(int i=s.length()-1;i>=0;i--){
            if(s[i]=='#')
                sum++;
            else{
                if(sum>0)
                    sum--;
                else
                    ans_s+=s[i];
            }
        }
        sum=0;
        for(int i=t.length()-1;i>=0;i--){
            if(t[i]=='#')
                sum++;
            else{
                if(sum>0)
                    sum--;
                else
                    ans_t+=t[i];
            }
        }
        return (ans_s==ans_t);
    }
};