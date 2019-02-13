function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeKLists = function(lists) {
  let newList = new ListNode();
  let currentPointer = newList;
  let valsToProcess = [];

  // check if list exists
  for (let i = 0; i < lists.length; i++) {
    while (lists[i] !== null) {
      let val = lists[i].val;
      lists[i] = lists[i].next;
      valsToProcess.push(val);
    }
  }

  for (let val of valsToProcess.sort((a, b) => a - b)) {
    currentPointer.next = new ListNode(val);
    currentPointer = currentPointer.next;
  }

  return newList.next;
};

// Attempt 2  Merge with Divide And Conquer

// var mergeKLists = function(lists) {
//   if (!lists.length) return;

//   const merge = (list1, list2) => {
//     let l1Pointer = list1;
//     let l2Pointer = list2;
//     let node = new ListNode();

//     while (l1Pointer !== null || l2Pointer !== null) {
//       if (!l1Pointer) {
//         node.next = l2Pointer;
//         return node.next;
//       }
//       if (!l2Pointer) {
//         node.next = l1Pointer;
//         return node.next;
//       }
//       if (l1Pointer.val < l2Pointer.val) {
//         let temp = new ListNode(l1Pointer.val);
//         temp.next = new ListNode(l2Pointer.val);
//         node.next = temp;
//       } else if (l1Pointer.val > l2Pointer.val) {
//         let temp = new ListNode(l2Pointer.val);
//         temp.next = new ListNode(l1Pointer.val);
//         node.next = temp;
//       }
//       l1Pointer = l1Pointer.next;
//       l2Pointer = l2Pointer.next;
//       node = node.next;
//       console.log(node);
//     }
//     return node;
//   };

//   while (lists.length > 1) {
//     const l1 = lists.pop();
//     const last = lists.length - 1;
//     console.log(last, l1);
//     lists[last] = merge(lists[last], l1);
//   }
//   console.log("LISTS", lists);

//   return lists;
// };

let l1 = new ListNode(1);
l1.next = new ListNode(2);

let l2 = new ListNode(1);
l2.next = new ListNode(4);

console.log(JSON.stringify(mergeKLists([l1, l2]), undefined, 2));
