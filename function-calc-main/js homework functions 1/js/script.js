//task 1
function calc(num, deg = 1) {
    if (isNaN(num && deg)) {
        return 'некорректный ввод данных'
    } else {
        let result = Math.pow(num, deg);
        return `${num} в степени ${deg} = ${result}`
    }
}
let num = +prompt('Введите число');
let deg = +prompt('В какую степень возвести ?');
alert(calc(num, deg));