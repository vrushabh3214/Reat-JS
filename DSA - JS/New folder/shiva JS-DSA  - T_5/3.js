
let arr = [1, 2, 3, 4, 5, 6];

// Reverse Array Using Stack

function RAUS(arr) {
    // creat 1st empty stack
    let stack1 = [];
    // creat 2nd empty stack
    let stack2 = [];
    for (let i = 0; i < arr.length; i++) {
        stack1.push(arr[i]);
    }
    while (stack1.length > 0) {
        stack2.push(stack1.pop());
    }
    stack1 = stack2;
    stack2 = []
    return stack1;
}

// Reversed Array
let RA = RAUS(arr);
console.log(RA);

