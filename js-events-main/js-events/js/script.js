// task 1
document.getElementById('first').onclick = function() {
    alert('привет!')
};

// task 2
document.getElementById('second').onclick = function() {
    if (document.getElementById('new_text').value === "test") {
        document.getElementById('new_text').value = "lorem ipsum"
    } else(document.getElementById('new_text').value = "test")
};

// task 3
document.getElementById('third').onclick = function() {
    alert(document.getElementById('info_alert').value)
}

// task 4
document.getElementById('fourth_button').onclick = function() {
    let inputDegree = document.getElementById('fourth').value;
    let numDegree = Number(inputDegree)
    alert(Math.pow(numDegree, 2));
}

// task 5
document.getElementById('fifth_button').onclick = function() {
    let valuefirst = document.getElementById('fifth_1').value;
    let valuesecond = document.getElementById('fifth_2').value;
    document.getElementById('fifth_1').value = valuesecond;
    document.getElementById('fifth_2').value = valuefirst;
}

// task 6
document.getElementById('colorText').onclick = function() {
    if (document.getElementById('colorText').style.color === 'red') {
        document.getElementById('colorText').style.color = 'green'
    } else(document.getElementById('colorText').style.color = 'red')
}

// task 7
document.getElementById('seventh_button').onclick = function() {
    if (document.getElementById('seventh_input').style.color === 'green') {
        document.getElementById('seventh_input').style.color = 'yellow'
    } else(document.getElementById('seventh_input').style.color = 'green')
}