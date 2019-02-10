class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
  constructor(size = 1) {
    this.head = null;
    this.length = 0;
    this.size = size;
  }

  enqueue(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    for (let current of this) {
      if (!current.next) {
        current.next = node;
        this.length++;
        if (this.length > this.size) {
          this.head = this.head.next;
          this.length--;
        }
        return;
      }
    }
  }

  get average() {
    let sum = 0;
    console.log("HEAD", this.head);
    for (let n of this) {
      sum += n.val;
    }
    return sum / this.length;
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
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.enqueue(val);

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

const genNum = () => Math.floor(100 * Math.random() + 5);
const rand = new Array(100000).fill(0).map(c => genNum());
// console.log(rand.slice(100, 104));
for (let i of rand) {
  console.log(mvAvg.next(i));
}
// [null,1.0,5.5,4.66667,6.0]
