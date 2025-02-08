// 1. find the reverse of an array

let arr = [2, 33, 45, 44, 55, 44];
let revArr = arr.reverse();
console.log("1. " + revArr);


// 2. check if the number is palindrom or not

let num = "87654";
let rev = "";
for (let i = num.length - 1; i >= 0; i--) {
    rev = rev + num[i];
}
if (num === rev) {
    console.log("2. " + num + " " + "number is palindrom");
}
else {
    console.log("2. " + num + " " + "number is not palindrom");
}

// 3. traverse Z pattern in 2D array

let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let arr2 = [];

let numRows = arr1.length;
let numCols = arr1[0].length;

for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        if (i === 0 || i === numRows - 1) {
            arr2.push(arr1[i][j])
        } else {
            let index = i + j;
            if (index === numCols - 1) {
                arr2.push(arr1[i][j])
            }
        }
    }
}

console.log("3. " + arr2);

// 4. check if the stirng is anagram or not

let str = "babalu";
let str1 = "secure";

let sort1 = str.split("").join('');
let sort2 = str1.split("").join('');

if (sort1 === sort2) {
    console.log("4. " + str + " and " + str1 + " is anagram");
} else {
    console.log("4. " + str + " and " + str1 + " is not anagram");
}

// 5. sort the array

let arr3 = [-1, 0, 4, 3, 55, 33, 55];


function sort(arr3) {
    if (arr3.length <= 1) {
        return arr3;
    }

    let pivotI = Math.floor(arr3.length / 2);
    let pivot = arr3[pivotI];
    let left = [];
    let right = [];

    for (let i = 0; i < arr3.length; i++) {
        if (i === pivotI) continue;
        if (arr3[i] < pivot) {
            left.push(arr3[i]);
        } else {
            right.push(arr3[i]);
        }
    }

    return [...sort(left), pivot, ...sort(right)];
}

let quick = sort(arr3);
console.log("5. " + quick);

// 6. check if the number is prime number or not

let num1 = 4;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(num1); i++) {
    if (num1 % i === 0) {
        isPrime = false;
    }
}

if (isPrime) {
    console.log("6. " + num1 + " is a prime number.");
} else {
    console.log("6. " + num1 + " is not a prime number.");
}