
"use strict";

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const firstList = document.createElement('li');

firstList.innerHTML = `${firstDogName} <img class="img" src=${firstDogImage} alt=${firstDogName} /> `


const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const secondList = document.createElement('li');

secondList.innerHTML = `${secondDogName} <img class="img" src=${secondDogImage} alt=${secondDogName} /> `


const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const thirdList = document.createElement('li');

thirdList.innerHTML = `${thirdDogName} <img class="img" src=${thirdDogImage} alt=${thirdDogName} /> `


const ulElement = document.querySelector('ul');

ulElement
  .appendChild(firstList)
  .appendChild(secondList)
  .appendChild(thirdList);

