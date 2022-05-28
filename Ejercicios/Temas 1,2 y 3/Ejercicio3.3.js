"use strict";

const statusSelection = ['success', 'warning', 'error'];

let statusSelected = statusSelection[2]; 

const divElement = document.querySelector('div');

const h1Element = document.querySelector('h1');

const h3Element = document.querySelector('h3');

console.log(statusSelected);


if (statusSelected === 'success') {
    divElement.classList.add('success');
    h1Element.innerHTML = 'CORRECTO';
    h3Element.innerHTML = 'Los datos son correctos';
} else if (statusSelected === 'warning') {
    divElement.classList.add('warning');
    h1Element.innerHTML = 'AVISO';
    h3Element.innerHTML = 'Tenga cuidado';
} else {
    divElement.classList.add('error');
    h1Element.innerHTML = 'ERROR';
    h3Element.innerHTML = 'Ha surgido un error';
}
