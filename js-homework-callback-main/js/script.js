function main(exponentiation) {
    let num = +prompt('введите число')
    let degree = +prompt('введите степень')
    exponentiation(num, degree)

};

function exponentiation(num, degree) {
    let result = Math.pow(num, degree)
    return alert(result);
};
main(exponentiation);