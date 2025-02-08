function removeDuplicates(arr) {
    let uniqueElements = []; // Array to store unique elements
    let seen = {}; // Object to keep track of seen elements
    
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            uniqueElements.push(arr[i]); // Add to uniqueElements if not seen
            seen[arr[i]] = true; // Mark element as seen
        }
    }
    
    return uniqueElements;
}

let exp = [2, 3, 4, 4, 5, 6, 7, 8, 2, 1, 2, 6, 7, 8, 7, 6, 5, 9, 8, 2, 2];
let result = removeDuplicates(exp);
console.log(result); // Output the array without duplicates
console.log("Balanced"); // Print "Balanced" as required
