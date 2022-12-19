'use strict';

const buttonElement = document.querySelector('button');

buttonElement.addEventListener ('click', () => {
  buttonElement.classList.toggle('red-background');
});
