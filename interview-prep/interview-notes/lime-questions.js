class DateRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  overlaps(other) {
    // Now one of De Morgan's laws says that:
    // Not (A Or B) <=>  Not A And Not B
    // console.log(otherRange.start, 'THIS', this.start)

    // this.start <= otherRange.end
    // &&
    // this.end >= otherRange.start
    return (
      Math.max(this.start, other.start) <= Math.min(this.end, other.end)
    );
  }
}

function addTime(start, end) {
  const possibleDate = new DateRange(start, end);
  let ranges = [new DateRange(2, 3), new DateRange(4, 6)];
  for (let range of ranges) {
    // console.log(range)
    if (possibleDate.overlaps(range)) {
      console.log('    overlap found')
      console.log('    ', possibleDate, range)
      return;
    }
  }
  console.log('NO OVERLAP --- adding time', possibleDate)
}

addTime(3, 4)
addTime(3, 5)
addTime(7, 8)
addTime(0, 1)
