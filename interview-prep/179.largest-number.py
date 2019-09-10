#
# @lc app=leetcode id=179 lang=python3
#
# [179] Largest Number
#
# https://leetcode.com/problems/largest-number/description/
#
# algorithms
# Medium (26.47%)
# Likes:    1186
# Dislikes: 154
# Total Accepted:    141K
# Total Submissions: 532.8K
# Testcase Example:  '[10,2]'
#
# Given a list of non negative integers, arrange them such that they form the
# largest number.
#
# Example 1:
#
#
# Input: [10,2]
# Output: "210"
#
# Example 2:
#
#
# Input: [3,30,34,5,9]
# Output: "9534330"
#
#
# Note: The result may be very large, so you need to return a string instead of
# an integer.
#
#


class LargerNumKey(str):
    # this compares the concatenated strings
    def __lt__(x, y):
        print(x + y, y + x, x + y > y + x)
        return x + y > y + x


class Solution:

    def largestNumber(self, nums):
        # First, we convert each integer to a string.
        largest_num = ''.join(sorted(map(str, nums), key=LargerNumKey))
        return '0' if largest_num[0] == '0' else largest_num


if __name__ == "__main__":
    print(Solution().largestNumber([3, 30, 34, 5, 9]))
