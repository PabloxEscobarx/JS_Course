function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;

    this.grade = [];
    this.attendance = [];

    this.age = function(currentYear) {
        return currentYear - birthYear
    };
    this.averageScore = function(grade) {
        let total = grade.reduce(function(total, currentIndex) {
            let result = total + currentIndex
            return result
        })
        return total / grade.length
    };
    // this.present = function(arr) {
    //     if (arr.length >= 10) {
    //         console.log('длинна массива достигла 10');
    //     } else {                                                                     NEED HELP!!
    //         for (let i in arr) {
    //             console.log(arr[i]);
    //         }
    //     }
    // }

};

let first = new Student('Ivan', 'Ivanov', 1999);

console.log(first);