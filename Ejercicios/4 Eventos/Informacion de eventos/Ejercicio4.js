'use strict';

const buttonStart = document.querySelector('.start');
const divElement = document.querySelector('div');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


buttonStart.addEventListener('click', (event) => {
  divElement.innerHTML = `
    <li class='peli1'>${inception}</li>
    <li class='peli2'>${theButterFlyEffect}</li>
    <li class='peli3'>${eternalSunshineOfTheSM}</li>
    <li class='peli4'>${blueVelvet}</li>
    <li class='peli5'>${split}</li>`;

  const peli1 = divElement.querySelector('.peli1');
  const peli2 = divElement.querySelector('.peli2');

  peli1.addEventListener('click', (event) => {
    console.log(event.currentTarget.innerHTML);
  });

  peli2.addEventListener('click', (event) => {
    console.log(event.currentTarget.innerHTML);
  });
});



