let arr = [6, 4, 3, 10, 22, 5];
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    arr1.push(arr[i]);
}
console.log(arr1);  
