let id = document.getElementById('id')
let password = document.getElementById('password')

const onFocus = (event) => {
    event.target.style.backgroundColor = 'bisque';
}

id.addEventListener('focus', onFocus);
password.addEventListener('focus', onFocus);

const onBlur = (event) => {
    event.target.style.backgroundColor = 'white';
}

id.addEventListener('blur', onBlur);
password.addEventListener('blur', onBlur);


