"use strict";

const divElement = document.querySelector("div");


// Add a header

const h1 = document.createElement("h1");

h1.innerHTML = "Lorem ipsum";

divElement.appendChild(h1);


// Add an image

const imgElement = document.createElement("img");

imgElement.src = "http://via.placeholder.com/350x150";

divElement.appendChild(imgElement);


// Add a paragraph

const paragraphElement = document.createElement("p");

paragraphElement.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

divElement.appendChild(paragraphElement);

