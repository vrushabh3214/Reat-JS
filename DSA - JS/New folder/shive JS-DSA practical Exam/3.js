// Function to perform Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    // Outer loop to traverse through the entire array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparison and swapping
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if the element found is greater than the next element
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example array
let arr = [4, 43, 44, 54, 21, 43, 83];

// Calling the bubbleSort function and logging the sorted array
console.log("Sorted array:", bubbleSort(arr));
