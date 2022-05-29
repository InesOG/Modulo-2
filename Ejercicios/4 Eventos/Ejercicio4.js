"use strict";

const paraElement = document.querySelector('.parrafo');

paraElement.addEventListener('mouseover', () => {
    paraElement.innerHTML += `<br>lorem ipsum`;
})