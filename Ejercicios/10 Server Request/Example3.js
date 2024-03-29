'use strict';

function getBreedsImage() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = breedsData.message;
      const i = 2;
      console.log(breeds[i]);
      return fetch('https://dog.ceo/api/breed/' + breeds[i] + '/images/random');
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector('img');
      img.src = imageData.message;
      img.alt = `Un perro`;
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedsImage);
