/**

Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries, return the lexicographically smallest one. All flights must be used in the itinerary.
 For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary. However, the first one is lexicographically smaller.
 */

function itinerary(listPoints, startPoint, path = [startPoint], seen = {}) {
  for (let [start, end] of listPoints) {
    if (startPoint === start && !seen[[start, end]]) {
      console.log(seen)
      seen[[start, end]] = true;
      return itinerary(listPoints, end, path.concat(end), seen)
    }
  }
  return path.length > 1 ? path : null;
}

console.log(itinerary([('SFO', 'COM'), ('COM', 'YYZ')], 'COM'))
console.log(itinerary([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']], 'YUL'))
console.log(itinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A'))