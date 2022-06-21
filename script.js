
const password = document.querySelector('#user-pass') ;
const confirmPassword = document.querySelector('#user-pass-conf') ;

password.addEventListener('input', () => {
    password.setCustomValidity('');
    password.checkValidity();
    // console.log(password.checkValidity());
});

password.addEventListener('invalid', () => {
    if (password.value === '') {
    password.setCustomValidity('Enter a password');
    } else {
    password.setCustomValidity('Password must contain a lowercase letter, an uppercase letter, and a number') ;
    }
});




confirmPassword.addEventListener('input', () => {
    confirmPassword.pattern = `${password.value}`;
    confirmPassword.setCustomValidity('');
    confirmPassword.checkValidity();
    // console.log(confirmPassword.value, password.value);
});

confirmPassword.addEventListener('invalid', () => {
    if (confirmPassword.value === '') {
        confirmPassword.setCustomValidity('Please repeat your password');            
    } else {
        confirmPassword.setCustomValidity("Password doesn't match");
    }
})
