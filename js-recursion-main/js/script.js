// task 1 

function getFuctorial(num) {
    return (num != 1) ? num * getFuctorial(num - 1) : 1
};
console.log(getFuctorial(3));

//  task 2

function getDegree(num, degree) {
    if (degree == 1) {
        return num
    } else {
        return num * getDegree(num, degree - 1)
    }
}
console.log(getDegree(2, 3));