class minHeap {
  constructor() {
    this.heap = [null];
  }
  getMin() {
    return this.heap[1];
  }
  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;
      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        console.log("change");
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }
  remove() {
    //     /* Smallest element is at the index 1 in the heap array */
    //     let smallest = this.heap[1];

    //     /* When there are more than two elements in the array, we put the right most element at the first position
    //             and start comparing nodes with the child nodes
    //         */
    //     if (this.heap.length > 2) {
    //       this.heap[1] = this.heap[this.heap.length - 1];
    //       this.heap.splice(this.heap.length - 1);

    //       let current = 1;
    //       let leftChildIndex = current * 2;
    //       let rightChildIndex = current * 2 + 1;

    //       while (
    //         this.heap[leftChildIndex] &&
    //         this.heap[rightChildIndex] &&
    //         (this.heap[current] > this.heap[leftChildIndex] ||
    //           this.heap[current] > this.heap[rightChildIndex])
    //       ) {
    //         if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
    //           [this.heap[current], this.heap[leftChildIndex]] = [
    //             this.heap[leftChildIndex],
    //             this.heap[current],
    //           ];
    //           current = leftChildIndex;
    //         } else {
    //           [this.heap[current], this.heap[rightChildIndex]] = [
    //             this.heap[rightChildIndex],
    //             this.heap[current],
    //           ];
    //           current = rightChildIndex;
    //         }

    //         leftChildIndex = current * 2;
    //         rightChildIndex = current * 2 + 1;
    //       }
    //     }
    //     else {
    //       return null;
    //     }

    //     return smallest;
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      let current = 1;
      let left = current * 2;
      let righ = current * 2 + 1;
      while (
        (this.heap[left] &&
          this.heap[righ] &&
          this.heap[current] > this.heap[left]||
          this.heap[current] > this.heap[righ]) 
      ) {
        if (this.heap[left] > this.heap[righ]) {
          [this.heap[current], this.heap[left]] = [
            this.heap[left],
            this.heap[current],
          ];
          current = left;
        } else {
          [this.heap[current], this.heap[righ]] = [
            this.heap[righ],
            this.heap[current],
          ];
          current = righ;
        }
        left = current * 2;
      righ = current * 2 + 1;
      }
      
    } else {
      return null;
    }
    return smallest;
  }
}
const minh = new minHeap();
minh.insert(10);
minh.insert(1);
minh.insert(6);
minh.insert(2);
minh.remove();
console.log(minh.getMin());
