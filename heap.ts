class Heap {
  heap: number[];

  constructor() {
    this.heap = [0];
  }

  push(value: number) {
    this.heap.push(value);

    let insertedElIndex = this.heap.length - 1;
    let insertedElParentIndex = Math.floor(insertedElIndex / 2);

    // percolate up
    while (this.heap[insertedElIndex] < this.heap[insertedElParentIndex]) {
      const insertedEl = this.heap[insertedElIndex];

      this.heap[insertedElIndex] = this.heap[insertedElParentIndex];

      this.heap[insertedElParentIndex] = insertedEl;
      insertedElIndex = insertedElParentIndex;
      insertedElParentIndex = Math.floor(insertedElIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const poppedEl = this.heap[1];

    this.heap[1] = this.heap.pop();
    let currentIndex = 1;

    // percolating down

    this.percolateDown(currentIndex);

    return poppedEl;
  }

  heapify(arr: number[]) {
    arr.push(arr[0]);

    this.heap = arr;

    let currentNodeIndex = Math.floor((this.heap.length - 1) / 2);

    while (currentNodeIndex > 0) {
      let currentIndex = currentNodeIndex;

      this.percolateDown(currentIndex);

      currentNodeIndex -= 1;
    }
  }

  private percolateDown(currentIndex: number) {
    while (currentIndex * 2 < this.heap.length) {
      // while there is a left child
      if (
        currentIndex * 2 + 1 < this.heap.length && // if there is a right child as well
        this.heap[currentIndex * 2 + 1] < this.heap[currentIndex * 2] && // and if that right child is lesser than the left one
        this.heap[currentIndex] > this.heap[currentIndex * 2 + 1] // and the current node is greater than the right child
      ) {
        // swap current node and right child

        const temp = this.heap[currentIndex]; // 30 node

        this.heap[currentIndex] = this.heap[currentIndex * 2 + 1];
        this.heap[currentIndex * 2 + 1] = temp;
        currentIndex = currentIndex * 2 + 1;
      } else if (this.heap[currentIndex] > this.heap[currentIndex * 2]) {
        // if the current element is greater than the left child
        const temp = this.heap[currentIndex];

        this.heap[currentIndex] = this.heap[currentIndex * 2];
        this.heap[currentIndex * 2] = temp;

        currentIndex = currentIndex * 2;
      } else break;
    }
  }
}

const heap = new Heap();
// heap.push(14);
// heap.push(19);
// heap.push(16);
// heap.push(21);
// heap.push(26);
// heap.push(19);
// heap.push(68);
// heap.push(65);
// heap.push(30);
// console.log(heap.pop());
// console.log(heap);

console.log(heap.heapify([60, 50, 80, 40, 30, 10, 70, 20, 90]));
console.log(heap);
