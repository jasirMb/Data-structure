function binaryHeap() {
  let list = [];

  this.minHeap = (arr, n, i) => {
    let small = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] < arr[small]) {
      small = l;
    }
    if (r < n && arr[r] < arr[small]) {
      small = r;
    }
    if (small != i) {
      let temp = arr[i];
      arr[i] = arr[small];
      arr[small] = temp;
      this.minHeap(arr, n, small);
    }
}
    this.insert = (num) => {
      const sixe = list.length;

      if (size === 0) {
        list.push(num);
      } else {
        list.push(num);
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
          this.minHeap(list, list.length, i);
        }
      }
    };
    this.delete = (num) => {
      const size = list.length;
      let i;
      for (i = 0; i < size; i++) {
        if (list[i] === num) {
          break;
        }
        [list[i], list[size - 1]] = [list[size - 1], list[i]];
        list.splice(size - 1);
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
          this.minHeap(list, list.length, i);
        }
      }
    };
  
}
const heap = new binaryHeap();
arr = [5,23,78,34,1,9]
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
heap.toarray
