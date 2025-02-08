let arr = [5, 5, 8, 1, 8, 5, 48, 4, 4, -74, 54, 4]

function Smax(arr) {
    let carnt = arr[0];
    let globel = arr[0];

    for (let i = 1; i < arr.length; i++) {
        carnt = Math.max(arr[i], carnt + arr[i]);

        if (carnt > globel) {
            globel = carnt
        }
    }
    return globel;
}

console.log(Smax(arr));