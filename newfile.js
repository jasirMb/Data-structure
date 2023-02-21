let arr=[56,45,2,87,12,67,4,32]
const minHeapify = (arr, n, i) => {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] < arr[smallest]) {
      smallest = l;
    }

    // If right child is smaller than smallest so far
    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }

    // If smallest is not root
    if (smallest != i) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

      // Recursively heapify the affected sub-tree
      minHeapify(arr, n, smallest);
    }
  };
for (let i = parseInt(arr.length / 2 - 1); i >= 0; i--) {
    minHeapify(arr, arr.length, i);
  }

  console.log(arr);