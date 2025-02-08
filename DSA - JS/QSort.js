let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]



let arr1 = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        arr1.push(arr[i][j])
    }
};



console.log(arr1)




// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// [1, 4, 7, 2, 5, 8, 3, 6, 9]
//    R  C
// 1 - (0, 0)
// 4 - (1, 0)
// 7 - (2, 0)
// 2 - (0, 1)
// 5 - (1, 1)
// 9 - (2, 1)
// 3 - (0, 2)
// 6 - (1, 2)
// 9 - (2, 2)


let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        arr2.push(arr[j][i]);
    }
}
console.log(arr2);




// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];




// 1,2,3,6,5,4,7,8,9
//  R    C
// 1 - [0, 0]  i = 0
// 2 - [0, 1]
// 3 - [0, 2]


// 6 - [1, 2]   i = 1
// 5 - [1, 1]
// 4 - [1, 0]


// 7 - [2, 0]  i = 2
// 8 - [2, 1]
// 9 - [2, 2]


let arr3 = [];


for (let i = 0; i < arr.length; i++) {


    if (i % 2 == 1) {
        for (let j = arr.length - 1; j >= 0; j--) {
            arr3.push(arr[i][j])
        }
    } else {
        for (let j = 0; j < arr.length; j++) {
            arr3.push(arr[i][j])
        }
    }


}


console.log(arr3.join(", "))