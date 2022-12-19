'use strict';

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [];
  for (let i = 0; i < 25; i++) {
    promises.push(createPromise());
  }
  Promise.all(promises).then((responses) => {
    const containerEl = document.querySelector('container');
    for (let i = 0; i < responses.length; i++) {
      const img = document.createElement('img');
      img.src = responses[i].message;
      containerEl.appendChild(img);
    }
  });
}

function cleanImgs() {
  const dogImages = document.querySelectorAll('img');
  for (const dogImage of dogImages) {
    dogImage.remove();
  }
}

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', () => {
  cleanImgs();
  getBreedImages();
});
