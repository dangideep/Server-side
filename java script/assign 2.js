// JavaScript function to find the first index of a given element in an array using linear search algorithm.
function linearSearch(arr, element) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element matches the target element, return its index
        if (arr[i] === element) {
            return i;
        }
    }
    // If element is not found, return -1
    return -1;
}
