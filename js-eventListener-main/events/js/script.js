let button = document.getElementById("create_ul");
let input = document.getElementById("li_text");
let ul = document.getElementById("list");

function addElement() {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.prepend(li);
    input.value = null;
};
button.addEventListener("click", addElement);