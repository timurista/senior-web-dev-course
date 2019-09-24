#
# @lc app=leetcode id=51 lang=python3
#
# [51] N-Queens
#
# https://leetcode.com/problems/n-queens/description/
#
# algorithms
# Hard (41.24%)
# Likes:    1153
# Dislikes: 50
# Total Accepted:    157.1K
# Total Submissions: 381K
# Testcase Example:  '4'
#
# The n-queens puzzle is the problem of placing n queens on an n×n chessboard
# such that no two queens attack each other.
#
#
#
# Given an integer n, return all distinct solutions to the n-queens puzzle.
#
# Each solution contains a distinct board configuration of the n-queens'
# placement, where 'Q' and '.' both indicate a queen and an empty space
# respectively.
#
# Example:
#
#
# Input: 4
# Output: [
# ⁠[".Q..",  // Solution 1
# ⁠ "...Q",
# ⁠ "Q...",
# ⁠ "..Q."],
#
# ⁠["..Q.",  // Solution 2
# ⁠ "Q...",
# ⁠ "...Q",
# ⁠ ".Q.."]
# ]
# Explanation: There exist two distinct solutions to the 4-queens puzzle as
# shown above.
#
#
#


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        # IDEA:
        # 1. Each row contains 1 queen
        # 2. For each row, keep track of the valid columns for queen placement.
        #    (NOTE in a clever way)
        # 3. DFS, start from the first row, try each valid column and backtrack if necessary.

        # NOTE that we can encode left/right diagonals as indexes in the following way
        # For any (r, c),
        # its top-left to bottom-right diagonal index is r - c, ∈ (-n, n)
        # its bottom-left to top-right diagonal index is r + c, ∈ [0, 2n)

        # Each (r, c) takes the r-th row, c-th column, and the two diagonal indexes encoded above
        # Thus we can use 4 sets to indicate whether those row/col/diagonal have
        # been taken, if yes, a queen cannot be placed at (r, c) .

        # Moreover, if we search via dfs, proceeding row by row, we can avoid keeping
        # the row set, getting away with 3 sets only (column, and 2 diagonals)
        # Each set indicates whether the column/diagonal with the specified index has been taken
        valid_columns = set([i for i in range(n)])
        valid_tl_to_brs = set([i for i in range(-n + 1, n)])
        valid_bl_to_trs = set([i for i in range(2*n)])

        # will contain the solutions discovered during dfs
        solutions = []
        # an global accumulator used during dfs to determine
        # the previously selected (row, col) placements
        # (i, previous_cols[i]) is the coordinate encoding.
        previous_cols = []

        def dfs(row):
            # Int [List Int] -> Void
            # try to place (n-row) queens in the [row, n) rows.
            # Add the answer to the solutions list if one is found.

            # all rows have been searched, append a copy of the solution
            if row >= n:
                answer = ["".join(["Q" if col == previous_cols[row]
                                   else "." for col in range(n)]) for row in range(n)]
                solutions.append(answer)
                return

            # try each column candidates and place queen at (row, col)
            for col in valid_columns:
                # calculate the diagonal indexes
                tl_to_br_index = row - col
                bl_to_tr_index = row + col

                # check if it's valid to place at (row, col)
                if tl_to_br_index in valid_tl_to_brs and bl_to_tr_index in valid_bl_to_trs:
                    # update the three sets and preivous_cols
                    valid_columns.remove(col)
                    valid_tl_to_brs.remove(tl_to_br_index)
                    valid_bl_to_trs.remove(bl_to_tr_index)
                    previous_cols.append(col)
                    # continue dfs
                    dfs(row + 1)
                    # undo the updates
                    valid_columns.add(col)
                    valid_tl_to_brs.add(tl_to_br_index)
                    valid_bl_to_trs.add(bl_to_tr_index)
                    previous_cols.pop()

        dfs(0)
        return solutions
