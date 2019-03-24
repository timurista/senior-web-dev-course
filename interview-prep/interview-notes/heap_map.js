class BinaryHeap {
  constructor(bubbleDirection = 1) {
    this.heap = []
    this.bubbleDirection = bubbleDirection;
  }

  insert(val) {
    this.heap.push(val)
    if (this.bubbleDirection === 1) this.bubbleUp()
    else this.sinkDown()
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent >= element) break
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex

    }
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    const length = this.heap.length


    // if left child is greater than parent
    if (left <= length && this.heap[left] > this.heap[largest]) {
      largest = left
    }
    // if right child is greater than parent
    if (right <= length && this.heap[right] > this.heap[largest]) {
      largest = right
    }
    // swap
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] =
        [this.heap[index], this.heap[largest]]
      this.sinkDown(largest)
    }
  }


  heapify(arr) {
    for (let item of arr) {
      this.insert(item)
    }
  }
}


function add(num, minHeap, maxHeap) {

}


function running_median(stream) {
  let minHeap = new BinaryHeap(-1);
  let maxHeap = new BinaryHeap();
  for (let num in stream) {
    add(num, minHeap, maxHeap);
    rebalance(num, minHeap, maxHeap)
    print_median(minHeap, maxHeap);
  }
}


running_median()
