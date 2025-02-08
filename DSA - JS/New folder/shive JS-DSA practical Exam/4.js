
function binarySearch(arr, target) {
    // Initialize the start and end indices
    let start = 0;
    let end = arr.length - 1;

    // Loop while the start index is less than or equal to the end index
    while (start <= end) {
        // Calculate the middle index
        let mid = Math.floor((start + end) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        }

        // If the target is less than the middle element,
        // narrow the search to the left half of the array
        if (arr[mid] > target) {
            end = mid - 1;
        }
        // If the target is greater than the middle element,
        // narrow the search to the right half of the array
        else {
            start = mid + 1;
        }
    }

    // If the target element is not found, return -1
    return -1;
}

// Example usage:
const sortedArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 10;
const result = binarySearch(sortedArr, target);

console.log("Target Index Num => "+result); // Output: 6
