//task 1

let liInfo = [];
let ul = document.querySelector("ul");
console.log(ul.getElementsByTagName("li").length);


//task 2


for (let i of ul.getElementsByTagName("li")) {
    liInfo.push(i.innerText)
};
console.log(liInfo);

//task 3

let ulAttributesValue = [];
for (let i of ul.attributes) {
    ulAttributesValue.push(i.value)
};
console.log(ulAttributesValue);

//task 4

for (let i of ul.attributes) {
    let ulAttributesName = [];
    ulAttributesName.push(i);
    console.log(ulAttributesName);
};

//task 5


ul.lastElementChild.innerHTML = "My name is Pavel (Element 10)";

// task 6

ul.firstElementChild.setAttribute("data-name", "My name is Pavel");

//task 7

ul.removeAttribute("data-dog-tail");

console.log(ul.attributes);