'use strict';

const inputElement = document.querySelector('input');

const paragraph = document.querySelector('p');

inputElement.addEventListener('keyup', (event) => {
  paragraph.innerHTML = event.currentTarget.value;
});