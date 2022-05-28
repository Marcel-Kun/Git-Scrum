const user = document.getElementById('user');
const pass = document.getElementById('pass');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (user.value === '' || pass.value === '') {
        alert('Complete todos los campos');
        e.preventDefault();
    } else if (user.value.indexOf('@') === -1) {
        alert('El usuario debe contener un @');
        e.preventDefault();
    } else {
        alert('Has ingresado correctamente');
    }
});