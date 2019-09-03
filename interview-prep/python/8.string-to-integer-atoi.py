#
# @lc app=leetcode id=8 lang=python3
#
# [8] String to Integer (atoi)
#
class Solution:
    def myAtoi(self, str):
        sign = 1
        num = 0
        lastnum = False
        signSeen = False
        for c in str:
            if c == "+" and not signSeen and not lastnum:
                sign = 1
                signSeen = True
            elif c == "-" and not signSeen and not lastnum:
                sign = -1
                signSeen = True
            elif c.isdigit() == True:
                num = num * 10 + int(c)
                lastnum = True
            elif signSeen or lastnum:
                break
            elif c != " ":
                break
        return_val = sign * num
        INT_MIN = -2147483648
        INT_MAX = 2147483647
        if return_val < INT_MIN:
            return_val = INT_MIN
        if return_val > INT_MAX:
            return_val = INT_MAX
        return return_val


if __name__ == "__main__":
    print(Solution().myAtoi("42"))
    print(Solution().myAtoi("   -42"))
    print(Solution().myAtoi("4193 with words"))
    print(Solution().myAtoi("words and 987"))
    print(Solution().myAtoi("-91283472332"))
    print(Solution().myAtoi("2147483648"))
    print(Solution().myAtoi("+1"))
    print(Solution().myAtoi("+-2"))
    print(Solution().myAtoi("-   234"))
    print(Solution().myAtoi("0-1"))

