let buttonSignup = document.querySelector('button');
let inputUser = document.querySelector('input');
let inputPassword = document.querySelector('input');

inputUser.addEventListener('input', () => {

    if (inputUser.value.length > 3 && inputPassword.value.length > 3) {
        buttonSignup.removeAttribute('disabled');
        buttonSignup.style.backgroundColor = '#0095f6';
        buttonSignup.style.cursor = 'pointer';
    } else {
        buttonSignup.setAttribute('disabled', 'disabled');
        buttonSignup.style.backgroundColor = '#B2DFFC';
        buttonSignup.style.cursor = '';
    }
});


