'use strict';

const divElement = document.querySelector('div');

window.addEventListener('scroll', () => {
  const last_known_scroll_position = window.scrollY;

  if (divElement.classList.contains('background-red')) {
    divElement.classList.remove('background-red');
  }

  if (divElement.classList.contains('background-green')) {
    divElement.classList.remove('background-green');
  }

  if (last_known_scroll_position < 250) {
    divElement.classList.add('background-green');
  } else {
    divElement.classList.add('background-red');
  }
  console.log(last_known_scroll_position);
});