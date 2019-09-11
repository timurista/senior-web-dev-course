#
# @lc app=leetcode id=460 lang=python3
#
# [460] LFU Cache
#
# https://leetcode.com/problems/lfu-cache/description/
#
# algorithms
# Hard (29.89%)
# Likes:    808
# Dislikes: 86
# Total Accepted:    46.5K
# Total Submissions: 155.4K
# Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
#
# Design and implement a data structure for Least Frequently Used (LFU) cache.
# It should support the following operations: get and put.
#
# get(key) - Get the value (will always be positive) of the key if the key
# exists in the cache, otherwise return -1.
# put(key, value) - Set or insert the value if the key is not already present.
# When the cache reaches its capacity, it should invalidate the least
# frequently used item before inserting a new item. For the purpose of this
# problem, when there is a tie (i.e., two or more keys that have the same
# frequency), the least recently used key would be evicted.
#
# Note that the number of times an item is used is the number of calls to the
# get and put functions for that item since it was inserted. This number is set
# to zero when the item is removed.
#
#
#
# Follow up:
# Could you do both operations in O(1) time complexity?
#
#
#
# Example:
#
#
# LFUCache cache = new LFUCache( 2 /* capacity */ );
#
# cache.put(1, 1);
# cache.put(2, 2);
# cache.get(1);       // returns 1
# cache.put(3, 3);    // evicts key 2
# cache.get(2);       // returns -1 (not found)
# cache.get(3);       // returns 3.
# cache.put(4, 4);    // evicts key 1.
# cache.get(1);       // returns -1 (not found)
# cache.get(3);       // returns 3
# cache.get(4);       // returns 4
#
#
#
#
#

from queue import PriorityQueue
from collections import Counter
import heapq

# bump priority by adding to freq count


class Item(object):
    def __init__(self, key, val):
        self.key = key
        self.val = val

    def __lt__(self, other):
        return self.val > other.val

    def __cmp__(self, other):
        return cmp(self.val > other.val)


class LFUCache:

    def __init__(self, capacity: int):
        self.counter = dict()
        self.capacity = capacity
        self.list = []
        self.heap = None

    def get(self, key: int) -> int:
        if str(key) not in self.counter:
            print(-1)
            return -1
        key = str(key)
        val = self.counter[key]['value']
        self.counter[key]['count'] += 1
        self.list = [Item(k, v['count'])
                     for k, v in self.counter.items()]
        heapq.heapify(self.list)
        print("heapify_list", [(i.key, i.val) for i in self.list])
        print(val)
        return val

    def put(self, key: int, value: int) -> None:
        key = str(key)

        if key in self.counter:
            return self.get(key)

        self.counter[key] = {'value': value, 'count': 1}
        # print(self.list)

        item = Item(str(key), 1)
        print("key", item.key)
        if (len(self.list) >= self.capacity):
            item = heapq.heappushpop(self.list, item)
            del self.counter[item.key]
        else:
            heapq.heappush(self.list, item)
        # print(self.counter, self.list)


# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
if __name__ == '__main__':
    cache = LFUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    cache.get(1)
    cache.put(3, 3)
    cache.get(2)
    cache.get(3)
    cache.put(4, 4)
    cache.get(1)
    cache.get(3)
    cache.get(4)
