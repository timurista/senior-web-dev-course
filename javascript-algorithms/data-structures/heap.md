## Binary Heap
Left to right, they are smaller than parent.
But no order.
root is largest
max binary heap
every child below parent is less than parent.

max binary heap, parent always > children
no gaurantee between children

## Why do you care?
priority queue? commonly used data structure
assign importance level to each item
used with graph traversal

## Representing Heaps
fill in left first, then right child
use array / list to store binary heap
We can use the heap
0 --> [1,2]
[1] --> [3,4]
[2] --> [5,6]
[3] --> [7,8]
[4] --> 
n... left is 2n+1 and right child is 2n+2
child at index n,
parent is (n-1) / 2 floored
  of the child

## Class MaxBinaryHeap
properties is values with []
add it to end and bubble up until it gets to bubble up to parent.

```js
class MaxBinaryHeap {
  constructor(values) {
      this.values = values || []
  }

  parent(child) {
    return Math.floor((child - 1)/2);
  }

  bubbleUp(index) {
    if (index <= 0) return this.values;
    var child = index;
    var parent = this.parent(child);

    // swap while the parent is < child
    while (this.values[parent] < this.values[child]) {
        // so swap while greater
        var temp = this.values[parent];
        this.values[parent] = this.values[child];
        this.values[child] = temp;
        child = parent;
        parent = this.parent(child);
    }       
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length-1);
    return this.values;
  }
}
```

## Remving from heap
we take the priority which is highest.
Sinking down, delete root from heap, and restoring properties, trickle down, extract min and max.

remove root and take first child.
then take 12 and take larger child then swap.

## Extract Max

```js
extractMax() {
      var old = this.values[0]
      var last = this.values.pop()

      if (this.values.length > 0) {
          this.values[0] = last;
          this.sinkDown(0);
      }
          
      return old;
  }

  sinkDown(start) {
      while(start < this.values.length) {
          var left = 2 * start + 1;
          var right = 2 * start + 2;
          var leftChild = this.values[left];
          var rightChild = this.values[right];
          var current = this.values[start];
          var swap = null;

          if (leftChild && leftChild > current) {
              swap = left;
          }
          if (rightChild && rightChild > current) {

              // swap null means swap hasn't happened yet or swap happened but right child > left
              if (swap === null || swap !== null && rightChild > leftChild) {
                  swap = right;     
              }
          }
          if (swap === null) {                
              break;
          }
          // perform swap
          this.values[start] = this.values[swap];
          this.values[swap] = current;
          start = swap;
      }
  }
```
