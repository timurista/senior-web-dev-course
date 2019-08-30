class Solution(object):
    def deserialize(self, s):
        """
        :type s: str
        :rtype: NestedInteger
        """
        stack = []
        elem = None
        hasNum = False
        num = 0
        sign = 1
        for x in s:
            if x == "[":
                stack.append([])
            elif x == "-":
                sign = -1
            elif x.isdigit():
                hasNum = True
                num = num * 10 + sign * int(x)
            else:  # , or ]
                if hasNum:
                    print(str(stack[-1]) + ", " + str(num))
                    stack[-1].append(sign * num)
                    hasNum = False
                    num = 0
                    sign = 1
                elif elem is not None:
                    stack[-1].append(elem)
                    elem = None
                if x == "]":
                    elem = stack.pop()
        if hasNum:
            return sign * num
        else:
            return elem


if __name__ == "__main__":
    print(Solution().deserialize("[123,[456,[789]]]"))
    print(Solution().deserialize("123"))
