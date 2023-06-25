// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true


class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        if(n == 0) 
        return true;
        int count = flowerbed.size();
        for(int i=0; i<count; i++){
            if(flowerbed[i] == 0 && (i==0 || flowerbed[i-1]==0) && (i==count-1 || flowerbed[i+1] == 0)){
                n--;
                if(n == 0) return true;
                flowerbed[i] = 1;
            }
        }
        return false;
    }
};