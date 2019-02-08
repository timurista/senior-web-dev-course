/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // create a map of seen
  // move window slider until to have an item that has been seen
  // move window start up
  // create new map to track new seen
  if (s.length === 1) return 1;

  let windowStart = 0;
  let windowEnd = 0;
  let seen = {};
  let longestSubString = 0;
  let longStr = "";

  while (windowEnd < s.length + 1) {
    let currentItem = s[windowEnd];

    if (seen[currentItem] || windowEnd >= s.length) {
      const longStr = Object.keys(seen);
      console.log(windowEnd, windowStart, longStr);
      if (longStr.length > longestSubString) {
        longestSubString = longStr.length;
      }
      windowStart++;
      windowEnd = windowStart;
      seen = {};
    } else {
      seen[currentItem] = true;
      windowEnd++;
    }
  }
  return longestSubString;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("dvdf"));

```
#3 Longest Substring Without Repeating Characters [x]


#200 Number of Islands    

#20 Valid Parentheses    

#5 Longest Palindromic Substring    

#138 Copy List with Random Pointer    

#121 Best Time to Buy and Sell Stock    

#21 Merge Two Sorted Lists    
```;
