let userForm = document.getElementById('form');


userForm.addEventListener('submit', function saveInfo(event) {
    event.preventDefault();
    let userFormData = userForm.elements
    let userAccount = {};
    for (let i of userFormData) {
        userAccount[i.name] = i.value
    }
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    window.open('user_info.html');
});