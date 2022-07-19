const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {

    if (target.value.length > 3) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled', '');

}

input.addEventListener('input', validateInput);

const handleSubmit = (event) => {
    event.preventDefault();

    let player = input.value;

    localStorage.setItem('player', player);
    window.location = 'pages/game.html';
}

form.addEventListener('submit', handleSubmit);
