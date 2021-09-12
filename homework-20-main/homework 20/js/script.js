// task1

function sum() {
    let result = 0;
    return function(x) {
        result += x;
        return result;
    }
};
let calc = sum();
calc(4)
console.log(calc(5));


// task 2



function timer(start) {
    let count = start
    return function(step) {
        return count + step
    }
}
let example = timer(5)

console.log(example(2));