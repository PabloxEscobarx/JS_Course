const num = [1, 2, 3, -1, -2, -3];

function positiveNumber() {
    const exampleArr = []
    if (num.length === 0) {
        return 'array is empty';
    }
    for (let i = 0; i <= num.length - 1; i++) {
        if (num[i] >= 0) {
            exampleArr.push(num[i])
        }
    }
    if (exampleArr.length === 0) {
        return 'no positive numbers found';
    } else { return exampleArr }
};
console.log(positiveNumber(num));