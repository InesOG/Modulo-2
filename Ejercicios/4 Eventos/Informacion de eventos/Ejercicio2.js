"use-strict";

const button1El = document.querySelector('.button1');
const button2El = document.querySelector('.button2');

button1El.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('background-green');
});

button2El.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('background-green');
});