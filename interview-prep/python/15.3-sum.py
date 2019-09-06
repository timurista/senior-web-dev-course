#
# @lc app=leetcode id=15 lang=python3
#
# [15] 3Sum
#
#
from itertools import combinations


class Solution:
    def threeSum(self, n):
        n.sort()
        # get prelim list of complements
        D, S = {j: i for i, j in enumerate(n)}, set()
        for [(a, _), (b, j)] in combinations(zip(n, range(len(n))), 2):
            compliment = -(a + b)
            # sum of a,b is in D, (negative so you get 0)
            # and then the index of that solution is not j
            if compliment in D and D[compliment] > j:
                S.add((a, b, compliment))
        return S


# if __name__ == "__main__":
#     print(Solution().threeSum([-1, 0, 1, 2, -1, -4]))

