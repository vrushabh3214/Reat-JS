let arr = [{
    min: 60,
    max: 100
}, {
    min: 10,
    max: 50,
},
{
    min: 110,
    max: 150
}];

let minValue = 51;  // New range's minimum value
let maxValue = 59;  // New range's maximum value

let arrMin = true;  // Assume new range fits before all existing ranges
let arrMax = true;  // Assume new range fits after all existing ranges

// Iterate through each object in the array
for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    // Check if the new range doesn't fit before (if any range has a min value less than maxValue)
    if (maxValue >= current.min) {
        arrMin = false;
    }

    // Check if the new range doesn't fit after (if any range has a max value greater than minValue)
    if (minValue <= current.max) {
        arrMax = false;
    }
}

// Check if the new range fits either before or after all existing ranges
if (arrMin || arrMax) {
    console.log("is working");
} else {
    console.log("not working");
}
