//  task 1


// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];
// const conArr = firstArr.concat(secondArr)
// console.log(conArr);


//task 2


// const LR = [1, 2, 3];
// console.log(LR);
// LR.reverse()
// console.log(LR);


//task 3


// const end = [1, 2, 3];
// console.log(end);
// end.push(4, 5, 6);
// console.log(end);



//task 4


// const start = [1, 2, 3];
// console.log(start);
// start.unshift(4, 5, 6);
// console.log(start);


//task 5


// const firstElement = ['js', 'css', 'jq']
// console.log(firstElement);
// console.log(firstElement.shift());


//task 6


// const lastElement = ['js', 'css', 'jq']
// console.log(lastElement);
// console.log(lastElement.pop());


// //task 7


// const arrSliceStart = [1, 2, 3, 4, 5];
// console.log(arrSliceStart.slice(0, 3));


//task 8


// const arrSliceEnd = [1, 2, 3, 4, 5];
// console.log(arrSliceEnd.slice(3, 6));


//task 9

// const arrSplice = [1, 2, 3, 4, 5];
// delete arrSplice.splice(1, 2);
// console.log(arrSplice);


//task 10


// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.splice(1, 3);
// console.log(newArr);

//task 11


// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);


//task 12


// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'b')
// console.log(arr);


//task 13


// const arr = [3, 4, 1, 2, 7];
// arr.sort()
// console.log(arr);

//task 14

// const arr = [5, 6, 7, 8, 9];
// let result = arr.reduce((index, value) => index + value);
// console.log(result);


//task 15


// const arr = [5, 6, 7, 8, 9];
// let result = arr.map((element) => element * element
// console.log(result);

// //task 16


// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// let result = arr.filter(item => item < 0)
// console.log(result);

//task 17

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];
// let result = arr.filter(item => item % 2 === 0);
// console.log(result);
//task 18
// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let result = arr.filter(item => item.length > 5);
// console.log(result);

//task 19


// const arr = [1, 2, [3, 4], 5, [6, 7]];
// let result = arr.filter((item) => Array.isArray(item));
// console.log(result);

// task 20


// const arr = [5, -3, 6, -5, 0, -7, 8, 9];
// let result = arr.filter((item) => item < 0);
// console.log(result.length);