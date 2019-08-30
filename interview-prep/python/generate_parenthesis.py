class Solution(object):
    def generateParenthesClosureNumber(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        if n == 0:
            return [""]
        ans = []
        for c in range(n):
            # print(c)
            for left in self.generateParenthesClosureNumber(c):
                # print(n - 1 - c)
                for right in self.generateParenthesClosureNumber(n - 1 - c):
                    # print(left, right)
                    ans.append("({}){}".format(left, right))
        return ans

    def generateParenthesBackTrack(self, n):
        """
        :type n: int
        :rtype: List[str]

        only add the parenthesis if we know it will be a valid
        sequence


        Catalan number \dfrac{4^n}{n\sqrt{n}}	
        Time Complexity : O(\dfrac{4^n}{\sqrt{n}})
        """
        ans = []

        def backtrack(s="", left=0, right=0):
            if len(s) == 2 * n:
                ans.append(s)
                return
            if left < n:
                print("left", left, s)
                backtrack(s + "(", left + 1, right)
            if right < left:
                print("right", right, s)
                backtrack(s + ")", left, right + 1)

        backtrack()
        return ans

    def generateParenthesisBrute(self, n):
        """
        :type n: int
        :rtype: List[str]

        this is O (2^2n * n)
        """

        def generate(A=[]):
            if len(A) == 2 * n:
                if valid(A):
                    ans.append("".join(A))
            else:
                A.append("(")
                generate(A)
                A.pop()
                A.append(")")
                generate(A)
                A.pop()

        def valid(A):
            bal = 0
            for c in A:
                if c == "(":
                    bal += 1
                else:
                    bal -= 1
                if bal < 0:
                    return False
            return bal == 0

        ans = []
        generate()
        return ans


if __name__ == "__main__":
    print(Solution().generateParenthesBackTrack(3))
    print(Solution().generateParenthesClosureNumber(3))
