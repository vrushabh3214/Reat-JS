function nextGreaterElement(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        // Pop elements from the stack that are less than or equal to the current element
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        
        // If stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        
        // Push the current element onto the stack
        stack.push(arr[i]);
    }

    // Printing the result in the desired format
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} --> ${result[i]}`);
    }
}

// Example usage:
let arr1 = [4, 5, 2, 25];
nextGreaterElement(arr1);

console.log("---");

let arr2 = [13, 7, 6, 12];
nextGreaterElement(arr2);
