let arr = [33, 43, 54, 65, 23, 232, 43];

let high = -Infinity;
let secHigh = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
        secHigh = high;
        high = arr[i];
    } else if (arr[i] > secHigh && arr[i] !== high) {
        secHigh = arr[i];
    }
}

console.log("Second highest number:", secHigh);
