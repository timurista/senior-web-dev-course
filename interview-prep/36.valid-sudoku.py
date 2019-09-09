#
# @lc app=leetcode id=36 lang=python3
#
# [36] Valid Sudoku
#
# https://leetcode.com/problems/valid-sudoku/description/
#
# algorithms
# Medium (44.48%)
# Likes:    1008
# Dislikes: 360
# Total Accepted:    265.8K
# Total Submissions: 595.9K
# Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
#
# Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
# validated according to the following rules:
#
#
# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
# repetition.
#
#
#
# A partially filled sudoku which is valid.
#
# The Sudoku board could be partially filled, where empty cells are filled with
# the character '.'.
#
# Example 1:
#
#
# Input:
# [
# ⁠ ["5","3",".",".","7",".",".",".","."],
# ⁠ ["6",".",".","1","9","5",".",".","."],
# ⁠ [".","9","8",".",".",".",".","6","."],
# ⁠ ["8",".",".",".","6",".",".",".","3"],
# ⁠ ["4",".",".","8",".","3",".",".","1"],
# ⁠ ["7",".",".",".","2",".",".",".","6"],
# ⁠ [".","6",".",".",".",".","2","8","."],
# ⁠ [".",".",".","4","1","9",".",".","5"],
# ⁠ [".",".",".",".","8",".",".","7","9"]
# ]
# Output: true
#
#
# Example 2:
#
#
# Input:
# [
# ["8","3",".",".","7",".",".",".","."],
# ["6",".",".","1","9","5",".",".","."],
# [".","9","8",".",".",".",".","6","."],
# ["8",".",".",".","6",".",".",".","3"],
# ["4",".",".","8",".","3",".",".","1"],
# ["7",".",".",".","2",".",".",".","6"],
# [".","6",".",".",".",".","2","8","."],
# [".",".",".","4","1","9",".",".","5"],
# [".",".",".",".","8",".",".","7","9"]
# ]
# Output: false
# Explanation: Same as Example 1, except with the 5 in the top left corner
# being
# ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is
# invalid.
#
#
# Note:
#
#
# A Sudoku board (partially filled) could be valid but is not necessarily
# solvable.
# Only the filled cells need to be validated according to the mentioned
# rules.
# The given board contain only digits 1-9 and the character '.'.
# The given board size is always 9x9.
#
#
#
# from collections import Counter


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [{} for i in range(len(board))]
        # print Counter
        cols = [{} for i in range(len(board))]
        sub_square = [
            [{} for i in range(len(board) // 3)] for j in range(len(board) // 3)
        ]
        for i in range(len(board)):
            for j in range(len(board)):
                cur_cell = board[i][j]
                if cur_cell != ".":
                    # print(i, j, cur_cell, rows[i], cols[j], i // 3, j // 3)
                    if cur_cell not in rows[i]:
                        rows[i][cur_cell] = 1
                    elif cur_cell in rows[i]:
                        return False
                    if cur_cell not in cols[j]:
                        cols[j][cur_cell] = 1
                    elif cur_cell in cols[j]:
                        return False
                    cur_sub_square = sub_square[i // 3][j // 3]
                    if cur_cell not in cur_sub_square:
                        cur_sub_square[cur_cell] = 1
                    elif cur_cell in cur_sub_square:
                        return False
        return True

