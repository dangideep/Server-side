// JavaScript function to sort a list of elements using Heap sort algorithm.
function heapSort(arr) {
    // Build a max heap from the input array
    buildMaxHeap(arr);

    // Perform heap sort
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum element) with the last element
        swap(arr, 0, i);
        // Heapify the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

// Function to build a max heap from the given array
function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, arr.length, i);
    }
}

// Function to heapify a subtree rooted with node i which is an index in arr[]
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        swap(arr, i, largest);
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Function to swap two elements in an array
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
