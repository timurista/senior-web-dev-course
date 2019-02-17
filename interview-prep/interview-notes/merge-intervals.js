function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;
  let merged = [];
  intervals.sort((a, b) => a.start - b.start);
  merged.push(intervals[0]);

  for (let i = 1; i < intervals.length; ++i) {
    let interval = intervals[i];
    let lastInterval = merged[merged.length - 1];
    if (
      lastInterval.start <= interval.start &&
      interval.start <= lastInterval.end
    ) {
      lastInterval.end = Math.max(interval.end, lastInterval.end);
    } else {
      merged.push(interval);
    }
  }

  return merged;
};

console.log(
  merge([new Interval(1, 3), new Interval(2, 6), new Interval(8, 10)])
);
