const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const button = document.getElementById('submit');

button.addEventListener("click", (event) => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (passwordInput.value.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        event.preventDefault();
    }
    if(!regexEmail.test(emailInput.value)){
        alert("El correo electrónico es válido.");
    }
})