// **Question 2**

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.



class Solution {
public:
    int arrangeCoins(int n) {
        int temp=n;
        int i=1;
        if(n==0)
        return 0;
        if(n==1)
        return 1;
        if(n>1){
            while(temp>0){
                i++;
                temp=temp-i;
            }
        }
        return i-1;
    }
};