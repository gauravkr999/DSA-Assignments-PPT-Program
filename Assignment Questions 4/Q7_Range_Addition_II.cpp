// **Question 7**
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*



class Solution {
public:
    int maxCount(int m, int n, vector<vector<int>>& ops) {
        for (auto op : ops){
            m = min(m, op[0]);
            n = min(n, op[1]);
        }
        return m * n;
    }
};