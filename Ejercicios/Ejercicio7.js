"use strict";

const ulElement = document.querySelector("ul");


const firstli = document.createElement("li");

firstli.innerHTML = '1';

const secondli = document.createElement("li");

secondli.innerHTML = '2';

const thirdli = document.createElement("li");

thirdli.innerHTML = '3';


// Add the list elements

ulElement
    .appendChild(firstli)
    .appendChild(secondli)
    .appendChild(thirdli);
