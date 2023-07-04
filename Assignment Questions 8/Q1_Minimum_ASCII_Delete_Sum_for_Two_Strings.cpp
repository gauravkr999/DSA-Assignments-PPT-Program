// **Question 1**

// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

// **Example 1:**

// **Input:** s1 = "sea", s2 = "eat"

// **Output:** 231

// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.



#include<bits/stdc++.h>
using namespace std;
#define fast ios_base::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define take_input freopen("input.txt","r",stdin);freopen("output.txt","w",stdout);
const long long int mod=1e9+7;
long long int dp[1002][1002];
long long int go(string &s1,string &s2,long long int i=0,long long int j=0)
{

	if(dp[i][j]!=-1)
		return dp[i][j];
	long long int price=0;
	if(i==s1.length() and j==s2.length())
	{
		price=0;
	}
	else if(i==s1.length())
	{
		price+=go(s1,s2,i,j+1)+s2[j];
	}
	else if(j==s2.length())
	{
		price+=go(s1,s2,i+1,j)+s1[i];
	}
	else if(s1[i]==s2[j])
	{
		price+=go(s1,s2,i+1,j+1);
	}
	else
	{
		price+=min(go(s1,s2,i+1,j)+s1[i],go(s1,s2,i,j+1)+s2[j]);
	}
	return dp[i][j]=price;
}
int main()
{
	fast;
	take_input;
	string s1,s2;
	cin>>s1>>s2;
	memset(dp,-1,sizeof(dp));
	cout<<go(s1,s2);
	return 0;
}