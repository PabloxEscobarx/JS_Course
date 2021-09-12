function isNumberInRange(num) {
    if (num < 10 & num > 0) {
        return true;
    } else(false)
};


const arr = [10, 1, -1, -10, 1192, 321, 312, 16, 6, -9, 33, -34, -1, 0, -0, 8, 8, 8, 9, 4, -2, -5, 2];
let newArr = [];
for (let i = 0; i <= arr.length; i++) {
    if (isNumberInRange(arr[i]) == true) {
        newArr.push(arr[i])
    }
};
console.log(newArr);


function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    };
    return sum
};
let yearsArr = [];
for (let i = 0; i <= 2021; i++) {
    if (getDigitsSum(i) == 13) {
        yearsArr.push(i)
    }
}
console.log(yearsArr);

const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let newArr2 = [];

function isEven(num) {
    if (num % 2 == 0) {
        return true
    } else(false)
};

for (let i = 0; i <= arr2.length; i++) {
    if (isEven(i) == true) {
        newArr2.push(i)
    }
};
console.log(newArr2);
let dividerArr = [];

function getDivisors(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            dividerArr.push(i);
        }
    }
    return dividerArr;
}

console.log(getDivisors(10));