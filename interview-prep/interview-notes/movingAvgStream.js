class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = this.head;
    this.length = 0;
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
      l++;
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
      this.list = new LinkedList(new Node(item));
      return this;
    }

    this.list.append(item);
    console.log("LSIT", this.list, this.list.size());

    if (this.list.length > this.size) {
      this.list.head = this.list.head.next;
      this.list.length--;
    }

    // for (let current of this) {
    //   if (!current.next) {
    //     current.next = node;
    //     this.length++;
    //     if (this.length > this.size) {
    //       this.head = this.head.next;
    //       this.length--;
    //     }
    //     return;
    //   }
    // }
  }

  get average() {
    let sum = 0;
    console.log("HEAD", this.head);
    console.log("TAIL", this.tail);

    for (let n of this.list) {
      sum += n.val;
    }
    return sum / this.length;
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

const mvAvg = new MovingAverage(3);
console.log(mvAvg.next(1));
console.log(mvAvg.next(10));
console.log(mvAvg.next(3));
console.log(mvAvg.next(5));

// const genNum = () => Math.floor(100 * Math.random() + 5);
// const rand = new Array(100000).fill(0).map(c => genNum());
// // console.log(rand.slice(100, 104));
// for (let i of rand) {
//   console.log(mvAvg.next(i));
// }
// [null,1.0,5.5,4.66667,6.0]
