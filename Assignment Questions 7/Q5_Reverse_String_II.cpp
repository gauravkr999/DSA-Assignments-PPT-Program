// **Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"



class Solution {
public:
    string reverseStr(string s, int k){
        int size = s.size();

        int left = 0, right = 0;
        for(int i = 0; i < size; i += 2*k) {
            left = i;
            right = min(left + k - 1, size - 1);

            while(left <= right) {
                char temp = move(s[left]);
                s[left++] = move(s[right]);
                s[right--] = move(temp);
            }
        }
        return move(s);
    }
};