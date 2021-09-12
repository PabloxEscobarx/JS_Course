// task 1

let user = {
    name: "John",
    surname: "Smith"
};
console.log(user);

user.name = "Pete";

console.log(user);

delete user.name;

console.log(user);




// task 2

// const user = {

//     name: «John»

// };
// user.name = «Pete»;

// константу нельзя менять



// task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = (salaries.John + salaries.Ann + salaries.Pete)

console.log(sum);


//task 4
console.log(Boolean(Number('10')) + 1,
    'sub ' + Number(false),
    16 * '          91      ',
    true - 70,
    Number(1 + String(1)) + 1);


Boolean(Number('10')) + 1; //2    
'sub ' + Number(false); //"sub 0"
16 * '          91      '; //1456
true - 70; //-69
Number(1 + String(1)) + 1; //12