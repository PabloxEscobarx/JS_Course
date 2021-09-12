let obj = {
    name: 'Pavel',
    age: '24',
    sayHello: function() {
        console.log('hello', this.name);
    }

}

let objTwo = {
    name: 'Yana',
    age: '25'
}

// BIND
obj.sayHello.bind(objTwo)();

// CALL
obj.sayHello.call(objTwo);