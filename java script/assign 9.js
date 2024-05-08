// JavaScript program to check if a numeric array is sorted or not.
function isArraySorted(arr) {
    // Check if every element is less than or equal to the next element
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
