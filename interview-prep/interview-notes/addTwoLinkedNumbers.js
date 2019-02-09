/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var newL = new ListNode(0);
  var current = newL;

  function handleCarry(n1, n2, currentNode) {
    let carry = ~~((n1.val + n2.val) / 10);
    currentNode.val = (n1.val + n2.val + currentNode.val) % 10;

    if (n1.next || n2.next) {
      currentNode.next = new ListNode(carry);
    } else if (carry) {
      currentNode.next = new ListNode(carry);
    } else {
      currentNode.next = null;
    }
  }

  while (l1 || l2) {
    // console.log(l1, l2, current);
    if (l1 && l2) {
      // if (current) {
      handleCarry(l1, l2, current);
      current = current.next;
      l1 = l1.next;
      l2 = l2.next;
      // }
    } else if (l1) {
      handleCarry(l1, current, current);
      // current.val += l1.val;
      // current.next = null;
      l1 = l1.next;
    } else if (l2) {
      handleCarry(l2, current, current);
      // current.val += l2.val;
      // current.next = null;
      l2 = l2.next;
    }
  }
  return newL;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  get array() {
    let arr = [];
    let current = this;
    // console.log(current);
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let a = l1 === null ? 0 : l1.val;
    let b = l2 === null ? 0 : l2.val;
    let c = a + b + carry;
    let val = c % 10;
    carry = c > 10 ? 1 : 0;
    current.val = val;
    current.next = new ListNode(carry);
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }
  return head;
};

function ArrToList(arr) {
  // let current = new ListNode(arr[0]);
  let finalNode = new ListNode(arr[0]);
  let current = finalNode;
  for (let a of arr.slice(1)) {
    let node = new ListNode(a);
    current.next = node;
    current = current.next;
  }
  return finalNode;
}

// const list1 = ArrToList([2, 4, 3]);
// const list2 = ArrToList([5, 6, 4]);

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let p = l1;
  let q = l2;
  let curr = head;
  let carry = 0;

  while (p !== null || q !== null) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;

    if (p) p = p.next;
    if (q) q = q.next;
    let sum = carry + x + y;
    let val;

    if (sum >= 10) {
      carry = 1;
      val = sum - 10;
    } else {
      carry = 0;
      val = sum;
    }
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return head.next;
};

const list1 = ArrToList([1, 8]);
const list2 = ArrToList([0]);
console.log(addTwoNumbers(ArrToList([3, 4, 2]), ArrToList([4, 6, 5])).array);
console.log(addTwoNumbers(ArrToList([1, 8]), ArrToList([0])).array);
console.log(addTwoNumbers(ArrToList([5]), ArrToList([5])).array);
console.log(addTwoNumbers(ArrToList([1]), ArrToList([9, 9])).array);
