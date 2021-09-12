// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// };


// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// };

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// };


// let arr = []
// for (let i = 0; arr.length <= 10; i++) {
//     arr += 'x'
//     if (arr.length == 10) {
//         console.log(arr);
//     }
// };


// let arr2 = [];
// for (let i = 1; arr2.length < 10; i++) {
//     arr2.push(i)
// };
// console.log(arr2);

// let arr3 = [];

// while (arr3.length < 10) {
//     arr3.push(Math.random().toFixed(2))
// };
// console.log(arr3);
// function getRandomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// };


// let arr4 = [];
// while (arr4.length < 10) {
//     arr4.push(getRandomInRange(1, 10))
// };
// console.log(arr4);

// let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i <= arr5.length; i++) {
//     if (arr5[i] == 5) { console.log('Есть') }
// };

// const arr6 = [1, 2, 3, 4, 5];
// let sum = 0
// for (let i = 0; i < arr6.length; i++) {
//     sum += arr6[i]
// };
// console.log(sum);

// const arr7 = [1, 2, 3, 4, 5];
// let sumDegree = 0;
// for (let i = 0; i < arr7.length; i++) {
//     sumDegree += arr7[i] ** arr7[i]
// };
// console.log(sumDegree);

const arr8 = [1, 2, 3, 7, 6, 9];

let sum8 = 0
for (let i = 0; i < arr8.length; i++) {
    sum8 += arr8[i];
};
let result = sum8 / arr8.length;
console.log(result);