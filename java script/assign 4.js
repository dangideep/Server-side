// JavaScript function to sort a list of elements using Merge sort algorithm.
function mergeSort(arr) {
    // Base case: if array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively apply mergeSort on left and right halves and then merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements from left and right arrays
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
