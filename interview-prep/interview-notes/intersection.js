class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.slope = (end.y - start.y) / (end.x - start.x)
    this.y_intercept = start.y - this.slope * start.x;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function intersection(a1, b1, a2, b2) {
  let l1 = new Line(a1, b1);
  let l2 = new Lin(a2, b2);
  if (l1.slope === l2.slope) return false;

  const checkBetween = (val, start, end) => {
    return val >= start && val <= end;
  }
  const yBetween = !checkBetween(l2.start.y, l1.start.y, l1.end.y);
  const xBetween = !checkBetween(l2.start.x, l1.start.x, l1.end.x);

  if (!yBetween || !xBetween) return false;

  let xBetween = 0;
  if (l1.y_intercept === l2.y_intercept) return something

  return [x_int, l1.slope * x_int + l1.y_intercept]
  // const isBetween = checkBetween(l2.start, )
}