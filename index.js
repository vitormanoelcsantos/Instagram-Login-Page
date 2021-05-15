let buttonSignup = document.querySelector('button');
let inputUser = document.querySelector('.username');
let inputPassword = document.querySelector('.password');

inputUser.addEventListener('input', () => {

    if (inputUser.value.length > 0 && inputPassword.value.length >= 6) {
        buttonSignup.removeAttribute('disabled');
        buttonSignup.style.backgroundColor = '#0095f6';
        buttonSignup.style.cursor = 'pointer';
    } else {
        buttonSignup.setAttribute('disabled', 'disabled');
        buttonSignup.style.backgroundColor = '#B2DFFC';
        buttonSignup.style.cursor = '';
    }
});


