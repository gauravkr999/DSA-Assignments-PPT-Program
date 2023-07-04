// **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true



class Solution {

    public boolean checkValidString(String s) {
        char[] chars = s.toCharArray();
        Stack<Integer> s1 = new Stack<Integer>();
        Stack<Integer> s2 = new Stack<Integer>();

        for (int i = 0; i < chars.length; i++) {
            char c = chars[i];
            if (c == '(') {
                s1.push(i);
            } else if (c == ')') {
                if (!s1.isEmpty()) {
                    s1.pop();
                } else if(!s2.isEmpty()) {
                    s2.pop();
                } else {
                    return false;
                }
            } else if (c == '*') {
                s2.push(i);
            }
        }

        while(!s1.isEmpty() && !s2.isEmpty()) {
            Integer value = s2.pop();
            if (s1.peek() < value) {
                s1.pop();
            }
        }

        return s1.isEmpty();
    }
}