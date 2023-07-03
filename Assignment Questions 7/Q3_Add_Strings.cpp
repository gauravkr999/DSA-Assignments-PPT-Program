// **Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"




class Solution {
public:
    string addStrings(string num1, string num2) {
        int i = num1.size() - 1;
        int j = num2.size() - 1;

        string sum;

        for (int c = 0; i >= 0 || j >= 0 || c; --i, --j){
            int a = i < 0 ? 0 : num1[i] - '0';
            int b = j < 0 ? 0 : num2[j] - '0';
            c = c + a + b;
            sum += to_string(c % 10);
            c /= 10;
        }
        reverse(sum.begin(), sum.end());
        return sum;
    }

    string subStrings(string num1, string num2) {
        int m = num1.size(), n = num2.size();
        bool flag = m < n || (m == n && num1 < num2);
        if (flag) {
            swap(num1, num2);
        }
        int i = num1.size() - 1, j = num2.size() - 1;
        string sum;
        for (int c = 0; i >= 0; --i, --j) {
            c = (num1[i] - '0') - c - (j < 0 ? 0 : num2[j] - '0');
            sum += to_string((c + 10) % 10);
            c = c < 0 ? 1 : 0;
        }
        while (sum.size() > 1 && sum.back() == '0') {
            sum.pop_back();
        }
        if (flag) {
            sum.push_back('-');
        }
        reverse(sum.begin(), sum.end());
        return sum;
    }
};