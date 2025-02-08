function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid; // Found the target, update the result
            left = mid + 1; // Move to the right to find the last occurrence
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is to the right
        } else {
            right = mid - 1; // Target is to the left
        }
    }

    return result;
}

// Example usage:
const arr = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
const output = findLastOccurrence(arr, target);
console.log(output); // Output: 3
