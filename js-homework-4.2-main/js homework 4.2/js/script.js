let age = +prompt('Сколько вам лет ?');
let message;
if (age == false || age == null) {
    alert('нужно ввести возраст')
} else if (isNaN(age)) {
    alert('Не верное значение')
} else if (age % 10 >= 5 || age % 10 === 0) {
    message = age + ' Лет'
} else if (age % 10 === 1) {
    message = age + ' Год'
} else if (age % 10 <= 4)(
    message = age + ' Года'
)
alert(message);