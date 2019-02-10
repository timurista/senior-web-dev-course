class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(val = 0) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  append(item) {
    const node = new Node(item);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  size() {
    let s = 0;
    for (let n of this) {
      s++;
    }
    return s;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
  constructor(size = 1) {
    this.list;
    this.size = size;
  }

  add(item) {
    if (!this.list) {
      this.list = new LinkedList(item);
      return this;
    }

    this.list.append(item);

    if (this.list.length > this.size) {
      this.list.head = this.list.head.next;
      this.list.length--;
    }
  }

  get average() {
    let sum = 0;

    for (let n of this.list) {
      sum += n.val;
    }
    return sum / this.list.length;
  }
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.add(val);

  return this.average;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */

["MovingAverage", "next", "next", "next", "next"][([3], [1], [10], [3], [5])];

let mvAvg = new MovingAverage(3);
console.log(mvAvg.next(1));
console.log(mvAvg.next(10));
console.log(mvAvg.next(3));
console.log(mvAvg.next(5));

// mvAvg = new MovingAverage(1000);
// const genNum = () => Math.floor(100 * Math.random() + 5);
// const rand = new Array(100000).fill(0).map(c => genNum());
// // // console.log(rand.slice(100, 104));
// for (let i of rand) {
//   console.log(mvAvg.next(i));
// }
// [null,1.0,5.5,4.66667,6.0]
