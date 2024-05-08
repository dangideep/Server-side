// JavaScript function to sort a list of elements using Quick sort algorithm.
function quickSort(arr) {
    // Base case: if array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element (first element in this case)
    let pivot = arr[0];
    let left = [];
    let right = [];

    // Partition the array into two sub-arrays around the pivot
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort on left and right sub-arrays and concatenate them with pivot
    return quickSort(left).concat(pivot, quickSort(right));
}
