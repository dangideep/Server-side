// JavaScript program to sort a list of elements using Bubble sort algorithm.
function bubbleSort(arr) {
    let len = arr.length;
    // Traverse through all array elements
    for (let i = 0; i < len - 1; i++) {
        // Last i elements are already in place, so no need to check them
        for (let j = 0; j < len - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
