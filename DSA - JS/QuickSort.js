let arr = [6, 4, 3, 10, 22, 5];


if (arr.length <= 1) {
  return arr;
}

let pivotIndex = Math.floor(arr.length / 2);
let pivot = arr[pivotIndex];
let left = [];
let right = [];

for (let i = 0; i < arr.length; i++) {
  if (i === pivotIndex) continue;
  if (arr[i] < pivot) {
    left.push(arr[i]);
  } else {
    right.push(arr[i]);
  }
}



console.log((left) + (left.push(pivot)));
// console.log(left.push(right));
