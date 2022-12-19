'use strict';

// elemento de HTML
const buttonX = document.querySelector('.alert');

const h1Element = document.querySelector('h1');
// listener sobre el elemento, con tipo de evento y el código a ejecutarse
buttonX.addEventListener('click', () => {
  h1Element.innerHTML = 'Mi primer click'; //código a ejecutarse
});


const buttonSubmit = document.querySelector('.name');

const inputElement = document.querySelector('input');


buttonSubmit.addEventListener('click', () => {
  const nameSubmitted = inputElement.value;
  console.log(`Hola ${nameSubmitted}`);
});