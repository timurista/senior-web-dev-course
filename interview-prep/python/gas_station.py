class Solution(object):
    def canCompleteCircuitOld(self, gas, cost):
        """
        :type gas: List[int]
        :type cost: List[int]
        :rtype: int
        """

        foundIndex = -1

        for i in range(len(gas)):
            # walk clockwise
            currGas = 0
            currGas += gas[i]
            # get next index
            currIndex = i
            nextIndex = (i + 1) % len(gas)

            while currGas >= cost[currIndex] and currIndex < len(gas):
                if currIndex == len(gas) - 1:
                    return i
                currGas -= cost[currIndex]
                currGas += gas[nextIndex]

                currIndex = (currIndex + 1) % len(gas)
                nextIndex = (nextIndex + 1) % len(gas)

        return foundIndex

    def canCompleteCircuit(self, gas, cost):
        m = len(gas)
        if m == 1:
            if gas[0] - cost[0] >= 0:
                return 0
            else:
                return -1
        for i in range(m - 1, -1, -1):
            if gas[i] - cost[i] >= 0:
                break
        if gas[i] - cost[i] < 0:
            return -1
        l, r = i, i
        now = gas[i]
        print("I PRINT", i)
        while True:
            while now >= cost[r % m]:
                now = now + gas[(r + 1) % m] - cost[r % m]
                r += 1
                if l + m == r:
                    return l
            save = 0
            while True:
                l = l - 1
                if l < 0:
                    return -1
                save += gas[l] - cost[l]
                if save < 0:
                    continue
                else:
                    break
            if l + m == r:
                return l
            now = now + save


if __name__ == "__main__":
    gas = [1, 2, 3, 4, 5]
    cost = [3, 4, 5, 1, 2]
    print(Solution().canCompleteCircuit(gas, cost))

    gas = [3, 3, 4]
    cost = [3, 4, 4]
    print(Solution().canCompleteCircuit(gas, cost))
