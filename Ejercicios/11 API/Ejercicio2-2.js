'use strict';

const imgElement = document.querySelector('img');

fetch('https://api.thecatapi.com/v1/images/search?format=json', {
  headers: {
    'x-api-key': 'live_CMJdhWNKsORPnSDMmGEq9uL2FBuCzQ64QB3YAF9rvsgy6hRTNRnHgHC6BCjwHD9r',
  }
})
  .then(response => response.json())
  .then(data => {
    imgElement.setAttribute('src', data[0].url);
  });