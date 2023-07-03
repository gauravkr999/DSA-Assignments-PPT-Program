// **Question 2**

// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true




#include<iostream>
#include <bits/stdc++.h>

using namespace std;
 
vector<string> basic(int n, int size)
{
    vector<string> result;
    if (n == 0)
        return result;
    if (n == 1) {
        result.push_back("1");
        result.push_back("0");
        result.push_back("8");
        return result;
    }
 
    vector<string> k = basic(n - 2, size);
 
    for (string k : k) {
        if (n != size)
            result.push_back("0" + k + "0");
 
        result.push_back("8" + k + "8");
        result.push_back("1" + k + "1");
        result.push_back("9" + k + "6");
        result.push_back("6" + k + "9");
    }
    return result;
}
 

vector<string> str_num(int n)
{
    vector<string> result = basic(n, n);
    return result;
}

int main()
{

    for (string num : (str_num(3)))
    cout << num << " ";

    return 0;
}
 