let arr = [{
    min: 60,
    max: 100
},
 {
    min: 10,
    max: 50,
},
{
    min: 110,
    max: 150
}

];
let minValue = 0;
let maxValue = 9;

let arrMin = arr.every((e) => maxValue < e.min ||  minValue > e.max && minValue != e.max && maxValue != e.min);
// let arrMax = arr.every((e) => minValue > e.max);

console.log(arrMin);
// console.log(arrMax);

if (minValue < maxValue && arrMin ) {
    console.log("is worcing");
}
else {
    console.log("not worcing");

}
