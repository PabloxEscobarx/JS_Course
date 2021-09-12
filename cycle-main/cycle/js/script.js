let userNumber = +prompt('number');
let str = '';
for (let i = 0; i < userNumber; i++) {
    for (let space = 0; space <= userNumber - i; space++) {
        str += ' '
    }
    for (let star = 0; star <= i * 2; star++) {
        str += '*'
    }

    str += '\n'
}
console.log(str);