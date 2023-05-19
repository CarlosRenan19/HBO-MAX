const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const eyeIcon = document.querySelector('.eyeIcon');

inputEmail.addEventListener('keyup', () => {
    if (inputEmail.value.length >= 1) {
        document.querySelector('.label-email').classList.add('effect');
    } else {
        document.querySelector('.label-email').classList.remove('effect');
    }
})

inputSenha.addEventListener('keyup', () => {
    if (inputSenha.value.length >= 1) {
        document.querySelector('.label-senha').classList.add('effect');
        eyeIcon.classList.add('active');
    } else {
        document.querySelector('.label-senha').classList.remove('effect');
        eyeIcon.classList.remove('active');
    }
})

eyeIcon.addEventListener('click', () => {
    eyeIcon.classList.toggle('hidden')

    if (inputSenha.type == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})