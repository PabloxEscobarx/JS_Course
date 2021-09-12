let arr = [];
let ulElements = document.body.getElementsByTagName('li');
for (let i of ulElements) {
    arr.push(i.firstChild.data)
}
console.log(arr.length, arr);